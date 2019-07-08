import { StyleSheet, Platform } from "react-native";
import { Constants, Colors } from "@common";

export default StyleSheet.create({
  container: {},
  image: {
    flex: 1,
    marginBottom: 1,
    width: Constants.ScreenSize.width,
    height: Constants.ScreenSize.height * 0.25,
    resizeMode: "contain",
    backgroundColor: "white"
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
    justifyContent: "center"
  }
});
