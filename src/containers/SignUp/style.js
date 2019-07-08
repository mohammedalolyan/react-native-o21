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
    borderWidth: 0.5,
    borderColor: Colors.AppColor,
    borderRadius: 0,
    marginVertical: 5
  },
  btnSignUp: {
    height: 45,
    backgroundColor: Colors.AppColor,
    borderRadius: 0,
    marginTop: 20
  },
  logoView: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 150
  }
});
