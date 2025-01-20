import React, { useState } from "react";
import Header_class from "./Header_class"; 

function ProductCategoryPage() {
  const [products] = useState([
    {
      id: 1,
      name: "Football",
      price: 1500,
      image: "product Picture/Football.jpg",
    },
    {
      id: 2,
      name: "Cricket Bat",
      price: 2500,
      image: "product Picture/CricketBat.jpg",
    },
    {
      id: 3,
      name: "Tennis Racket",
      price: 3000,
      image: "product Picture/TennisRacket.jpg",
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 4000,
      image: "product Picture/RunningShoes.jpg",
    },
    {
      id: 5,
      name: "Swimming Goggles",
      price: 800,
      image: "product Picture/SwimmingGoggles.jpg",
    },
  ]);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <>
      <Header_class />
      <div className="container mx-auto my-10 p-5">
        <h1 className="text-3xl font-bold mb-5">Sports Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-5 rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 object-cover mb-3"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>Price: ₹{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-black"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductCategoryPage;
