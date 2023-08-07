import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Profile from "../Profile/Profile";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">cart</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};
export default Navbar;
