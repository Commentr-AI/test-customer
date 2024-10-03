// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await axios.post(
      "http://localhost:4000/api/v1/users/login",
      { username, password }
    );
    console.log(response);
    // window.location.href = "http://localhost:4000/auth/reddit";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Your Account
        </h2>

        {/* Reddit Login */}
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition duration-200 mb-4"
          //onClick={handleLoginWithReddit}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg"
            alt="Reddit Logo"
            className="inline h-5 w-5 mr-2"
          />
          Login with Reddit
        </button>

        <div className="relative my-4 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Username Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2 text-left"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2 text-left"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Signup Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
