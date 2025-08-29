import { Link } from "react-router-dom";

function Category_class() {
  return (
    <div className="w-full bg-slate-100 dark:bg-transparent py-6 px-3 transition-colors duration-500">
      {/* Updated Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100 relative">
        Categories
        <span className="block w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
      </h2>

      <nav className="flex flex-wrap justify-center gap-10">
        {[
          { to: "/MenCategoryPage", img: "category_pic/men.png", label: "Men" },
          { to: "/WomenCategoryPage", img: "category_pic/women.png", label: "Women" },
          { to: "/KidsCategoryPage", img: "category_pic/kids.png", label: "Kids" },
          { to: "/ProductCategoryPage", img: "category_pic/shoes.png", label: "Product" },
          { to: "/BrandsCategoryPage", img: "category_pic/brands.png", label: "Brands" },
          { to: "/sports", img: "category_pic/sports.png", label: "Sports" },
          { to: "/AccessoriesCategoryPage", img: "category_pic/accesories.png", label: "Accessories" },
          { to: "/FitnessCategoryPage", img: "category_pic/fitness.png", label: "Fitness" },
        ].map((category, i) => (
          <Link
            key={i}
            to={category.to}
            className="flex flex-col justify-center items-center text-center transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <img
              className="h-28 w-auto rounded-lg cursor-pointer shadow-md hover:shadow-xl transition duration-300"
              src={category.img}
              alt={category.label}
            />
            <b className="text-sm mt-2 text-gray-800 dark:text-gray-200">
              {category.label}
            </b>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Category_class;
