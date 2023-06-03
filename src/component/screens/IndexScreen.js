import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import MoviesContainer from "../containers/MoviesContainer";
import SearchContainer from "../containers/SearchContainer";
import TVShowContainer from "../containers/TVShowContainer";

const TabNavigator = createMaterialTopTabNavigator(
  {
    MoviesTab: { screen: MoviesContainer },
    SearchTab: { screen: SearchContainer },
    TVShowTab: { screen: TVShowContainer },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#f2f2f2",
      },
      indicatorStyle: {
        backgroundColor: "#ff0000",
      },
    },
  }
);

const IndexScreen = createAppContainer(TabNavigator);

export default IndexScreen;
