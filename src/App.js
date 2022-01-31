import React from "react";
//COMPONENTS AND PAGES
import Home from "./pages/Home";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
