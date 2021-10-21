import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, View} from "react-native";
import Header from "../components/Header";
import {icons, images} from "../configs/imagesAndIconsUrl";
import DropDownPicker from "react-native-dropdown-picker";
import {blogItems} from "../configs/FakeData";
import BlogItems from "../components/BlogItems";
import HrFooter from "../components/HrFooter";
import React from "react";

const SuccessfulCreatedOportunity = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <Image
                    source={images.girls}
                    style={styles.girls}
                />

                <Header whiteHeader={true} navigation={navigation}/>
                <View style={styles.mainTextBox}>
                    <Text style={styles.mainBoxText}>התקן נוצר בהצלחה
                        ועבר לאישור מערכת</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <Image
                        source={icons.girls}
                        style={styles.girls2}
                    />
                </View>
                <View style={styles.ImageIcon}>
                    <Image
                        source={icons.testUp}
                        style={styles.testUp}
                    />
                    <Image
                        source={icons.SuccessfulIcon}
                        style={styles.successfulIcon}
                    />
                    <Image
                        source={icons.testDown}
                        style={styles.testDown}
                    />
                </View>

                <TouchableOpacity>
                    <View style={styles.buttonBox}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>חזרה לתקנים שלי</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({


    ImageIcon: {
        paddingTop: 50,
        justifyContent: "center",
        flexDirection: "row",
        marginBottom: 28
    },

    testUp:{
        width: 106,
        height: 85,
        marginBottom: 100
    },

    successfulIcon:{
        width: 93,
        height: 93,
        marginTop: 50,
    },

    testDown:{
        width: 106,
        height: 85,
        marginTop: 100
    },

    girls: {
        width: "110%",
        height: 490,
        position: "absolute",
        top: 0,
        left: -15,
    },
    girls2: {
        top: 50,
        height: 95,
        width: 95,
    },
    mainTextBox: {
        marginTop: 200,
        alignItems: "center",
    },
    mainBoxText: {
        textAlign: "center",
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        marginBottom: 5
    },

    buttonText: {
        color: "#163066",
        fontSize: 18,
        fontWeight: "bold"
    },
    button: {
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#268b93",
        borderRadius: 4,
        backgroundColor: "#fff",
        paddingHorizontal: 82,
        paddingTop: 18,
        paddingBottom: 21,
    },

    buttonBox:{
        alignItems: "center",
        marginBottom: 49
    }

})

export default SuccessfulCreatedOportunity