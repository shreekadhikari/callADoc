import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import {Formik} from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../components/ErrorMessage';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppForm from '../components/AppForm';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            
            <Image source={require('../logo.jpg.png')} style={styles.logo}/>
            <AppForm 
                initialValues={{email:'',password:''}}
                onSubmit= {values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField        
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name="email"
                    placeholder='Email'
                    textContentType="emailAddress"
                />
                <AppFormField 
                    autoCapitalize='none' 
                    autoCorrect={false}
                    icon='lock'
                    name="password"
                    placeholder='Password' 
                    secureTextEntry={true}
                    textContentType="password"
                />
                <SubmitButton title='Login'/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },

    logo:{
        width:80,
        height:80,
        alignSelf: 'center',
        marginTop:50,
        marginBottom:20,
    },
})
export default LoginScreen;