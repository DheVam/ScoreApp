import { combineReducers } from "redux";
import playerReducer from "./playerReducer";

const rootReducer = combineReducers({
  players: playerReducer,
});

export default rootReducer;
