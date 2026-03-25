import React, { useState } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import StudentForm from './StudentForm.jsx';
import StudentPage from './StudentPage.jsx';
import SnacksPage from './SnacksPage.jsx';
import Studentspgditail from './Studentspgditail.jsx';

function Navbar() {
  const Items = useSelector((state) => state.student.items);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-300">
      <nav className="bg-white shadow-md sticky top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 text-xl font-bold text-blue-600">
              Student Food Store
            </div>

            <div className="hidden md:flex space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-500'
                }>
                Snacks Page
              </NavLink>

              <NavLink
                to="/StudentForm"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-500'
                }>
                Student Form
              </NavLink>

              <NavLink
                to="/Studentspgditail"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-500'
                }>
                Students Page
              </NavLink>

              <NavLink
                to="/StudentPage"
                className={({ isActive }) =>
                  isActive
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-500'
                }>
                Student Detail Page ({Items.length})
              </NavLink>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-600">
                {menuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 space-y-1 bg-white shadow-inner">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold border-b-2 border-blue-600 py-1'
                  : 'block text-gray-700 hover:text-blue-500 py-1'
              }>
              Snacks Page
            </NavLink>

            <NavLink
              to="/StudentForm"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold border-b-2 border-blue-600 py-1'
                  : 'block text-gray-700 hover:text-blue-500 py-1'
              }>
              Student Form
            </NavLink>

            <NavLink
              to="/Studentspgditail"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold border-b-2 border-blue-600 py-1'
                  : 'block text-gray-700 hover:text-blue-500 py-1'
              }>
              Students Page
            </NavLink>

            <NavLink
              to="/StudentPage"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'block text-blue-600 font-semibold border-b-2 border-blue-600 py-1'
                  : 'block text-gray-700 hover:text-blue-500 py-1'
              }>
              Student Detail Page ({Items.length})
            </NavLink>
          </div>
        )}
      </nav>

      <div className="p-4 sm:p-6">
        <Routes>
          <Route path="/" element={<SnacksPage />} />
          <Route path="/StudentForm" element={<StudentForm />} />
          <Route path="/Studentspgditail" element={<Studentspgditail />} />
          <Route path="/StudentPage" element={<StudentPage />} />
          <Route path="/SnacksPage" element={<SnacksPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Navbar;