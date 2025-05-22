import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
//import Menu from react-burger-menu

const Header = () => {
  return (
    <>
      <header className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <div className="header__right">
        <Nav />
        <Link to="/logout">
          <button>Logout</button>
        </Link>
      </div>
    </header>
    </>
  );
};

export default Header;
