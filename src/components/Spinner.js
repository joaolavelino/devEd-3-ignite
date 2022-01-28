import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeAnimation } from "../animation";

const Spinner = () => {
  return (
    <SpinnerRound
      variants={fadeAnimation}
      initial="show"
      animate="show"
      exit="hidden"
    >
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </SpinnerRound>
  );
};

const SpinnerRound = styled(motion.div)`
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .lds-ripple div {
    position: absolute;
    border: 7px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 75%;
      left: 50%;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 5%;
      left: 5%;
      width: 90%;
      height: 90%;
      opacity: 0;
    }
  }
`;

export default Spinner;
