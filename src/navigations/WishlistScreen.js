import React, { Component } from "react";
import { Wishlist } from "@containers";
import { AppLogo } from "@components";

class WishlistScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <AppLogo />
  });
  render() {
    return <Wishlist />;
  }
}

export default WishlistScreen;
