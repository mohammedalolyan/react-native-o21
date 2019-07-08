import { StyleSheet } from "react-native";
import { Colors } from "@common";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  text: {
    fontSize: 18,
    color: Colors.DarkGrey,
    fontFamily: "Teko-light"
  }
});
