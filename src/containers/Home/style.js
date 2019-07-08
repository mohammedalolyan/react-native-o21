import { StyleSheet } from "react-native";
import { Colors } from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  scrollview: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    fontSize: 15,
    color: Colors.DarkGrey,
    fontFamily: "Teko-Bold"
  }
});
