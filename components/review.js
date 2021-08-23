import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
export default function Review({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Screen</Text>
      <Button title="Go to home screen" onPress={pressHandler} />
    </View>
  );
}
