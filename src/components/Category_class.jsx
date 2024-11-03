import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faFutbol, faPerson,faPersonDress, faShirt} from "@fortawesome/free-solid-svg-icons";

function Category_class() {
  return (
    <div class=" h-26 m-1  rounded-md w-5/5 flex-row p-3 ">
      <nav class="flex h-20 rounded-lg">
        <div class=" w-1/5 hover:bg-orange-300 bg-orange-200 rounded-lg mr-1 justify-center text-center">
        <div class="text-3xl mt-2">
          <FontAwesomeIcon icon={faPerson} />
        </div>
        <div clas="">
          <b class="text-xs">Men</b>
        </div>
        </div>
        <div class=" w-1/5 hover:bg-orange-300 bg-orange-200  rounded-md mr-1 justify-center text-center">
        <div class="text-3xl mt-2">
          <FontAwesomeIcon icon={faPersonDress} />
        </div>
        <div clas="">
          <b class="text-xs">Women</b>
        </div>
        </div>
        <div class=" w-1/5 hover:bg-orange-300 bg-orange-200 rounded-lg mr-1 justify-center text-center">
        <div class="text-3xl mt-2">
          <FontAwesomeIcon icon={faShirt} />
        </div>
        <div clas="">
          <b class="text-xs">Products</b>
        </div>
        </div>
        <div class=" w-1/5 hover:bg-orange-300 bg-orange-200 rounded-lg mr-1 justify-center text-center">
        <div class="text-3xl mt-2">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div clas="">
          <b class="text-xs">Brands</b>
        </div>
        </div>
        <div class=" w-1/5 hover:bg-orange-300 bg-orange-200 rounded-lg  justify-center text-center">
        <div class="text-3xl mt-2">
          <FontAwesomeIcon icon={faFutbol} />
        </div>
        <div clas="">
          <b class="text-xs">Sports</b>
        </div>
        </div>
        
      </nav>
    </div>
  );
}

export default Category_class;
