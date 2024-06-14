import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getIncidenceDetails } from '../services/api';
import { FaMapMarkerAlt, FaComments, FaUserCircle, FaArrowLeft, FaClock, FaPaperPlane } from 'react-icons/fa';
import '../styles/backgroundPages.css'

const DetallesIncidencia = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [incidence, setIncidence] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const comments = [
    { id: 1, content: "Comentario de prueba 1", user: "yo" },
    { id: 2, content: "Comentario de prueba 2", user: "admin" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIncidenceDetails(id);
        setIncidence(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setNewComment('');
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const statusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-400 text-white';
      case 'in_progress':
        return 'bg-blue-500 text-white';
      case 'resolved':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-200 text-white';
    }
  };

  if (loading) {
    return <div className="text-center">Cargando...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
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
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
        
        <div className={`px-6 py-4 ${statusColor(incidence.status)} text-white flex gap-10 items-center`}>
            <button onClick={() => navigate(-1)} className="flex items-center">
              <FaArrowLeft className="mr-2" />
              <span>Volver</span>
            </button>
            <h2 className="text-2xl font-bold">Detalles de la Incidencia</h2>
        </div>

        <div className="p-6 flex">
          {incidence.image_url && (
            <div className="w-1/3 mr-8">
              <label className="block text-gray-500 font-bold mb-2">Imagen:</label>
              <img src={`http://localhost:3000/${incidence.image_url}`} alt="Imagen de la incidencia" className="w-full h-auto rounded-md shadow-md" />
              <div className="mt-4">
                <div className=" text-gray-500 mb-2 flex items-center">
                  <FaClock className="mr-1 text-xl" />
                  <span className='font-medium mr-2'>Fecha de Reporte:</span>01 Mayo
                </div>
              </div>
              <div className="">
                <div className="text-gray-500 mb-2 flex items-center">
                  <FaUserCircle className="mr-1 text-xl" />
                  <span className='font-medium mr-2'>Reportado por:</span> Jhampier
                </div>
                <p className="text-gray-600">{incidence.reportedBy}</p>
              </div>
            </div>
          )}
          <div className="w-2/3">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-600">
                  {incidence.title}
                </h2>
              </div>
              <div className={`px-3 py-2 rounded-full text-sm font-semibold ${statusColor(incidence.status)}`}>
                {incidence.status}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-500 font-bold mb-1">Descripción:</label>
              <p className="text-gray-600">{incidence.description}</p>
            </div>
            <div className="mb-4">
              <label className="text-gray-500 font-bold mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                Ubicación:
              </label>
              <p className="text-gray-600">{incidence.location}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <button onClick={toggleComments} className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center">
            <FaComments className="mr-1 text-gray-500 text-2xl" />
            <span className="font-bold text-gray-500">Comentarios</span>
          </button>
          {showComments && (
            <div className="p-6">
              <ul className="space-y-4 mb-4">
                {comments.map((comment) => (
                  <li key={comment.id} className="bg-gray-50 py-2 px-6 rounded-md shadow-sm">
                    <div className="flex items-center">
                      <FaUserCircle className="mr-1 text-gray-600" />
                      <span className="text-gray-700 font-bold">{comment.user}</span>
                    </div>
                    <p className="text-gray-800">{comment.content}</p>
                  </li>
                ))}
              </ul>
              <form onSubmit={handleCommentSubmit} className='flex gap-2'>
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full h-12 pl-4 pt-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Escribe un comentario..."
                  required
                >
                </textarea>
                <button type="submit" className="bg-indigo-600 text-white p-4 rounded-md hover:bg-indigo-700 transition-colors ">
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetallesIncidencia;
