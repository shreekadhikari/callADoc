import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Platform,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import colors from "../config/colors";
import Icon from "react-native-vector-icons/Ionicons";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";

const listings = [
  {
    id: 1,
    image: require("../doctor.png"),
    text: "Your Appointments",
  },
  {
    id: 2,
    image: require("../hospital.png"),
    text: "Patient record",
  },
  {
    id: 3,
    image: require("../ambulance.png"),
    text: "Ambulance",
  },
  {
    id: 4,
    image: require("../coronavirus.png"),
    text: "  Diseases",
  },
  {
    id: 5,
    image: require("../pharmacy.png"),
    text: "Pharmacy",
  },
  {
    id: 6,
    image: require("../thermometer.png"),
    text: "Temperature",
  },
];

const speciality = [
  {
    id: 1,
    image: require("../pediatrics.png"),
    text: " Pediatrics",
  },
  {
    id: 2,
    image: require("../x-ray.png"),
    text: " Radiology",
  },
  {
    id: 3,
    image: require("../tooth.png"),
    text: "    Dentist",
  },
  {
    id: 4,
    image: require("../more.png"),
    text: "  Others",
  },
];

const WIDTH = Dimensions.get("window").width;

function UserHome(props) {
  _renderItemListing = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity>
          <Image style={styles.imageGrid} source={item.image} />
          <Text>{item.text}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.main}>
      <View>
        <ImageBackground
          source={require("../backgroundImage.jpg")}
          style={styles.image}
        >
          <Text style={styles.headerText}>Hi Doc,</Text>
          <Text style={styles.headerText2}>You've some patients waiting!</Text>
          <View style={styles.searchContainer}>
            <AppTextInput
              placeholder="Search"
              icon="magnify"
              style={{ fontSize: 18, marginLeft: 12 }}
            />
          </View>
        </ImageBackground>
      </View>

      <View style={styles.gridcontainer}>
        <FlatList
          data={listings}
          renderItem={_renderItemListing}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3} //{numColumns}
        />
      </View>

      <View style={styles.speciality}>
        <AppText
          style={{
            padding: 15,
            color: colors.dark,
            fontSize: 21,
            fontWeight: "bold",
          }}
        >
          Speciality
        </AppText>
        <FlatList
          data={speciality}
          renderItem={_renderItemListing}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4} //{numColumns}
        />
      </View>

      <View>
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

  gridcontainer: {
    flex: 1,
    paddingTop: 35,
  },

  item: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 0.1,
    marginBottom: -10,
    height: WIDTH / 3,
  },
  speciality: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 10,
    justifyContent: "center",
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
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
    fontWeight: "normal",
    paddingStart: 10,
  },
  headerText2: {
    fontSize: 24,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.white,
    fontWeight: "bold",
    padding: 10,
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
  imageGrid: {
    width: 70,
    height: 70,
  },
});

export default UserHome;
