import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Icons } from "@common";
import styles from "./style";

class TopFilter extends Component {
  render() {
    let { leftText, rightText, onLeftPress, onRightPress } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onLeftPress}>
          <View style={styles.textView}>
            <Text style={styles.text}>{leftText} </Text>
            <Image source={Icons.arrowDownIcon} style={styles.icon} />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.textLine}>|</Text>
        </View>
        <TouchableOpacity onPress={onRightPress}>
          <View style={styles.textView}>
            <Text style={styles.text}>{rightText}</Text>
            <Image source={Icons.arrowDownIcon} style={styles.icon}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TopFilter;
