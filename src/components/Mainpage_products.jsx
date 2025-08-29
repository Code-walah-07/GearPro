function Mainpage_products() {
  const products = [
    { img: "/product_pic/shoes.png", label: "Shoes" },
    { img: "/product_pic/bag_collecton.png", label: "Bags" },
    { img: "/product_pic/cycle.png", label: "Cycles" },
    { img: "/product_pic/football.png", label: "Football" },
    { img: "/product_pic/tshirts.png", label: "T-Shirts" },
    { img: "/product_pic/gym.png", label: "Gym Equipment" },
    { img: "/product_pic/accesories.png", label: "Accessories" },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 mt-10 rounded-lg shadow-lg">
      {/* Heading */}
      <div className="w-full h-12 flex items-center px-6 bg-gradient-to-r from-electricBlue to-limeGreen rounded-t-lg">
        <h2 className="text-xl font-bold text-white">Products For You</h2>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-8 p-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="group cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="overflow-hidden rounded-xl shadow-md">
              <img
                className="h-80 w-full object-cover group-hover:opacity-90 transition"
                src={product.img}
                alt={product.label}
              />
            </div>
            <p className="mt-2 text-center text-gray-700 dark:text-gray-200 font-medium">
              {product.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mainpage_products;
