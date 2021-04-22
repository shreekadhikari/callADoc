import React from 'react';

import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import AppText from './AppText';

function SlideshowItems({item}) {
    const {width} = useWindowDimensions();

    return (
        <View style={[styles.container, {width}]}>
            <Image 
                source={item.image}
                style={[styles.image, {width, resizeMode: 'contain'}]}
            />

            <View style={{flex:0.3}}>
                <AppText title={item.title}/>
                <AppText title={item.description}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },

    image:{
        flex:0.7,
        justifyContent:'center',
    }
})

export default SlideshowItems;