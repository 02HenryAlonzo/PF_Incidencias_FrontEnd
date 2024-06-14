import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { GrUserWorker } from "react-icons/gr";

const TaskRow = ({ task }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'En progreso':
        return 'text-yellow-500';
      case 'Pendiente':
        return 'text-blue-500';
      case 'Completado':
        return 'text-green-500';
      case 'Error':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="border-b border-gray-200 py-5">
      <ul className='flex justify-around items-center'>
        <li className="text-2xl">
            <FaCircle className={getStatusColor(task.estado)} />
        </li>
        <li className="">{task.estado}</li>
        <li className="">{task.trabajo}</li>
        <li className="">{task.descripcion}</li>
        <li className="flex justify-center items-center"><GrUserWorker className='mr-2 text-xl text-indigo-800' />{task.asignado}</li>
        <li className="">{task.creado}</li>
      </ul>
    </div>
  );
};

export default TaskRow;