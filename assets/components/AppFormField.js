import React from "react";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "./AppTextInput";
import { StyleSheet, View } from "react-native";

function AppFormField({ name, ...otherProps }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <React.Fragment>
      <View style={styles.forView}>
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={handleChange(name)}
          {...otherProps}
          style={styles.textinput}
        />
      </View>

      <ErrorMessage 
      error={errors[name]} 
      visible={touched[name]}
      style={styles.errorText} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  forView: {
    borderColor: "#eee",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 10,
  },
  textinput: {
    fontSize: 18,
    flex: 1,
  },
});

export default AppFormField;
