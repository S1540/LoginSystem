import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/avatar.json";
import animationData2 from "../assets/Robot-Bot 3D.json";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <section className="bg-zinc-800 min-h-screen flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="relative max-w-4xl w-full h-[600px] bg-zinc-50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Login Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full p-12 flex flex-col justify-center transition-all duration-700 ease-in-out ${
            isSignUp
              ? "-translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <h2 className="text-2xl font-medium tracking-wider uppercase font-sans mb-2">
            Welcome Back, Please Login
          </h2>
          <span className="font-medium block mb-6 text-zinc-600">
            Your Data is Safe & Secure
          </span>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="outline-none border border-zinc-900 px-4 py-2 rounded-sm focus:border-pink-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="outline-none border border-zinc-900 px-4 py-2 rounded-sm focus:border-pink-500"
            />
            <button className="bg-linear-to-br from-pink-500 to-red-500 px-4 py-2 rounded-full hover:bg-cyan-600 transition-colors font-medium cursor-pointer">
              Login
            </button>
          </div>
          <div className="text-center text-sm  ">
            <span className="text-xs font-medium">Or</span>
          </div>
          <div className="flex justify-center flex-wrap text-xs ">
            <button
              onClick={() => setIsSignUp(true)}
              className=" px-4 py-2 rounded-full  transition-colors cursor-pointer"
            >
              Login with <span className="text-blue-500 font-medium">G</span>
              <span className="text-red-500 font-medium">o</span>
              <span className="text-amber-400 font-medium">o</span>
              <span className="text-blue-500 font-medium">g</span>
              <span className="text-green-500 font-medium">l</span>
              <span className="text-red-500 font-medium">e</span>
            </button>
            <button className="transition-colors cursor-pointer">
              Login with{" "}
              <span className="text-blue-500 font-medium">Facebook</span>
            </button>
          </div>
        </div>

        {/* Signup Form */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full p-12 flex flex-col justify-center transition-all duration-700 ease-in-out ${
            isSignUp
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <h2 className="text-2xl font-medium tracking-wider uppercase font-sans mb-2">
            Create Your Account
          </h2>
          <span className="font-medium block mb-6 text-zinc-600">
            Your Data is Safe & Secure
          </span>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="outline-none border border-zinc-900 px-4 py-2 rounded-sm focus:border-cyan-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="outline-none border border-zinc-900 px-4 py-2 rounded-sm focus:border-cyan-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="outline-none border border-zinc-900 px-4 py-2 rounded-sm focus:border-cyan-400"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="outline-none border border-zinc-900 px-4 py-2 rounded-sm focus:border-cyan-400"
            />
            <button className="bg-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-500 transition-colors font-medium cursor-pointer">
              Sign Up
            </button>
          </div>
          <div className="text-center text-sm  ">
            <span className="text-xs font-medium">Or</span>
          </div>
          <div className="flex justify-center flex-wrap text-xs ">
            <button
              onClick={() => setIsSignUp(true)}
              className=" px-4 py-2 rounded-full  transition-colors cursor-pointer"
            >
              Login with <span className="text-blue-500 font-medium">G</span>
              <span className="text-red-500 font-medium">o</span>
              <span className="text-amber-400 font-medium">o</span>
              <span className="text-blue-500 font-medium">g</span>
              <span className="text-green-500 font-medium">l</span>
              <span className="text-red-500 font-medium">e</span>
            </button>
            <button className="transition-colors cursor-pointer">
              Login with{" "}
              <span className="text-blue-500 font-medium">Facebook</span>
            </button>
          </div>
        </div>

        {/* Overlay Panel */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-700 ease-in-out ${
            isSignUp ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <div className="relative w-full h-full">
            {/* Login Overlay */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex flex-col items-center justify-center p-12 text-white transition-all duration-700 ${
                isSignUp
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              {" "}
              <Lottie animationData={animationData2} loop={true} />
              <h2 className="text-4xl font-bold mb-4">Hello, User !</h2>
              <p className="text-center mb-8">
                Already have an account? Login with your personal details
              </p>
              <button
                onClick={() => setIsSignUp(false)}
                className="px-12 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 cursor-pointer"
              >
                Login
              </button>
            </div>

            {/* Signup Overlay */}
            <div
              className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br from-pink-500 to-red-500 flex flex-col items-center justify-center p-12 text-white transition-all duration-700 ${
                isSignUp ? "-translate-x-full opacity-0" : ""
              }`}
            >
              <Lottie animationData={animationData} loop={true} />
              <h2 className="text-4xl font-bold mb-4">Hello, User !</h2>
              <p className="text-center mb-8">
                Enter your personal details and start your journey with us
              </p>
              <button
                onClick={() => setIsSignUp(true)}
                className="px-12 py-3 border-2 border-white rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
