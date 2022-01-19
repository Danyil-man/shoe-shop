import App from "App";
import Header from "components/Header";
import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from 

const Routing = () => {
    return(
        <>
        <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path='/' component={App}/>
        </Switch>
        </BrowserRouter>
        </>
    )
}

export default Routing;