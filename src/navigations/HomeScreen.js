import React, { Component } from "react";
import { Home } from "@containers";
import { AppLogo } from "@components";
import { Constants } from "@common";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <AppLogo />
  });
  render() {
    let { navigation } = this.props;
    return (
      <Home
        navigation={navigation}
        openProductDetail={category =>
          navigation.navigate(Constants.Screen.ProductDetail, { category })
        }
      />
    );
  }
}

export default HomeScreen;
