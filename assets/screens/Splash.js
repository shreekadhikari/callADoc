import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Slideshow from "../components/Slideshow";

function Splash() {
  return (
    <View style={styles.slideshow}>
      <Slideshow />
    </View>
  );
}

const styles = StyleSheet.create({
  slideshow: {
    height: "60%",
    width: "100%",
    flex: 1,
    top: 120,
    borderRadius: 25,
  },
});

export default Splash;
