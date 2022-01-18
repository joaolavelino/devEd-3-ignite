import React from "react";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { cardAnimation } from "../animation";
//REDUX
import { useDispatch } from "react-redux";
import { loadDetails } from "../redux/actions/detailsAction";
import { useSelector } from "react-redux";
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
      transition={{ delay: index * 0.09 }}
      className="b"
    >
      <Link to={`/game/${game.id}`}>
        <div className="header">
          <motion.h3 layoutId={`title${game.id}`}>{game.name}</motion.h3>
          <p>{game.released} </p>
        </div>
        <motion.img
          layoutId={`image${game.id}`}
          src={smallImage(game.background_image, 640)}
          alt={`${game.name} feature image`}
        />
      </Link>
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
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  .header {
    height: 30%;
  }
`;

export default Game;
