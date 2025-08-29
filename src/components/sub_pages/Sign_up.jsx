import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://gearpro-backend.onrender.com",
});

function Sign_up() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/api/auth/register", {
        name,
        email,
        user,
        password,
      });

      alert(res.data.message || "Account created successfully");
    } catch (err) {
      console.error(err.response?.data || err);
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="w-96 h-auto rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img className="h-16" src="new_logo_2.svg" alt="Logo" />
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Welcome
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Create your account to get started
          </p>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-3">
          {/* Input Fields */}
          <input
            className="w-full h-10 rounded-xl text-sm px-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            required
          />
          <input
            className="w-full h-10 rounded-xl text-sm px-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            required
          />
          <input
            className="w-full h-10 rounded-xl text-sm px-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter Your Username"
            required
          />
          <input
            className="w-full h-10 rounded-xl text-sm px-4 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            required
          />

          {/* Register Button */}
          <button
            type="submit"
            className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            or login with
          </span>
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
        </div>

        {/* Social login */}
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            <img className="w-5" src="google.svg" alt="" />
            <span className="text-sm">Google</span>
          </button>
        </div>

        {/* Already have an account */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/Log_in" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sign_up;
