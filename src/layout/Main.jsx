/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../pages/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Banner from "../pages/Banner/Banner";

const Main = () => {
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Main;
