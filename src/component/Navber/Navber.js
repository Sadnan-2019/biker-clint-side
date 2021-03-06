import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Navber = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [admin] = useAdmin(user)
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken")

    navigate("/login");
  };
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      { admin ? <li>
        <Link to="/manage-orders">Manage All Orders</Link>
      </li> : ''}
      {admin ? 
        <li>
          <Link to="/add-tools">Add Tool</Link>
        </li> : ""
      }
      {admin ?  
        <li>
          <Link to="/manage-tools">Manage Tools</Link>
        </li> : ""
      }
      
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {user ? (
        <button className="btn  btn-primary" onClick={logout}>
          SignOut
        </button>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}

      <li>
        <Link to="/">{user ? user.email : ""}</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl" href="">
          <img
            className="w-20"
            alt=""
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/178218993/original/4a8fce7a4da367e67c1d7842e04fa817c881ebbf/design-amazing-motorcycle-or-bike-logo.jpg"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/portfolio" className="btn">My Portfolio</Link>
        <label
          tabindex="0"
          className="btn btn-ghost lg:hidden"
          for="dashboard-sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navber;
