import {Image, StyleSheet, View} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React from "react";

const KeyAndDoor = () => {
    return (
        <View style={styles.mainContainer}>
            <Image source={icons.logoHorizontal} style={{width: 154, marginBottom: "20%", height: 36}}/>
            <View style={styles.imageContainer}>
                <View style={[styles.borderLeftRight, {marginRight: 30}]}/>
                <Image
                    source={icons.keyAndDoor}
                    style={styles.keyDoorStyle}/>
                <View style={[styles.borderLeftRight, {marginLeft: 30}]}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        paddingTop: 54,
        alignItems: "center"
    },

    keyDoorStyle: {
        width: 57,
        height: 50,
    },

    borderLeftRight: {
        borderLeftColor: "#219BA5",
        height: 40,
        borderLeftWidth: 2,
        transform: [{rotate: '90deg'}],
    },

    imageContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }

});


export default KeyAndDoor
