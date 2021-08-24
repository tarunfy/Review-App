import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "Lato-bold",
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});

export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
