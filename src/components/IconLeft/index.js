import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { Icons } from '@common'
import styles from './styles'

class IconLeft extends React.PureComponent {

  render() {
    const { onPress } = this.props
    return (
      <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
        <Image source={Icons.Left} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}


export default IconLeft