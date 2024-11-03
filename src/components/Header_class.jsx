import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

function Header_class() {
  return (
    <header class=" p-1 h-18 flex flex-wrap sticky top-0 ">
      <div class="bg-white h-16 flex text-wrap w-full bg-orange-50 ">
        <div class=" w-18 mr-2 ">
          <a class="h-16  " href="">
            <img
              class="h-10 w-14 mt-2 rounded-lg "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScS7SdDZdR55dvs-eZpvewIRhtsDyodmTj_Q&s"
              alt="GearPro_Logo"
            />
          </a>
        </div>
        <div class="flex text-wrap w-3/6 ">
          <div class="w-1/6 h-10 bg-slate-200 rounded-l-lg mt-2">
            <div class="text-center p-2 w-5/6">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div class="w-5/6 >">
            <input
              class=" w-5/6 h-10 mt-2 rounded-r-lg text-xs bg-slate-200 hover:bg-slate-300"
              type="text"
              placeholder="   Enter for Search"
            />
          </div>
        </div>
        <div class=" h-10 w-3/6 mt-2 flex ">
          <div class="h-10 w-2/6  flex flex-wrap rounded-lg hover:bg-blue-800 bg-blue-200 pl-2 ">
            <a
              class=" mt-1 ml flex-col w-2/6  hover:text-white justify-center text-center"
              href=""
            >
              <div class="text-xs pl-2 pr-2 ">
                <FontAwesomeIcon icon={faRightToBracket} />
              </div>
              <div class="text-xs">
                <b>Login</b>
              </div>
            </a>
          </div>
          <div class="h-10 w-2/6 ml-1 flex flex-wrap rounded-lg hover:bg-blue-800 bg-blue-200 pl-2">
            <a
              class=" mt-1 ml flex-col w-2/6 justify-center text-center"
              href=""
            >
              <div class="text-xs pl-2 pr-2 ">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div class="text-xs">
                <b>Profile</b>
              </div>
            </a>
          </div>
          <div class="h-10 w-2/6 ml-1 flex flex-wrap rounded-lg hover:bg-blue-800 bg-blue-200 pl-2">
          <a
              class=" mt-1  flex-col w-2/6 justify-center text-center"
              href=""
            >
              <div class="text-xs pl-2 pr-2 ">
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
