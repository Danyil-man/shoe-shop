import App from "App";
import Header from "components/Header";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from 

const Router = () => {
    return(
        <>
        <BrowserRouter>
        <Header />
        <Routes>
        <Route exact path='/' component={App}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Router;