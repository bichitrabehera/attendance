import { useState } from "react";
import { Link } from "react-router-dom";  // Import Link to navigate
import './index.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic
  };

  return (
    <div id="main" className="bg-white p-10 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg border-1 border-black w-full max-w-md text-sm">
        <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-black text-white font-semibold rounded-md hover:bg-blue-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
