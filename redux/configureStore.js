import { createStore } from "redux";
import rootReducer from ".";

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
