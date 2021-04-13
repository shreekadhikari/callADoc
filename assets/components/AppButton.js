import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function AppButton({onPress, title}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        width:'100%',
        height:50,
        padding:10,
        marginVertical:10,
        borderRadius:25,
        backgroundColor: colors.primary,
        justifyContent:'center',
        alignItems:'center', 
        //flexDirection:'row',
        //flex:1,
    },

    text:{
        color:colors.white,
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold'
    }
})

export default AppButton;