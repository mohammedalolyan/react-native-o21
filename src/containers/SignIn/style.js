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
    color: Colors.AppColor,
    borderWidth: 0.5,
    borderColor: Colors.AppColor,
    paddingHorizontal: 10
  },
  btnLogin: {
    height: 45,
    backgroundColor: Colors.AppColor,
    marginTop: 20,
    borderRadius: 0
  },
  text: {
    color: "#fff"
  },
  separator: {
    paddingVertical: 5
  },
  msgView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15
  },
  btnForget: {
    height: 45,
    backgroundColor: Colors.AppColor,
    borderRadius: 0
  },
  signUp: {
    marginLeft: 5,
    fontWeight: "bold"
  },
  logoView: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 150
  }
});
