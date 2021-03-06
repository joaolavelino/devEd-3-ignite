import React from "react";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useDispatch } from "react-redux";
import { loadDetails } from "../redux/actions/detailsAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ game, index }) => {
  //FETCH DATA
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(game.id));
  };

  return (
    <GameCard
      index={index}
      onClick={loadDetailsHandler}
      layoutId={game.id}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="b"
    >
      <Link to={`/game/${game.id}`}>
        <motion.img
          layoutId={`image${game.id}`}
          src={smallImage(game.background_image, 640)}
          alt={`${game.name} feature image`}
        />
        <header>
          <motion.h3 layoutId={`title${game.id}`}>{game.name}</motion.h3>
          <p>{game.released} </p>
        </header>
      </Link>
    </GameCard>
  );
};

const GameCard = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.4);
  border-radius: 0.7rem;
  overflow: hidden;
  background-color: #ff7676;

  a {
    width: 100%;
    height: 100%;
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
      transform: scale(1.02);
    }
  }
  header {
    position: relative;
    bottom: 30%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.4s;
    &:hover {
      background-color: rgba(255, 118, 118, 0.5);
    }
    h3,
    p {
      color: white;
      padding: 0;
    }
  }
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .header {
    height: 30%;
  }
`;

export default Game;
