import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../ContextComponent/AuthContextComponent";

const Nav = () => {
  const { user, logOut } = useContext(UserContext);
  const [success,setSuccess]=useState();
  const [error,setError]=useState();
  if(success){
    <Link to='/'></Link>
  }
  const handleLogout = () => {
    logOut()
    .then((result) => {
      setSuccess(result);
      console.log(result);
    })
    .catch((error) => {
      setError(error.message);
    });
    console.log('logged out ');
  }
  console.log(user);
  const LItem = (
    <div className="space-x-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/allTouristsSpot">All Tourists Spot</NavLink>
      <NavLink to="/addTouristsSpot">Add Tourists Spot</NavLink>
      <NavLink to="/myList">My List</NavLink>
    </div>
  );
  return (
    <div>
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <NavLink to="/">Home</NavLink>{" "}
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{LItem}</ul>
        </div>
        <div className="navbar-end space-x-4">
          {user ? (
            <div className="dropdown dropdown-hover">
              <div tabIndex={10}>
                <div className="avatar">
                  <div className="w-12">
                    <img
                      className="rounded-full"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Name</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="space-x-4">
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
