import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLock, FaUserPlus } from 'react-icons/fa';
import logo from '/logo4-2.png'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-indigo-600 shadow-lg w-screen"
    >
      <div className="container mx-auto flex justify-between items-center w-screen md:w-4/5">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <span className="text-indigo-200 pt-2 mr-2"><img src={logo} alt="logo" className='h-20' /></span> IncidentApp
        </Link>
        <div className="flex gap-8">
          <Link to="/login" className="text-gray-300 hover:bg-indigo-500 hover:text-white  transition flex items-center border-2 border-gray-300 rounded-md px-4 py-1">
            <FaLock className="mr-2" /> Login
          </Link>
          <Link to="/signup" className="text-gray-300 hover:bg-indigo-500 hover:text-white  transition flex items-center border-2 border-gray-300 rounded-md px-4 py-1">
            <FaUserPlus className="mr-2" /> Sign Up
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;