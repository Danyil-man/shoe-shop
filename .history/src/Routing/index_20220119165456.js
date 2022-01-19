import Header from "components/Header";
import Home from "pages/home/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </>
  );
};

export default Routing;
