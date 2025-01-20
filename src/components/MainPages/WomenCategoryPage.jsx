import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header_class from "./Header_class";

function WomenCategoryPage() {
  const [products] = useState([
    {
      id: 1,
      name: "Yoga Pants",
      price: 1200,
      image: "product Picture/YogaPants.jpg",
    },
    {
      id: 2,
      name: "Running Jacket",
      price: 2200,
      image: "product Picture/RunningJacket.jpg",
    },
  ]);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <>
      <Header_class />
      <div className="container mx-auto my-10 p-5">
        <h1 className="text-3xl font-bold mb-5">Women's Category</h1>
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

export default WomenCategoryPage;
