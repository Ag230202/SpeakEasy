import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Doctors from '../pages/Doctors/Doctors.jsx'
import DoctorDetails from '../pages/Doctors/DoctorDetails.jsx'
import MyAccount from '../Dashboard/user-account/MyAccount.jsx'
import Dashboard from '../Dashboard/doctor-account/Dashboard.jsx'
import CheckoutSuccess from '../pages/Doctors/CheckoutSuccess.jsx'
import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx';
import Todo from '../pages/Todo.jsx';
import Communication from '../components/communication.jsx'

const Routers = () => {
  return <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/doctors" element={<Doctors/>} />
      <Route path="/doctors/:id" element={<DoctorDetails/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/checkout-success" element={<CheckoutSuccess/>} />
      <Route path="/todo" element={<Todo/>} />
      <Route path="/communication" element={<Communication/>} />

      <Route path="/users/profile/me" element={
        <ProtectedRoute allowedRoles={['patient']}>
          <MyAccount/>
          </ProtectedRoute>} />
      <Route path="/doctors/profile/me" element={
        <ProtectedRoute allowedRoles={['doctor']}>
          <Dashboard/>
        </ProtectedRoute>
        
        } />
   
    
    </Routes>
  
};

export default Routers;