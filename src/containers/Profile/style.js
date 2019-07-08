import { StyleSheet } from "react-native";
import { Colors } from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  text: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Teko-Bold"
  },
  btnLogin: {
    height: 45,
    width: 150,
    backgroundColor: Colors.AppColor,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20
  },
  name: {
    fontSize: 18,
    color: Colors.AppColor,
    fontFamily: "Teko-Bold",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20
  }
});
