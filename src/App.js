import React, { useEffect } from "react";
//COMPONENTS AND PAGES
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import GameDetails from "./components/GameDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
