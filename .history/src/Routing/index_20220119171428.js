import Header from "components/Header";
import Favorites from "pages/favorites/Favorites";
import Home from "pages/home/Home";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/f" component={Favorites} />
      </Switch>
    </>
  );
};

export default Routing;
