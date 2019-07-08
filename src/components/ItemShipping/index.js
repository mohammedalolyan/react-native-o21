import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Text } from '@components'
import { Icons } from '@common'


class ItemShipping extends React.PureComponent {

  render() {
    const { title, description, icon, onPress, selected } = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.75}>
        <View style={styles.content}>
          {
            icon &&
            <Image source={icon} style={styles.icon} />
          }
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.action}>
          {
            selected &&
            <Image source={Icons.Check} style={styles.iconCheck} />
          }
        </View>
      </TouchableOpacity>
    )
  }
}

export default ItemShipping