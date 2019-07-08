import React from "react";
import { PaymentInfo } from "@containers";
import { IconLeft } from "@components";
import { Icons } from "@common";

class PaymentInfoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Payment Methods",
    headerLeft: <IconLeft onPress={() => navigation.goBack()} />
  });

  render() {
    const { navigation } = this.props;
    return (
      <PaymentInfo
        navigation={navigation}
        showCarts={() => navigation.popToTop()}
      />
    );
  }
}

export default PaymentInfoScreen;
