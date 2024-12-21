import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

function Header_class() {
  return (
    <header className="pl-1 pr-1 pb-1 h-18 flex flex-wrap sticky top-0">
      <div className="h-24 flex text-wrap w-full rounded-md shadow-lg bg-white">
        <div className="w-26">
          <Link to="/" className="h-16 w-5/6">
            <img
              className="h-10 w-6/6 mt-7 rounded-lg hover:shadow-lg"
              src="/new_logo_2.svg"
              alt="GearPro_Logo"
            />
          </Link>
        </div>
        <div className="flex text-wrap w-3/6 ml-2">
          <div className="w-1/6 h-10 bg-slate-200 rounded-l-lg mt-7">
            <div className="text-center p-2 w-5/6">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <input
            className="w-5/6 h-10 mt-7 rounded-r-lg text-sm bg-slate-200 hover:bg-slate-300 border-none"
            type="text"
            placeholder="   Enter the Product you want."
          />
        </div>

        <div className="h-10 w-3/6 mt-2 flex">
          {/* Login Button */}
          <div className="h-10 w-2/6 grid mt-5 place-content-center rounded-lg ml-2 hover:bg-slate-500 mr-2 hover:text-white shadow-md">
          <a
              href="/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              <FontAwesomeIcon icon={faRightToBracket} className="text-xs" />
              <span className="text-xs font-bold">Login</span>
            </a>
          </div>

          {/* Profile Button */}
          <div className="h-10 w-2/6 ml-1 mr-2 mt-5 grid place-content-center rounded-lg hover:bg-slate-500 hover:text-white pl-3 shadow-md">
            <Link to="/profile" className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faUser} className="text-xs" />
              <span className="text-xs font-bold">Profile</span>
            </Link>
          </div>

          {/* Cart Button */}
          <div className="h-10 w-2/6 ml-1 mr-2 mt-5 grid place-content-center rounded-lg hover:bg-slate-500 hover:text-white shadow-md">
            <Link to="/cart" className="flex items-center space-x-1">
              <FontAwesomeIcon icon={faCartShopping} className="text-xs" />
              <span className="text-xs font-bold">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header_class;
