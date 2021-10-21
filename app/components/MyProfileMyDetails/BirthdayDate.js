import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    View,
    SafeAreaView
} from "react-native";

import React, { useState, useEffect } from "react";
import { icons, images } from "../../configs/imagesAndIconsUrl";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";


const BirthdayDate = () => {

    const [textDay, setTextDay] = useState("")
    const [isBorderRed, setIsBorderRed] = useState(false)

    useEffect(() => {
        getBirthdayInfo().then()
    }, [])

    const isBorderRedTrue = () => {
        if (textDay.length > 0) {
            setIsBorderRed(false)
        } else {
            setIsBorderRed(true)
        }
    }

    const setText = (text) => {
        setTextDay(text)
    }

    const getBirthdayInfo = async () => {
        const url = `{{JOBS_URL}}/api/profile/getInfo`
        const token = await AsyncStorage.getItem('token');
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {
                console.log("responseBirthday", response);
            }).catch(error => console.log("birthdayError", error));
    }

    const postBirthDayInfo = async () => {
        const url = `${JobUrl}/api/profile/birthday/store`
        // const token = await getUserToken()
        const token = await AsyncStorage.getItem('token');
        axios.post(url,
            {
                is_regular: 1,
                day: '22',
                month: '06',
                year: '1994',
            },
            {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(token)}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).then(response => {
                console.log("birthDayInfo", response);

            }).catch(error => console.log("birthDayInfoError", error));
    }

    return (<>
        <View>
            <View style={styles.boxUpMain}>
                <TouchableOpacity style={styles.pickerButton}>
                    <Image source={icons.arrowBottom} style={{ width: 12, height: 6 }} />
                    <Text style={styles.pickerButtonText}>תאריך לידה עברי </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", marginTop: 22, justifyContent: "space-between" }}>
                    <TextInput
                        multiline={false}
                        placeholder={`שנה`}
                        secureTextEntry={false}
                        placeholderTextColor={"#172c60"}
                        style={[styles.searchInputText, isBorderRed && { borderWidth: 2, borderColor: "#f50068", }]}
                        value={textDay}
                        onChangeText={(value) => setText(value)}
                    />

                    <TouchableOpacity style={styles.smallPickerButton}>
                        <Image source={icons.arrowBottom} style={{ width: 12, height: 6 }} />
                        <Text style={styles.pickerButtonText}>חודש</Text>

                    </TouchableOpacity>


                    <TouchableOpacity style={styles.smallPickerButton}>
                        <Image source={icons.arrowBottom} style={{ width: 12, height: 6 }} />
                        <Text style={styles.pickerButtonText}>יום</Text>

                    </TouchableOpacity>

                </View>


                <TouchableOpacity style={styles.mainButton} onPress={() => isBorderRedTrue()}>
                    <Text style={styles.mainButtonText}>שמירת תאריך הלידה שלי</Text>
                </TouchableOpacity>


            </View>

            <View style={{ backgroundColor: "#fff", top: -2 }}>
                <Image source={icons.MyProfileComponent}
                    style={{ width: "100%", height: 100 }} />
            </View>
        </View>
    </>
    )
}


const styles = StyleSheet.create({

    boxUpMain: {
        backgroundColor: "#efefef",
        paddingHorizontal: 30,
        paddingTop: 30
    },

    pickerButton: {
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 13,
        borderRadius: 5
    },

    pickerButtonText: {
        color: "#172c60"
    },


    searchInputText: {
        paddingHorizontal: 15,
        textAlign: "right",
        height: 40,
        borderRadius: 5,
        backgroundColor: "#fff",
        width: "30%",
        color: "#172c60"
    },

    smallPickerButton: {
        paddingHorizontal: 15,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 40,
        borderRadius: 5,
        backgroundColor: "#fff",
        width: "30%",
    },

    mainButton: {
        width: "100%",
        marginTop: 27,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#30b8b2",
        paddingVertical: 19,
        borderRadius: 5,
        marginBottom: 15

    },

    mainButtonText: {
        fontSize: 18,
        color: "#fefeff",
        fontWeight: "bold"
    }

})

export default BirthdayDate