import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exect element={<Login />} />
        <Route path="/dasboard" exect element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
