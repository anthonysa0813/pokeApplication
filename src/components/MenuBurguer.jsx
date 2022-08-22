import React, { useContext, useState } from "react";
import { ModalMenuContext } from "../context/ModalMenu";

const MenuBurguer = () => {
  const [open, setOpen] = useState(false);
  const { showModal, setShowModal } = useContext(ModalMenuContext); //false

  const openFunc = () => {
    setOpen(!open);
    setShowModal(!showModal);
  };

  return (
    <button
      className={`btn debug ${open ? "open" : ""}`}
      id="hamburguerContainer"
      onClick={() => openFunc()}
    >
      <span className="top-line"></span>
      <span className="middle-line"></span>
      <span className="bottom-line"></span>
    </button>
  );
};

export default MenuBurguer;
