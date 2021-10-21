import {Image, ScrollView, Text, StyleSheet, View, ImageBackground, TouchableOpacity} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React from "react";
import Header from "../components/Header";
import Stars from 'react-native-stars';
import ReviewsRow from "../components/ReviewsRow";
import {reviews} from "../configs/FakeData"
import Footer from "../components/Footer";
import {LinearGradient} from "expo-linear-gradient";

const JobOpportunityPopUp = ({navigation}) => {
    return (
        <View style={{flex: 1,}}>
            <ScrollView>
            <ImageBackground
                source={images.jobOppBg} style={styles.bgImage}>
                <Header
                    navigation={navigation}
                    whiteHeader={true}
                />
                <View style={{marginTop: "65%"}}>
                    <View style={styles.bgMainTExtBlock}>
                        <Text style={styles.bgMainText}>ההודעה נשלחה לרכזת והיא תיצור
                            איתך קשר באופן אישי. בהצלחה!</Text>
                    </View>
                </View>
                <View style={{left: "43%", top: "86%", position: "absolute"}}>
                    <Image source={icons.sucsess} style={styles.sucsessIcon}/>
                </View>
            </ImageBackground>
            <View style={styles.successBlock}>
                <Image source={icons.testUp} style={styles.imageBgUp}/>
                <View style={{alignItems: "center", marginTop: "5%"}}>
                    <Image source={icons.testGirl} style={styles.testGirl}/>
                </View>
                <Image source={icons.testDown} style={styles.imageBgDown}/>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("ContendersOfOpportunities")}>
                    <Text style={styles.btnText}>חזרה לעמוד התקנים</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    bgImage: {
        resizeMode: "cover",
        height: 550,
    },

    bgTitle: {
        color: "white",
        fontSize: 34,
        fontWeight: "bold"
    },

    bgMainText: {
        color: "#ffffffb3",
        fontSize: 22,
        textAlign: "center",

    },

    bgMainTExtBlock: {
        alignItems: "center",
        width: "100%",
        paddingHorizontal: "10%",
    },

    dotsRow: {
        justifyContent: "space-around",
        flexDirection: "row",
    },


    linerGradientBlock: {
        width: 95,
        height: 95,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        position: "absolute",
        left: "40%",
        bottom: -50
    },

    sucsessIcon: {
        width: 56,
        height: 56,
    },

    imageBgUp: {
        width: "40%",
        height: 86,
        // backgroundColor: "red",
        position: "absolute",
        left: 0,
        top: 0
    },

    imageBgDown: {
        width: "40%",
        height: 86,
        // backgroundColor: "red",
        position: "absolute",
        right: 0,
        top: "30%"
    },

    successBlock: {
        marginHorizontal: 37
    },

    testGirl: {
        width: 84,
        height: 103
    },

    btn: {
        width: "100%",
        borderColor: "#268b93",
        borderWidth: 2,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 60,
        borderRadius: 5
    },

    btnText: {
        color: "#163066",
        fontSize: 18,
        fontWeight: "bold"
    }

});


export default JobOpportunityPopUp
