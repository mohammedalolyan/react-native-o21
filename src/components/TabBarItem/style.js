import { StyleSheet } from "react-native";
import { Colors } from "@common";

export default StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain"
  },
  badge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -3,
    right: -6
  },
  text: {
    fontSize: 10,
    color: "white"
  }
});
