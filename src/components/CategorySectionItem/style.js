import { StyleSheet, Platform } from "react-native";
import { Constants, Colors } from "@common";

const newScreenSize = Constants.ScreenSize.width;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: newScreenSize * 0.45,
    height: 150,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 35,
    color: "white",
    fontFamily: "Teko-Bold"
  },
  textBottom: {
    fontSize: 25,
    color: "white",
    fontFamily: "Teko-Light"
  },
  foreground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    width: newScreenSize * 0.45,
    height: 150,
    paddingHorizontal: 10
  }
});
