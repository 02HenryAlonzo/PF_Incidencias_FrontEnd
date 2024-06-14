import React, { useState } from "react";
import { registerUser } from '../services/api';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SocialMedia } from "../components/SocialMedia";
import logo from "/logo3.1.png";
import "../styles/background.css";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!userData.username) errors.username = "Username is required.";
    if (!userData.email) errors.email = "Email is required.";
    if (!userData.password) errors.password = "Password is required.";
    if (userData.email && !/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = "Email is invalid.";
    }
    if (userData.password && userData.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await registerUser(userData);
      toast.success("Registered successfully");
      navigate("/login");
    } catch (err) {
      toast.error("Failed to register. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div className="background-shapes">
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
        <div className="shape4"></div>
      </div>

      <div className="bg-white py-8 px-10 rounded-lg shadow-md max-w-md w-full">
        <div className="mb-10">
          <Link to="/" className="w-full flex justify-center items-end">
            <img src={logo} alt="logo" className="h-10 mr-1" />
            <span className="text-2xl font-bold">
              Incident<span className="text-xl font-medium">App</span>
            </span>
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="flex items-center text-gray-700 font-medium"
            >
              <FaUser className="mr-2" /> Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={userData.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
            />
            {errors.username && (
              <p className="text-red-500 text-xs mt-1">{errors.username}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="flex items-center text-gray-700 font-medium"
            >
              <FaEnvelope className="mr-2" /> Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="flex items-center text-gray-700 font-medium"
            >
              <FaKey className="mr-2" /> Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 mt-4 hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <p className="text-gray-600 text-center mt-6 mb-2">O continua con</p>
          <SocialMedia />
        </div>

        <div className="text-gray-600 text-center mt-10">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <a href="/login" className="text-blue-600">
              Ingresa aquí
            </a>
          </p>
          <p>
            <a href="#" className="text-blue-600">
              ¿Olvidaste tu contraseña?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
