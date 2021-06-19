import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const imageSize = 100;

function DoctorDetail() {
  return (
    <View style={styles.body}>
      <View style={styles.image}>
        <Image
          source={require("../doctor.png")}
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: imageSize / 2,
          }}
        />
        <Text style={styles.doctorName}>Dr. Something Nothing</Text>
        <Text>Human Doctor, Somewhere</Text>
      </View>

      <View style={styles.doctorDetail}>
        <View style={styles.doctorDetailChild}>
          <Text>Patients</Text>
          <Text style={{ color: "red" }}>500 +</Text>
        </View>
        <View style={{ flex: 1 }}></View>
        <View style={styles.doctorDetailChild}>
          <Text>Experience</Text>
          <Text style={{ color: "red" }}>10 Years</Text>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={[
            styles.doctorDetailEducation,
            {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              width: 150,
            },
          ]}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Education</Text>
        </View>
        <View style={styles.whiteBar} />
        <View
          style={[
            styles.doctorDetailEducation,
            {
              width: 250,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
          ]}
        >
          <Text style={{ fontSize: 16 }}>MBBS: ABC College</Text>
        </View>

        <View style={styles.whiteBar} />
        <View
          style={[
            styles.doctorDetailEducation,
            {
              width: 250,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            },
          ]}
        >
          <Text style={{ fontSize: 16 }}>MS/MD: LLM College</Text>
        </View>
      </View>

      <View
        style={{
          padding: 10,
          width: 250,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <AppButton title="Book Appointment" />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Clinic Address
          </Text>
          <Text style={{ fontSize: 16 }}>Barake Strasse - 12</Text>
          <Text style={{ fontSize: 16 }}>39010, Magdeburg</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../appointment.png")}
            style={{
              width: imageSize,
              height: imageSize,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 20,
    padding: 40,
  },
  image: {
    alignItems: "center",
  },
  doctorName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  doctorDetail: {
    flexDirection: "row",
    padding: 20,
  },
  doctorDetailChild: {
    padding: 16,
    flex: 2,
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
  },
  doctorDetailEducation: {
    padding: 16,
    alignItems: "center",
    backgroundColor: colors.lightBlue,
  },
  whiteBar: {
    backgroundColor: colors.white,
    height: 2,
  },
});

export default DoctorDetail;
