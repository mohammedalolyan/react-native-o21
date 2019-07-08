import React, { Component } from "react";
import { ProductsByCategory } from "@containers";
import { IconLeft } from "@components";
import { Constants } from '@common'

class ProductsByCategoryScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "NEW IN",
    headerLeft: <IconLeft onPress={() => navigation.goBack()} />
  });
  render() {
    const { navigation } = this.props
    return <ProductsByCategory
      navigation={this.props.navigation}
      showDetail={(product) => navigation.navigate(Constants.Screen.ProductDetail, { product })} />;
  }
}

export default ProductsByCategoryScreen;
