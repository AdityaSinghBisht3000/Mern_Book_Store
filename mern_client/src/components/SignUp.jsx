import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import glogo from "../assets/google-logo.svg";
const SignUp = () => {
  const { createUser, loginwithGoogle } = useContext(AuthContext);
  const [error, seterror] = useState("error");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("SignUp Successfully");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror("errorMessage");
        // ..
      });
    // console.log(email, password);
  };

  const handleRegister = () => {
    loginwithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror("errorMessage");
        // ..
      });
  };

  return (
    <div class="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-blue-300 to-blue-600 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">SignUp Form</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <form
                onSubmit={handleSignUp}
                class="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div class="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    class="w-full h-10 text-gray-900 border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div class="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    class="w-full h-10 text-gray-900 border-b-2 border-gray-300 peer focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>
                <p>
                  If you have an account . Please{" "}
                  <Link to="/login" className="text-blue-600 underline">
                    Login
                  </Link>{" "}
                  Here
                </p>
                <div class="relative ">
                  <button class="self-center px-2 py-1 text-white bg-blue-500 rounded-md">
                    Sign Up
                  </button>
                </div>
              </form>
              <hr />
              <div className="flex flex-col items-center w-full gap-3 mt-5 ">
                <button onClick={handleRegister} className="block">
                  <img src={glogo} alt="" className="inline w-12 h-12-block " />{" "}
                  Login With Google{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
