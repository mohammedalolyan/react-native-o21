import React from "react";
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  AsyncStorage,
  I18nManager,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";
import styles from "./style";

import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";

class SignIn extends React.Component {
  state = {
    username: ""
  };

  render() {
    let { onSignUp, goBack, type } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.btnLogin} onPress={this.forgotPass}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  forgotPass = () => {
    let { username } = this.state;
    this.props.forgotPass(username);
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.type == ActionTypes.FORGOT_PASS_FAILED ||
      nextProps.type == ActionTypes.FORGOT_PASS_SUCCESS
    ) {
      alert(nextProps.message);
    }
  }
}

function mapStateToProps({ usersReducer }) {
  return {
    type: usersReducer.type,
    message: usersReducer.message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
