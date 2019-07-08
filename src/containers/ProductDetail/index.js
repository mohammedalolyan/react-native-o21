import React, { Component } from "react";
import { SafeAreaView, ScrollView, View, Image } from "react-native";
import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import { Icons, Config, Global, Constants, Utils } from "@common";
import styles from "./style";
import HTML from "react-native-render-html";
import {
  PercentButton,
  AddButton,
  IconButton,
  RatingStars,
  ColorModal,
  SizeModal,
  TopFilter,
  ProductImageSlider,
  Text
} from "@components";
import _ from "lodash";

class ProductDetail extends Component {
  state = {
    color: "COLOR",
    size: "SIZE"
  };

  render() {
    let item = this.props.navigation.state.params.product;
    const { color, size } = this.state;
    let colors = Utils.getAttributeOptions(item.attributes, "color");
    let sizes = Utils.getAttributeOptions(item.attributes, "size");
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <ProductImageSlider images={item.images} />
          <View style={styles.contentWrapper}>
            <View style={styles.viewPrice}>
              <View style={styles.row}>
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
              <View style={styles.row}>
                <RatingStars rating={item.rating_count} />
                <Text style={styles.ratingCount}>({item.rating_count})</Text>
              </View>
            </View>
            {item.on_sale && (
              <PercentButton
                sale_price={item.sale_price}
                regular_price={item.regular_price}
              />
            )}
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.inStock}>{item.stock_quantity} in stock</Text>
            <TopFilter
              leftText={color.toUpperCase()}
              rightText={size.toUpperCase()}
              onLeftPress={this.showColorModal}
              onRightPress={this.showSizeModal}
            />
            <AddButton onPress={this.addToCart.bind(this)} />
            <View style={styles.iconStyle}>
              <IconButton
                text={"WISHLIST"}
                icon={Icons.favIcon}
                onPress={() => this.addWishList()}
              />
              <IconButton text={"SHARE"} icon={Icons.cartIcon} />
            </View>
            <View>
              <Text style={styles.details}>Details</Text>
              <View>
                <HTML html={item.description} />
              </View>
            </View>
          </View>
        </ScrollView>
        <ColorModal
          ref="colorModal"
          options={colors}
          onSelect={color => this.setState({ color })}
        />
        <SizeModal
          ref="sizeModal"
          options={sizes}
          onSelect={size => this.setState({ size })}
        />
      </SafeAreaView>
    );
  }

  addWishList = () => {
    let product = this.props.navigation.state.params.product;
    this.props.addWishList(product);
    Global.EventEmitter.emit(
      Constants.EventEmitterName.showToast,
      "Added product to wishlist"
    );
  };

  addToCart() {
    let product = this.props.navigation.state.params.product;
    this.props.addProductToCart(product);
  }

  showColorModal = () => {
    this.refs.colorModal.show();
  };

  showSizeModal = () => {
    this.refs.sizeModal.show();
  };

  onSelectSize = size => {
    this.setState({ size });
  };
}

ProductDetail.defaultProps = {
  selectedCategory: 0
};

function mapStateToProps({ categoiresReducer, productsReducer }) {
  return {
    selectedCategory: categoiresReducer.selectedCategory,
    products: productsReducer.products
  };
}

function mapDispateToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispateToProps
)(ProductDetail);
