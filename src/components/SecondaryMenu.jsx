import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SecondaryMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="circleIcon " onClick={() => navigate(-1)}>
      <div className="boxIcon ">
        <AiOutlineArrowLeft />
      </div>
    </div>
  );
};

export default SecondaryMenu;
