import React, { Component } from "react";
import { ProductDetail } from "@containers";
import { IconLeft } from "@components";

class ProductDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.state.params.product.name}`,
    headerLeft: <IconLeft onPress={() => navigation.goBack()} />
  });
  render() {
    return <ProductDetail navigation={this.props.navigation} />;
  }
}

export default ProductDetailScreen;
