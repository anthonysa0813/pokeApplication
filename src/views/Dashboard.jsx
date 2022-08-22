import React, { useState } from "react";
import Header from "../components/Header";
import ListPokemons from "../components/ListPokemons";
import Sidebar from "../components/Sidebar";
import { ModalMenuContext } from "../context/ModalMenu";

const Dashboard = () => {
  return (
    <div className="mainGrid">
      <Header />
      <Sidebar />
      <ListPokemons />
    </div>
  );
};

export default Dashboard;
