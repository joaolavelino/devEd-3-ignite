import React from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//media
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="Ignite Logo" />
        <h1>Ignite</h1>
      </Logo>
      <div className="search">
        <input type="text" name="" id="" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  background-color: #ff7676;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 8vh;
  position: fixed;
  top: 0;
  z-index: 4;
  .search {
    display: flex;
    align-items: center;
  }
  input {
    height: 2rem;
    font-size: 1rem;
    padding: 0.75rem;
    margin-right: 1rem;
    background: transparent;
    border: 2px solid white;
    transition: 0.3s;
    outline: none;
    font-family: "Montserrat", sans-serif;
    color: white;
    :focus {
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
    }
  }
  button {
    height: 2rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    background: white;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    color: #ff7676;
    transition: 0.4s;
    :hover {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  img {
    width: 2rem;
    margin-right: 0.5rem;
  }
`;

export default Nav;
