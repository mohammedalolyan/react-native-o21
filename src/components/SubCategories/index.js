import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
import Text from '../Text'

class SubCategories extends React.Component {

  renderItem = (item, index) => {
    return (
      <TouchableOpacity style={[styles.itemWrapper, item.active && styles.itemActive]}
        activeOpacity={0.75} onPress={() => this.props.onSelectItem(item)}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { categories } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          keyExtractor={(item, index) => `${index}`}
          data={categories}
          renderItem={({ item, index }) => this.renderItem(item, index)}
        />
      </View>
    )
  }
}

SubCategories.defaultProps = {
  categories: []
}

export default SubCategories