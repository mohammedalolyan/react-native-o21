import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { Icons, Constants, Config } from "@common";
import styles from "./style";
import StarRating from "react-native-star-rating";

class ProductItem extends Component {
  render() {
    let { item, onPress } = this.props;

    var image = "";
    if (item.images != undefined && item.images.length > 0) {
      image = item.images[0].src;
    }

    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={[styles.container]}>
          <ImageBackground
            source={{ uri: image }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.footer}>
            <View>
              <Text style={styles.price}>
                {Config.currencySymbol}
                {item.price}
              </Text>
              {item.regular_price != item.price && (
                <Text style={styles.regular_price}>
                  {Config.currencySymbol + item.regular_price}
                </Text>
              )}
            </View>
            <Image source={Icons.favIcon} style={styles.icon} />
          </View>
          <Text ellipsizeMode={"tail"} numberOfLines={1} style={styles.title}>
            {item.name}
          </Text>
          <View style={styles.star}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={item.rating_count}
              starSize={15}
              fullStarColor="#f6cd45"
              halfStarColor="#f6cd45"
              emptyStarColor="#f6cd45"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ProductItem;
