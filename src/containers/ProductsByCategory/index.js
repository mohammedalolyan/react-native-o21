import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";
import { ProductItem, TopDivider, ItemLoading, SubCategories } from "@components";
import styles from "./style";

class ProductsByCategory extends Component {
  state = {
    index: 1
  }
  categorySelected = {
    id: -1,
    name: 'All'
  }

  render() {
    let { products, subCategories, typeProduct, showDetail } = this.props;
    return (
      <View style={styles.container}>
        <SubCategories categories={subCategories} onSelectItem={(item) => this.onSelectSubCategory(item)} />
        {/* <TopDivider leftText="SORT" rightText="REFINE" /> */}
        {
          typeProduct === ActionTypes.FETCH_PRODUCTS_PENDING &&
          <ItemLoading />
        }
        {
          (typeProduct === ActionTypes.FETCH_PRODUCTS_SUCCESS && products.length > 0) &&
          <View style={styles.container}>
            <FlatList
              contentContainerStyle={styles.list}
              keyExtractor={(item, index) => `${index}`}
              data={products}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item, index }) => (
                <ProductItem item={item} onPress={() => showDetail(item)} />
              )}
              numColumns={2}
            />
          </View>
        }
      </View>
    );
  }

  onLoadMore = () => {
    if (this.props.isMore) {
      const { index } = this.state
      let page = index + 1
      this.setState({ index: page }, () => {
        if (this.categorySelected.id == -1) {
          let { selectedCategory } = this.props
          this.props.getProducts(selectedCategory.id, page)
        } else {
          this.props.getProducts(this.categorySelected.id, page)
        }
      })
    }
  }

  onSelectSubCategory = (item) => {
    this.props.selectSubCategory(item)
    if (item.id == -1) {
      let { selectedCategory } = this.props;
      this.props.getProducts(selectedCategory.id, 1)
    } else {
      this.props.getProducts(item.id, 1)
    }
  }

  componentWillMount() {
    let { selectedCategory } = this.props;
    const { index } = this.state
    this.props.getProducts(selectedCategory.id, index);
    this.props.getSubCategories(selectedCategory.id);
  }


  componentWillReceiveProps = (nextProps) => {
    if (nextProps.type == ActionTypes.GET_SUBCATEGORIES_FAIL) {
      alert(nextProps.message)
    }
  }
}

ProductsByCategory.defaultProps = {
  products: [],
  subCategories: []
};

function mapStateToProps({ productsReducer, categoiresReducer }) {
  return {
    products: productsReducer.products,
    selectedCategory: categoiresReducer.selectedCategory,
    message: categoiresReducer.message,
    type: categoiresReducer.type,
    subCategories: categoiresReducer.subCategories,
    typeProduct: productsReducer.type,
    isMore: productsReducer.isMore
  };
}

function mapDispateToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispateToProps
)(ProductsByCategory);
