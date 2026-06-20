import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Login from './pages/Login.jsx';
import Layout from './Components/Layout.jsx';

import Studentlist from './pages/Studentlist.jsx';
import Studentform from './pages/Studentform.jsx';

import Subjectlist from './pages/Subjectlist.jsx';
import Subjectform from './pages/Subjectform.jsx';

const App = () => {
  return (
    <Routes>

      {/* Login Route */}
      <Route path="/login" element={<Login />} />

      {/* Main Layout */}
      <Route path="/" element={<Layout />}>

        {/* Redirect / to /students */}
        <Route index element={<Navigate to="/login" replace />} />

        {/* Student Routes */}
        <Route path="student" element={<Studentlist />} />
        <Route path="students" element={<Studentlist />} />
        <Route path="students/add" element={<Studentform />} />
        <Route path="students/edit/:id" element={<Studentform />} />

        {/* Subject Routes */}
        <Route path="subject" element={<Subjectlist />} />
        <Route path="subjects" element={<Subjectlist />} />
        <Route path="subjects/add" element={<Subjectform />} />
        <Route path="subjects/edit/:id" element={<Subjectform />} />

      </Route>

      {/* If route not found, redirect to / */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
};

export default App;