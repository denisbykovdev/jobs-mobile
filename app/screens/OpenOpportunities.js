import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import React from "react";
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import HrFooter from "../components/HrFooter";
import TabController from "../components/ListOfOpenOpportunities/TabController";

const OpenOpportunities = () => {
    return (
        <View style={{flex: 1,backgroundColor: "#fff"}}>
            <Header/>
            <ScrollView>
                <TabController/>
                <View style={styles.main}>
                    <View style={styles.up}>
                        <Image source={images.fonProf} style={styles.fon}/>
                        <View style={styles.circle}>
                            <Image source={icons.lineTop} style={styles.lineTop}/>
                            <Image source={icons.OpenOpportunitiesIcon} style={styles.openOpportunitiesIcon}/>
                        </View>
                    </View>
                </View>
                <View style={styles.mainText}>
                    <Image source={icons.testUp} style={styles.testUp}/>
                    <View style={{width: 130, alignItems: "center"}}>
                        <Text style={styles.largeText}>!אופס</Text>
                        <Text style={styles.smallText}>,נראה שאין תקנים באחריותך
                            אבל אפשר להוסיף כאלו</Text>
                    </View>
                    <Image source={icons.testDown} style={styles.testDown}/>
                </View>


                <View style={{alignItems: "center", marginTop: "10%"}}>
                    <TouchableOpacity style={styles.buttonMain}>
                        <Text style={styles.buttonMainText}>יצירת תקן</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
            <HrFooter/>
        </View>
    )
}

const styles = StyleSheet.create({
    up: {
        alignItems: "center",
        zIndex: -1,
    },

    fon: {
        width: 403,
        zIndex: -12,
        height: 291,

    },

    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: 232,
        height: 232,
        marginTop: 60,
        zIndex: 3,
        position: 'absolute',
    },


    lineTop: {
        width: 59,
        zIndex: 5,
        height: 73,
        marginLeft: 170,
        top: 40
    },

    openOpportunitiesIcon: {
        width: 200,
        zIndex: 3,
        height: 200,
        marginLeft: 10,
        top: -30
    },

    mainText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },

    testUp: {
        width: 106,
        height: 85,
        marginBottom: 130
    },

    testDown: {
        width: 106,
        height: 85,
        marginTop: 130
    },


    buttonMain: {
        width: "80%",
        height: 53,
        backgroundColor: "#30b8b2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },

    buttonMainText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },


    largeText: {
        fontSize: 30,
        width: 300,
        textAlign: "center",
        color: "#172c60",
        fontWeight: "bold"
    },

    smallText: {
        marginTop: 16,
        fontSize: 22,
        width: 350,
        textAlign: "center",
        color: "#afb9d2",
        fontWeight: "bold",
        marginBottom: 34
    },
})

export default OpenOpportunities
