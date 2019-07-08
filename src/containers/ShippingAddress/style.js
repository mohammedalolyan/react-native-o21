import { StyleSheet } from "react-native";
import { Colors } from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.LighterGray
  },
  content: {
    backgroundColor: "white",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3
  },
  separator: {
    height: 0.5,
    backgroundColor: Colors.LightGray
  },
  btnSubmit: {
    height: 45,
    borderRadius: 0,
    marginHorizontal: 10, 
    marginTop: 15
  },
});
