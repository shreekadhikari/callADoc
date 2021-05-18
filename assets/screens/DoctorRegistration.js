import React from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  confirmPassword: Yup.string().required().min(4).label("Password"),
  firstName: Yup.string().required().label("First name"),
  familyName: Yup.string().required().label("Surname"),
  phonenumber: Yup.string().required().label("Phone Number"),
  doctorLiscenceNo: Yup.string().required().label("Doctor Liscence No"),
  speciality: Yup.string().required().label("Speciality"),
  location: Yup.string().required().label("Location"),
});

function DoctorRegistration(props) {
  return (
    <Screen style={{marginTop: 5}}>
      <ScrollView style={styles.body}>
        <View style={styles.top}>
          <Image source={require("../userImage.png")} style={styles.image} />
        </View>
        <View style={styles.container}>
          <AppForm
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              middleName: "",
              familyName: "",
              phonenumber: "",
              confirmPassword: "",
              doctorLiscenceNo: "",
              speciality: "",
              location: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              keyboardType="email-address"
              name="firstName"
              placeholder="First name"
              textContentType="givenName"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              keyboardType="email-address"
              name="familyName"
              placeholder="Surname"
              textContentType="familyName"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="emailAddress"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="phone"
              keyboardType="phone-pad"
              name="phonenumber"
              placeholder="Phone number"
              textContentType="telephoneNumber"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="confirmPassword"
              placeholder="Confirm password"
              secureTextEntry={true}
              textContentType="password"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="card"
              keyboardType="email-address"
              name="doctorLiscenceNo"
              placeholder="Liscence No"
              textContentType="familyName"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              keyboardType="email-address"
              name="speciality"
              placeholder="Speciality"
              textContentType="familyName"
            />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="home"
              keyboardType="email-address"
              name="location"
              placeholder="Location"
              textContentType="familyName"
            />
            <SubmitButton title="Sign Up" style={styles.button} />
          </AppForm>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 30,
  },
  body:{
     padding: 40 
  },
  container: {
    marginBottom: 50,
    },
  top: {
    height: 150,
  },
});

export default DoctorRegistration;
