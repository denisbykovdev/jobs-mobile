import { ScrollView, TextInput, TouchableOpacity, StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { searchToggles } from "../../configs/FakeData";
import { icons, images } from "../../configs/imagesAndIconsUrl";
import ToggleSearch from "../../components/SearchToggle";
import Footer from "../../components/Footer";
import { LinearGradient } from "expo-linear-gradient";
import { getUserToken, JobUrl } from "../../configs/ApiCallHelper";
import axios from "axios";

const CheckBoxBtn = ({ keyBtn, value, putChosen }) => {

    const [answer, setAnswer] = useState(false);

    const choseAnswer = () => {
        setAnswer(!answer);
        if (keyBtn === "home") {
            if (answer) {
                putChosen("is_home", 0)
            } else {
                putChosen("is_home", 1)
            }

        } else if (keyBtn === "out") {

            if (answer) {
                putChosen("is_out", 0)
            } else {
                putChosen("is_out", 1)
            }

        } else if (keyBtn === "dormitory") {

            if (answer) {
                putChosen("is_dormitory", 0)
            } else {
                putChosen("is_dormitory", 1)
            }
        }

    }

    return (
        <>
            <LinearGradient style={[styles.checkBoxBtn, { width: "32%" }, shadowStyle]}
                colors={answer ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container}
                    onPress={() => choseAnswer()}>
                    <View

                        style={[styles.checkBox, {
                            backgroundColor: answer ? "#172C60" : "white",
                            borderRadius: 50
                        }]}>
                        {answer &&
                            <Image
                                source={icons.checkIcon}
                                style={styles.checkBox_image}
                            />
                        }
                    </View>
                    <Text style={{ color: answer ? "white" : "black" }}>{value}</Text>
                </TouchableOpacity>
            </LinearGradient>

        </>

    )
}


const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    borderWidth: 1,
    borderColor: "grey"
}

const styles = StyleSheet.create({

    checkBox_image: {
        width: 15,
        height: 11,
        alignSelf: "center",
    },


    checkBoxBtn: {
        backgroundColor: "#253866",
        alignItems: "center",
        marginTop: 16,
        borderRadius: 4,
        paddingVertical: "4%",
    },

    checkBox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        alignItems: "center",
        borderColor: "#30B8B2",
        borderWidth: 2,
        justifyContent: 'center',
    },

    checkBoxRow: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

})


export default CheckBoxBtn
