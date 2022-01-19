import App from "App";
import Header from "components/Header";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" component={App} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
