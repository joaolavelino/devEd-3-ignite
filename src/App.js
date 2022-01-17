import React, { useEffect } from "react";
//COMPONENTS AND PAGES
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import GameDetails from "./components/GameDetails";
//REDUX

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
