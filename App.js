import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Home from "./components/home";
import About from "./components/about";
import Review from "./components/review";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";

const getFonts = () =>
  Font.loadAsync({
    "Lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        onError={console.warn}
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
