import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Text
} from "react-native";
import styles from "./style";
import { Button, ItemShipping } from '@components'

import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";
import _ from "lodash";

class ShippingInfo extends React.Component {
  state = {
    shippingMethod: null
  };

  render() {
    let { shippingMethods, type } = this.props;
    const { shippingMethod } = this.state
    return (
      <SafeAreaView style={styles.container}>
        {shippingMethods.map((item, index) => <ItemShipping
          selected={_.isEqual(shippingMethod, item)}
          key={index}
          onPress={() => this.onSelectShippingMethod(item)}
          description={item.method_description}
          title={item.title} />)}
        <Button title={'Submit'} style={styles.btnSubmit} onPress={() => this.onSubmit()} />
      </SafeAreaView>
    );
  }

  renderItem = (item, index) => {
    const { shippingMethod } = this.state
    return (
      <TouchableOpacity
        onPress={() => this.onSelectShippingMethod(item)} style={[styles.item, _.isEqual(shippingMethod, item) && styles.selected]}
        key={index}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  onSelectShippingMethod = item => {
    this.setState({ shippingMethod: item });
  };

  onSubmit = () => {
    let { shippingMethod } = this.state
    if (shippingMethod) {
      this.props.setShippingMethod(shippingMethod);
      this.props.showPaymentMethods();
    } else {
      alert("Please choose shipping method");
      return
    }
  };
}

ShippingInfo.defaultProps = {
  shippingMethods: []
};

function mapStateToProps({ cartsReducer }) {
  return {
    shippingMethods: cartsReducer.shippingMethods
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShippingInfo);
