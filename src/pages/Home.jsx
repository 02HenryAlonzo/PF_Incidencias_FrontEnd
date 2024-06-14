import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie'
import buildingAnimation from '../assets/Animation.json';
import { FaLock } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import img2 from '/logo1.png'

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: buildingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-indigo-50">
     <Navbar />
      <div className="flex-grow flex md:w-4/5">
        <div className="w-1/2 p-8 flex flex-col justify-center items-start">
          <div className='flex items-end gap-4 mb-4'>
            <h1 className="text-4xl font-bold text-indigo-600">Incident Management</h1>
            <Lottie options={defaultOptions} height={60} width={80} />
          </div>

          <p className="text-lg mb-8">
          Administre y resuelva los problemas de su condominio de manera eficiente. Mantenga su edificio seguro y en buen estado.
          </p>

          <Link to="/login">
            <motion.button
              animate={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
              whileHover={{
                scale: 1.2,
                backgroundColor: 'rgb(110, 102, 250)',
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-indigo-600 text-white rounded-md shadow-md flex items-center transition duration-300 py-2 px-5"
            >
              <FaLock className="mr-2" /> Login
            </motion.button>
          </Link>

        </div>

        <div className="w-1/2 p-8 flex items-center justify-center">
          <img src={img2} alt="img" className='w-4/5' />
        </div>
        
      </div>
    </div>
  );
};

export default Home;