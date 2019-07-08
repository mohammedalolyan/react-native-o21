import React from "react";
import { SignUp } from "@containers";
import { IconLeft } from "@components";
import { Icons, Constants } from "@common";

class SignUpScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sign Up',
    headerLeft: <IconLeft onPress={() => navigation.goBack()} />
  });

  render() {
    const { navigation } = this.props;
    return (
      <SignUp
        navigation={navigation}
        showHome={() => navigation.navigate(Constants.Screen.Home)}
        goBack={() => navigation.goBack()}
      />
    );
  }
}

export default SignUpScreen;
