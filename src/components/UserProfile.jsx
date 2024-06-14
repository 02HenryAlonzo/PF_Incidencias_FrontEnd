import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaPhone, FaBuilding } from "react-icons/fa";
import img2 from "/logo2.png";

const UserProfile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
        <div className="shape shape6"></div>
        <div className="shape shape7"></div>
        <div className="shape shape8"></div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        {" "}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-600">
            Perfil de Usuario
          </h1>
          <img src={img2} alt="logo" className="h-20" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-indigo-600 rounded-full w-40 h-40 flex items-center justify-center"
            >
              <FaUser className="text-white text-6xl" />
            </motion.div>
          </div>

          <div className="">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaUser className="text-indigo-600 mr-2" />
                <h2 className="text-xl font-semibold">Jhampier</h2>
              </div>
              <p className="text-gray-600">Nombre de Usuario</p>
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-indigo-600 mr-2" />
                <p className="text-gray-600">jhampier@gmail.com</p>
              </div>
              <p className="text-gray-600">Correo Electrónico</p>
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaPhone className="text-indigo-600 mr-2" />
                <p className="text-gray-600">35258566</p>
              </div>
              <p className="text-gray-600">Número de Teléfono</p>
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FaBuilding className="text-indigo-600 mr-2" />
                <p className="text-gray-600">201 col Villa Nueva</p>
              </div>
              <p className="text-gray-600">Dirección</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
