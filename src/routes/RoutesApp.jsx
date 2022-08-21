import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import LandingPage from "../views/LandingPage";

const RoutesApp = () => {
  return (
    <Routes>
      {/* landing Page */}
      <Route path="/" element={<LandingPage />} />
      {/* dashboar  */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesApp;
