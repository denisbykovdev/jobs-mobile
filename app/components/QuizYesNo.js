import {Image, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React, {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";

const QuizYesNo = () => {
    const [answer, setAnswer] = useState(1);
    return (
        <View style={{marginTop: "15%"}}>
            <LinearGradient style={styles.checkBoxBtn}
                            colors={answer === 1 ? ['#3cd0bd', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(1)}>
                    <View
                        style={[styles.checkBox, {backgroundColor: answer === 1 ? "#172C60" : "white"}]}>

                        {answer === 1 &&
                        <Image
                            source={icons.checkIcon}
                            style={styles.checkBox_image}
                        />
                        }

                    </View>
                </TouchableOpacity>
                <Text style={[styles.answerText, {color: answer === 1 ? "white" : "#172c60"}]}>כן</Text>
            </LinearGradient>
            <LinearGradient style={styles.checkBoxBtn}
                            colors={answer === 2 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(2)}>
                    <View
                        style={[styles.checkBox, {backgroundColor: answer === 2 ? "#172C60" : "white"}]}>
                        {answer === 2 &&
                        <Image
                            source={icons.checkIcon}
                            style={styles.checkBox_image}
                        />
                        }
                    </View>
                </TouchableOpacity>
                <Text style={[styles.answerText, {color: answer === 2 ? "white" : "#172c60"}]}>לא</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBox: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: "center",
        borderColor: "#30B8B2",
        borderWidth: 2,
        justifyContent: 'center',
    },

    checkBox_image: {
        width: 15,
        height: 11,
        alignSelf: "center",
    },

    checkBoxBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 16,
        borderColor: "#30B8B2",
        borderWidth: 2,
        borderRadius: 4,
        paddingVertical: "4%",
    },

    checkBox_container: {
        position: "absolute",
        left: 10,
        width:"100%"
    },

    answerText: {
        fontSize: 18
    }

});


export default QuizYesNo
