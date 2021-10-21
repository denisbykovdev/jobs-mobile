import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import React, {useState} from "react";
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {LinearGradient} from "expo-linear-gradient";


const Notifications = ({navigation}) => {

    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <ScrollView>
                <View style={styles.main}>
                    <Image source={icons.NotificationIcon} style={styles.notificationIcon}/>
                </View>

                <View style={styles.lineInfo}>

                    <View
                        style={styles.lineInfoText}>

                        <Image source={icons.NotificationIcon2} style={styles.NotificationIcon2}/>
                        <View>
                            <Text style={styles.lineInfoTextUp}>אירוע המכה את העולם</Text>
                            <Text style={styles.lineInfoTextDown}>לפני 5 דקות</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{color: "#172c60",}}>ו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו
                            <Text style={{color: "#30b8b2", fontSize: 18}}>www.midrashot.co.il</Text>, דול, צוט ומעיוט -
                            לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך
                            רוגצה. לפמעט מוסן מנת. סחטירול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש.
                            קוויז דומור ליאמום בלינך רוגצה.
                            לפמעט מוסן מנת. קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה
                            דיאם. וסטיבולום אט דולור, קראס אגת לקטוס</Text>
                    </View>
                </View>

                <View
                    style={[styles.lineInfoText, {
                        paddingHorizontal: 32,
                        paddingBottom: 26,
                        borderBottomWidth: 0.2,
                        borderBottomColor: "#2b3e6e"
                    }]}>

                    <Image source={icons.NotificationIcon2} style={styles.NotificationIcon2}/>
                    <View>
                        <Text style={styles.lineInfoTextUp}>אירוע המכה את העולם</Text>
                        <Text style={styles.lineInfoTextDown}>לפני 5 דקות</Text>
                    </View>
                </View>

                <View
                    style={[styles.lineInfoText, {
                        paddingHorizontal: 32,
                        paddingBottom: 31,
                        borderBottomWidth: 0.2,
                        borderBottomColor: "#2b3e6e"
                    }]}>

                    <Image source={icons.success2} style={styles.NotificationIcon2}/>
                    <View>
                        <Text style={styles.lineInfoTextUp}>ג'סיקה משאירה ביקורת חדשה</Text>
                        <Text style={[styles.lineInfoTextDown,{marginLeft:160}]}>24.08.2020</Text>
                    </View>
                </View>

                <View
                    style={[styles.lineInfoText, {
                        paddingHorizontal: 32,
                        paddingBottom: 31,
                        borderBottomWidth: 0.2,
                        borderBottomColor: "#2b3e6e"
                    }]}>

                    <Image source={icons.success2} style={styles.NotificationIcon2}/>
                    <View>
                        <Text style={styles.lineInfoTextUp}>ג'סיקה משאירה ביקורת חדשה</Text>
                        <Text style={[styles.lineInfoTextDown,{marginLeft:160}]}>24.08.2020</Text>
                    </View>
                </View>


            </ScrollView>
            <Footer chosenFooter={4} navigation={navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        zIndex: 0,
        paddingBottom: 10,
    },
    notificationIcon:{
        width: 160,
        height: 45,
        marginTop: 25
    },

    lineInfo: {
        paddingHorizontal: 32,
        paddingBottom: 26,
        borderBottomWidth: 0.2,
        borderBottomColor: "#2b3e6e"
    },

    NotificationIcon2: {
        width: 45,
        height: 45,

    },
    lineInfoText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
        marginBottom: 20
    },

    lineInfoTextUp: {
        color: "#39496d",
        fontSize: 15,
        fontWeight: "bold"
    },

    lineInfoTextDown: {
        color: "#39496d",
        fontWeight: "300",
        opacity: 0.5,
        fontSize: 12
    },


})

export default Notifications