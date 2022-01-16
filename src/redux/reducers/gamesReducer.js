const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};
export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};
