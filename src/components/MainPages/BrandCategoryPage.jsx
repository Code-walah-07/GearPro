import React, { useState } from "react";
import Header_class from "./Header_class";

function BrandsCategoryPage() {
  const [brands] = useState([
    {
      id: 1,
      name: "Nike",
      image: "brandImages/Nike.jpg",
    },
    {
      id: 2,
      name: "Adidas",
      image: "brandImages/Adidas.jpg",
    },
    {
      id: 3,
      name: "Puma",
      image: "brandImages/Puma.jpg",
    },
    {
      id: 4,
      name: "Reebok",
      image: "brandImages/Reebok.jpg",
    },
    {
      id: 5,
      name: "Under Armour",
      image: "brandImages/UnderArmour.jpg",
    },
  ]);

  const handleBrandClick = (brand) => {
    console.log("Selected brand:", brand);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto my-10 p-5">
        <h1 className="text-3xl font-bold mb-5">Sports Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="border p-5 rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleBrandClick(brand)}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-48 object-cover mb-3"
              />
              <h2 className="text-xl font-semibold text-center">{brand.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BrandsCategoryPage;
