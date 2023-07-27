import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;
