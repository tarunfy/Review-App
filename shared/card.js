import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 1,
    backgroundColor: "#222",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "white",
    shadowOpacity: 1.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    textAlign: "center",
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});
