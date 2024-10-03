import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  // State to store login form inputs
  const [username, setUsername] = useState("naveenpothula2001@gmail.com");
  const [password, setPassword] = useState("Ashwanth@123");

  // Function to check if the user is logged in
  const checkUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/users/getUser",
        {
          withCredentials: true,
        }
      );
      console.log(response.data); // Handle the response data
    } catch (error) {
      console.error("Error making request:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
    }
  };

  // Function to handle login with Reddit
  const handleLoginWithReddit = () => {
    window.location.href = "http://localhost:4000/auth/reddit";
  };

  // Function to log out the user
  const logoutUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/users/logout",
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/users/login",
        { email: username, password }
        //{ withCredentials: true }
      );
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error logging in:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
    }
  };

  return (
    <div>
      {/* Check User and Logout Buttons */}
      <button onClick={checkUser} className="px-2 py-2 bg-blue-500 mx-4">
        Check User
      </button>
      <button onClick={logoutUser} className="px-2 py-2 bg-blue-500">
        Logout
      </button>

      {/* Reddit Login Button */}
      <button
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition duration-200 mb-4"
        onClick={handleLoginWithReddit}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg"
          alt="Reddit Logo"
          className="inline h-5 w-5 mr-2"
        />
        Login with Reddit
      </button>

      {/* Username and Password Login Form */}
      <form onSubmit={handleLogin} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Home;
