import React from "react";
import { View, Image } from "react-native";
import styles from "./style";
import { Icons } from "@common";

const AppLogo = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={Icons.appLogo} style={styles.image} />
    </View>
  );
};

export default AppLogo;
