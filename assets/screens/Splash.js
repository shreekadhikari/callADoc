import React from "react";
import LoginScreen from './Login'

import { StyleSheet, View, ImageBackground } from "react-native";
import AppButton from "../components/AppButton";
import Slideshow from "../components/Slideshow";
import colors from "../config/colors";

function Splash() {
  return (
    <ImageBackground
      source={require("../backgroundImage.jpg")}
      style={styles.background}
    >
      <View>
        <View style={styles.slideshow}>
          <Slideshow />
        </View>
        <View style={styles.button}>
          <AppButton title={"Get Started"}></AppButton>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideshow: {
    height: "60%",
    width: "100%",
    flex: 1,
    top: 120,
  },
  button: {
    width: "50%",
    alignSelf: 'center',
    position: "absolute",
    bottom: 80,
  },
});

export default Splash;
