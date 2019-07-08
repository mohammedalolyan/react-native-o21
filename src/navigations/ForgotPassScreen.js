import React from "react";
import { ForgotPass } from "@containers";
import { IconLeft } from "@components";
import { Icons, Constants } from "@common";

class SignUpScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: <IconLeft onPress={() => navigation.goBack()} />
  });

  render() {
    const { navigation } = this.props;
    return (
      <ForgotPass navigation={navigation} goBack={() => navigation.goBack()} />
    );
  }
}

export default SignUpScreen;
