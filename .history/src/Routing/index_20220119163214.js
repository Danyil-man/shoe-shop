import Header from "components/Header";
import MainHome from "pages/home";
import Home from "pages/home/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/h" component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
