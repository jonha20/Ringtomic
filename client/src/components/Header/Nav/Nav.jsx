import React from "react";
import { Link } from "react-router-dom";

const Nav = ({onItemClick}) => {
  return <>
    <nav className="nav">
      <ul>
        <li>
          <Link onClick={onItemClick} to="/">Home</Link>
        </li>
        <li>
          <Link onClick={onItemClick} to="/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  </>;
};

export default Nav;
