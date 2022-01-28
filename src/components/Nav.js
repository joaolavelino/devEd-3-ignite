import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { navAnimation } from "../animation";
//media
import logo from "../img/logo.svg";
//Add Redux logic
import { useDispatch } from "react-redux";
import { searchGames, clearSearch } from "../redux/actions/gamesAction";

const Nav = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchGames(input));
    setInput("");
  };

  const clearSearchHandler = () => {
    dispatch(clearSearch());
  };

  return (
    <StyledNav variants={navAnimation} initial="hidden" animate="show">
      <Logo onClick={clearSearchHandler}>
        <img src={logo} alt="Ignite Logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search" onSubmit={searchHandler}>
        <input type="text" onChange={inputHandler} value={input} required />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  background-color: #ff7676;
  padding: 3rem 5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  top: -2vh;
  z-index: 4;


  @media screen and (max-width:600px){
    flex-direction: column;
    align-items: flex-start;
    padding:3rem 2rem 2rem;
  }

  .search {
    display: flex;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    overflow:hidden;
    transition: ease-in-out 0.4s;
    :hover {
      box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
  }
    
    @media screen and (max-width:600px){
    margin-top: 1rem;
    width: 100%;
  }

    }
  }
  input {
    overflow: hidden;
    width: calc(100% - 90px);
    height: 2rem;
    font-size: 1rem;
    padding: 0.75rem;
    background: transparent;
    border: 2px solid white;
    transition: 0.3s;
    outline: none;
    font-family: "Montserrat", sans-serif;
    color: white;
    
    
  }
  button {
    width: 90px;
    height: 2rem;
    padding: 0.5rem 1rem;
    border: none;
    background: white;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    color: #ff7676;
    transition: 0.4s;
    

  
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  cursor: pointer;
  color: white;
  img {
    width: 2rem;
    margin-right: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-left: 1rem;
    color: white;
    margin-top: 2px;
  }
`;

export default Nav;
