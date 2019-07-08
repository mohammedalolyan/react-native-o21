import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { Icons, Config, Colors } from "@common";
import { PercentButton, AddButton, Button } from "@components";
import styles from "./style";
import StarRating from "react-native-star-rating";

class CartItem extends Component {
  render() {
    let { item, onDelete, style } = this.props;
    var image = "";
    if (item.images && item.images.length > 0) {
      image = item.images[0].src;
    }
    return (
      <View style={[styles.container, style]}>
        <ImageBackground
          resizeMode='contain'
          style={styles.image}
          source={{ uri: image }}>
          {item.on_sale && (
            <PercentButton sale_price={item.price} regular_price={item.regular_price} />
          )}
        </ImageBackground>

        <View style={styles.cartContent}>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>
              {Config.currencySymbol}
              {item.price}
            </Text>
            {item.on_sale && (
              <Text style={styles.on_sale}>
                {Config.currencySymbol}{item.regular_price}
              </Text>
            )}
          </View>
          <View style={styles.nameContent}>
            <Text ellipsizeMode={"tail"} numberOfLines={2} style={styles.name}>
              {item.name}
            </Text>
            <Text>Quantity:  {item.qty}</Text>
          </View>

          <View style={styles.delWrapper}>
            <TouchableOpacity activeOpacity={0.75} onPress={() => onDelete(item)}>
              <Image source={Icons.Trash} style={styles.iconDel} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default CartItem;
