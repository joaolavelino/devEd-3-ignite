import React from "react";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ game }) => {
  return (
    <GameCard>
      <h3>{game.name}</h3>
      <p>{game.released} </p>
      <img src={game.background_image} alt={`${game.name} feature image`} />
    </GameCard>
  );
};

const GameCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 30vh;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.2);
  border-radius: 0.7rem;
  text-align: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
