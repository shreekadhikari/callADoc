import React from "react";
import {
  Image,
  Alert,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../backgroundImage.jpg")}
        style={styles.background}
      >
        <View style={styles.content}>
          <Image source={require("../logo.jpg.png")} style={styles.logo} />
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              keyboardType="email-address"
              name="email"
              placeholder="Username"
              textContentType="emailAddress"
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
            <SubmitButton title="Login" />
          </AppForm>
          <View style={styles.register}>
            <Text
              style={{
                color: "#000",
                fontSize: 16,
              }}
            >
              Don't have an account?
              <TouchableOpacity
                onPress={() =>
                  Alert.alert("Select a profile", "What are you?", [
                    {
                      text: "Doctor",
                      icon: "lock",
                      onPress: () => console.log("connect the Dr Reg page"),
                    },
                    {
                      text: "User",
                      onPress: () => console.log("connect the user Reg page"),
                    },
                  ])
                }
              >
                <Text
                  style={{
                    color: "#4ecdc4",
                    fontWeight: "bold",
                    // fontSize: 16,
                  }}
                >
                  &nbsp;&nbsp;Sign up
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
          <AppText>NB: We have to implement Login with fingerprint</AppText>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  background: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: "center",
    paddingBottom: 40,
  },
  content: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  register: {},
});
export default LoginScreen;
