import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import MoviesContainer from "../containers/MoviesContainer";
import SearchContainer from "../containers/SearchContainer";
import TVShowContainer from "../containers/TVShowContainer";
import Header from "../layout/Header";
import { View } from "native-base";

const TabNavigator = createMaterialTopTabNavigator(
  {
    MoviesTab: {
      screen: MoviesContainer,
      navigationOptions: {
        title: "Movies",
      },
    },
    SearchTab: {
      screen: SearchContainer,
      navigationOptions: {
        title: "Search Results",
      },
    },
    TVShowTab: {
      screen: TVShowContainer,
      navigationOptions: {
        title: "TV Shows",
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        textTransform: "capitalize",
      },
      style: {
        backgroundColor: "#858585",
      },
      indicatorStyle: {
        backgroundColor: "#ff0000",
      },
    },
  }
);

const IndexScreen = createAppContainer(TabNavigator);

export default () => (
  <View style={{ flex: 1 }}>
    <Header title="Movie App" />
    <IndexScreen />
  </View>
);
