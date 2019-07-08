import { StyleSheet } from "react-native";
import { Colors , Constants} from "@common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White
  },
  text: {
    fontSize: 15,
    color: Colors.DarkGrey,
    fontFamily: "Teko-Bold"
  },
  header: {
    height: 300
  },
  content: {
    paddingHorizontal: 10
  }
  
});
