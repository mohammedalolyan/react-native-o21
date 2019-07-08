import React, { Component } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import StarRating from "react-native-star-rating";

import styles from "./style";

class RatingStars extends Component {
  render() {
    let { rating } = this.props;
    return (
      <View style={styles.container}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={rating}
          starSize={15}
          fullStarColor="#f6cd45"
          halfStarColor="#f6cd45"
          emptyStarColor="#f6cd45"
        />
      </View>
    );
  }
}

export default RatingStars;
