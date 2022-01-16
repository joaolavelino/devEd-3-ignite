import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./redux/actions/gamesAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("use effect");
    dispatch(loadGames());
  });

  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
