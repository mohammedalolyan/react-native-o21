import React, { Component } from "react";
import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import styles from "./style";

class PercentButton extends Component {
  render() {
    let { regular_price, sale_price } = this.props;
    let percent = 1 - sale_price / regular_price;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>-{Math.floor(percent * 100)}%</Text>
      </View>
    );
  }
}

export default PercentButton;
