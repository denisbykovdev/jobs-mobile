import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, View} from "react-native";

import React from "react";
import {icons, images} from "../../configs/imagesAndIconsUrl";
import {LinearGradient} from "expo-linear-gradient";
import ButtonsSMS from "./ButtonsSMS";
import {getUserToken, JobUrl, Token} from "../../configs/ApiCallHelper";

const ProfileBox = (item) => {
    const imageUrl = (JobUrl + item.contender.avatar);
    console.log('profilebox', item);
    return (
        <View style={styles.buttonBoxMain}>
            <View style={{flexDirection: "row-reverse", paddingLeft: 20}}>
                <View>
                {item.contender.avatar ?
                    <Image source= {{uri: imageUrl}} style={styles.face}/>
                    :
                    <Image source={icons.Profile2}  style={styles.face}/>
                }
                </View>
                <View>
                    <TouchableOpacity onPress={() => item.navigation.navigate("ProfileOfContender")}>
                        <Text  style={styles.nameText}> {item.contender.name} </Text>
                    </TouchableOpacity>
                    <Text style={styles.nameTextBottom}>תאריך
                        הגשה: 01.12.2020 </Text>
                </View>
            </View>

            <View style={styles.buttonBoxMainInBox}>

                <View style={styles.profile}>
                    <Image source={icons.Profile2}
                           style={styles.profileIcon}/>
                    <View>
                        <Text style={styles.TextUp}>סטטוס</Text>
                        <Text style={styles.TextDown}>{item.contender.status}
                            </Text>
                    </View>
                </View>

                <View style={styles.home}>
                    <Image source={icons.homeIcon}
                           style={styles.homeIcon}/>
                    <View>
                        <Text style={styles.TextUp}>עִיר</Text>
                        <Text style={styles.TextDown}>{item.contender.city}</Text>
                    </View>
                </View>
            </View>

         <ButtonsSMS navigation={item.navigation} phone={item.contender.phone} contenderId = {item.contender.id} jobId = {item.jobId}/>

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
        marginBottom: 20

    },

    face: {
        width: 50,
        height: 50,
        marginTop: 7,
        marginLeft: 20
    },

    nameText: {
        color: "#39496d",
        fontSize: 24,
        fontWeight: "bold"
    },

    nameTextBottom: {
        color: "rgba(150, 150, 150, 0.5)",
        fontSize: 15,
        fontWeight: "300"
    },

    buttonBoxMainInBox: {
        flexDirection: "row-reverse",
        paddingLeft: 20,
        marginTop: 20,
        borderBottomWidth: 2,
        borderColor: "rgba(31, 30, 29, 0.2)",
        paddingBottom: 30,
        marginRight: 20,
        marginLeft: 20,
        flexWrap: "wrap"
    },

    profile: {
        width: "45%",
        flexDirection: "row-reverse",
        marginRight: "5%"
    },

    profileIcon: {
        width: 24,
        height: 24,
        marginTop: 7,
        marginLeft: 11
    },

    TextUp:{
        fontSize: 12,
        opacity: 0.5,
        fontWeight: "600",
        color: "rgba(23, 44, 96, 0.5)",
    },

    TextDown:{
        fontSize: 15,
        fontWeight: "700",
        color: "#172c60"
    },

    home:{
        width: "40%",
        flexDirection: "row-reverse",
        marginLeft: "5%"
    },

    homeIcon:{
        width: 25,
        height: 24,
        marginTop: 7,
        marginLeft: 11
    },

    buttons: {
        flexDirection: "row-reverse",
        marginLeft: 20,
        marginTop: 36,
        flexWrap: "wrap"
    },

    circleUp: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "#aed9d8",
        marginLeft: 30
    },

    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: 42,
        height: 42,
        opacity: 1,
        borderRadius: 42 / 2,
        backgroundColor: "#30b8b2"
    }

})

export default ProfileBox