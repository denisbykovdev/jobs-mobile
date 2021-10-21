import { Image, Text, StyleSheet, View, AsyncStorage, ActivityIndicator, TouchableOpacity } from "react-native";
import { icons, images } from "../configs/imagesAndIconsUrl";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { getUserToken, JobUrl, Token } from "../configs/ApiCallHelper";
import axios from "axios";

const QuizWithAnswers = () => {
    const [answers, setAnswers] = useState([]);
    const [answer, setAnswer] = useState(1);
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchData().then()
    }, [page])

    const fetchData = async () => {
        const url = `${JobUrl}/api/quiz/get?page=${page}`
        // const token = await getUserToken()

        axios.get(url,
        ).then(response => {
            //             console.log("responseQuiz", response.data.result.data[0].answer);
            let question = response.data.result.data[0].question
            setAnswers(JSON.parse(response.data.result.data[0].answer));


        }).catch(error => console.log("QuizError", error));
    }

    const chosenAnswer = async () => {
        console.log(answer);
        const url = `${JobUrl}/api/quiz/set`
        axios.post(url, {
            'user': 711,
            'quiz': 1,
            'answer': answer,
        }).then(response => {
            console.log(response);

        }).catch(error => console.log("chosenAnswer", error));
    }
    if (answers.length === 0) {
        return (
            <View>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return (
        <View style={{ marginVertical: "14%" }}>
            <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(1)}>
                <LinearGradient style={styles.checkBoxBtn}
                    colors={answer === 1 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                    <View
                        style={[styles.checkBox, { backgroundColor: answer === 1 ? "#172C60" : "white" }]}>
                        {answer === 1 &&
                            <Image
                                source={icons.checkIcon}
                                style={styles.checkBox_image}
                            />
                        }
                    </View>
                </LinearGradient>
                <Text style={{ color: answer === 1 ? "white" : "black" }}>{answers[0].answer_one.text}</Text>
            </TouchableOpacity>
            <LinearGradient style={styles.checkBoxBtn}
                colors={answer === 2 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(2)}>
                    <View
                        style={[styles.checkBox, { backgroundColor: answer === 2 ? "#172C60" : "white" }]}>
                        {answer === 2 &&
                            <Image
                                source={icons.checkIcon}
                                style={styles.checkBox_image}
                            />
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{ color: answer === 2 ? "white" : "black" }}>{answers[1].answer_two.text}</Text>
            </LinearGradient>
            <LinearGradient style={styles.checkBoxBtn}
                colors={answer === 3 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(3)}>
                    <View
                        style={[styles.checkBox, { backgroundColor: answer === 3 ? "#172C60" : "white" }]}>
                        {answer === 3 &&
                            <Image
                                source={icons.checkIcon}
                                style={styles.checkBox_image}
                            />
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{ color: answer === 3 ? "white" : "black" }}>{answers[2].answer_three.text}</Text>
            </LinearGradient>
            <LinearGradient style={styles.checkBoxBtn}
                colors={answer === 4 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                <TouchableOpacity style={styles.checkBox_container} onPress={() => setAnswer(4)}>
                    <View
                        style={[styles.checkBox, { backgroundColor: answer === 4 ? "#172C60" : "white" }]}>
                        {answer === 4 &&
                            <Image
                                source={icons.checkIcon}
                                style={styles.checkBox_image}
                            />
                        }
                    </View>
                </TouchableOpacity>
                <Text style={{ color: answer === 4 ? "white" : "black" }}>{answers[3].answer_four.text}</Text>
            </LinearGradient>
            <TouchableOpacity style={styles.checkBox_container} onPress={() => chosenAnswer()}>
                <Text>Test</Text>
            </TouchableOpacity>
            <View style={{ position: "relative" }}>
                <View style={{ width: `${100 / 62 * 62}%`, position: "absolute", overflow: "hidden", height: 50 }}>
                    <Image source={images.line} style={styles.openStandardLoaderFill} />
                </View>
                <View style={{ position: "absolute", height: 50 }}>
                    <Image source={images.line} style={styles.openStandardLoaderEmpty} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    openStandardLoaderFill: {
        position: "absolute",
        height: 50,
        tintColor: "#3cd0bd",
        borderRadius: 5,
        zIndex: 999
    },
    openStandardLoaderEmpty: {
        position: "absolute",
        height: 50,
        borderRadius: 5,
        tintColor: "hsla(0, 0%, 0%, 0.2)",
    },
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
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 16,
        borderColor: "#30B8B2",
        borderRadius: 4,
        borderWidth: 2,
        paddingVertical: "3%",
    }

});


export default QuizWithAnswers
