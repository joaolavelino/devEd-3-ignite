import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//REDUX
import { useSelector } from "react-redux";
import { smallImage } from "../util";
import arrow from "../img/arrow.png";

const Carousel = ({ galery, setGalery, carouselPos, setCarouselPos }) => {
  //data
  const screenshots = useSelector((state) => state.details.screenshots);

  const arrowHandler = (e) => {
    if (e.target.classList.contains("left")) {
      if (carouselPos === 0) {
        setCarouselPos(screenshots.length - 1);
      } else {
        setCarouselPos(carouselPos - 1);
      }
    }
    if (e.target.classList.contains("right")) {
      if (carouselPos == screenshots.length - 1) {
        setCarouselPos(0);
      } else {
        setCarouselPos(carouselPos + 1);
      }
    }
  };
  const selectorHandler = (e) => {
    setCarouselPos(parseInt(e.target.id));
  };

  return (
    <CarouselContainer className="carousel">
      {screenshots.map((data, index) => (
        <CardContainer
          key={`cs${data.id}`}
          index={index}
          className={carouselPos === index ? "showCard" : "hideCard"}
        >
          <img
            src={arrow}
            alt=""
            className="arrow left"
            onClick={arrowHandler}
          />
          <img
            src={arrow}
            alt=""
            className="arrow right"
            onClick={arrowHandler}
          />
          <img
            src={smallImage(data.image, 1280)}
            alt={`screenshot #${index + 1}`}
            data={data}
            onClick={() => setGalery(!galery)}
          />
          <div className="selectorContainer">
            {screenshots.map((data, index) => (
              <div
                className={`selector ${index == carouselPos ? "filled" : ""}`}
                key={`${data.id}selectorcs`}
                id={index}
                onClick={selectorHandler}
              ></div>
            ))}
          </div>
        </CardContainer>
      ))}
    </CarouselContainer>
  );
};

const CarouselContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-bottom: 4rem;
  .arrow {
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    z-index: 10;
    cursor: pointer;
    position: absolute;
    top: calc(50% - 1rem);
  }
  .left {
    left: 0;
    transform: scaleX(-1);
  }
  .right {
    right: 0;
  }
  .showCard {
    opacity: 1;
  }
  .hideCard {
    opacity: 0;
  }
  .selectorContainer {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    bottom: 0;
    z-index: 9;
    .selector {
      width: 1rem;
      height: 1rem;
      margin: 1rem;
      border: 2px solid #ff7676;
      border-radius: 50%;
      transition: ease-in-out 0.4s;
      cursor: pointer;
    }
    .filled {
      background-color: #ff7676;
    }
  }
`;

const CardContainer = styled(motion.div)`
  cursor: pointer;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  transition: opacity ease-in-out 0.4s;
  img {
    max-height: 100%;
  }
`;

export default Carousel;
