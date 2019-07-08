import { StyleSheet, Platform } from "react-native";
import { Constants, Colors } from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white"
  },
  image: {
    flex: 1,
    width: Constants.ScreenSize.width * 0.94,
    height: Constants.ScreenSize.height * 0.25,
    resizeMode: "cover",
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: Colors.AppColor,
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.4
      },
      android: {
        elevation: 1
      }
    })
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
    padding: 5
  }
});
