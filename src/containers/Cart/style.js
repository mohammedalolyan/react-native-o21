import { StyleSheet } from "react-native";
import { Colors } from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  topText: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderColor: "#f2f2f2",
    borderWidth: 1,
    flexDirection: 'row',
  },
  greyText: {
    color: Colors.FontGrey,
    fontWeight: "bold",
    fontSize: 12
  },
  price: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12
  },
  cartEmpty: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100
  },
  action: {
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  listCarts: {
    paddingHorizontal: 10
  }
});
