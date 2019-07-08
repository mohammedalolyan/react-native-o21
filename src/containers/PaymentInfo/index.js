import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import styles from "./style";
import { Button, ItemPayment } from '@components'

import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";

import _ from "lodash";

class PaymentInfo extends React.Component {
  state = {
    paymentMethod: null
  };

  render() {
    let { paymentMethods, type } = this.props;
    const { paymentMethod } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <FlatList
            keyExtractor={(item, index) => `${index}`}
            data={paymentMethods}
            extraData={this.state}
            renderItem={({ item, index }) => <ItemPayment
              onPress={() => this.onSelectPaymentMethod(item)}
              selected={paymentMethod && paymentMethod.id == item.id}
              item={item} key={index} />}
          />
        </View>
        <View style={styles.action}>
          <Button title={'Submit'}
            loading={type == ActionTypes.CREATE_ORDER_PENDING}
            style={styles.btnSubmit} onPress={() => this.onSubmit()} />
        </View>
      </SafeAreaView>
    );
  }

  renderItem = (item, index) => {
    const { paymentMethod } = this.state
    return (
      <TouchableOpacity
        onPress={() => this.onSelectPaymentMethod(item)}
        style={[
          styles.item,
          (paymentMethod && paymentMethod.id == item.id) && styles.selected
        ]}
        key={index} activeOpacity={0.85}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  onSelectPaymentMethod = item => {
    this.setState({ paymentMethod: item });
  };

  onSubmit = () => {
    let { paymentMethod } = this.state;
    let { shippingAddress, carts, shippingMethod, customerInfo } = this.props;

    if (paymentMethod == null) {
      alert("Please choose payment method.");
      return;
    }
    var line_items = [];
    carts.forEach(item => {
      line_items.push({
        product_id: item.id,
        quantity: item.qty
      });
    });

    var data = {
      payment_type: "",
      payment_method: paymentMethod.id,
      payment_method_title: paymentMethod.title,
      set_paid: false,
      billing: shippingAddress,
      shipping: shippingAddress,
      line_items: line_items,
      shipping_lines: [
        {
          method_id: shippingMethod.id,
          method_title: shippingMethod.title
        }
      ],
      customer_id: customerInfo.id
    };

    this.props.createOrder(data);
  };

  componentWillReceiveProps(props) {
    if (props.type == ActionTypes.CREATE_ORDER_FAILED) {
      alert(props.message);
    }

    if (props.type == ActionTypes.CREATE_ORDER_SUCCESS) {
      alert("Done ! Thank you for your order.");
      this.props.showCarts();
    }
  }

  componentDidMount() {
    this.props.getPaymentMethods();
  }
}

PaymentInfo.defaultProps = {
  paymentMethods: []
};

function mapStateToProps({ cartsReducer, usersReducer }) {
  return {
    carts: cartsReducer.carts,
    type: cartsReducer.type,
    message: cartsReducer.message,
    paymentMethods: cartsReducer.paymentMethods,
    shippingAddress: cartsReducer.shippingAddress,
    shippingMethod: cartsReducer.shippingMethod,
    customerInfo: usersReducer.customerInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentInfo);
