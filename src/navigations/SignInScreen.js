import React from "react";
import { SignIn } from "@containers";
import { IconLeft } from "@components";
import { Icons, Constants } from "@common";

class SignInScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Sign In",
    headerLeft: <IconLeft onPress={() => navigation.goBack()} />
  });

  render() {
    const { navigation } = this.props;
    return (
      <SignIn
        navigation={navigation}
        onForgotPass={() => navigation.navigate(Constants.Screen.ForgotPass)}
        onSignUp={() => navigation.navigate(Constants.Screen.SignUp)}
        goBack={() => navigation.goBack()}
      />
    );
  }
}

export default SignInScreen;
