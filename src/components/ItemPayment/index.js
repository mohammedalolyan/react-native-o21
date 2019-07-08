import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Text } from '@components'
import { Icons } from '@common'


class ItemPayment extends React.PureComponent {
  render() {
    const { item, onPress, selected } = this.props
    let icon = Icons.Cash
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.75} onPress={onPress}>
        <View style={styles.imageWrapper}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description} numberOfLines={1} ellipsizeMode={'tail'}>{item.description}</Text>
        </View>
        <View style={styles.iconWrapper}>
          {
            selected &&
            <Image source={Icons.Check} style={styles.iconCheck} />
          }
        </View>
      </TouchableOpacity>
    )
  }
}

export default ItemPayment