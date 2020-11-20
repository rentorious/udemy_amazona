import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Ognjen",
      email: "carina@rentorious.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Neven",
      email: "nikoinista@slabina.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "hight quality product",
    },
    {
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 20,
      brand: "Adidas",
      rating: 4,
      numReviews: 10,
      description: "hight quality product",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.5,
      numReviews: 22,
      description: "hight quality product",
    },
    {
      name: "Nike Slim Pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 78,
      countInStock: 65,
      brand: "Nike",
      rating: 5,
      numReviews: 6,
      description: "hight quality product",
    },
    {
      name: "Puma Slim Pants",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 420,
      countInStock: 11,
      brand: "Puma",
      rating: 3.5,
      numReviews: 69,
      description: "hight quality product",
    },
    {
      name: "Adidas Fit Pants",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 360,
      countInStock: 2,
      brand: "Pants",
      rating: 2,
      numReviews: 99,
      description: "Low quality product",
    },
  ],
};

export default data;
