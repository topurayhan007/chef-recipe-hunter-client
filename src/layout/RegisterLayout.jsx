import React from "react";
import Header from "../pages/Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterLayout = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default RegisterLayout;
