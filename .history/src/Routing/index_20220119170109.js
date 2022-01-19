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
        <Route path="/" component={Home} />
        <Route path="/favorite" element={Favorites} />
      </Routes>
    </>
  );
};

export default Routing;
