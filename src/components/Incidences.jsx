import React from 'react';
import TaskList from './TaskList';

const tasks = [
  {
    id: 1,
    estado: 'En progreso',
    trabajo: 'Plomeria',
    descripcion: 'fuga de agua en el lavado principal.....',
    asignado: 'Rafael Amargo',
    creado: '17/06/2015 19:50',
  },
  {
    id: 2,
    estado: 'Completado',
    trabajo: 'Herreria',
    descripcion: 'Reparaciones metalicas en distintos.....',
    asignado: 'Rafael Amargo',
    creado: '17/06/2015 19:50',
  },
  {
    id: 3,
    estado: 'Pendiente',
    trabajo: 'Jardineria',
    descripcion: 'Mantenimiento de los jardines d.....',
    asignado: 'Rafael Amargo',
    creado: '17/06/2015 19:50',
  },
];

const Incidencias = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Incidencias;
