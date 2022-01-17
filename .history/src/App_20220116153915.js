import React from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Content from "./components/Content";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div>
      <div className="wrapper">
        {/* <Drawer /> */}
        <Header />
        <div className="content">
          <Content />
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
