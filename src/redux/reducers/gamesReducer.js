const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  search: [],
  terms: "",
};
export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "FETCH_SEARCH":
      return {
        ...state,
        search: action.payload.search,
        terms: action.payload.terms,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        search: [],
      };
    default:
      return { ...state };
  }
};
