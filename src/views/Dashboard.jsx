import React from "react";
import Header from "../components/Header";
import ListPokemons from "../components/ListPokemons";
import ListCovidCountries from "../components/ListPokemons";
import Sidebar from "../components/Sidebar";

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
