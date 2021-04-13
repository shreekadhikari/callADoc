import React from 'react';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
            <ImageBackground 
                source={require('../backgroundImage.jpg')}
                style = {styles.background} blurRadius={5}
            >
                <View style = {styles.logoContainer}>
                    <Image 
                        source={require('../logo.jpg.png')} 
                        style={styles.logo} 
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title='Login'/>
                    <AppButton title='Register' />
                </View> 
            </ImageBackground>  
    );
}

const styles = StyleSheet.create({
    background : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: colors.white,
    },

    buttonContainer:{
        width:'100%',
        padding:20,
        position: 'absolute',
        bottom: 40,
        
    },

    logo:{
        height: 100,
        width: 100,
        top: 80,
    },

    logoContainer:{
        position: 'absolute',
        top:100,
        alignItems:"center"
    },
})

export default WelcomeScreen;