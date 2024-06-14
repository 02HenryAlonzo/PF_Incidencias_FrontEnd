import React, { useEffect, useState } from "react";
import { getIncidences } from "../services/api";
import { Link } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import pendingImage from "/pending.jpg";
import inProgressImage from "/in_progress.jpg";
import resolvedImage from "/resolved.jpg";

const statusImages = {
  pending: pendingImage,
  in_progress: inProgressImage,
  resolved: resolvedImage,
};

const statusColors = {
  pending: "bg-yellow-500",
  in_progress: "bg-blue-500",
  resolved: "bg-green-500",
};

const MisIncidencias = () => {
  const [incidences, setIncidences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIncidences();
        setIncidences(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaBriefcase className="animate-spin text-gray-600 text-4xl" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-indigo-600 relative top-10 pl-20 ">Mis Incidencias</h2>
      <div className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {incidences.map((incidence) => (
          <div
            key={incidence.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={statusImages[incidence.status]}
                alt={`${incidence.status} status`}
                className="w-50 h-48 object-cover mx-auto rounded-t-lg"
              />
              <div
                className={`absolute top-0 right-0 m-4 px-2 py-1 text-white font-semibold rounded-md uppercase tracking-wider text-xs ${
                  statusColors[incidence.status]
                }`}
              >
                {incidence.status.replace("_", " ")}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800 capitalize">
                {incidence.title}
              </h3>
              <Link
                to={`/dashboard/incidences/${incidence.id}`}
                className={`block text-center py-2 rounded-md text-white font-semibold ${
                  statusColors[incidence.status]
                }`}
              >
                Más detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MisIncidencias;
