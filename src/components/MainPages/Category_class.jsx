import { Link } from "react-router-dom";

function Category_class() {
  return (
    <div className="h-auto m-2  bg-slate-100 dark:bg-gray-900 rounded-md p-3 transition-colors duration-500">
    <h2>Categories</h2>
      <nav className="flex flex-wrap justify-center gap-6">
        
        {/* Category Item Component */}
        {[
          { to: "/MenCategoryPage", img: "category_pic/men.png", label: "Men" },
          { to: "/WomenCategoryPage", img: "category_pic/women.png", label: "Women" },
          { to: "/ProductCategoryPage", img: "category_pic/product.png", label: "Product" },
          { to: "/BrandsCategoryPage", img: "category_pic/brands.png", label: "Brands" },
          { to: "/sports", img: "category_pic/sports.png", label: "Sports" },
          { to: "/ShoesCategoryPage", img: "category_pic/shoes.png", label: "Shoes" },
          { to: "/AccessoriesCategoryPage", img: "category_pic/accessories.png", label: "Accessories" },
          { to: "/KidsCategoryPage", img: "category_pic/kids.png", label: "Kids" },
          { to: "/FitnessCategoryPage", img: "category_pic/fitness.png", label: "Fitness" },
        ].map((category, i) => (
          <Link
            key={i}
            to={category.to}
            className="w-1/3 sm:w-1/5 md:w-1/6 flex flex-col items-center text-center transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <img
              className="h-28 w-auto rounded-lg cursor-pointer shadow-md hover:shadow-xl transition duration-300"
              src={category.img}
              alt={category.label}
            />
            <b className="text-sm mt-2 text-gray-800 dark:text-gray-200">{category.label}</b>
          </Link>
        ))}

      </nav>
    </div>
  );
}

export default Category_class;
