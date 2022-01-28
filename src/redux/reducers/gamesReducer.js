const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  search: [],
  terms: "",
  isLoading: true,
  error: true,
};
export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
        isLoading: false,
        error: false,
      };
    case "FETCH_SEARCH":
      return {
        ...state,
        search: action.payload.search,
        terms: action.payload.terms,
        isLoading: false,
        error: false,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        search: [],
        terms: "",
        isLoading: false,
        error: false,
      };
    case "GAMES_LOADING":
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    default:
      return { ...state };
  }
};
