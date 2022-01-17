import React from "react";
import Overlay from "./components/Overlay";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Overlay />
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
