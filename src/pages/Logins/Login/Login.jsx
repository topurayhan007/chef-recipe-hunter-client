/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if (password.length < 6) {
      toast("Password should be at least 6 characters", {
        position: "top-center",
        type: "error",
      });
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast("Logged in successfully!", {
          position: "top-center",
          type: "success",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast(error.message, {
          position: "top-center",
          type: "error",
        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-sm mx-auto mt-16 shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleLogin}>
          <p className="text-3xl font-bold text-center">Login</p>
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
            <button
              type="submit"
              className="btn hover:bg-amber-400 bg-[#ffc919] text-black font-bold px-6 normal-case text-lg border-0"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center mt-2">
          <hr className="flex-1 border-gray-300 border-[1px]" />
          <div className="mx-4 label-text text-base font-medium">Or</div>
          <hr className="flex-1 border-gray-300 border-[1px]" />
        </div>

        <div className="form-control mt-1 ">
          <div className="flex justify-between gap-2">
            <button
              onClick={handleGoogleSignIn}
              className="btn hover:bg-amber-300 bg-transparent border-[#ffc919] border-2 text-black font-bold px-8 normal-case text-base"
            >
              <FaGoogle className="me-2" /> Google
            </button>
            <button
              onClick={handleGithubSignIn}
              className="btn hover:bg-amber-300 bg-transparent border-[#ffc919] border-2 text-black font-bold px-8 normal-case text-base"
            >
              <FaGithub className="me-2" /> GitHub
            </button>
          </div>
        </div>

        <p className="mt-2 text-center">
          <span className="label-text text-base font-semibold">
            Don't Have and account?
            <Link
              to="/register"
              className="label-text-alt font-bold text-base link link-hover ps-2 text-[#ffbb3c]"
            >
              Register Now!
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
