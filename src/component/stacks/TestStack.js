import React from "react";
import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

// 첫 번째 탭 화면
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

// 두 번째 탭 화면
function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

// 상세보기 화면
function DetailScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    const backAction = () => {
      navigation.dispatch(StackActions.popToTop());
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Detail Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

// 탭 네비게이터 설정
function TabNavigator() {
  return (
    <Tab.Navigator tabBarPosition="top">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// 스택 네비게이터 설정
function TestStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TestStack;
