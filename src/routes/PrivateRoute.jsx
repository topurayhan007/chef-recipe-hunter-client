/* eslint-disable react/prop-types */
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  console.log("User in private route", user);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="radial-progress text-warning animate-spin"
          style={{ "--value": 70 }}
        ></div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
