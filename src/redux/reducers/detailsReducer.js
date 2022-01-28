const initState = {
  info: { platforms: [] },
  screenshots: [],
  isLoading: true,
  error: false,
};
export const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DETAILS":
      return {
        ...state,
        info: action.payload.game,
        screenshots: action.payload.screenshots,
        isLoading: false,
        error: false,
      };
    case "LOADING_DETAILS":
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
