import { StyleSheet } from "react-native";
import { Colors, Constants } from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderColor: "#f1f1f1",
    borderBottomWidth: 1,
    marginTop: 5
  },
  image: {
    width: 110,
    height: 130,
    resizeMode: 'contain'
  },
  price: {
    fontSize: Constants.FontSize.big,
    fontWeight: "bold"
  },
  name: {
    color: Colors.FontGrey,
    fontSize: Constants.FontSize.medium,
    marginVertical: 5
  },
  on_sale: {
    marginTop: 4,
    fontSize: Constants.FontSize.small,
    color: Colors.FontGrey,
    textDecorationLine: "line-through",
    marginLeft: 5
  },
  cartContent: {
    flex: 1,
    marginLeft: 5
  },
  priceWrapper: {
    flexDirection: 'row'
  },
  nameContent: {
    flex: 1
  },
  iconDel: {
    width: 22,
    height: 22,
    resizeMode: 'contain'
  },
  delWrapper: {
    marginBottom: 5,
    alignItems: 'flex-end'
  }
});
