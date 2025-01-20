import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

function Header_class() {
  return (
    <header className=" pb-1 h-18 flex flex-wrap">
      <div className="h-20 flex text-wrap w-full bg-white">
        {/* website logo */}
        <div className="w-1/6 pl-5">
          <Link to="/" className="h-16 w-5/6">
            <img
              className="h-10 w-6/6 mt-5 rounded-lg hover:shadow-lg"
              src="/new_logo_2.svg"
              alt="GearPro_Logo"
            />
          </Link>
        </div>

        {/* search bar */}
        <div className="flex text-wrap w-2/6 pl-5">
          <div className=" h-10 bg-slate-200 rounded-l-lg mt-5">
            <div className="text-center p-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <input
            className="w-5/6 h-10 mt-5 rounded-r-lg text-sm bg-slate-200 hover:bg-slate-300 border-none"
            type="text"
            text="   "
            placeholder="   Enter the Product you want."
          />
        </div>

        {/* extra bars */}
        <div className="h-10 w-3/6 mt-2 flex">
          {/* Login Button */}
          <div className="h-10 w-1/4 ml-1 mr-2 mt-3 grid place-content-center rounded-lg hover:bg-black hover:text-white">
            <Link to="/Sign_up" className="flex items-center space-x-1">
              <div className="">
                <FontAwesomeIcon icon={faRightToBracket} className="text-xs" />
                <span className="text-xs font-bold">Login</span>
              </div>
            </Link>
          </div>

          {/* Profile Button */}
          <div className="h-10 w-1/4  mr-2 mt-3 grid place-content-center rounded-lg hover:bg-black hover:text-white pl-3 ">
            <Link to="/profile" className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faUser} className="text-xs" />
              <span className="text-xs font-bold pr-1">Profile</span>
            </Link>
          </div>

          {/* Cart Button */}
          <div className="h-10 w-1/4 ml-1 mr-2 mt-3 grid place-content-center rounded-lg hover:bg-black hover:text-white">
            <Link to="/CartPage" className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
              <span className="text-lg font-bold">Cart</span>
            </Link>
          </div>
          {/* Cart Button */}
          {/* <div className="h-10 w-1/4  mr-2 mt-3 grid place-content-center rounded-lg hover:text-white bg-slate-200">
            <label htmlFor=""></label>
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header_class;
