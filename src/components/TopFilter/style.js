import { StyleSheet, Platform } from "react-native";
import { Constants, Colors } from "@common";

export default StyleSheet.create({
  container: {
    height: 45,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: Colors.LightGrey,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    marginTop: 10,
    flex: 1
  },
  text: {
    fontSize: 20,
    fontFamily: "Teko-Light",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10
  },
  textLine: {
    fontSize: 20,
    fontFamily: "Teko-Light",
    color: Colors.LightGrey,
    marginBottom: 10,
    marginTop: 10
  },
  textView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "black",
    resizeMode: 'contain',
    marginLeft: 5
  }
});
