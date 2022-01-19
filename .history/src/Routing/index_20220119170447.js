import Header from "components/Header";
import Favorites from "pages/favorites/Favorites";
import Home from "pages/home/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/f" element={Favorites} />
      </Routes>
    </>
  );
};

export default Routing;
