import Favorites from "pages/favorites/Favorites";
import Home from "pages/home/Home";
import Profile from "pages/profile/Profile";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const PageRouting = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/favorite" component={Favorites} />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};
export default PageRouting;
