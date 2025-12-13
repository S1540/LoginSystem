import React from "react";

const Register = () => {
  return (
    <>
      <section className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-md bg-yellow-400/50">
        <h1 className="text-2xl font-semibold text-center mb-6">Login Page</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded-lg focus:outline-none "
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="px-4 py-2 border rounded-lg focus:outline-none "
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="px-4 py-2 border rounded-lg focus:outline-none "
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Register
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
