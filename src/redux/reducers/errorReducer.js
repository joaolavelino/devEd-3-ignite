const initState = {
  error: false,
  errorText: "",
};

export const errorReducer = (state = { initState }, action) => {
  switch (action.type) {
    case "FETCH_ERROR":
      return {
        ...state,
        error: true,
      };
    default:
      return { state };
  }
};
