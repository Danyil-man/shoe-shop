import App from "App";
import Header from "components/Header";
import React from "react";
import { Route } from "react-router-dom";
import Home from 

const Router = () => {
    return(
        <div>
        <Header />
        <Route exact path='/' component={App}/>
        </div>
    )
}

export default Router;