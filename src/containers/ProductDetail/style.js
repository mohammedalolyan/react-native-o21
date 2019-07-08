import { StyleSheet, Dimensions } from "react-native";
import { Colors, Constants } from "@common";
const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  regular_price: {
    marginTop: 4,
    fontSize: Constants.FontSize.small,
    color: Colors.FontGrey,
    textDecorationLine: "line-through",
    marginLeft: 5
  },
  price: {
    fontSize: Constants.FontSize.medium,
    fontWeight: "bold"
  },
  title: {
    marginTop: 5,
    fontSize: Constants.FontSize.big,
    color: "#757575"
  },
  star: {
    width: 70,
    marginVertical: 2.5
  },
  priceStar: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inStock: {
    marginTop: 5,
    color: "black",
    fontSize: Constants.FontSize.tiny,
    fontWeight: "bold"
  },
  iconStyle: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: "#f1f1f1",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1
  },
  details: {
    marginTop: 15,
    fontWeight: "bold"
  },
  contentWrapper: {
    paddingHorizontal: 10,
    marginTop: 5
  },
  viewPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  ratingCount: {
    marginLeft: 5,
    color: Colors.FontGrey
  }
});
