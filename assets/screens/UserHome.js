import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Platform,
  Image,
} from "react-native";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/Ionicons";
import AppTextInput from "../components/AppTextInput";

function HomePage(props) {
  return (
    <View style={styles.main}>
      <View>
        <ImageBackground
          source={require("../backgroundImage.jpg")}
          style={styles.image}
        >
          <Text style={styles.headerText}>Hi user,</Text>
          <View style={styles.searchContainer}>
            <AppTextInput
              placeholder="Find a Doctor"
              icon="magnify"
              style={{ fontSize: 18, marginLeft: 12 }}
            />
          </View>
        </ImageBackground>
      </View>
      <View>
        <View style={styles.images}>
          <TouchableOpacity>
            <Image
              source={require("../bookAppointment.jpg")}
              style={{
                width: "30%",
                height: 100,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../bookAppointment.jpg")}
              style={{
                width: "30%",
                height: 100,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <Icon name="home" style={styles.icon} />
            <Text style={styles.text}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="analytics" style={styles.icon} />
            <Text style={styles.text}>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="planet" style={styles.icon} />
            <Text style={styles.text}>Anything</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="person" style={styles.icon} />
            <Text style={styles.text}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    width: "100%",
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    position: "absolute",
    bottom: -25,
    borderRadius: 25,
  },
  main: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  icon: {
    color: colors.primary,
    fontSize: 24,
  },

  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
  headerText: {
    fontSize: 28,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
    fontWeight: "bold",
    paddingStart: 10,
  },
  image: {
    width: "100%",
    height: 200,
    justifyContent: "center",
  },
  images: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "78.5%",
    width: "100%",
    paddingStart: 10,
  },
});

export default HomePage;
