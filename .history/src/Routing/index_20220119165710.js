import Header from "components/Header";
import Favorites from "pages/favorites/Favorites";
import Home from "pages/home/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorite" component={Favorites} />
      </Routes>
    </>
  );
};

export default Routing;
