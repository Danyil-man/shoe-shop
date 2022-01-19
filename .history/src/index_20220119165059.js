import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import App from "./App";
import { BrowserRouter, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <App />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
