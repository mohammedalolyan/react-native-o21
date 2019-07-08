import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import styles from "./style";
import { Button, Input } from "@components";
import { Global, Constants, Icons } from "@common";

import { connect } from "react-redux";
import { ActionCreators } from "@actions";
import { bindActionCreators } from "redux";
import * as ActionTypes from "@actions/ActionTypes";

class SignIn extends React.Component {
  state = {
    email: "",
    first_name: "",
    last_name: "",
    password: ""
  };

  render() {
    let { signUp, goBack, type } = this.props;
    const { first_name, last_name, email, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoView}>
          <Image source={Icons.appLogo} />
        </View>
        <View style={styles.content}>
          <Input
            style={styles.input}
            placeholder={"First name"}
            value={first_name}
            onChangeText={first_name => this.setState({ first_name })}
          />
          <Input
            style={styles.input}
            placeholder={"Last name"}
            value={last_name}
            onChangeText={last_name => this.setState({ last_name })}
          />
          <Input
            style={styles.input}
            autoCapitalize={"none"}
            placeholder={"Email"}
            value={email}
            onChangeText={email => this.setState({ email })}
          />
          <Input
            style={styles.input}
            secureTextEntry={true}
            placeholder={"Password"}
            value={password}
            onChangeText={password => this.setState({ password })}
          />
          <Button
            title={"Sign Up"}
            loading={type == ActionTypes.SIGN_UP_PENDING}
            style={styles.btnSignUp}
            onPress={() => this.signUp()}
          />
        </View>
      </SafeAreaView>
    );
  }

  signUp = () => {
    const { first_name, last_name, email, password } = this.state;
    this.props.signUp(first_name, last_name, email, password);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.type == ActionTypes.SIGN_UP_FAILED) {
      alert(nextProps.message);
    }
    if (nextProps.type == ActionTypes.SIGN_UP_SUCCESS) {
      Global.EventEmitter.emit(
        Constants.EventEmitterName.showToast,
        "Resigter user successfully!"
      );
      this.props.goBack();
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
