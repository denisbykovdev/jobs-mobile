import {Image, ScrollView, Text, StyleSheet, View, ImageBackground} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React from "react";
import {status} from "../configs/FakeData"

const FaqForJobs = () => {
    return (
        <ScrollView style={{flex: 1}}>
            <View style={styles.mainContainer}>
                {status.map((item, index) => {
                        return (
                            <View key={index}>
                                <ImageBackground source={images.faqBg} style={styles.image}>
                                    <Text style={styles.bgTitle}> מדרשת מעיין שדרות </Text>
                                    <Text style={styles.bgSmallTitle}>שם הארגון</Text>
                                </ImageBackground>
                                <View style={[styles.circleIcon, shadowStyle]} elevation={7}>
                                    <Image source={icons.yellowIcon} style={{width: 45, height: 45}}/>
                                </View>
                                <View style={shadowStyle}>
                                    <View style={styles.statusBlock}>
                                        <View style={styles.statusRow}>
                                            <Image source={item.icon} style={{width: 19, height: 18}}/>
                                            <Text
                                                style={[styles.statusText, {color: item.status === "approved" ? "#24a1a8" : "#172c60"}]}>שלחת
                                                הודעה</Text>
                                            <Text style={styles.emojiText}>סטטוס:</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                )}
            </View>
        </ScrollView>
    )
}

const shadowStyle = {
    shadowOpacity: 1,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 1.5,
    elevation: 1,
    borderTopWidth: 0,
    borderWidth: 0.2,
    borderColor: "#ffffff",
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 32,
        justifyContent: "center",
        marginBottom: 30
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        height: 96,
        marginTop: 26,
        paddingTop: 21,
        paddingHorizontal: 21
    },

    bgTitle: {
        color: "white",
        textAlign: "right",
        fontWeight: "800",
        fontSize: 26
    },

    bgSmallTitle: {
        color: "white",
        fontSize: 16,
        textAlign: "right",
    },

    statusBlock: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        marginTop: -15,
        zIndex: 10000,
        backgroundColor: "white",
        alignItems: "flex-end",
        paddingRight: 22,
        paddingTop: 32,
    },

    circleIcon: {
        width: 62,
        height: 62,
        backgroundColor: "white",
        position: "absolute",
        zIndex: 30000,
        borderRadius: 50,
        left: "10%",
        top: "45%",
        alignItems: "center",
        justifyContent: "center",
    },

    statusRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 20

    },

    statusText: {
        color: "#172c60",
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 7,
        paddingRight: 12
    },

    emojiText: {
        color: "#39496d",
        fontSize: 18
    }

});


export default FaqForJobs
