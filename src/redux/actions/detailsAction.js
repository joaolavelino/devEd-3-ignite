import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });
  //FETCH
  try {
    const gameDetailsData = await axios.get(gameDetailsURL(id));
    const gameScreenshotsData = await axios.get(gameScreenshotsURL(id));
    dispatch({
      type: "FETCH_DETAILS",
      payload: {
        game: gameDetailsData.data,
        screenshots: gameScreenshotsData.data.results,
      },
    });
  } catch (error) {
    dispatch({
      type: "FETCH_ERROR",
    });
  }
};
