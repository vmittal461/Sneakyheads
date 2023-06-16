const products = [
  {
    name: "MSCHF Big Red Boots",
    image: "/images/mschf-big-red-boots.png",
    price: 44999,
    description:
      "The MSCHF big red boots are a standout and edgy choice. With their bold red color and unique design, these boots offer a striking and unconventional look. They provide durability, traction, and are perfect for those who want to make a bold fashion statement.",
    brand: "MSCHF",
    category: "Boots",
    countInStock: 3,
    rating: 3.5,
    numReviews: 8,
  },

  {
    name: "Vans Check Board",
    image: "/images/vans-check-board.png",
    price: 4999,
    description:
      "The Vans check board sneakers are a trendy and fashionable choice for casual wear. Featuring the iconic checkered pattern, these sneakers add a bold and playful touch to any outfit. They provide comfort, style, and are perfect for skateboarding or everyday use.",
    brand: "Vans",
    category: "Sneakers",
    countInStock: 13,
    rating: 4.5,
    numReviews: 5,
  },

  {
    name: "Nike Air Force",
    image: "/images/nike-air-force.png",
    price: 6499,
    description:
      "The Nike air force sneakers are a classic and versatile choice. They offer excellent comfort and support with their cushioned midsole and durable construction. These sneakers feature a timeless design that complements various styles and outfits.",
    brand: "Nike",
    category: "Sneakers",
    countInStock: 6,
    rating: 4,
    numReviews: 4,
  },

  {
    name: "Nike Jordan University Blue",
    image: "/images/nike-jordan-university-blue.png",
    coverImage: "/images/nike-jordon-cover.png",
    price: 14999,
    description:
      "The Nike jordan university blue sneakers are a must-have for basketball enthusiasts and sneaker collectors. These high-top sneakers feature a premium leather construction, excellent cushioning, and iconic Jordan branding. They provide style, performance, and are perfect for both on-court and off-court wear.",
    brand: "Nike",
    category: "Sneakers",
    countInStock: 6,
    rating: 5,
    numReviews: 5,
  },

  {
    name: "Nike Travis Scott Phantom Black",
    image: "/images/nike-travis-scott-phanton-black.png",
    price: 13999,
    description:
      "The Nike travis scott phantom black sneakers are a stylish and trendy choice. Designed in collaboration with Travis Scott, these sneakers offer a unique and eye-catching aesthetic. They provide comfort, style, and are perfect for fashion-forward individuals.",
    brand: "Nike",
    category: "Sneakers",
    countInStock: 2,
    rating: 4.2,
    numReviews: 4,
  },
  {
    name: "Adidas Campus Green",
    image: "/images/adidas-campus-green.png",
    price: 6599,
    description:
      "The Adidas campus green sneakers are a stylish and versatile choice. With their classic silhouette and vibrant green color, these sneakers add a pop of color to your outfit. They offer comfort, durability, and are suitable for various occasions.",
    brand: "Adidas",
    category: "Sneakers",
    countInStock: 9,
    rating: 3,
    numReviews: 7,
  },

  {
    name: "Nike Dunk Low Fog Grey",
    image: "/images/nike-dunk-low-fog-grey.png",
    price: 11999,
    description:
      "The Nike dunk low fog grey sneakers are a stylish and trendy choice for sneaker enthusiasts. Featuring a low-top design and premium materials, these sneakers offer both style and comfort. They are suitable for everyday wear or adding a fashionable touch to your outfit.",
    brand: "Nike",
    category: "Sneakers",
    countInStock: 5,
    rating: 4.8,
    numReviews: 18,
  },

  {
    name: "Vans Old Skool Black",
    image: "/images/vans-old-skool-black.png",
    coverImage: "/images/vans-old-skool-cover.png",
    price: 4499,
    description:
      "The Vans old skool black sneakers are a timeless and versatile choice. With their classic design and all-black colorway, these sneakers offer a sleek and minimalist aesthetic. They provide comfort, durability, and are suitable for various occasions.",
    brand: "Vans",
    category: "Sneakers",
    countInStock: 0,
    rating: 5,
    numReviews: 18,
  },

  {
    name: "Yeezy Slides Black",
    image: "/images/yezzy-slides-black.png",
    price: 15999,
    description:
      "The Yeezy slides black are a stylish and comfortable choice for casual wear. With their minimalist design and lightweight construction, these slides offer easy slip-on functionality and cushioned comfort. They are perfect for lounging or running errands in style.",
    brand: "Yeezy",
    category: "Slides",
    countInStock: 5,
    rating: 3,
    numReviews: 8,
  },

  {
    name: "Yeezy Slides Brown",
    image: "/images/yezzy-slides-brown.png",
    coverImage: "/images/yeezy-brown-cover.png",
    price: 11999,
    description:
      "The Yeezy slides brown are a fashionable and comfortable choice for casual wear. With their earthy brown color and minimalist design, these slides offer both style and functionality. They are perfect for lounging or adding a trendy touch to your summer outfits.",
    brand: "Yeezy",
    category: "Slides",
    countInStock: 6,
    rating: 5,
    numReviews: 9,
  },

  {
    name: "Yeezy Boost Oreo",
    image: "/images/yezzy-boost-oreo.png",
    price: 45999,
    description:
      "The Yeezy boost oreo sneakers are a highly sought-after and collectible choice. These sneakers feature a unique design with a blend of black and white colors, creating a visually striking look. They offer comfort, style, and are perfect for sneaker enthusiasts and fashion-forward individuals.",
    brand: "Yeezy",
    category: "Sneakers",
    countInStock: 2,
    rating: 5,
    numReviews: 5,
  },

  {
    name: "Nike Dunk Pandas",
    image: "/images/nike-dunk-low-panda.png",
    price: 11999,
    description:
      "The Nike dunk pandas sneakers are a stylish and eye-catching choice for sneaker enthusiasts. With their black and white panda-inspired design, these sneakers offer a unique and playful look. They provide comfort, durability, and are perfect for making a statement with your outfit.",
    brand: "Nike",
    category: "Sneakers",
    countInStock: 3,
    rating: 5,
    numReviews: 17,
  },

  {
    name: "Nike Jordan 3 White Cement",
    image: "/images/nike-jordon-3-white-cement.png",
    price: 14999,
    description:
      "The Nike jordan 3 white cement sneakers are a classic and iconic choice for sneaker enthusiasts and Jordan brand fans. These sneakers feature a white and grey colorway with elephant print details, offering a timeless and stylish look. They provide comfort, performance, and are perfect for both casual and athletic wear.",
    brand: "Nike",
    category: "Sneakers",
    countInStock: 4,
    rating: 4,
    numReviews: 12,
  },

  {
    name: "Nike Travis Scott Reverse Mocha",
    image: "/images/nike-travis-scott-reverse-mocha.png",
    price: 23999,
    description:
      "The Nike travis scott reverse mocha sneakers are a highly sought-after and limited-edition choice. Designed in collaboration with Travis Scott, these sneakers offer a unique and eye-catching design. They provide comfort, style, and are perfect for sneaker collectors and fashion enthusiasts.",
    brand: "Nike",
    category: "Sneakers",
    countInStock: 3,
    rating: 5,
    numReviews: 4,
  },
  {
    name: "Converse Chuck White",
    image: "/images/converse-chunk-white.png",
    price: 4999,
    description:
      "The Converse chuck white sneakers are a timeless and versatile choice. With their classic high-top design and white canvas upper, these sneakers offer a clean and minimalist look. They provide comfort, durability, and are suitable for various casual occasions.",
    brand: "Converse",
    category: "Sneakers",
    countInStock: 8,
    rating: 3,
    numReviews: 7,
  },

  {
    name: "Converse Chuck Black",
    image: "/images/converse-chunk-black.png",
    price: 4999,
    description:
      "The Converse chuck black sneakers are a classic and versatile choice. With their iconic high-top design and black canvas upper, these sneakers offer a timeless and stylish look. They provide comfort, durability, and are suitable for various casual occasions.",
    brand: "Converse",
    category: "Sneakers",
    countInStock: 6,
    rating: 5,
    numReviews: 5,
  },
  {
    name: "Converse Runstar Black",
    image: "/images/converse-run-star-black.png",
    price: 8999,
    description:
      "The Converse runstar black sneakers are a modern and stylish choice. With their sleek design and black color, these sneakers offer a contemporary and versatile look. They provide comfort, flexibility, and are suitable for both casual and athletic wear.",
    brand: "Converse",
    category: "Sneakers",
    countInStock: 6,
    rating: 5,
    numReviews: 11,
  },

  {
    name: "Yeezy Foam Runner",
    image: "/images/yezzy-foam-runner-black.png",
    price: 15999,
    description:
      "The Yeezy foam runner sneakers are a unique and futuristic choice. With their innovative design and black color, these sneakers offer a bold and fashion-forward look. They provide comfort, breathability, and are perfect for making a statement with your footwear.",
    brand: "Yeezy",
    category: "Slides",
    countInStock: 0,
    rating: 4,
    numReviews: 6,
  },
  {
    name: "Adidas Superstar White",
    image: "/images/adidas-superstar-white.png",
    price: 4999,
    description:
      "The Adidas superstar white sneakers are a classic and iconic footwear choice. They feature a clean and timeless design, perfect for adding a stylish touch to your outfit. These sneakers are comfortable, durable, and suitable for everyday wear.",
    brand: "Adidas",
    category: "Sneakers",
    countInStock: 3,
    rating: 3,
    numReviews: 11,
  },
  {
    name: "Vans Old Skool Grey",
    image: "/images/vans-old-skool-grey.png",
    price: 4999,
    description:
      "The Vans old skool grey sneakers are a popular choice for skateboarders and streetwear enthusiasts. With their classic low-top design and iconic side stripe, these sneakers offer both style and functionality. They are comfortable, versatile, and built to last.",
    brand: "Vans",
    category: "Sneakers",
    countInStock: 8,
    rating: 3.5,
    numReviews: 12,
  },
];

export default products;
