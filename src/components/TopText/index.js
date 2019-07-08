import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./style";

class TopText extends Component {
  render() {
    let { text } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}
export default TopText;
