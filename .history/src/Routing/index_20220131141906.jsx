import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const PageRouting = () => {
  return (
    <BrowserRouter basename="/shoe-shop">
      <Drawer />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorite" component={Favorites} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};
export default PageRouting;
