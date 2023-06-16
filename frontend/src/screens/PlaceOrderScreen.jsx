import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import Loader from "../components/Loader";
import {
  useCreateOrderMutation,
  usePayOrderMutation,
} from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [sdkReady, setSdkReady] = useState(false);
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();
  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate("/shipping");
    } else if (!cart.paymentMethod) {
      navigate("/payment");
    }
    const addRazorPayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!window.Razorpay) {
      addRazorPayScript();
    } else {
      setSdkReady(true);
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const dispatch = useDispatch();

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();

      if (cart.paymentMethod === "Pay Online") {
        paymentHandler(res._id);
      } else {
        dispatch(clearCartItems());
        navigate(`/order/${res._id}`);
      }
    } catch (err) {
      toast.error(err);
    }
  };
  const paymentHandler = async (orderId) => {
    try {
      const {
        data: { order },
      } = await axios.post("/api/payments/orders", {
        headers: {
          "Content-Type": "application/json",
        },
        amount: cart.totalPrice,
      });
      const {
        data: { key },
      } = await axios.get("/api/config/id");
      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: "SNEAKY HEADS",
        description: "Test Transaction",
        order_id: order.id,
        handler: function (response) {
          window.location.href = `/order/${orderId}`;
          onApproveTest(response.razorpay_payment_id, orderId);
          dispatch(clearCartItems());
        },
        prefill: {
          name: "demo",
          email: "demo@gmail.com",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3c4c5d",
        },
      };
      var razor = new window.Razorpay(options);
      razor.on("payment.failed", function (response) {
        handlePaymentFailure(orderId);
      });
      razor.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  function handlePaymentFailure(orderId) {
    console.log("Handling payment failure...");
    dispatch(clearCartItems());
    navigate(`/order/${orderId}`);
  }

  async function onApproveTest(paymentId, orderId) {
    await payOrder({ orderId, details: { id: paymentId, payer: {} } });
    toast.success("Order is paid");
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                          <p>Size: {item.shoeSize}</p>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>₹ {cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₹ {cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>GST</Col>
                  <Col>₹ {cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>₹ {cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {error && (
                <ListGroup.Item>
                  <Message variant="danger">{error}</Message>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block cartBtn"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  {cart.paymentMethod === "Cash on Delivery"
                    ? "Place Order"
                    : "Pay Online"}
                </Button>
                {isLoading && <Loader />}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
