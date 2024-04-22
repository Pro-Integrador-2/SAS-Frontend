import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import MedicAuth from "../pages/MedicAuth";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Register />} />
        <Route path="register" element={<Register />} />
        <Route path="medic-auth" element={<MedicAuth />} />
      </Route>
    </Routes>
  );
};

export default ProjectRoutes;
