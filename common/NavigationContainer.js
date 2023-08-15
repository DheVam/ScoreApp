import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import AddPlayerScreen from "../screens/AddPlayerScreen";
import ViewAllPlayersScreen from "../screens/ViewAllPlayersScreen";
import EditPlayerScreen from "../screens/EditPlayerScreen";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    AddPlayer: { screen: AddPlayerScreen },
    ViewAllPlayers: { screen: ViewAllPlayersScreen },
    EditPlayer: { screen: EditPlayerScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black", // Set the background color
      },
      headerTintColor: "white", // Set the text color
    },
  }
);

export default createAppContainer(MainNavigator);
