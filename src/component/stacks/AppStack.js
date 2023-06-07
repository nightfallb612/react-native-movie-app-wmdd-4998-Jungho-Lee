import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MoviesContainer from "../containers/MoviesContainer";
import SearchContainer from "../containers/SearchContainer";
import TVShowContainer from "../containers/TVShowContainer";
import ShowPage from "../screens/ShowPage";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: {
        textTransform: "none",
      },
      tabBarIndicatorStyle: {
        backgroundColor: "#2c3e50",
      },
    }}
  >
    <Tab.Screen
      name="Movies"
      component={MoviesContainer}
      options={{
        tabBarLabel: "Movies",
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchContainer}
      options={{
        tabBarLabel: "Search Results",
      }}
    />
    <Tab.Screen
      name="TVShows"
      component={TVShowContainer}
      options={{
        tabBarLabel: "TV Shows",
      }}
    />
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="tab"
        component={TabNavigator}
        options={{
          title: "Movie App",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="detail"
        component={ShowPage}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitle: "Back to List",
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
