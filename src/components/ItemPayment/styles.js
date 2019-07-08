import { StyleSheet } from 'react-native'
import { Colors, Constants } from '@common'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.White,
    borderRadius: 5,
    marginVertical: 5
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: Colors.Green,
  },
  imageWrapper: {
  },
  title: {
    fontSize: Constants.FontSize.medium,
    fontWeight: '500'
  },
  content: {
    marginLeft: 5,
    flex: 1
  },
  iconCheck: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
    tintColor: Colors.Green
  },
  iconWrapper: {
    width: 35,
    height: 35,
  }
})