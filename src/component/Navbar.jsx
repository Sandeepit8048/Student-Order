import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; 
import StudentForm from './StudentForm.jsx';
import StudentPage from './StudentPage.jsx';
import SnacksPage from './SnacksPage.jsx';
import { useSelector } from 'react-redux';

function Navbar() {
    const Items = useSelector((state) => state.student.items);
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 flex justify-center space-x-6 sticky top-0 z-50">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
              : 'text-gray-700 hover:text-blue-500'}>
          Snacks Page
        </NavLink>

        <NavLink
          to="/StudentForm"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
              : 'text-gray-700 hover:text-blue-500'}>
          Student Form
        </NavLink>

        <NavLink
          to="/StudentPage"
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600': 'text-gray-700 hover:text-blue-500'}>
          Student Detail Page:({Items.length})
        </NavLink>
      </nav>

  
      <div className="p-6">
        <Routes>
          <Route path="/" element={<SnacksPage />} />
          <Route path="/StudentForm" element={<StudentForm />} />
          <Route path="/StudentPage" element={<StudentPage />} />
          <Route path="/SnacksPage" element={<SnacksPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Navbar;