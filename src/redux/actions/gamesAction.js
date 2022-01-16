import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../../api";

//While working with THUNK to make async request with Axios, you need to call another arrow function inside the initial arrow function of the action creator.
//This second arrow function will be asynchronous and will contain the axios request.
export const loadGames = () => async (dispatch) => {
  //Fetch
  const popularData = await axios.get(popularGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  const newData = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};
