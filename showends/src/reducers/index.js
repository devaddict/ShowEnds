import showReducer from "../reducers/Shows";
import { combineReducers } from "redux";
const allReducers = combineReducers({ showReducer });
export default allReducers;
