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
  confirmPassword: Yup.string().required().min(4).label("Confirming Password"),
  firstName: Yup.string().required().label("First name"),
  familyName: Yup.string().required().label("Surname"),
  phonenumber: Yup.string().required().label("Phone Number"),
});

function UserRegistration(props) {
  return (
    <Screen style={{ padding: 10 }}>
      <ScrollView>
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
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              keyboardType="default"
              name="firstName"
              placeholder="First name"
              textContentType="givenName"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              keyboardType="default"
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
            <SubmitButton title="Sign Up" />
          </AppForm>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    //padding:5,
    height: "80%",
    marginVertical: 0,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  top: {
    height: "15%",
  },
});

export default UserRegistration;
