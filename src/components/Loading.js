import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadingAnimation } from "../animation";
//media
import logo from "../img/logo.svg";
import Spinner from "./Spinner";

const Loading = () => {
  return (
    <LoadingScreen
      className="loading"
      variants={loadingAnimation}
      initial="show"
      animate="show"
      exit="hidden"
    >
      <motion.h5
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.7, delay: 0.1 }}
      >
        Welcome to
      </motion.h5>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.6, duration: 0.7, delay: 0.3 }}
      >
        <img src={logo} alt="logo" /> Ignite{" "}
      </motion.h1>
      <motion.h6
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.7, delay: 0.5 }}
      >
        An internet games database
      </motion.h6>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Spinner />
      </motion.div>
    </LoadingScreen>
  );
};

const LoadingScreen = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 30;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h5 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  h6 {
    color: white;
    font-size: 1rem;
    margin-bottom: 3rem;
    font-weight: lighter;
  }

  h1 {
    color: white;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    font-size: 4rem;
    img {
      width: 4rem;
      filter: invert(1);
    }
  }
`;

export default Loading;
