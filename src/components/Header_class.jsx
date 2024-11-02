import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header_class() {
  return (
    <header class=" p-4 ">
    <div class="bg-white h-10 flex text-wrap w-full  ">
      <div class="w-2/6 ml-3 mr-4 ">
          <a class="h-10" href="">
            <img
              class="h-10 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScS7SdDZdR55dvs-eZpvewIRhtsDyodmTj_Q&s"
              alt="GearPro_Logo"
            />
          </a>
      </div>
      <div class="flex text-wrap w-5/6">
        <div class="w-1/6 h-10 bg-slate-200 rounded-l-lg ">
          <div class="text-center p-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div class="w-5/6 >">
          <input
            class=" w-5/6 h-10 rounded-r-lg bg-slate-200"
            type="text"
            placeholder="   Enter for Search"
          />
        </div>
      </div>
      <div class=" w-2/6 mr-5 border-solid border-2 border-gray-600 rounded-md bg-red-600 hover:bg-red-400">
        <a class="text-white" href="">
          Login
        </a>
      </div>
      <div class=" w-1/6 mr-10 rounded-md bg-blue-600 hover:bg-blue-400">
        <a class="p-2 text-base text-white " href="">Cart</a>
      </div>
    </div>
    </header>
  );
}

export default Header_class;
