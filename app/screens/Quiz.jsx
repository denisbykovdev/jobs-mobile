import { Image, ScrollView, Dimensions, Text, StyleSheet, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { icons, images } from "../configs/imagesAndIconsUrl";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from 'react-redux';
import { watchGetQuiz, watchSetQuiz } from '../actions/quizActions';
import LogoChosenMiniVertical from "../icons/LogoChosenMiniVertical";
import ArrowBack from "../icons/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import CommonFrame from "../commons/CommonFrame";
import { responsiveWidth } from "../utils/layout";
import colors from '../utils/colors'
import fonts from '../utils/fonts'
import weights from "../utils/weights";
import ChosenTick from "../icons/ChosenTick";
import CommonButton from "../commons/CommonButton";

const Quiz = () => {
    const [questionText, setQuestionText] = useState();
    const [quizAnswer, setQuizAnswer] = useState(1);
    const [lastPage, setLastPage] = useState(3);
    const [answers, setAnswers] = useState([]);
    const [answer, setAnswer] = useState(1);
    const [percent, setPercent] = useState(10);

    const quiz = useSelector(state => state.quiz)

    const idSelector = useSelector(state => state.auth.user?.id);

    const navigation = useNavigation()

    const dispatch = useDispatch()
    // console.log("answers",answers)
    //setAnswers(JSON.parse(quizSelector.data[0].answer));
    const getQuiz = () => {
        dispatch(watchGetQuiz(
            quizAnswer
        ))
        if (quiz.data && quiz.data[0] !== null) {
            setQuizAnswer(quiz.current_page);
            setQuestionText(quiz.data[0].question);
            setLastPage(quiz.last_page);
            //setAnswers(JSON.parse(quiz.data[0].answer));
            setAnswers(JSON.parse(quiz.data[0].answer));
            console.log("answers", answers)
            setPercent(Math.round(100 / lastPage * quizAnswer) + percent);
        }
    }

    useEffect(() => {
        getQuiz();
    }, [quizAnswer])


    const chosenAnswer = async () => {
        dispatch(watchSetQuiz(
            idSelector !== null && idSelector
        ));

        if (quizAnswer < lastPage) {
            setQuizAnswer(quizAnswer + 1);
        } else {
            navigation.navigate("ResultOfQuiz");
        }
    }

    if (quiz.data && quiz.data[0].answer.length === 0) {
        return (
            <View>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.mainContainer}>
                <View style={styles.titleContainer}>
                    <View
                        style={styles.headerContainer}
                    >
                        <LogoChosenMiniVertical />

                        <Text style={styles.headerTitle}>שאלון אישיות </Text>

                        <TouchableOpacity
                            onPress={
                                () => navigation.navigate(
                                    "User",
                                    { isBlog: true }
                                )
                            }
                        >
                            <ArrowBack />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.questionNumber}>
                        <Text style={styles.questionNumberText}>{`0${Number(quizAnswer)}`}</Text>
                    </View>

                    <View>
                        <Image
                            source={icons.testUp}
                            style={styles.imageBgUp}
                        />

                        <Text
                            style={styles.questionText}
                        >{questionText}</Text>

                        <Image
                            source={icons.testDown}
                            style={styles.imageBgDown}
                        />
                    </View>

                </View>

                {console.log("quiz", quiz)}

                {quiz.data &&
                    <View style={styles.questionsContainer}>
                        {
                            JSON.parse(quiz.data[0].answer)[0]
                            &&
                            <TouchableOpacity
                                style={styles.answerContainer}
                                onPress={() => setAnswer(1)}
                            >
                                <LinearGradient
                                    style={styles.answerInnerContainer}
                                    colors={
                                        answer === 1
                                            ? ['#3CD0BD', '#219BA5']
                                            : ["white", "white"]
                                    }
                                >
                                    <View
                                        style={[
                                            styles.checkBox,
                                            {
                                                backgroundColor: answer === 1 ? "#172C60"
                                                    : "white"
                                            }
                                        ]}
                                    >
                                        {answer === 1
                                            &&
                                            <ChosenTick />
                                        }
                                    </View>

                                    <View style={styles.answerTextContainer}>
                                        <Text
                                            style={[
                                                {
                                                    color: answer === 1
                                                        ? "white"
                                                        : "black"
                                                },
                                                styles.answerText
                                            ]}
                                        >{JSON.parse(quiz.data[0].answer)[0].answer_one.text}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        }

                        {console.log("sdfd", quiz.data[0])}

                        {
                            JSON.parse(quiz.data[0].answer)[1]
                            &&
                            <TouchableOpacity
                                style={styles.answerContainer}
                                onPress={() => setAnswer(2)}
                            >
                                <LinearGradient
                                    style={styles.answerInnerContainer}
                                    colors={answer === 2 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}
                                >
                                    <View
                                        style={[styles.checkBox, { backgroundColor: answer === 2 ? "#172C60" : "white" }]}>
                                        {
                                            answer === 2
                                            &&
                                            <ChosenTick />
                                        }
                                    </View>
                                    <View style={styles.answerTextContainer}>
                                        <Text
                                            style={[
                                                {
                                                    color: answer === 2
                                                        ? "white"
                                                        : "black"
                                                },
                                                styles.answerText
                                            ]}
                                        >{JSON.parse(quiz.data[0].answer)[1].answer_two.text}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>}

                        {JSON.parse(quiz.data[0].answer)[2] &&
                            <TouchableOpacity style={styles.answerContainer} onPress={() => setAnswer(3)}>
                                <LinearGradient style={styles.answerInnerContainer}
                                    colors={answer === 3 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                                    <View
                                        style={[styles.checkBox, { backgroundColor: answer === 3 ? "#172C60" : "white" }]}>
                                        {answer === 3 &&
                                            <Image
                                                source={icons.checkIcon}
                                                style={styles.checkBox_image}
                                            />
                                        }
                                    </View>
                                    <View style={styles.answerTextContainer}>
                                        <Text
                                            style={[
                                                {
                                                    color: answer === 3
                                                        ? "white"
                                                        : "black"
                                                },
                                                styles.answerText
                                            ]}
                                        >{JSON.parse(quiz.data[0].answer)[2].answer_three.text}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>}
                        {JSON.parse(quiz.data[0].answer)[3] &&
                            <TouchableOpacity style={styles.answerContainer} onPress={() => setAnswer(4)}>
                                <LinearGradient style={styles.answerInnerContainer}
                                    colors={answer === 4 ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}>
                                    <View
                                        style={[styles.checkBox, { backgroundColor: answer === 4 ? "#172C60" : "white" }]}>
                                        {answer === 4 &&
                                            <Image
                                                source={icons.checkIcon}
                                                style={styles.checkBox_image}
                                            />
                                        }
                                    </View>
                                    <View style={styles.answerTextContainer}>
                                        <Text
                                            style={[
                                                {
                                                    color: answer === 4
                                                        ? "white"
                                                        : "black"
                                                },
                                                styles.answerText
                                            ]}
                                        >{JSON.parse(quiz.data[0].answer)[3].answer_four.text}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>}
                    </View>
                }
                <View style={{ position: "relative", marginVertical: 42.5 }}>
                    <View style={{ position: "absolute", height: 50 }}>
                        <Image source={images.line} style={[styles.openStandardLoaderFill, { width: Dimensions.get('window').width }]} />
                    </View>
                    <View style={{ width: `${100 - (100 / lastPage * quizAnswer)}%`, overflow: "hidden", position: "absolute", height: 50 }}>
                        <Image source={images.line} style={[styles.openStandardLoaderEmpty, { width: Dimensions.get('window').width }]} />
                    </View>
                    <View style={{ position: "absolute", height: 50, marginTop: 10, }}>
                        <Image source={images.line} style={[styles.openStandardLoaderEmpty, { width: Dimensions.get('window').width, tintColor: "hsla(182, 58%, 76%, 0.2)" }]} />
                    </View>
                    <View style={{ position: "absolute", height: 50, marginTop: "10%", width: Dimensions.get('window').width }}>
                        <Text style={{ textAlign: "center", color: "#9399a6", fontWeight: "bold", fontSize: 20 }}>%{percent}</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 34 }}>

                    <CommonButton
                        title="לשאלה הבאה"
                        onPress={() => chosenAnswer()}
                        buttonHeight={responsiveWidth(26.5)}
                        buttonStyle={{
                            marginTop: responsiveWidth(23)
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        paddingBottom: responsiveWidth(20)
    },
    titleContainer: {
        alignItems: "center",
        marginHorizontal: responsiveWidth(17.5),
        marginVertical: responsiveWidth(20)
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        marginBottom: responsiveWidth(19.5)
    },
    headerTitle: {
        color: colors.darkSlateBlue,
        fontSize: fonts.small,
        fontWeight: weights.bold,
        flexBasis: '33%'
    },
    questionNumber: {
        width: 50,
        height: 50,
        backgroundColor: colors.silver,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    questionNumberText: {
        color: colors.whiteTwo,
        fontSize: fonts.medium,
        fontWeight: weights.bold
    },
    questionText: {
        paddingHorizontal: responsiveWidth(23.5),
        paddingVertical: responsiveWidth(22.5),
        color: "#172c60",
        paddingTop: "10%",
        fontSize: 21,
        fontWeight: "bold",
        textAlign: "center"
    },
    imageBgUp: {
        width: 106,
        height: 86,
        position: "absolute",
        left: 0
    },
    imageBgDown: {
        width: 106,
        height: 86,
        position: "absolute",
        right: 0,
        bottom: 0
    },
    questionsContainer: {
        paddingHorizontal: responsiveWidth(17.5)
    },
    answerContainer: {
        marginBottom: responsiveWidth(8)
    },
    answerInnerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: colors.tealishTwo,
        borderRadius: 4,
        borderWidth: responsiveWidth(0.1),
        padding: responsiveWidth(10)
    },
    checkBox: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        borderRadius: 50,
        alignItems: "center",
        borderColor: colors.tealGreen,
        borderWidth: responsiveWidth(1),
        justifyContent: 'center',
        marginRight: responsiveWidth(10)
    },
    answerText: {
        textAlign: 'right'
    },
    answerTextContainer: {
        marginRight: '10%',
        width: '80%'
    },



    openStandardLoaderFill: {
        width: 400,
        resizeMode: 'cover',
        height: 50,
        tintColor: "#3cd0bd",
    },
    openStandardLoaderEmpty: {
        width: 400,
        resizeMode: 'cover',
        height: 50,
        tintColor: "#cccccc",
        zIndex: 999
    },

    applyAnswer: {
        alignItems: "center",
        marginTop: 80,
        borderColor: "#ffffff",
        backgroundColor: "#30B8B2",
        borderRadius: 2,
        borderWidth: 0.5,
        paddingVertical: "4%",
    }
});

export default Quiz
