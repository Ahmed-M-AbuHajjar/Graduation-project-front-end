import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { CarDetail } from '../Car_Detail/CarDetail'
import { Signup } from "../Auth/Signup";
import { Login } from "../Auth/Login";

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />  
      <Route path='/cars/:id' element={<CarDetail/>} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path='/Home' element={<Home />} />
    </Routes>
  );
};
