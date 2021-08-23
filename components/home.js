import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("review");
    //navigation.push("review"); push and navigate methods are use to switch between screens in stack.
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Go to review screen" onPress={pressHandler} />
    </View>
  );
}
