import React, { Component } from "react";
import { ScrollView, View, SafeAreaView, Text } from "react-native";
import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";
import { Config, Dashboard } from "@common";
import { TopText, NewArrival, Shop, ProductHorizontal } from "@components";
import styles from "./style";

class Wishlist extends Component {
  textLoad = () => {
    if (Dashboard.EnableTopText) {
      return <TopText text={Config.TopTextValue.Value} />;
    }
  };

  shop = () => {
    if (Dashboard.EnableShop) {
      const { productCount } = this.props;
      const url =
        "https://www.kuhl.com/media/versions/square/8386_arden_ls_as_front_category_section_item.jpg";
      return <Shop sourceImage={url} text={"Shop Now"} total={productCount} />;
    }
  };

  render() {
    const { wishList } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            {wishList.map((item, index) => {
              return <ProductHorizontal key={index} product={item} />;
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Wishlist.defaultProps = {
  productCount: 0,
  wishList: []
};

function mapStateToProps({ categoiresReducer, cartsReducer }) {
  return {
    productCount: categoiresReducer.productCount,
    wishList: cartsReducer.wishList
  };
}

function mapDispateToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispateToProps
)(Wishlist);
