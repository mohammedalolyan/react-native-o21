import { StyleSheet } from 'react-native'
import { Colors, Constants } from '@common'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: Colors.Gray,
    borderBottomWidth: 0.5
  },
  image: {
    width: 120,
    height: 120
  },
  content: {
    flex: 1,
    padding: 10
  },
  title: {
    fontSize: Constants.FontSize.medium,
    fontWeight: '500'
  },
  priceWrapper: {
    flexDirection: 'row',
    marginVertical: 10
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
  star: {
    width: 90,
    marginVertical: 3
  },
})