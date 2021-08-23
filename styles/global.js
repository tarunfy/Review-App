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
