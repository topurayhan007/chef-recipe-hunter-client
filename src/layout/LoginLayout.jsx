import React from "react";
import Header from "../pages/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";

const LoginLayout = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
