import { StyleSheet } from "react-native";
import { Colors } from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center"
  },
  input: {
    height: 40,
    padding: 0,
    paddingHorizontal: 10,
    color: Colors.AppColor,
    marginTop: 15,
    borderWidth: 0.5,
    borderColor: Colors.AppColor,
    borderRadius: 5
  },
  btnLogin: {
    height: 45,
    backgroundColor: Colors.AppColor,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 15
  },
  text: {
    color: "#fff"
  }
});
