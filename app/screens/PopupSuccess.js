import {Image, TouchableOpacity, ImageBackground, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import { images } from "../configs/imagesAndIconsUrl";
import { useNavigation } from "@react-navigation/native";

const PopupSuccess = () => {
    const navigation = useNavigation()

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <View style={styles.main}>
                    <View style={styles.popup}>
                        <ImageBackground
                            source={images.PopupSuccessBg}
                            style={styles.PopupSuccessBg}
                        >
                            <Text style={styles.text}>
                                .חוות הדעת פורסמה בהצלחה
                                .תודה רבה לך
                            </Text>

                            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("JobsOpportunity",{idJob:id})}>
                                <Text style={styles.btnText}>
                                    אישור
                                </Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor:"rgba(0, 120, 201, 0)" ,
        alignItems: "center",
        justifyContent: "center",
    },

    popup: {
        backgroundColor:"rgba(0, 120, 201, 0)" ,
        marginTop: 200,
        padding: -500,
        alignItems: "center",
    },

    PopupSuccessBg: {
        alignItems: "center",
        width: 342,
        height: 390,
        paddingHorizontal: 10
    },
    text: {
        marginTop: 170,
        color: "#172c60",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },

    btn: {
        marginTop:205,
        backgroundColor: "#30b8b2",
        bottom: 130,
        width: 240,
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 5
    },

    btnText: {
        paddingVertical: 10,
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default PopupSuccess
