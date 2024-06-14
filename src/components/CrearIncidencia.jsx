import React, { useState } from 'react';
import { createIncidence } from '../services/api';
import { toast } from 'react-toastify';
import { FaPlus } from 'react-icons/fa';
import '../styles/backgroundPages.css'

const CrearIncidencia = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'El título es requerido.';
    if (!description) newErrors.description = 'La descripción es requerida.';
    if (!location) newErrors.location = 'La ubicación es requerida.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('location', location);
    if (image) formData.append('image', image);

    try {
      await createIncidence(formData);
      toast.success('Incidencia creada exitosamente');
      setTitle('');
      setDescription('');
      setLocation('');
      setImage(null);
      setErrors({});
    } catch (error) {
      toast.error('Error al crear la incidencia');
      console.error(error);
    }
  };

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
        <h2 className="text-2xl font-bold mb-6 text-indigo-600">Crear Incidencia</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full p-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`w-full p-2 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600`}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold">Ubicación</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`w-full p-2 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600`}
            />
            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold">Imagen</label>
            <label className="subir">
              <i className="fas fa-cloud-upload-alt"></i> Subir imagen
              <input
                type="file"
                onChange={handleFileChange}
              />
            </label>
            {image && (
              <p>Archivo seleccionado: {image.name}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors w-full flex items-center justify-center"
          >
            <FaPlus className="mr-2" />
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default CrearIncidencia;
