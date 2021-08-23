import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../components/about";
import Header from "../shared/header";

const Stack = createStackNavigator();
export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 23 },
        headerStyle: {
          backgroundColor: "#111",
          height: 100,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="about"
        component={About}
        options={{
          title: "About",
        }}
      />
    </Stack.Navigator>
  );
}
