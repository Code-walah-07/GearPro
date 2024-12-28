function Sign_in() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="mb-5">
        <img className="h-20" src="new_logo_2.svg" alt="" />
      </div>
      <div className="w-96 h-4/6 rounded-2xl bg-slate-200">
        <div className="flex justify-center mt-5 mb-2">
          <h2 className="text-3xl font-heading">Register</h2>
        </div>
        <div className="text-2xl flex items-center justify-center">
          <h2>Welcome!</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <input
            className="mt-5 w-80 h-10 rounded-lg text-sm"
            type="text"
            placeholder="  Enter Your Name"
          />
          <input
            className="mt-5 w-80 h-10 rounded-lg text-sm"
            type="text"
            placeholder="  Enter Your Email"
          />
          <input
            className="mt-5 w-80 h-10 rounded-lg text-sm"
            type="text"
            placeholder="  Enter Your Username"
          />
          <input
            className="mt-5 w-80 h-10 rounded-lg text-sm"
            type="password"
            placeholder="  Enter Your Password"
          />
          <input
            className="mt-5 w-80 h-10 rounded-lg text-sm"
            type="password"
            placeholder="  Confirm Your Password"
          />
        </div>
      </div>
    </div>
  );
}
export default Sign_in;
