import { Image, TouchableOpacity, StyleSheet, View, StatusBar } from "react-native";
import { icons } from "../configs/imagesAndIconsUrl";
import React, { useState } from "react";
import LogoHorizontal from "../icons/LogoHorizontal";
import ArrowBack from "../icons/ArrowBack";
import { LogoHorizontalWhite } from "../icons/LogoHorizontalWhite";
import MenuHeader from "../icons/MenuHeader";
import MenuHeaderWhite from "../icons/MenuHeaderWhite";
import useStatusBar from "../hooks/useStatusBar";
import colors from "../utils/colors";
import Constants from 'expo-constants'
import { useNavigation } from "@react-navigation/native";
import { responsiveWidth } from "../utils/layout";
// import Constants from 'expo-constants'

const Header = ({
    whiteHeader,
    visibleBackArrow,
    visibleMenuButton = true,
    headerStyle
}) => {

    useStatusBar(
        !whiteHeader
            ?
            `'dark-content', ${colors.whiteTwo}`
            :
            `'light-content','transparent'`
    )

    const navigation = useNavigation()

    return (
        <View
            style={[{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                height: responsiveWidth(40),
                // paddingTop: Constants.statusBarHeight,
                backgroundColor: !whiteHeader
                    ? colors.whiteTwo
                    : 'transparent'
            },
                headerStyle
            ]}
        >
            {
                visibleMenuButton
                &&
                <TouchableOpacity
                    onPress={() => navigation.navigate("HeaderMenu")}
                    style={{
                        position: 'absolute',
                        left: 0
                    }}
                >
                    {
                        !whiteHeader
                            ?
                            <MenuHeader />
                            :
                            <MenuHeaderWhite />
                    }

                </TouchableOpacity>

            }


            {
                !whiteHeader
                    ?
                    <LogoHorizontal />
                    :
                    <LogoHorizontalWhite />
            }

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    position: 'absolute',
                    right: 0
                }}
            >
                <View>
                    {
                        visibleBackArrow && <ArrowBack />
                    }
                </View>
            </TouchableOpacity>
        </View>
        // </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         // marginTop: 48,
//         alignItems: "center",
//         flexDirection: "row",
//         justifyContent: "center"
//     },
//     burger: {
//         position: 'absolute',
//         left: 0
//     },
//     arrow: {
//         position: 'absolute',
//         right: 0
//     }
// });


export default Header
