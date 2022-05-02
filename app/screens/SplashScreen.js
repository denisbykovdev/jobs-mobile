import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import { icons, images } from "../configs/imagesAndIconsUrl";
import AnimatedProgressWheel from 'react-native-progress-wheel';
import layout, { responsiveWidth, responsiveHeight } from '../utils/layout';
import { LogoChosenBigVertical } from '../icons/LogoChosenBigVertical';
import Constants from 'expo-constants'

const SplashScreen = ({ timer }) => {
    return (
        <ImageBackground
            resizeMode={"contain"}
            resizeMethod={"resize"}
            source={images.splashBg} 
            style={styles.bgImage}
        >
            <View style={styles.logoPart}>
                {/* <ImageBackground
                    resizeMode={"contain"}
                    // resizeMethod={"resize"}
                    source={icons.Logo}
                    style={styles.logo}
                /> */}
                <LogoChosenBigVertical />
            </View>
            <View style={styles.loaderPart}>
                <Text style={styles.bigTitle}>מיד נתחיל</Text>
                <View style={styles.loader}>
                    <View style={{ transform: [{ rotate: '-90deg' }] }}>
                        <AnimatedProgressWheel
                            size={76}
                            width={7}
                            color={'#30b8b2'}
                            progress={timer}
                            // duration={100}
                            backgroundColor={'#a2acca'}
                            animateFromValue={1}
                        />
                    </View>
                    <View style={{ bottom: "50%" }}>
                        <Text style={styles.loaderPercent}>{timer}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        height: layout.height,
        // flex:1,
        width: layout.width,
        // position: "absolute",
        bottom: '-25%',
    },

    logoPart: {
        // position: "absolute",
        // top: -190,
        paddingHorizontal: "20%",
        // paddingTop:"30%"
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: responsiveWidth(120),
        height: responsiveHeight(80),
        // position:"absolute",
        // bottom:310
    },

    loaderPart: {
        // TODO: Changing options for responsive page.
        // marginTop: responsiveHeight(150),
        marginTop: responsiveHeight(120),
        alignItems: "center",
    },

    bigTitle: {
        color: "white",
        fontSize: 45,
        fontWeight: "bold"
    },

    smallTitle: {
        color: "white",
        fontSize: 24,
    },

    loader: {
        marginTop: "5%"
    },

    loaderPercent: {
        fontSize: 21,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },


});

export default SplashScreen
