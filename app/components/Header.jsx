import {Image, TouchableOpacity, StyleSheet, View, StatusBar} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React, {useState} from "react";
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
    headerStyle
}) => {
    // const [visibleBackArrow, setVisibleBackArrow] = useState(false)
    
    useStatusBar(
        !whiteHeader
        ?
        `'dark-content', ${colors.whiteTwo}`
        :
        `'light-content','transparent'` 
    )

    const navigation = useNavigation()

    const toMenu = () => {
        navigation.navigate("HeaderMenu")
    }

    return (
            <View 
                style={[{
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    height: responsiveWidth(40) ,
                    // paddingTop: Constants.statusBarHeight,
                    backgroundColor: !whiteHeader
                        ? colors.whiteTwo
                        : 'transparent'
                    },
                    headerStyle
                ]}
            >

                <TouchableOpacity 
                    onPress={() => toMenu()}
                    style={{
                        position: 'absolute',
                        left: 0
                    }}
                >
                    {/* <View>
                        <Image source={whiteHeader ? icons.menuHeaderWhite : icons.menuHeader} style={styles.menuIcon}/>
                    </View> */}
                    {
                        !whiteHeader
                        ? 
                        <MenuHeader />
                        :
                        <MenuHeaderWhite />
                    }

                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <View style={styles.header}> */}
                        {/* <Image source={whiteHeader ? icons.whiteHorizontalLogo : icons.logoHorizontal}
                               style={{width: 154, height: 36}}/> */}
                        {
                            !whiteHeader
                            ?
                            <LogoHorizontal />
                            :
                            <LogoHorizontalWhite />
                        }

                    {/* </View>
                </TouchableOpacity> */}
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}
                    style={{
                        position: 'absolute',
                        right: 0
                    }}
                >
                    <View>
                        {/* {visibleBackArrow &&
                        <Image source={icons.arrowBack} style={styles.arrowIcon}/>
                        } */}
                        {
                            visibleBackArrow && <ArrowBack />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 48,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    burger: {
        position: 'absolute',
        left: 0
    },
    arrow: {
        position: 'absolute',
        right: 0
    }
    // arrowIcon: {
    //     width: 23,
    //     height: 16,
    // },
    // menuIcon: {
    //     width: 29,
    //     height: 24,
    // }
});


export default Header
