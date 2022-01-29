import React from "react";
import ReactDOM from "react-dom";
import "./index.module.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import PageRouting from "routing/Routing";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
