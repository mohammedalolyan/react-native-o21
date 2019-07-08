import React from "react";
import { ShippingAddress } from "@containers";
import { Constants } from '@common'
import { IconLeft } from '@components'

class ShippingAddressScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Shipping Address",
    headerLeft: <IconLeft onPress={() => navigation.goBack()} />
  });

  render() {
    const { navigation } = this.props;
    return (
      <ShippingAddress
        navigation={navigation}
        showShippingMethod={() => navigation.navigate(Constants.Screen.ShippingInfo)}
      />
    );
  }
}

export default ShippingAddressScreen;
