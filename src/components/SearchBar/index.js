import React from 'react'
import {
  View,
  Image,
  TextInput
} from 'react-native'
import styles from './style'
import { Icons, Colors } from '@common'

class SearchBar extends React.Component {
  render() {
    let { onChangeText } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <Image source={Icons.searchIcon} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={'Search...'}
            placeholderTextColor={Colors.Gray}
            clearButtonMode="while-editing"
            onChangeText={onChangeText}
          />
        </View>
      </View>
    )
  }
}

export default SearchBar
