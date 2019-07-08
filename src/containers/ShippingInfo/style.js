import { StyleSheet } from "react-native";
import { Colors } from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.LighterGray,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  item: {
    backgroundColor: "#fff",
    justifyContent: 'center',
    height: 45,
    paddingHorizontal: 5,
    marginTop: 5
  },
  btnSubmit: {
    height: 45,
    borderRadius: 0,
    marginTop: 15
  },  
  selected: {
    backgroundColor: "#82cfa4"
  },
});
