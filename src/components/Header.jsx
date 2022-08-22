import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { ModalMenuContext } from "../context/ModalMenu";
import MenuBurguer from "./MenuBurguer";
import MenuLeftActive from "./MenuLeftActive";

const Header = () => {
  const { showModal } = useContext(ModalMenuContext);
  return (
    <header className={`headerContainer`}>
      <div className="wrapper">
        <div className="headerGrid">
          <Link to="/dashboard" className="logoContainer ">
            <img src={logo} alt="Logo de Pokemon App" />
          </Link>
          <nav className="menu ">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/dashboard/my-favorites">My Favorites</Link>
              {/* <li onClick={() => setDarkModeState((state) => !state)}>
                Dark mode
              </li> */}
            </ul>
          </nav>
          <MenuBurguer />
        </div>
        {showModal ? <MenuLeftActive /> : null}
      </div>
    </header>
  );
};

export default Header;
