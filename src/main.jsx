import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./auth/AuthProvider";
import "./index.css";
import Login from "./pages/login/Login";

ReactDOM.createRoot(document.getElementById("root")).root(
  <>
    <Login />
  </>
);
