import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import styles from './styles'


class ItemLoading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}


export default ItemLoading