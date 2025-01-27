import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./_components/login/HomeScreen";
import LoginScreen from "./_components/login/LoginScreen";
import RegisterScreen from "./_components/login/RegisterScreen";
import Dashboard from "./_components/dashboard/Dashboard";
import FirstAid from "./_components/aid/FirstAid";
import ProfilePage from "./_components/profile/ProfilePage";
import EditInfo from "./_components/profile/EditInfo";
import FirstAidList from "./_components/aid/FirstAidList";
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
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="FirstAid" component={FirstAid} />
      <Stack.Screen name="FirstAidList" component={FirstAidList} />
      <Stack.Screen name="EditInfo" component={EditInfo} />
    </Stack.Navigator>
  );
};

export default EntryNavigation;
