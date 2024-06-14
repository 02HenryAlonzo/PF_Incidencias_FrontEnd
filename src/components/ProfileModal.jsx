import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaTimes } from 'react-icons/fa';

const ProfileDropdown = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="absolute right-0 bottom-full mb-2 w-48 bg-white rounded-md shadow-lg z-10">
      <div className="p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 text-gray-700 font-bold"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col items-start">
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-700 py-2 px-4 w-full hover:bg-gray-200 rounded-md"
          >
            <FaSignOutAlt className="mr-2" /> Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
