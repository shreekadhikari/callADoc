import React from 'react';
import { Image, Alert, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Slideshow from '../components/Slideshow';
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
                <View style={styles.slideshow}>
                    <Slideshow />
                </View>

                <View style={styles.buttonContainer}>
                    <AppButton title='Login'/>
                </View> 

                <View style={styles.register}>
                    <Text>
                        <Text>Don't have an account?</Text>
                            <TouchableOpacity 
                                onPress={() => 
                                    Alert.alert(
                                        "Select a profile",
                                        "What are you?",
                                        [
                                            {text: "Doctor", onPress:()=> console.log("connect the Dr Reg page")},
                                            {text: "User", onPress:()=> console.log("connect the user Reg page")},
                                        ]
                                    )
                                }
                            >
                                <Text style={{
                                    color:"#4ecdc4", 
                                    fontWeight:'bold', 
                                    fontSize:16}}>&nbsp;&nbsp;Sign up
                                </Text>
                            </TouchableOpacity>
                        
                        
                    </Text>
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
        bottom: 80,      
    },

    logo:{
        height: 100,
        width: 100,
        top: 60,
    },

    logoContainer:{
        position: 'absolute',
        top:10,
        alignItems:"center"
    },
    register : {
        position:'absolute',
        bottom: 70,
        //alignContent:'center'
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    slideshow:{
        height:'60%',
        width:'100%',
        flex:1,
        top:120,
        borderRadius:25
    }    
})

export default WelcomeScreen;