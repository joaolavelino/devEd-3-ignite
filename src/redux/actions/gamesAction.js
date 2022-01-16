import axios from "axios";
import { popularGamesUrl } from "../../api";

//While working with THUNK to make async request with Axios, you need to call another arrow function inside the initial arrow function of the action creator.
//This second arrow function will be asynchronous and will contain the axios request.
export const loadGames = () => async (dispatch) => {
  //Fetch
  const popularData = await axios.get(popularGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
