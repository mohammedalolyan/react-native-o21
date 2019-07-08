import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./style";

class TopDivider extends Component {
  render() {
    let { leftText, rightText } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.textView}>
            <Text style={styles.text}>{leftText}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.textLine}>|</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <View style={styles.textView}>
            <Text style={styles.text}>{rightText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TopDivider;
