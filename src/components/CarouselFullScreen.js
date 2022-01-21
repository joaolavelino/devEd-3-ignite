import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { carouselAnimation } from "../animation";
//REDUX
import { useSelector } from "react-redux";
import arrow from "../img/arrow.png";
import close from "../img/times-solid.svg";

const CarouselFullScreen = ({
  galery,
  setGalery,
  carouselPos,
  setCarouselPos,
}) => {
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
      if (carouselPos === screenshots.length - 1) {
        setCarouselPos(0);
      } else {
        setCarouselPos(carouselPos + 1);
      }
    }
  };
  const selectorHandler = (e) => {
    setCarouselPos(parseInt(e.target.id));
  };

  window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft") {
      if (carouselPos === 0) {
        setCarouselPos(screenshots.length - 1);
      } else {
        setCarouselPos(carouselPos - 1);
      }
    } else if (e.key === "ArrowRight") {
      if (carouselPos === screenshots.length - 1) {
        setCarouselPos(0);
      } else {
        setCarouselPos(carouselPos + 1);
      }
    } else if (e.key === "Escape") {
      setGalery(!galery);
    }
  });

  return (
    <CarouselShadow
      variants={carouselAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <button className="close" onClick={() => setGalery(!galery)}>
        <img src={close} alt="close card" />
      </button>
      <CarouselContainer className="carousel">
        <img
          src={arrow}
          alt="previous"
          className="arrow left"
          onClick={arrowHandler}
        />
        <img
          src={arrow}
          alt="next "
          className="arrow right"
          onClick={arrowHandler}
        />

        {screenshots.map((data, index) => (
          <CardContainer
            key={`${data.id}fs`}
            index={index}
            className={carouselPos === index ? "showCard" : "hideCard"}
          >
            <img
              src={data.image}
              alt={`screenshot #${index + 1}`}
              data={data}
            />
          </CardContainer>
        ))}
        <div className="selectorContainer">
          {screenshots.map((data, index) => (
            <div
              className={`selector ${index === carouselPos ? "filled" : ""}`}
              key={`${index}selectorfs`}
              id={index}
              onClick={selectorHandler}
            ></div>
          ))}
        </div>
      </CarouselContainer>
    </CarouselShadow>
  );
};

const CarouselShadow = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: black;
  z-index: 15;
  .close {
    display: flex;
    align-items: center;
    z-index: 17;
    position: absolute;
    padding: 0.7rem;
    width: 2.5rem;
    height: 2.5rem;
    top: 2rem;
    left: 2rem;
    border: none;
    background: white;
    cursor: pointer;
    img {
      position: static;
      max-width: 100%;
    }
    @media screen and (max-width: 768px) {
      top: 1rem;
      left: 1rem;
    }
  }
`;

const CarouselContainer = styled(motion.div)`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 4rem;
  z-index: 16;
  .arrow {
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    z-index: 17;
    cursor: pointer;
    position: absolute;
    top: 50%;
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
    z-index: 17;
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
  width: 100vw;
  height: auto;
  position: absolute;
  transition: opacity ease-in-out 0.4s;
  overflow: hidden;
  img {
    max-height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export default CarouselFullScreen;
