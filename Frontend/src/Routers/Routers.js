import React from 'react';
import{ Routes, Route,Navigate } from 'react-router-dom';
import Home from '../Pages/Home';
import Nav from '../Components/UI/Nav';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Calendar from '../Components/UI/Calender';
import Tracking from '../Pages/Tracking';
import DockBooking from '../Pages/Dockbooking';
const Routers = () => {
  return (
    <Routes>
    <Route path='/' element = {<Navigate to='/home' />} />
    <Route path='/home' element={<Home />} />
    <Route path='/nav' element={<Nav />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/calendar' element={<Calendar />} />
    <Route path='/tracking' element={<Tracking />} />
    <Route path='/dockbooking' element={<DockBooking />} />
   </Routes>
  )
 
    
  
}

export default Routers
