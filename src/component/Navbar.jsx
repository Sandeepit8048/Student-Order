import React from 'react'
import { Route, Routes } from 'react-router'
import StudentForm from './StudentForm.jsx'
import StudentPage from './StudentPage.jsx'
import SnacksPage from './SnacksPage.jsx'
import { Link } from 'react-router'
function Navbar() {
  return (
    <> 
     <nav>
      <Link to="/">Snacks-Page</Link> | 
      <Link to="/StudentForm">Form</Link> | 
      <Link to="/StudentPage">Student-Page</Link>
    </nav>



<Routes>
 <Route path='StudentForm' element={<StudentForm/>} /> 
<Route path='StudentPage' element={<StudentPage/>} />
 <Route path='/' element={<SnacksPage/>} /> 
</Routes>
   
    </>
  )
}

export default Navbar