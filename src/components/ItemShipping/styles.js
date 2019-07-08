import { StyleSheet } from 'react-native'
import { Colors, Constants } from '@common'


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: Colors.White,
    borderRadius: 5,
    justifyContent: 'space-between',
    marginVertical: 5
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  title: {
    fontSize: Constants.FontSize.big,
    fontWeight: '500'
  },
  iconCheck: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
    tintColor: Colors.Green
  },
  content: {
    justifyContent: 'center',
    flex: 1
  },
  action: {
    width: 35,
    height: 35
  }
})