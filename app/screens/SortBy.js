import {Image, TouchableOpacity, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React from "react";
import SortQuiz from "../components/SortQuiz";

const SortBy = () => {
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.imageContainer}>
                        <View style={[styles.borderLeftRight, {marginRight: 30}]}/>
                        <Image
                            source={icons.arrowsUpDown}
                            style={styles.arrowsUpDown}/>
                        <View style={[styles.borderLeftRight, {marginLeft: 30}]}/>
                    </View>
                </View>
                <View style={styles.mainContainerTitle}>
                    <Image source={icons.testUp} style={styles.imageBgUp}/>
                    <Text style={styles.title}>כניסה </Text>
                    <Text style={styles.mainTitle}>הדרך הנוחה
                        ביותר לחיפוש</Text>
                    <Image source={icons.testDown} style={styles.imageBgDown}/>
                </View>
                <SortQuiz/>
                <TouchableOpacity>
                    <View style={styles.submitBtn}>
                        <Text style={styles.submitBtnText}>החל מסננים</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        paddingVertical: "20%",
        // alignItems: "center",
        paddingHorizontal: 32,

    },

    arrowsUpDown: {
        width: 54,
        height: 38,
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
    },

    mainContainerTitle: {
        marginTop: 25,
        justifyContent: "flex-end",
        alignItems: "center"
    },

    title: {
        color: "#39496D",
        textAlign: "center",
        paddingTop: 10
    },

    mainTitle: {
        width: 200,
        color: "#39496D",
        fontSize: 30,
        paddingTop: "12%",
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: "8%"
    },

    inputTitle: {
        color: "#39496D",
        fontSize: 15,
        paddingTop: 72,
        textAlign: "center"
    },

    imageBgUp: {
        width: 106,
        height: 86,
        // backgroundColor: "red",
        position: "absolute",
        left: 0,
        top: 0
    },

    imageBgDown: {
        width: 106,
        height: 86,
        // backgroundColor: "red",
        position: "absolute",
        right: 0,
        top: "50%"
    },

    submitBtn:{
        backgroundColor:"#30B8B2",
        alignItems:"center",
        paddingVertical:16,
        borderRadius:5,
    },

    submitBtnText:{
        color:"white",
        fontSize:18
    }
});


export default SortBy
