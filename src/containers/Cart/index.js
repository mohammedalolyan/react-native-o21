import React, { Component } from "react";
import { FlatList, View, Text, Image } from "react-native";
import { Icons, Config } from "@common";
import { AddButton, CartItem, Button } from "@components";
import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";

import styles from "./style";

class Cart extends Component {
  isLogin = false;

  render() {
    let { carts } = this.props;
    let total = this.getTotal();
    return (
      <View style={styles.container}>
        <View style={styles.topText}>
          <Text style={styles.greyText}>
            {carts.length} item(s) : Total (excluding delivery) {"   "}
          </Text>
          <Text style={styles.price}>
            {Config.currencySymbol}
            {total}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {(carts && carts.length) > 0 ? (
            <FlatList
              contentContainerStyle={styles.listCarts}
              keyExtractor={(item, index) => `${index}`}
              data={carts}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item, index }) => (
                <CartItem
                  key={index}
                  item={item}
                  onDelete={this.deleteFromCart}
                />
              )}
            />
          ) : (
            <View style={styles.cartEmpty}>
              <Image
                source={Icons.sadiIcon}
                style={{ width: 50, height: 50, marginBottom: 20 }}
              />
              <Text>YOUR CART IS EMPTY !</Text>
            </View>
          )}
        </View>
        {(carts && carts.length) > 0 && (
          <View style={styles.action}>
            <AddButton title="CHECKOUT" onPress={() => this.checkout()} />
          </View>
        )}
      </View>
    );
  }

  getTotal = () => {
    let { carts } = this.props;
    var total = 0;
    carts.forEach(item => {
      total += item.price * item.qty;
    });
    return total;
  };

  deleteFromCart = item => {
    this.props.deleteFromCart(item);
  };

  deleteAll = () => {
    this.props.deleteAll();
  };

  checkout = () => {
    const { customerInfo, onShowShippingAddress, onLogin, carts } = this.props;
    if (customerInfo) {
      if (carts && carts.length > 0) {
        this.isLogin = false;
        onShowShippingAddress();
      }
    } else {
      this.isLogin = true;
      onLogin();
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.type == ActionTypes.SIGN_IN_SUCCESS && this.isLogin == true) {
      this.isLogin = false;
      this.props.onShowShippingAddress();
    }
  };
}

Cart.defaultProps = {
  carts: [],
  customerInfo: false
};

function mapStateToProps({ cartsReducer, usersReducer }) {
  return {
    carts: cartsReducer.carts,
    reload: cartsReducer.reload,
    customerInfo: usersReducer.customerInfo,
    type: usersReducer.type
  };
}

function mapDispateToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispateToProps
)(Cart);
