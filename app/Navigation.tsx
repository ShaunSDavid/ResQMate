import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./_components/HomeScreen";
import LoginScreen from "./_components/LoginScreen";
import RegisterScreen from "./_components/RegisterScreen";

const Stack = createStackNavigator();

const EntryNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default EntryNavigation;
