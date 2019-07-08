import { StyleSheet } from "react-native";
import { Colors, Constants } from "@common";

export default StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 4,
    width: 35,
    height: 18,
    flexDirection: "row",
    backgroundColor: Colors.AppColor,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: Constants.FontSize.tiny,
    fontWeight: "bold",
    marginHorizontal: 2
  }
});
