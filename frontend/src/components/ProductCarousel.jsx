import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary mb-4" variant="dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <div className="carousel-item-container">
              <div className="carousel-item-image">
                <Image src={product.coverImage} alt={product.name} fluid />
              </div>
              <Carousel.Caption className="carousel-caption">
                <h2 className="text-white text-right">
                  {product.name} (₹{product.price})
                </h2>
              </Carousel.Caption>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
