import { StyleSheet } from "react-native";
import { Constants, Colors } from "@common";

var { width } = Constants.ScreenSize;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 0.5,
    borderColor: Colors.LightGrey
  },
  content: {
    flex: 1
  },
  image: {
    width: (width - 40) / 2,
    height: (width - 40) / 2
  },
  regular_price: {
    marginTop: 4,
    fontSize: 12,
    color: Colors.FontGrey,
    textDecorationLine: "line-through",
    marginLeft: 5
  },
  price: {
    fontSize: 16,
    fontWeight: "bold"
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    color: "#757575",
    width: (width - 40) / 2
  },
  star: {
    width: 90,
    marginVertical: 3
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
