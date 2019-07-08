import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./style";

class CategorySectionItem extends Component {
  render() {
    console.log("CategorySectionItem Also ok");

    let { item } = this.props;
    return (
      <View style={styles.foreground}>
        <ImageBackground source={{ uri: item.imageItem }} style={styles.image}>
          <Text style={styles.text}> {item.titleItme} </Text>
          <Text style={styles.textBottom}>{item.totalNumbers} Products</Text>
        </ImageBackground>
      </View>
    );
  }
}

export default CategorySectionItem;
