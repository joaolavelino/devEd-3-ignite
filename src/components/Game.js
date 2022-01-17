import React from "react";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useDispatch } from "react-redux";
import { loadDetails } from "../redux/actions/detailsAction";
import { useSelector } from "react-redux";

const Game = ({ game }) => {
  //FETCH DATA
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    dispatch(loadDetails(game.id));
  };

  return (
    <GameCard onClick={loadDetailsHandler}>
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
