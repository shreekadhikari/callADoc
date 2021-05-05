import React, {useState, useRef} from 'react';
import { FlatList, View, StyleSheet, Animated } from 'react-native';
import slides from '../slides';
import Sliderpaginator from './Sliderpaginator';
import SlideshowItems from './SlideshowItems';
//import * as Animatable from 'react-native-animatable';

function Slideshow(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollx = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

    return (
        <View style={styles.container}>
            <View style={{flex:3}}>
                <FlatList 
                    data={slides}
                    renderItem={({ item }) => <SlideshowItems item={item}/>}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll=
                        {Animated.event([{nativeEvent:{contentOffset:{x:scrollx}}}],{
                            useNativeDriver: false,
                        })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef} 
                />
            </View>

            <Sliderpaginator data={slides} scrollX={scrollx}/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        
    }
})

export default Slideshow;