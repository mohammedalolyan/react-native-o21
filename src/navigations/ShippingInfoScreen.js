import React from "react";
import { ShippingInfo } from "@containers";
import { IconLeft } from '@components'

class ShippingInfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Shipping Methods",
    headerLeft: <IconLeft onPress={() => navigation.goBack()} />
  });

  render() {
    const { navigation } = this.props;
    return (
      <ShippingInfo
        navigation={navigation}
        showPaymentMethods={() => navigation.navigate("PaymentInfo")}
      />
    );
  }
}

export default ShippingInfoScreen;
