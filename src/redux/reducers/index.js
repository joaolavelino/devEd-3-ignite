import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { detailsReducer } from "./detailsReducer";
import { errorReducer } from "./errorReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
  error: errorReducer,
});

export default rootReducer;
