import React from "react";
//Style and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeAnimation } from "../animation";
//REDUX
import { useSelector } from "react-redux";
import { gameScreenshotsURL } from "../api";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
//img
import playstation from "../img/playstation.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import xbox from "../img/xbox.svg";
import steam from "../img/steam.svg";
import gamepad from "../img/gamepad.svg";
import windows from "../img/windows.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
import starHalf from "../img/star-half.png";

const GameDetails = ({ pathId }) => {
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

  //getPlatiformIcons
  const getPlatform = (platform) => {
    if (platform.includes("PC")) return windows;
    else if (platform.includes("PlayStation")) return playstation;
    else if (platform.includes("Nintendo")) return nintendo;
    else if (platform.includes("iOS")) return apple;
    else if (platform.includes("Xbox")) return xbox;
    else if (platform.includes("Steam")) return steam;
    else return gamepad;
  };

  //getStarIcons
  const getStars = () => {
    let stars = [];
    const rating = info.rating;
    console.log(rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt="star" key={i} />);
      } else if (i > rating && i - rating < 1) {
        stars.push(<img src={starHalf} alt="half star" key={i} />);
      } else {
        stars.push(<img src={starEmpty} alt="half star" key={i} />);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <CardShadow
          className="shadow"
          onClick={exitDetailsHandler}
          variants={fadeAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <DetailsCard layoutId={parseInt(pathId)}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title${parseInt(pathId)}`}>
                  {info.name}
                </motion.h3>
                <p>Rating: {info.rating} / 5</p>
                <div className="stars">{getStars()}</div>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {info.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={`${data.platform.name} icon`}
                      title={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image${parseInt(pathId)}`}
                src={smallImage(info.background_image, 1280)}
                alt="bg image"
              />
            </Media>
            <Description>
              <p>{info.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.map((data, index) => (
                <img
                  key={data.id}
                  src={smallImage(data.image, 1280)}
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
  z-index: 5;
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
  z-index: 6;
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
  .stars {
    display: flex;
  }
  img {
    width: 1.2rem;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 1rem;
    filter: grayscale(1);
    width: 2em;
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
