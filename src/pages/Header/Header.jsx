/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#001019]">
      <div className="navbar bg-transparent text-white lg:w-[1320px] mx-auto py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact font-bold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>

              <li>
                <ActiveLink to="/blog">Blog</ActiveLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <h4 className="cursor-pointer font-bold text-2xl">Chef's Den</h4>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-bold text-lg menu-horizontal px-1">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>

            <li>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn bg-gradient-to-r from-[#ffc919] to-yellow-500 text-black font-bold px-6 normal-case text-lg">
              Login
            </button>
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="assets/icons/profile-icon.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact font-semibold dropdown-content text-black bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li className="text-red-600">
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
