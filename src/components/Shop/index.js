import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./style";

class Shop extends Component {
  render() {
    let { sourceImage, text, total } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <ImageBackground source={{ uri: sourceImage }} style={styles.image}>
            <View style={styles.foreground}>
              <Text style={styles.text}> {text} </Text>
              <Text style={styles.textBottom}> {total} Products</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Shop;
