import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header_class from "./Header_class";

function MenCategoryPage() {
  const [products] = useState([
    {
      id: 1,
      name: "Running Shoes",
      price: 2500,
      image: "product Picture/Shoes1.jpg",
    },
    {
      id: 2,
      name: "Sports T-shirt",
      price: 850,
      image: "product Picture/SportsTshirt.jpg",
    },
    {
      id: 3,
      name: "Track Pants",
      price: 1500,
      image: "product Picture/TrackPants.jpg",
    },
  ]);

  const handleAddToCart = (product) => {
    // Function to add product to cart
    console.log("Added to cart:", product);
  };

  return (
    <>
      <Header_class />
      <div className="container mx-auto my-10 p-5">
        <h1 className="text-3xl font-bold mb-5">Men's Category</h1>
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
              <div className="mt-3 flex justify-between">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-white bg-green-500 hover:bg-green-700 px-3 py-2 rounded-lg"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MenCategoryPage;
