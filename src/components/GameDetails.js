import React from "react";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useSelector } from "react-redux";
import { gameScreenshotsURL } from "../api";

const GameDetails = () => {
  //Data
  const { screenshots, info } = useSelector((state) => state.details);

  return (
    <CardShadow>
      <DetailsCard>
        <div className="stats">
          <h3>{info.name}</h3>
          <div className="rating">
            <p>
              Rating: {info.rating} / {info.rating_top}
            </p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {info.platforms.map((data) => (
                <h4 key={data.platform.id}>{data.platform.name}</h4>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={info.background_image} alt="bg image" />
        </div>
        <div className="description">
          <p>{info.description_raw}</p>
        </div>
        <div className="gallery">
          {screenshots.map((data, index) => (
            <img
              key={data.id}
              src={data.image}
              alt={`screenshot #${index + 1}`}
            />
          ))}
        </div>
      </DetailsCard>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const DetailsCard = styled(motion.div)`
  width: 60%;
  border-radius: 1rem;
  padding: 3rem;
  position: absolute;
  left: 20%;
  top: 5%;
  background-color: #fff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
  overflow-x: hidden;
  img {
    width: 100%;
  }
`;

export default GameDetails;
