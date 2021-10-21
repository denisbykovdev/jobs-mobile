import {Image, TouchableOpacity, StyleSheet, View} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React, {useState} from "react";


const Header = ({whiteHeader, visibleBackArrow,navigation}) => {
    // const [visibleBackArrow, setVisibleBackArrow] = useState(false)

    const toMenu = () => {
        navigation.navigate("HeaderMenu")
    }

    return (
        <View style={{paddingHorizontal: 34,}}>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => toMenu()}>
                    <View>
                        <Image source={whiteHeader ? icons.menuHeaderWhite : icons.menuHeader} style={styles.menuIcon}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.header}>
                        <Image source={whiteHeader ? icons.whiteHorizontalLogo : icons.logoHorizontal}
                               style={{width: 154, height: 36}}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View>
                        {visibleBackArrow &&
                        <Image source={icons.arrowBack} style={styles.arrowIcon}/>
                        }
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 48,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    arrowIcon: {
        width: 23,
        height: 16,
    },

    menuIcon: {
        width: 29,
        height: 24,
    }

});


export default Header
