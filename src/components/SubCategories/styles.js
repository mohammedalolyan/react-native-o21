import { StyleSheet } from "react-native";
import { Colors } from "@common";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: Colors.LightGrey,
    marginHorizontal: 5
  },
  itemWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5
  },
  itemActive: {
    borderColor: "#f3f3f3",
    borderWidth: 1
  },
  text: {
    fontSize: 18,
    fontFamily: "Teko-Light",
    textAlign: "center"
  }
});
