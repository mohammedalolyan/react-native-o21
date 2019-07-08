import React from "react";
import {
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import styles from "./style";
import { Text } from "@components";

class Button extends React.Component {
  static defaultProps = {
    disabled: false,
    loading: false
  };
  render() {
    let { title, loading, disabled, onPress, style, styleText } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, style]}
        disabled={loading || disabled}
        onPress={onPress}
        activeOpacity={0.75}>
        {!loading && <Text style={[styles.title, styleText]}>{title}</Text>}
        {loading && <ActivityIndicator color="white" />}
      </TouchableOpacity>
    );
  }
}

export default Button;
