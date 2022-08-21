import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="headerContainer ">
      <div className="wrapper">
        <div className="headerGrid">
          <div className="logoContainer ">
            <img src={logo} alt="Logo de Pokemon App" />
          </div>
          <nav className="menu ">
            <ul>
              <li>Home</li>
              <li>Dark mode</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
