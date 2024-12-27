import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faFutbol,
  faPerson,
  faPersonDress,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";

function Category_class() {
  return (
    <div class=" h-40 m-2 mt-10 bg-slate-100 rounded-md w-5/5 flex justify-center p-3 ">
      <nav class="flex h-24 rounded-lg w-full">
         {/* men category */}
        <div class=" w-1/5 h-36 mr-5 rounded-lg ml-5 justify-center text-center flex flex-col ">
          <div class="flex justify-center">
            <img className="h-28 rounded-lg" src="category_pic/men.png" alt="" />
          </div>
          <div clas="">
            <b class="text-sm">Men</b>
          </div>
        </div>
        {/* women category */}
        <div class=" w-1/5 h-36 mr-5 rounded-md ml-5 justify-center text-center flex flex-col">
        <div class="flex justify-center">
            <img className="h-28 rounded-lg" src="category_pic/women.png" alt="" />
          </div>
          <div clas="">
            <b class="text-sm">Women</b>
          </div>
        </div>
        {/* product category */}
        <div class=" w-1/5 h-36 mr-5 rounded-lg ml-5 justify-center text-center flex flex-col">
        <div class="flex justify-center">
            <img className="h-28 rounded-lg" src="category_pic/product.png" alt="" />
          </div>
          <div clas="">
            <b class="text-sm">Product</b>
          </div>
        </div>
        {/* brands Category */}
        <div class=" w-1/5 h-36 rounded-lg mr-5 ml-5 justify-center text-center flex flex-col">
        <div class="flex justify-center">
            <img className="h-28 rounded-lg" src="category_pic/brands.png" alt="" />
          </div>
          <div clas="">
            <b class="text-sm">Brands</b>
          </div>
        </div>
        {/* sports Category */}
        <div class=" w-1/5 h-36 rounded-lg mr-5 ml-5 justify-center text-center  flex flex-col">
        <div class="flex justify-center">
            <img className="h-28 rounded-lg" src="category_pic/sports.png" alt="" />
          </div>
          <div clas="">
            <b class="text-sm">Sports</b>
          </div>
        </div>
    
      </nav>
    </div>
  );
}

export default Category_class;
