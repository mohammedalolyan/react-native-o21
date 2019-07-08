import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";
import { Icons, Constants, Global, Utils } from "@common";
import { ProductItem, ItemLoading, Shop } from "@components";
import styles from "./style";

class Search extends Component {
  index = 1;
  searchListener = null;
  text = '';


  render() {
    let { products, type, showDetail } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {
          type == ActionTypes.FETCH_PRODUCTS_PENDING ?
            <ItemLoading />
            :
            <FlatList
              keyExtractor={(item, index) => `${index}`}
              data={products}
              contentContainerStyle={styles.list}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => (
                <ProductItem item={item} onPress={() => showDetail(item)} />
              )}
              numColumns={2}
            />
        }
      </SafeAreaView>
    );
  }

  onLoadMore = () => {
    this.index = this.index + 1
    this.props.search(this.text, this.index)
  }


  componentDidMount = () => {
    this.searchListener = Global.EventEmitter.addListener(Constants.EventEmitterName.onSearch, this.onSearchProduct)
  };

  onSearchProduct = (text) => {
    if (!Utils.isNotEmpty(text)) {
      return
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.text = text
      this.props.search(text, this.index)
    }, 1000)
  }

  componentWillUnmount = () => {
    if (this.searchListener) {
      this.searchListener.remove()
    }
  }

}
Search.defaultProps = {
  products: []
};

function mapStateToProps({ productsReducer }) {
  return {
    products: productsReducer.products,
    type: productsReducer.type
  };
}

function mapDispateToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispateToProps
)(Search);
