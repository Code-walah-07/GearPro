import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

function Header_class() {
  return (
    <header class=" pl-1 pr-1 pb-1 h-18 flex flex-wrap sticky top-0">
      <div class=" h-16 flex text-wrap w-full rounded-md shadow-lg bg-white">
        <div class=" w-26">
          <a class="h-16 w-5/6" href="">
            <img
              class="h-10 w-6/6 mt-2 rounded-lg hover:shadow-lg "
              src="/new_logo_2.svg"
              alt="GearPro_Logo"
            />
          </a>
        </div>
        <div class="flex text-wrap w-3/6 ml-2  ">
          <div class="w-1/6 h-10 bg-slate-200 rounded-l-lg mt-2 ">
            <div class="text-center p-2 w-5/6">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div class="w-5/6 >">
            <input
              class=" w-5/6 h-10 mt-2 rounded-r-lg text-xs bg-slate-200 hover:bg-slate-300 border-none"
              type="text"
              placeholder="   Enter the Product you want."
            />
          </div>
        </div>
        <div class=" h-10 w-3/6 mt-2 flex ">
          <div class="h-10 w-2/6 grid place-content-center rounded-lg hover:bg-slate-500  pl-5 hover:text-white shadow-md">
            <a
              class=" mt-1 ml w-2/6   grid
            place-content-center h-screen"
            >
              <div class="text-xs pl-2 pr-2 ">
                <FontAwesomeIcon icon={faRightToBracket} />
              </div>
              <div class="text-xs">
                <b>Login</b>
              </div>
            </a>
          </div>
          <div class="h-10 w-2/6 ml-1 grid place-content-center rounded-lg hover:bg-slate-500 hover:text-white pl-3 shadow-md">
            <a class=" mt-1 ml w-2/6 " href="">
              <div class="text-xs pl-3">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div class="text-xs mr-3">
                <b>Profile</b>
              </div>
            </a>
          </div>
          <div class="h-10 w-2/6 ml-1 grid place-content-center rounded-lg hover:bg-slate-500  hover:text-white shadow-md">
            <a class=" mt-1 w-2/6" href="">
              <div class="text-xs pl-1 pr-2 ">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div class="text-xs">
                <b>Cart</b>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header_class;
