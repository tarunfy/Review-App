import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../components/home";
import Review from "../components/review";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen
        name="review"
        component={Review}
        options={{ title: "Review" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
