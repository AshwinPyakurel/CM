import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MakeUnauthenticate } from "../actions/authActions";
import {FaBan} from "react-icons/fa";



const Navbar = () => {
  var dispatch = useDispatch()
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5 nav-title">
          Contact Manager
        </Link>
        {/* <ul className="navbar-nav">
          <li className="nav-item">
          <Link to={"/"} className="navbar-brand ml-5">
          React Redux Contact Book
        </Link>
          </li>
        </ul> */}
        <button className="btn btn-danger logout"
          onClick={()=>{dispatch(MakeUnauthenticate())}}
        ><FaBan/> Logout</button>
      </nav>
    </div>
  );
};

export default Navbar;