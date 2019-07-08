import React, { Component } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import styles from "./style";

class IconButton extends Component {
  render() {
    let { icon, text, onPress } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.75} onPress={onPress}>
        <View style={styles.container}>
          <Image source={icon} style={styles.image} />
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default IconButton;
