import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';
import NumberSelector from "../Timer/index";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { GestureDetector, Gesture } from "react-native-gesture-handler"
import Animated, { useSharedValue, withSpring, withTiming, runOnJS, useAnimatedStyle } from "react-native-reanimated"

type Props = {
    onClose: () => void;
}

export default function Sheet ({onClose}: Props){
    const offset = useSharedValue(0)

    function close(){
        offset.value = 0
        onClose()
    }

    const pan = Gesture.Pan().onChange((event) => {
        const offsetDelta = event.changeY + offset.value
        const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta)

        offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp)
    }).onFinalize(() => {
        if(offset.value < SHEET_HEIGHT / 3){
            offset.value = withSpring(0)
        }else{
            offset.value = withTiming(SHEET_HEIGHT, {}, () =>{
                runOnJS(close)()
            })
        }
    })

    const translateY = useAnimatedStyle(() =>({
        transform: [{translateY: offset.value}]
    }))

    return(
        <GestureDetector gesture={pan}>
            <Animated.View style={[styles.container, translateY]}>
                <MaterialCommunityIcons
                    name="drag-horizontal"
                    color="#999"
                    size={24}
                    style={styles.DragIcon}
                />
                <AdMobBanner
                    bannerSize="banner"
                    adUnitID="ca-app-pub-3940256099942544/63009781122"
                />
                <NumberSelector />
            </Animated.View>
        </GestureDetector>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    DragIcon: {
        marginBottom: 10,
    },
});