var initialState = {
  fetching: false,
  fetched: false,
  error: null,
  shows: [],
  isLoggedIn: false
};
const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SHOWS":
      return state;
    case "RECIEVED_SHOWS":
      return { ...state, shows: action.payload.result };
    case "FETCH_ERROR":
      return state;

    default:
      return state;
  }
};

export default showReducer;
