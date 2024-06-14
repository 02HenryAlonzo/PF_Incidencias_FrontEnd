import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaClipboardList,
  FaPlus,
  FaHome,
  FaStar,
  FaPaperPlane,
  FaTrashAlt,
  FaRegUserCircle,
  FaAngleDown
} from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import logo from "/logo4-2.png";
import ProfileDropdown from "./ProfileModal";

const Sidebar = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const incidencesSubItems = [
    { text: "Mis Incidencias", to: "/dashboard/my-incidences" }
  ];

  return (
    <div className="w-64 bg-indigo-600 text-white p-4 h-screen flex flex-col justify-between shadow-lg">
      <div>
        <div className="flex items-center justify-center mb-10">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold">
            Incident<span className="text-xl font-medium">App</span>
          </span>
        </div>
        <button
          onClick={() => navigate("/dashboard/create-incidence")}
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-lg w-full mb-6 flex items-center justify-center transition-all duration-300"
        >
          <FaPlus className="mr-2" /> Crear Incidencia
        </button>
        <ul className="space-y-2">
          <SidebarItem icon={FaHome} text="Inicio" to="/dashboard" />
          <SidebarItem
            icon={FaClipboardList}
            text="Incidencias"
            to="/dashboard/incidences"
            subItems={incidencesSubItems}
          />
          <SidebarItem
            icon={FaStar}
            text="Importante"
            to="/dashboard/important"
          />
          <SidebarItem
            icon={FaPaperPlane}
            text="Enviadas"
            to="/dashboard/sent"
          />
          <SidebarItem
            icon={FaTrashAlt}
            text="Papelera"
            to="/dashboard/trash"
          />
        </ul>
      </div>
      <div className="relative">
        <div className="flex items-center p-2 rounded-md hover:bg-indigo-700 transition-all duration-300 cursor-pointer">
          <FaRegUserCircle className="text-4xl mr-2" />
          <div
            className="flex-1"
            onClick={() => navigate('/dashboard/profile')}
          >
            <div className="text-sm font-bold">Jhampier</div>
            <div className="text-xs text-indigo-200">jhampier@gmail.com</div>
          </div>
          <FaAngleDown
            className="cursor-pointer"
            onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
          />
        </div>
        {isProfileDropdownOpen && (
          <ProfileDropdown onClose={() => setProfileDropdownOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
