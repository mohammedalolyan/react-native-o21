import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./style";
import { Constants } from "@common";

import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";

class TabBarItem extends React.Component {
  render() {
    let { icon, tintColor, routeName, carts } = this.props;
    return (
      <View>
        <Image source={icon} style={[styles.icon, { tintColor }]} />
        {routeName == Constants.Screen.Cart &&
          carts.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.text}>{carts.length}</Text>
            </View>
          )}
      </View>
    );
  }
}

TabBarItem.defaultProps = {
  carts: []
};

function mapStateToProps({ cartsReducer }) {
  return {
    carts: cartsReducer.carts,
    reload: cartsReducer.reload
  };
}

function mapDispateToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispateToProps
)(TabBarItem);
