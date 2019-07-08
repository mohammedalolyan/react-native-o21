import React from "react";
import { View, SafeAreaView, Text, Image } from "react-native";
import { Input, Button } from "@components";
import styles from "./style";
import { Utils, Global, Constants, Icons } from "@common";

import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";

class SignIn extends React.Component {
  state = {
    username: "",
    password: ""
  };
  isLogging = false;

  render() {
    let { onSignUp, goBack, type, onForgotPass } = this.props;
    const { username, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoView}>
          <Image source={Icons.appLogo} />
        </View>
        <View style={styles.content}>
          <Input
            style={styles.input}
            autoCapitalize={"none"}
            placeholder={"Username"}
            value={username}
            onChangeText={username => this.setState({ username })}
          />
          <View style={styles.separator} />
          <Input
            style={styles.input}
            secureTextEntry={true}
            placeholder={"Password"}
            value={password}
            onChangeText={password => this.setState({ password })}
          />
          <Button
            title={"Sign In"}
            loading={type == ActionTypes.SIGN_IN_PENDING}
            style={styles.btnLogin}
            onPress={() => this.signIn()}
          />
          <View style={styles.msgView}>
            <Text style={styles.text1}>{"Do you have account?"}</Text>
            <Text style={styles.signUp} onPress={onSignUp}>
              {"Sign Up"}
            </Text>
          </View>
          <Button
            title={"Forgot Password?"}
            style={styles.btnForget}
            onPress={onForgotPass}
          />
        </View>
      </SafeAreaView>
    );
  }

  signIn = () => {
    let { username, password } = this.state;
    if (!Utils.isNotEmpty(username) || !Utils.isNotEmpty(password)) {
      alert("Please enter username and password");
      return;
    }
    this.isLogging = true;
    this.props.signIn(username, password);
  };

  componentDidMount() {}

  componentWillReceiveProps = nextProps => {
    if (nextProps.type == ActionTypes.SIGN_IN_FAILED) {
      this.isLogging = false;
      alert(nextProps.message);
    }
    if (nextProps.type == ActionTypes.SIGN_IN_SUCCESS && this.isLogging) {
      var name = "";
      let customerInfo = nextProps.customerInfo;
      if (
        customerInfo &&
        customerInfo.first_name != undefined &&
        customerInfo.first_name != "" &&
        customerInfo.last_name != undefined &&
        customerInfo.last_name != ""
      ) {
        name = customerInfo.first_name + " " + customerInfo.last_name;
      } else if (customerInfo) {
        name = customerInfo.email;
      }
      this.isLogging = false;
      Global.EventEmitter.emit(
        Constants.EventEmitterName.showToast,
        "Welcome back " + name
      );
      this.props.goBack();
    }
  };
}

function mapStateToProps({ usersReducer }) {
  return {
    type: usersReducer.type,
    message: usersReducer.message,
    customerInfo: usersReducer.customerInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
