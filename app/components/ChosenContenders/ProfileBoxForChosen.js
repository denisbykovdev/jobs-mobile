import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

import React from "react";
import {icons, images} from "../../configs/imagesAndIconsUrl";
import ButtonsSMS from "../ContendersOfOpportunities/ButtonsSMS";

const ProfileBoxForChosen = (props) => {
    return (
        <View style={styles.buttonBoxMain}>

            <View style={styles.main}>
                <View>
                    <Image source={images.candidatesImg}
                           style={styles.candidatesImg}/>
                </View>
                <View>
                    <Text style={styles.mainUpText}>שם
                        המתמודדת</Text>
                    <Text style={styles.mainDownText}>תאריך
                        הגשה: 01.12.2020 </Text>
                </View>
            </View>

            <View style={[styles.buttonBoxMainInBox, {flex: 1}]}>


                <View style={styles.infoBox}>
                    <Image source={icons.homeIcon}
                           style={styles.homeIcon}/>
                    <View>
                        <Text style={styles.homeTextUp}>עִיר</Text>
                        <Text style={[styles.homeText, {color: "#172c60"}]}>חיפה</Text>
                    </View>
                </View>


                <View style={[styles.infoBox, {alignItems: "center"}]}>
                    <Image source={icons.Profile2}
                           style={styles.Profile2}/>
                    <View style={{alignItems: "center",}}>
                        <Text style={styles.homeTextUp}>סטטוס</Text>
                        <Text style={[styles.homeText, {color: "#30b8b2"}]}>התקבלה </Text>
                    </View>
                </View>

                <View style={[styles.infoBox,]}>
                    <Image source={icons.sameThing}
                           style={styles.Profile2}/>
                    <View>
                        <Text style={[styles.homeTextUp, {paddingRight: "49%"}]}>פנייה מס</Text>
                        <Text style={[styles.homeText, {color: "#172c60"}]}>20</Text>
                    </View>
                </View>

            </View>

            <View style={styles.longText}>
                <Text>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית ליבם סולגק. בראיט ולחת צורק מונחף, בגורמ
                    י מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</Text>
            </View>


            <ButtonsSMS/>


        </View>

    )
}

const styles = StyleSheet.create({
    buttonBoxMain: {
        top: -30,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 0.7,
        borderTopWidth: 0.7,
        borderColor: "rgba(31, 30, 29, 0.2)",
        paddingTop: 20,
        paddingBottom: 50,
        marginBottom: 20,

    },

    main: {
        flexDirection: "row-reverse",
        paddingLeft: 20
    },

    candidatesImg: {
        width: 50,
        height: 50,
        marginTop: 7,
        marginLeft: 20
    },

    mainUpText: {
        color: "#39496d",
        fontSize: 24,
        fontWeight: "bold",
    },

    mainDownText: {
        color: "rgba(150, 150, 150, 0.5)",
        fontSize: 15,
        fontWeight: "300"
    },

    infoBox: {
        flex: 1,
    },

    homeIcon: {
        width: 25,
        height: 24,
        marginTop: 7,
        marginLeft: "75%"
    },

    homeTextUp: {
        fontSize: 12,
        opacity: 0.5,
        fontWeight: "600",
        color: "rgba(23, 44, 96, 0.5)"
    },

    homeText: {
        fontSize: 15,
        fontWeight: "700",

    },

    Profile2: {
        width: 24,
        height: 24,
        marginTop: 7,
    },


    buttonBoxMainInBox: {
        flexDirection: "row-reverse",
        marginTop: 20,
        borderColor: "rgba(31, 30, 29, 0.2)",
        paddingBottom: 30,
        marginRight: 20,
        marginLeft: 20
    },


    longText: {
        paddingBottom: 30,
        marginRight: 20,
        marginLeft: 20,
        borderBottomWidth: 2,
        borderColor: "rgba(31, 30, 29, 0.2)",
    },


})

export default ProfileBoxForChosen