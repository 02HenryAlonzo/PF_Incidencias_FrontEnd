import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

const SidebarItem = ({ icon: Icon, text, to, subItems, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <li
        className={`flex items-center justify-between p-2 rounded-md transition-all duration-300 ${isActive ? 'bg-indigo-700 text-white' : 'text-indigo-100 hover:bg-indigo-500'} ${className}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <Icon className="mr-2" />
          <Link to={to} className="flex-1">
            {text}
          </Link>
        </div>
        {subItems && (
          <FaAngleDown
            className={`transition-transform duration-300 ${isExpanded ? 'transform rotate-180' : ''}`}
          />
        )}
      </li>
      {subItems && isExpanded && (
        <ul className="ml-4 mt-2 space-y-1">
          {subItems.map((subItem, index) => (
            <li key={index}>
              <Link to={subItem.to} className="block px-2 py-1 text-indigo-100 hover:bg-indigo-500 rounded-md">
                {subItem.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SidebarItem;