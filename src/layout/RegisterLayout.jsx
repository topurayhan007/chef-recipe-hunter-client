import React from "react";
import Header from "../pages/Header/Header";
import { Outlet } from "react-router-dom";

const RegisterLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default RegisterLayout;
