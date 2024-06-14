import React from 'react';
import { FaCircle, FaRegSquare } from 'react-icons/fa';
import TaskRow from './TaskRow';
import SearchFilters from './SearchFilters';

const TaskList = ({ tasks }) => {
  return (
    <div className="flex-1 p-8">
      <h2 className="text-2xl font-bold text-indigo-600">Incidencias</h2>
      <div className="flex items-center justify-between my-8">
        <div className="flex items-center space-x-4">
          <p className='text-xl text-indigo-950'>Estado</p>
          <div className="flex items-center">
            <FaRegSquare className='mr-2' />
            <FaCircle className="text-yellow-500 mr-2" />
            <span>En Progreso</span>
          </div>
          <div className="flex items-center">
            <FaRegSquare className='mr-2' />
            <FaCircle className="text-blue-500 mr-2" />
            <span>Pendiente</span>
          </div>
          <div className="flex items-center">
            <FaRegSquare className='mr-2' />
            <FaCircle className="text-green-500 mr-2" />
            <span>Completado</span>
          </div>
          <div className="flex items-center">
            <FaRegSquare className='mr-2' />
            <FaCircle className="text-red-500 mr-2" />
            <span>Error</span>
          </div>
        </div>
      </div>

      <SearchFilters />

      <div className="w-full overflow-hidden">
        <div className=''>
          <ul className="text-indigo-950 text-sm flex">
            <li className="ml-[320px] border-l-[2px] h-9 border-gray-900 pl-2">Trabajo</li>
            <li className="ml-[100px] border-l-[2px] h-9 border-gray-900 pl-2">Descripción</li>
            <li className="ml-[270px] border-l-[2px] h-9 border-gray-900 pl-2">Asignado</li>
            <li className="ml-[150px] border-l-[2px] h-9 border-gray-900 pl-2">Creado</li>
          </ul>
        </div>
        <div className='bg-white shadow-md rounded-md'>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default TaskList;