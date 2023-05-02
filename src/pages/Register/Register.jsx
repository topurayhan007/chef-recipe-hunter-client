/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-10 pb-10">
      <div className="card flex-shrink-0 w-full max-w-sm mx-auto  shadow-2xl bg-base-100">
        <form className="card-body">
          <p className="text-3xl font-bold text-center">Sign Up</p>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="your name"
              className="input input-bordered border-[1.8px] border-black"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-semibold">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="photo"
              required
              placeholder="your photo url"
              className="input input-bordered border-[1.8px] border-black"
            />
          </div>
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
              <span className="label-text text-base font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="your password"
              className="input input-bordered border-[1.8px] border-black"
            />
          </div>
          <div className="form-control mt-4">
            <button className="btn hover:bg-amber-400 bg-[#ffc919] text-black font-bold px-6 normal-case text-lg border-0">
              Register
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

          <p className="mt-2 text-center">
            <span className="label-text text-base font-semibold">
              Already have an account?
              <Link
                to="/login"
                className="label-text-alt font-bold text-base link link-hover ps-2 text-[#ffbb3c]"
              >
                Login!
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
