import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-black/90 py-6 px-6 text-white flex flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Login System</h1>
        </div>
        <nav>
          <ul className="flex flex-row gap-3">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <Link to={"/login"}>
          <a
            href=""
            className="py-2 px-10 bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer transition-all duration-300 ease-in-out"
          >
            Login
          </a>
        </Link>
      </header>
    </>
  );
};

export default Header;
