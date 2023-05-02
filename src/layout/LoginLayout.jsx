import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginLayout = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default LoginLayout;
