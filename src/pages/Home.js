import React, { useState, useEffect } from "react";
//Add Redux logic
import { useDispatch } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("use effect");
    dispatch(loadGames());
  });

  return <h1>Home</h1>;
};

export default Home;
