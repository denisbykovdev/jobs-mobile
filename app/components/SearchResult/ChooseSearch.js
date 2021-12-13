import {ScrollView, TouchableOpacity, StyleSheet, Image, Text, View, ImageBackground, TextInput} from "react-native";
import React, {useState} from "react";
import Header from "../../components/Header";
import JobCard from "../../components/JobCard";
import {mainScreenBlocks} from "../../configs/FakeData";
import {icons, images} from "../../configs/imagesAndIconsUrl";

const ChooseSearch = (props) => {
    const [leftFilterOpen, setLeftFilterOpen] = useState(false)

    const [chosenBtnText, setChosenBtnText] = useState("מיון")

    const ChosenText = (bitText,choose) => {
        setChosenBtnText(bitText);
        props.FilterChoose(choose);
        setLeftFilterOpen(false)
    }


    return (
        <View style={styles.btnRow}>

            <View style={styles.bitMain}>
                <TouchableOpacity
                    style={[leftFilterOpen === true ? styles.btn : styles.activeBtn, styles.bitTogether]}
                    onPress={() => setLeftFilterOpen(!leftFilterOpen)}
                >
                    {leftFilterOpen === true ?
                        <Image source={icons.upDownW} style={{width: 15, height: 10}}/>
                        :
                        <Image source={icons.upDown} style={{width: 15, height: 10}}/>
                    }
                    <Text style={[styles.btnText, {color: leftFilterOpen === true ? "white" : "#8b95af"}]}>
                        {chosenBtnText}
                    </Text>

                </TouchableOpacity>
                {leftFilterOpen === true && <>
                    <TouchableOpacity style={styles.openBtn} onPress={() => ChosenText("לפי א-ב","date")}>
                        <Text style={styles.openBtnText}>לפי א-ב</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.openBtn} onPress={() => ChosenText("לפי דירוג כוכבים","stars")}>
                        <Text style={styles.openBtnText}>לפי דירוג כוכבים</Text>
                    </TouchableOpacity>
                </>
                }


            </View>
            <View style={[styles.bitMain, {height: 44}]}>
                <TouchableOpacity
                    style={[leftFilterOpen === 2 ? styles.btn : styles.activeBtn, styles.bitTogether]}
                      onPress={() => props.FilterChooseRight()}
                    // onPress={() => navigation.navigate("JobOpportunityPopUp")}
                >
                    <Image source={icons.Menu_Header_S} style={{width: 12, height: 11}}/>
                    <Text style={[styles.btnText, {color: leftFilterOpen === 2 ? "white" : "#8b95af"}]}>
                        סינון
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({


    btnRow: {
        marginBottom:10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 34,
        marginTop: "10%"
    },

    bitMain: {
        borderWidth: 2,
        width: 158,
        borderColor: "rgba(57, 73, 109, 0.3)",
        borderRadius: 7
    },

    btn: {
        backgroundColor: "#30b8b2",
        borderBottomEndRadius: 0,
        borderBottomLeftRadius: 0
    },

    btnText: {
        color: "white"
    },

    bitTogether: {
        height: 40,
        width: 155,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 5
    },

    activeBtn: {
        backgroundColor: "white",
        borderColor: "#8b95af",
        borderWidth: 1,
    },

    openBtn: {
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 15
    },

    openBtnText: {
        textAlign: "right",
        color: "#39496d",
    }

})


export default ChooseSearch
