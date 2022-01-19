import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import App from "./App";
import { BrowserRouter, Routes } from "react-router-dom";
import Routing from "Routing";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
