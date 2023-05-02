/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-transparent bg-clip-text bg-gradient-to-r from-[#f6D365] to-yellow-500 font-extrabold"
          : "text-white"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
