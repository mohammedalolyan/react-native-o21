import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./style";
import { Icons } from "@common";

class CategoriesItems extends Component {
  getCategoryImageUrl = item => {
    if (item.image) {
      return item.image.src;
    }
    return "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png";
  };
  render() {
    let { item, onPress } = this.props;
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <ImageBackground
          source={{ uri: this.getCategoryImageUrl(item) }}
          style={styles.image}
        >
          <View style={styles.foreground}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.textBottom}>{item.count} Products</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default CategoriesItems;
