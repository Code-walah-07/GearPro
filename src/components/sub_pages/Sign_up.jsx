import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

  // Remember its a login page
function Sign_up() {
  return (
    <div className="flex h-screen justify-center items-center  ">
      <div className="w-96 h-4/6 rounded-2xl bg-slate-200">
        <div className="flex justify-center mt-8 mb-4">
          <h2 className="text-3xl font-heading">Login</h2>
        </div>

        <div className="text-2xl flex items-center justify-center">
          <h2>Welcome Back!</h2>
        </div>
        {/* company logo
        <div className="w-96 h-12 flex justify-center ">
          <img className="" src="/new_logo_2.svg" alt="" />
        </div> */}
        {/* Authentication */}
        <div className="flex flex-col items-center ">
          <input
            className="mt-5 w-80 h-10 rounded-lg text-xs"
            type="text"
            required
            placeholder="  Enter Your Username"
          />
          <input
            className="mt-3 w-80 h-10 rounded-lg text-xs"
            type="password"
            required
            placeholder="  Enter Your Password"
          />
        </div>
        {/* Extra field */}
        <div className="flex">
          <div className="flex">
            <input className="w-3 mt-2 ml-10" type="checkbox" name="" id="" />
            <div className="mt-1 ml-1">
              <span className="text-xs">Remember Me</span>
            </div>
          </div>
          <div className="ml-24 mt-1">
            <span>
              <a className="text-xs text-blue-700" href="">
                Forgot your password?
              </a>
            </span>
          </div>
        </div>

        {/* button */}
        <div className="flex items-center justify-center mt-5">
          <div className="flex items-center justify-center w-80 h-10 rounded-2xl bg-slate-500 hover:bg-black">
            <button className="text-white">Login</button>
          </div>
        </div>

        <div className="mt-2">
          <span className="ml-10 text-xs ">
            ----------------------------------- or, login with
            ----------------------------------
          </span>
        </div>
        {/* other methods for login */}
        <div className="flex items-center justify-center mt-2">
          <a href="">
            <div className="hover:bg-white w-20 h-8 flex justify-center rounded-md">
              <img className="w-6" src="google.svg" alt="" />
              <button>Google</button>
            </div>
          </a>
          <a href="">
            <div className="hover:bg-white w-24 h-8 ml-5 flex justify-center rounded-md">
              <img className="w-6" src="facebook.svg" alt="" />
              <button>facebook</button>
            </div>
          </a>
        </div>

        {/* Sign Up */}
        <div>
          <div className="flex items-center justify-center mt-3">
            <span className="text-xs"> Not Registered yet?</span>
            <a className="ml-1" href="">
              <span className="text-xs text-blue-600">
                <u>Register</u>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;
