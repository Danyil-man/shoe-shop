import Drawer from "components/Drawer";
import Header from "components/Header";
import Favorites from "pages/favorites/Favorites";
import Home from "pages/home/Home";
import Profile from "pages/profile/Profile";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const PageRouting = () => {
  return (
    <BrowserRouter basename="/shoe-shop">
      <Drawer />
      <Header />
      <Switch>
        <Route exact path="/shoe-shop" component={Home} />
        <Route exact path="/favorite" component={Favorites} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};
export default PageRouting;
