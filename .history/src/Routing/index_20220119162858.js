import Header from "components/Header";
import MainHome from "pages/home";
import Home from "pages/home/Home";
import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routing;
