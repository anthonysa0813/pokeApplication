import React from "react";
import { Link } from "react-router-dom";

const MenuLeftActive = () => {
  return (
    <div className="menu-left ">
      <Link to="/">Home</Link>
      <Link to="/dashboard/my-favorites">my Favorites</Link>
      <a
        href="https://www.linkedin.com/in/anthony-stewardt-sanchez-yupanqui-62751b1b5/"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default MenuLeftActive;
