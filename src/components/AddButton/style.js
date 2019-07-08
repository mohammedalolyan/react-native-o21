import { StyleSheet } from "react-native";
import { Colors, Constants } from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: Colors.Black,
    borderRadius: 4
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: Constants.FontSize.small
  }
});
