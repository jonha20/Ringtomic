import React from "react";
import Nav from "./Nav/Nav";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import Menu from react-burger-menu

const Header = () => {
    const navigate = useNavigate();
   const logout = async () => {
    try {
      const request = await axios({
        method: "post",
        url: "http://localhost:3000/users/logout",
        withCredentials: true, 
      });
      if (request.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
<header className="header">
  <div className="header__logo">
    <img src={Logo} alt="Logo" />
  </div>
  <div className="header__center">
    <Nav />
  </div>
  <div className="header__logout-container">
    <button className="header__logout" onClick={logout}>Logout</button>
  </div>
</header>
    </>
  );
};

export default Header;
