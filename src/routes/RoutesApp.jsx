import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import LandingPage from "../views/LandingPage";
import PokemonByName from "../views/PokemonByName";

const RoutesApp = () => {
  return (
    <Routes>
      {/* landing Page */}
      <Route path="/" element={<LandingPage />} />
      {/* dashboar  */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/pokemon/:name" element={<PokemonByName />} />
    </Routes>
  );
};

export default RoutesApp;
