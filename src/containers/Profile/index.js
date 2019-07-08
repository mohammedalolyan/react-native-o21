import React, { Component } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";

import styles from "./style";

class Profile extends Component {
  render() {
    let { onLogin, customerInfo } = this.props;
    let isLoggedIn = customerInfo && customerInfo.id;
    return (
      <View style={styles.container}>
        {isLoggedIn && (
          <View>
            <Text style={styles.name}>{customerInfo.displayname}</Text>
            <TouchableOpacity style={styles.btnLogin} onPress={this.logout}>
              <Text style={styles.text}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
        {!isLoggedIn && (
          <TouchableOpacity style={styles.btnLogin} onPress={onLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  logout = () => {
    this.props.logout();
  };
}

function mapStateToProps({ usersReducer }) {
  return {
    customerInfo: usersReducer.customerInfo
  };
}

function mapDispateToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispateToProps
)(Profile);
