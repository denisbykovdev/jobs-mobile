import {Image, Text, StyleSheet, View} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React from "react";

const UserMessage = () => {
    return (
        <View style={styles.userMessageBlock}>
            <View style={styles.nameDateBLock}>
                <Image source={icons.noPhoto} style={styles.conversationUserImage}/>
                <View style={{paddingLeft: 19}}>
                    <Text style={[styles.coordinatorName, {textAlign: "left"}]}>מייקל ד</Text>
                    <Text style={[styles.sendDate, {textAlign: "left"}]}>02.12.2020</Text>
                </View>
            </View>
            <Text style={[styles.conversationText, {textAlign: "left"}]}>
                קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופ קליר, בנפת נפקט למסון בלרק - וענוף
                לפרומי בלוף קינץ תתיח לרעח. לת צשחמי מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי
                מנורך. צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({


    userMessageBlock: {
        paddingRight: 33,
        paddingLeft: 43,
        alignItems: "flex-start",
        justifyContent: "flex-start"
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
    }

});


export default UserMessage
