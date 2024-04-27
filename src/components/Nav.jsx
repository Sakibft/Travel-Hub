import { useContext, useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { UserContext } from "../ContextComponent/AuthContextComponent";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
 import sdlk from "../../src/assets/dlk.avif"
const Nav = () => {
  const { user, logOut } = useContext(UserContext);
  // console.log(user?.email);
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  if (success) {
    // toast.success('Logout successfully');
    <Link to="/"></Link>;
  }

  const handleLogout = () => {
    console.log(user);
    logOut()
      .then((result) => {
        // setSuccess(result);
        // console.log(result);
        if (result) {
          <Navigate to="/"></Navigate>;
        }
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log("logged out ");
  };
  // console.log(user);
  const LItem = (
    <div className="space-x-6">
 
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "lg:px-2 py-1 border-2 text-pink-400 border-pink-400 rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allTouristsSpot"
        className={({ isActive }) =>
        isActive
          ? "lg:px-2 py-1 border-2 text-pink-400 border-pink-400 rounded-md p-3  font-semibold text-2xl  "
          : "font-semibold text-2xl  "
      }
      >
        All Tourists Spot
      </NavLink>
      <NavLink
        to="/addTouristsSpot"
        className={({ isActive }) =>
          isActive
            ? "lg:px-2 py-1 border-2 text-pink-400 border-pink-400 rounded-md p-3  font-semibold text-2xl  "
            : "font-semibold text-2xl  "
        }
      >
        Add Tourists Spot
      </NavLink>
      <NavLink
        to="/myList"
        className={({ isActive }) =>
        isActive
          ? "lg:px-2 py-1 border-2 text-pink-400 border-pink-400 rounded-md p-3  font-semibold text-2xl  "
          : "font-semibold text-2xl  "
      }
      >
        My List
      </NavLink>
    </div>
  );
  return (
    <div className="container mx-auto">
        
      <div>
        <Toaster />
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[10]  shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <NavLink to="/">Home</NavLink> 
              </li>
              <li>
                <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
              </li>
              <li>
                <NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink>
              </li>
              <li>
                <NavLink to="/myList">My List</NavLink>
              </li>
            </ul>
          </div>
          <img src={sdlk} className="w-16" alt="" />
          <a className="  text-2xl font-bold ">Tour   
          <span className="text-pink-400"> Hub </span>
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{LItem}</ul>
        </div>
        <div className="navbar-end space-x-4">
          {user ? (
            <div className="dropdown dropdown-hover ">
              <div tabIndex={10}>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      className="rounded-full border-2 border-pink-400"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52 ml=40"
              >
                <li className="border border-pink-400 rounded-md bg-white text-black  hover:bg-pink-400 hover:text-white">
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <button className="border hover:bg-pink-400 w-20 hover:text-white text-black border-pink-400 " onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-x-4">
              <NavLink to="/register" className="btn bg-pink-400 text-white">Register</NavLink>
              <NavLink to="/login"  className="btn bg-pink-400 text-white">Login</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
