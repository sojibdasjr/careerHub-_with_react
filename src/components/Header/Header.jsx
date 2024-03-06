import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/applied">Applied Job</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/Statistics">Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-green-100">
      <div className="navbar max-w-7xl mx-auto py-2 ">
        <div className="md:navbar-start flex justify-between gap-20">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost   lg:hidden"
            >
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>

          <div>
            <Link to="/">
              {" "}
              <span>
                <span className="bg-green-400 p-2 text-white rounded-s">
                  career
                </span>
                <span className="bg-black p-2 text-white rounded-e">hub</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-black">{Links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
