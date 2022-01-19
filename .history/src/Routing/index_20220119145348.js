import App from "App";
import Header from "components/Header";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from 

const Routing = () => {
    return(
        <>
        <Router>
        <Header />
        <Switch>
            <Route exact path='/' component={App}/>
        </Switch>
        </Router>
        </>
    )
}

export default Routing;