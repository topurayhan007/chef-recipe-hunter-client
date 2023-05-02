/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="card flex-shrink-0 w-full max-w-sm mx-auto mt-16 shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-base font-semibold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your email"
            className="input input-bordered border-[1.8px] border-black"
          />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-base font-semibold">Password</span>
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="your password"
            className="input input-bordered border-[1.8px] border-black"
          />
          <label className="label mt-2">
            <a
              href="#"
              className="label-text-alt font-semibold text-sm link link-hover"
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn hover:bg-amber-400 bg-[#ffc919] text-black font-bold px-6 normal-case text-lg border-0">
            Login
          </button>
        </div>

        <div className="flex items-center mt-2">
          <hr className="flex-1 border-gray-300 border-[1px]" />
          <div className="mx-4 label-text text-base font-medium">Or</div>
          <hr className="flex-1 border-gray-300 border-[1px]" />
        </div>

        <div className="form-control mt-1 ">
          <div className="flex justify-between gap-2">
            <button className="btn hover:bg-amber-300 bg-transparent border-[#ffc919] border-2 text-black font-bold px-8 normal-case text-base">
              <FaGithub className="me-2" /> Google
            </button>
            <button className="btn hover:bg-amber-300 bg-transparent border-[#ffc919] border-2 text-black font-bold px-8 normal-case text-base">
              <FaGoogle className="me-2" /> GitHub
            </button>
          </div>
        </div>

        <label className="label mt-2">
          <span className="label-text text-base font-semibold">
            Don't Have and account?
            <Link
              to="/register"
              className="label-text-alt font-bold text-base link link-hover ps-2 text-[#ffbb3c]"
            >
              Register Now!
            </Link>
          </span>
        </label>
      </form>
    </div>
  );
};

export default Login;
