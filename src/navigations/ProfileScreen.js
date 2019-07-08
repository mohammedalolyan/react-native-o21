import React, { Component } from "react";
import { Profile } from "@containers";
import { AppLogo } from "@components";
import { Constants } from "@common";

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <AppLogo />
  });
  render() {
    return (
      <Profile
        onLogin={() => this.props.navigation.navigate(Constants.Screen.SignIn)}
      />
    );
  }
}

export default ProfileScreen;
