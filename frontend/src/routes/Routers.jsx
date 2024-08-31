import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Todo from '../pages/Todo.jsx'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Doctors from '../pages/Doctors/Doctor.jsx'
import DoctorDetails from '../pages/Doctors/DoctorDetails.jsx'
import MyAccount from '../Dashboard/user-account/MyAccount.jsx'
import Dashboard from '../Dashboard/doctor-account/Dashboard.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import CheckoutSuccess from '../pages/CheckoutSuccess.jsx'


import {Routes,Route} from 'react-router-dom'

const Routers = () => {
  return <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/checkout-success" element={<CheckoutSuccess/>} />
      <Route path="/doctors" element={<Doctors/>} />
      <Route path="/doctors/:id" element={<DoctorDetails/>} />
      <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount /></ProtectedRoute>} />
      <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={["doctor"]}>
        <Dashboard />
        </ProtectedRoute>
      } 
      />
    
    </Routes>
  
};

export default Routers;