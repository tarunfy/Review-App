import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";
import React from "react";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="homeStack">
        <Drawer.Screen
          name="homeStack"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="aboutStack"
          component={AboutStack}
          options={{ title: "About" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
