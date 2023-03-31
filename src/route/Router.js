import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WebLayout from "../pages/layouts/WebLayout";
import SignupPage from "../pages/SigupPage";
import LoginPage from "../pages/LoginPage";

function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<WebLayout />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Router;
