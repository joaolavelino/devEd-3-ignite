import React, { useState, useEffect } from "react";
import GameDetails from "../components/GameDetails";
//Add Redux logic
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/actions/gamesAction";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Game from "../components/Game";
import { useLocation } from "react-router-dom";

const Home = () => {
  //FETCH GAMES - send data TO the store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get the data FROM the store (with use Selector)
  //declaring with the brackets, each array from the state will be extracted to a specific variable
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  //GET CURRENT LOCATION
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  if (!pathId) {
    document.body.style.overflow = "auto";
  }

  return (
    <GameList>
      {pathId && <GameDetails />}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
