import axios from "axios";
import { useState } from "react";

function Sign_in() {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [user,setUser]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5173/Sign_in",{
      name,email,user,password
    })
    } catch (e) {
      Console.log(e);
    }
  }
  


  return (
    
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-96 h-auto rounded-2xl bg-slate-200 shadow-lg p-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img className="h-16" src="new_logo_2.svg" alt="Logo" />
        </div>

        {/* Header */}
        <div className="text-center mb-4">
          <h3 className="text-xl text-gray-600">Create your account</h3>
        </div>
        <form action="POST">
        {/* Input Fields */}
        <div className="flex flex-col items-center">
          <input
            className="mt-1 w-80 h-10 rounded-lg text-sm px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" onChange={(e)=>{setName(e.target.value)}}
            placeholder="Enter Your Name"
          />
          <input
            className="mt-3 w-80 h-10 rounded-lg text-sm px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email" onChange={(e)=>{setEmail(e.target.value)}}
            placeholder="Enter Your Email"
          />
          <input
            className="mt-3 w-80 h-10 rounded-lg text-sm px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" onChange={(e)=>{setUser(e.target.value)}}
            placeholder="Enter Your Username"
          />
          <input
            className="mt-3 w-80 h-10 rounded-lg text-sm px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password" onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Enter Your Password"
          />
          
        </div>

        {/* Register Button */}
        <div className="flex items-center justify-center mt-6">
        <input
            type="submit"
            value="Register"
            className="w-80 h-10 rounded-2xl bg-slate-500 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={submit}
          />

        </div>
        </form>
        {/* Already Have an Account */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/Sign_up" className="text-blue-600 hover:underline">
              Login
            </a>
          </span>
        </div>
      </div>
    </div>
   
  );
}

export default Sign_in;
