import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Incidences from '../components/Incidences';
import CrearIncidencia from '../components/CrearIncidencia';
import DetallesIncidencia from '../components/DetallesIncidencia';
import MisIncidencias from '../components/MyIncidences';
import Sent from '../components/Sent';
import Welcome from '../components/Welcome';
import UserProfile from '../components/UserProfile';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1  overflow-y-auto">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="incidences" element={<Incidences />} />
          <Route path="my-incidences" element={<MisIncidencias />} />
          <Route path="create-incidence" element={<CrearIncidencia />} />
          <Route path="incidences/:id" element={<DetallesIncidencia />} />
          <Route path="sent" element={<Sent />} />
          <Route path="profile" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
