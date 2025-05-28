import React, { useState } from "react";
import Nav from "./Nav/Nav";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { slide as Menu } from "react-burger-menu";
//import Menu from react-burger-menu

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => setMenuOpen(state.isOpen);
  const closeMenu = () => setMenuOpen(false);

  const logout = async () => {
    try {
      const request = await axios({
        method: "post",
        url: "https://ringtomic.onrender.com/users/logout",
        withCredentials: true,
      });
      if (request.status === 200) {
        closeMenu();
        sessionStorage.clear();
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
        {/* Menú hamburguesa solo visible en móvil */}
        <Menu
          right
          isOpen={menuOpen}
          onStateChange={handleStateChange}
          className="header__burger"
        >
          <Nav onItemClick={closeMenu} />
          <button className="header__logout" onClick={logout}>
            Logout
          </button>
        </Menu>
        {/* Nav y logout solo visibles en escritorio */}
        <div className="header__center">
          <Nav />
        </div>
        <div className="header__logout-desktop">
          <button className="header__logout" onClick={logout}>
            Logout
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
