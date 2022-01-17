import React from "react";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useSelector } from "react-redux";
import { gameScreenshotsURL } from "../api";
import { useNavigate } from "react-router-dom";

const GameDetails = () => {
  //Data
  const { screenshots, info, isLoading } = useSelector(
    (state) => state.details
  );

  const navigate = useNavigate();
  const exitDetailsHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      navigate("/");
    }
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailsHandler}>
          <DetailsCard>
            <Stats>
              <div className="rating">
                <h3>{info.name}</h3>
                <p>
                  Rating: {info.rating} / {info.rating_top}
                </p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {info.platforms.map((data) => (
                    <h4 key={data.platform.id}>{data.platform.name}</h4>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={info.background_image} alt="bg image" />
            </Media>
            <Description>
              <p>{info.description_raw}</p>
            </Description>
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
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.7);
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

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetails;
