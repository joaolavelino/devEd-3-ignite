import React, { useEffect } from "react";
import GameDetails from "../components/GameDetails";
//Add Redux logic
import { useDispatch, useSelector } from "react-redux";
import { loadGames, clearSearch } from "../redux/actions/gamesAction";
//Style and Animation
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { titleAnimation } from "../animation";
//Components
import Game from "../components/Game";
import { useLocation } from "react-router-dom";

const Home = () => {
  //FETCH GAMES - send data TO the store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get the data FROM the store (with use Selector)
  //declaring with the brackets, each array from the state will be extracted to a specific variable
  const { popular, newGames, upcoming, search } = useSelector(
    (state) => state.games
  );

  //GET CURRENT LOCATION
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  if (!pathId) {
    document.body.style.overflow = "auto";
  }

  const clearSearchHandler = () => {
    dispatch(clearSearch());
  };

  const filterListBG = (array) => {
    let filtered = array.filter((e) => e.background_image != null);
    return filtered;
  };

  return (
    <GameList>
      <AnimatePresence>
        {pathId && <GameDetails pathId={pathId} />}
      </AnimatePresence>
      <AnimatePresence>
        {search.length > 0 && (
          <SearchResults
            initial={{
              opacity: 0,
              x: -100,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            exit={{
              opacity: 0,
              x: 100,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            <motion.div
              className="searchHeader"
              variants={titleAnimation}
              initial="hidden"
              animate="show"
            >
              <h2>Search Result</h2>
              <button onClick={clearSearchHandler}>Clear</button>
            </motion.div>
            <Games
              className="a"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filterListBG(search).map((game, index) => (
                <Game key={game.id} game={game} index={index} />
              ))}
            </Games>
          </SearchResults>
        )}
      </AnimatePresence>

      {!search.length && (
        <AnimatePresence>
          <>
            <motion.h2
              variants={titleAnimation}
              initial="hidden"
              animate="show"
            >
              Upcoming Games
            </motion.h2>
            <Games
              className="a"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filterListBG(upcoming).map((game, index) => (
                <Game key={game.id} game={game} index={index} />
              ))}
            </Games>
            <motion.h2
              variants={titleAnimation}
              initial="hidden"
              animate="show"
            >
              Popular Games
            </motion.h2>
            <Games>
              {filterListBG(popular).map((game, index) => (
                <Game key={game.id} game={game} index={index} />
              ))}
            </Games>
            <h2>New Games</h2>
            <Games>
              {filterListBG(newGames).map((game, index) => (
                <Game key={game.id} game={game} index={index} />
              ))}
            </Games>
          </>
        </AnimatePresence>
      )}
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }

  h2 {
    padding: 8rem 0 3rem;

    @media screen and (max-width: 600px) {
      padding: 10rem 0 3rem;
    }
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SearchResults = styled(motion.div)`
  .searchHeader {
    display: flex;
    align-items: center;
    button {
      margin: 8rem 0 3rem 2rem;
      padding: 0.5rem 1rem;
      background: #ff7676;
      border: none;
      border-radius: 0.5rem;
      color: white;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      text-transform: uppercase;
      transition: 0.4s;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      :hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
      }
    }
  }
`;

export default Home;
