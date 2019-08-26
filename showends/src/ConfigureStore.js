import { createStore, applyMiddleware } from "redux";
import allReducer from "../src/reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

//middleware

const middleWare = applyMiddleware(thunk, createLogger());
const store = createStore(allReducer, middleWare);
store.dispatch(dispatch => {
  dispatch({ type: "FETCH_SHOWS" });
  axios
    .get("https://localhost:44314/api/1/show/getshows")
    .then(response => {
      dispatch({ type: "RECIEVED_SHOWS", payload: response.data });
    })
    .catch(e => {
      dispatch({ type: "FETCH_ERROR", payload: e });
    });
});
// store.subscribe(() => {
//   console.log("store changed");
// });
export default store;
