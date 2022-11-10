import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../pages/login/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="*"
          element={
            <ProtectedRoutes preventUrl="/login">
              <Layout />
            </ProtectedRoutes>
          }
        /> */}

        <Route
          exact
          path="/login"
          element={
            <PublicRoute preventUrl="/">
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
