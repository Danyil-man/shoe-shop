import Header from "components/Header";
import MainHome from "pages/home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={MainHome} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
