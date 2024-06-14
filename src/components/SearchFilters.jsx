import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchFilters = () => {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <label htmlFor="desde" className="mr-2">Desde</label>
          <input type="date" id="desde" className="border border-gray-300 px-2 py-1 rounded-md" />
        </div>
        <div className="flex items-center">
          <label htmlFor="hasta" className="mr-2">Hasta</label>
          <input type="date" id="hasta" className="border border-gray-300 px-2 py-1 rounded-md" />
        </div>
        <div className="flex items-center">
          <label htmlFor="idTarea" className="mr-2">ID Tarea</label>
          <input type="text" id="idTarea" className="border border-gray-300 px-2 py-1 rounded-md" />
        </div>
        <div className="flex items-center">
          <label htmlFor="operador" className="mr-2">Operador</label>
          <input type="text" id="operador" className="border border-gray-300 px-2 py-1 rounded-md" />
        </div>
      </div>
      <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center">
        <FaSearch className="mr-2" />
        <span>BUSCAR</span>
      </button>
    </div>
  );
};

export default SearchFilters;