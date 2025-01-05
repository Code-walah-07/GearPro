import { Link } from "react-router-dom";

function Category_class() {
  return (
    <div className="h-auto m-2 mt-10 bg-slate-100 rounded-md p-3">
      <nav className="flex flex-wrap justify-center gap-4">
        {/* Men category */}
        <Link
          to="/men"
          className="w-1/4 sm:w-1/5 md:w-1/6 flex flex-col items-center text-center hover:opacity-90"
        >
          <img
            className="h-28 w-auto rounded-lg cursor-pointer"
            src="category_pic/men.png"
            alt="Men"
          />
          <b className="text-sm mt-2">Men</b>
        </Link>

        {/* Women category */}
        <Link
          to="/women"
          className="w-1/4 sm:w-1/5 md:w-1/6 flex flex-col items-center text-center hover:opacity-90"
        >
          <img
            className="h-28 w-auto rounded-lg cursor-pointer"
            src="category_pic/women.png"
            alt="Women"
          />
          <b className="text-sm mt-2">Women</b>
        </Link>

        {/* Product category */}
        <Link
          to="/product"
          className="w-1/4 sm:w-1/5 md:w-1/6 flex flex-col items-center text-center hover:opacity-90"
        >
          <img
            className="h-28 w-auto rounded-lg cursor-pointer"
            src="category_pic/product.png"
            alt="Product"
          />
          <b className="text-sm mt-2">Product</b>
        </Link>

        {/* Brands category */}
        <Link
          to="/brands"
          className="w-1/4 sm:w-1/5 md:w-1/6 flex flex-col items-center text-center hover:opacity-90"
        >
          <img
            className="h-28 w-auto rounded-lg cursor-pointer"
            src="category_pic/brands.png"
            alt="Brands"
          />
          <b className="text-sm mt-2">Brands</b>
        </Link>

        {/* Sports category */}
        <Link
          to="/sports"
          className="w-1/4 sm:w-1/5 md:w-1/6 flex flex-col items-center text-center hover:opacity-90"
        >
          <img
            className="h-28 w-auto rounded-lg cursor-pointer"
            src="category_pic/sports.png"
            alt="Sports"
          />
          <b className="text-sm mt-2">Sports</b>
        </Link>
      </nav>
    </div>
  );
}

export default Category_class;
