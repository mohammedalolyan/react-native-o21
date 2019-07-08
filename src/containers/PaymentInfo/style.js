import { StyleSheet } from "react-native";
import { Colors } from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LighterGray,
    justifyContent: 'center'
  },
  content: {
    marginTop: 10,
    paddingHorizontal: 10
  },  
  title: {
    fontWeight: "bold",
    marginBottom: 3
  },
  item: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    marginHorizontal: 10
  },
  selected: {
    backgroundColor: "#82cfa4"
  },
  btnSubmit: {
    height: 45,
    borderRadius: 0
  },
  action: {
    padding: 10,
  }
});
