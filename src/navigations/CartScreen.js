import React, { Component } from "react";
import { Cart } from "@containers";
import { Constants } from '@common'

class CartScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: "CART"
  })

  render() {
    const { navigation } = this.props
    return (
      <Cart
        navigation={navigation}
        onShowShippingAddress={() => navigation.navigate(Constants.Screen.ShippingAddress)}
        onLogin={() => navigation.navigate(Constants.Screen.SignIn)}
      />
    );
  }
}

export default CartScreen;
