import { StyleSheet, Platform } from "react-native";
import { Constants, Colors } from "@common";

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: Colors.LightGrey,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 18,
    fontFamily: "Teko-Light",
    textAlign: "center",
  },
  textLine: {
    fontSize: 18,
    fontFamily: "Teko-Light",
    color: Colors.LightGrey
  },
  textView: {
    flexDirection: "row"
  },
  button: {
    paddingVertical: 10
  }
});
