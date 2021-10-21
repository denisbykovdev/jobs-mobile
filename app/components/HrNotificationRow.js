import {Image, TouchableOpacity, Text, StyleSheet, View} from "react-native";
import React, {useState} from "react";

const HrNotificationsRow = ({item}) => {
    const [showNotification, setShowNotification] = useState(false)
    return (
        <View style={styles.borderBottom}>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.notificationRow} onPress={() => setShowNotification(!showNotification)}>
                    <View style={[styles.bellRow, {backgroundColor: item.read ? "#c3c8d3" : "#2b3e6e"}]}>
                        <Image source={item.icon} style={styles.bellIcon}/>
                    </View>
                    <View>
                        <Text style={styles.notificationTitle}>{item.notificationTitle}</Text>
                        <Text style={styles.notificationTime}>{item.notificationTime}</Text>
                    </View>
                </TouchableOpacity>
                {showNotification &&
                    <View>
                <Text style={styles.notificationText}>
                    ו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם
                    גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. סחטירול, צוט ומעיוט - לפתיעם ברשג - ולתיעם
                     לפמעט מוסן מנת. קונסקטורר
                </Text>
                    <Text style={[styles.notificationText,{color: "#30b8b2",paddingTop:0, fontWeight:"bold"}]}>רוגצה. לפמעט מוסן מנת. קונסקטורר</Text>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingRight: 32,
        paddingLeft: 37,
    },

    borderBottom: {
        borderBottomColor: "#2b3e6e",
        borderBottomWidth: 1,
        paddingBottom: 29,
        paddingTop: 37
    },

    keyDoorStyle: {
        width: 39,
        height: 45,
    },

    borderLeftRight: {
        borderLeftColor: "#c3c8d3",
        height: 40,
        borderLeftWidth: 2,
        transform: [{rotate: '90deg'}],
    },

    imageContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25
    },

    notificationRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    bellRow: {
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },

    bellIcon: {
        width: 23,
        height: 26
    },

    notificationTitle: {
        color: "#39496d",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "right",

    },

    notificationTime: {
        color: "#39496d",
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right",
        paddingTop: 6
    },

    notificationText: {
        paddingTop: 21,
        textAlign: "right",
        color: "#172c60",
        fontSize: 17,
        fontWeight: "300"
    },

    greenText:{
        color: "#30b8b2",
        textAlign:"right"
    }


});


export default HrNotificationsRow
