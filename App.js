import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import NavigationContainer from "./common/NavigationContainer";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
};

export default App;
