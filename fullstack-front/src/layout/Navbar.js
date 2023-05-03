import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.nav}>
      <Link to="/" className={style.link}>
        Fullstack Application
      </Link>

      <Link to="/adduser" className={style.link}>
        Add User
      </Link>
    </div>
  );
}

export default Navbar;
