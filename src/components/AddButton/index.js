import React, { Component } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import styles from "./style";

class AddButton extends Component {
  static defaultProps = {
    title: "ADD TO CART"
  };

  render() {
    let { title, style } = this.props;
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[styles.container, style]}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default AddButton;
