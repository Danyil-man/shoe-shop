import App from "App";
import Cards from "components/Cards";
import Header from "components/Header";
import React from "react";

import Home from 

const Routing = () => {
    return(
        <>
        <Header />
        <Switch>
            <Route exact path='/' component={App}/>
        </Switch>
        </>
    )
}

export default Routing;