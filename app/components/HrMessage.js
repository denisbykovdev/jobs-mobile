import {Image, Text, StyleSheet, View} from "react-native";
import {icons,} from "../configs/imagesAndIconsUrl";
import React from "react";


const HrMessage = () => {
    return (
        <View style={styles.hrMessageBlock}>
            <View style={styles.nameDateBLock}>
                <View style={{paddingRight: 19}}>
                    <Text style={styles.coordinatorName}>שם הרכזת</Text>
                    <Text style={styles.sendDate}>02.12.2020</Text>
                </View>
                <Image source={icons.noPhoto} style={styles.conversationUserImage}/>
            </View>
            <Text style={styles.conversationText}> קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ
                קליר,
                בנפת נפקט למסון בלרק - וענוף
                לפרומי בלוף קינץ תתיח לרעח. לת צשחמי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי
                מנורך. צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה
            </Text>
        </View>

    )
}


const styles = StyleSheet.create({
    hrMessageBlock: {
        paddingRight: 33,
        paddingLeft: 43,
        backgroundColor: "#f8f8f9",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },

    coordinatorName: {
        color: "#172c60",
        fontSize: 24,
        fontWeight: "800",
        textAlign: "right"
    },

    sendDate: {
        color: "#39496d",
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right",
    },

    conversationUserImage: {
        width: 50,
        height: 50
    },

    nameDateBLock: {
        paddingTop: 19,
        flexDirection: "row"
    },

    conversationText: {
        textAlign: "right",
        fontSize: 16,
        color: "#172c60",
        fontWeight: "300",
        paddingVertical: 23
    },

});


export default HrMessage
