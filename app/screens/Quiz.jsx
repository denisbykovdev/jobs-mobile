import { Image, ScrollView, Dimensions, Text, StyleSheet, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { icons, images } from "../configs/imagesAndIconsUrl";
import React, { useState, useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from 'react-redux';
import { watchGetQuiz, watchSetQuiz } from '../actions/quizActions';
import LogoChosenMiniVertical from "../icons/LogoChosenMiniVertical";
import ArrowBack from "../icons/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import CommonFrame from "../commons/CommonFrame";
import layout, { responsiveWidth } from "../utils/layout";
import colors from '../utils/colors'
import fonts from '../utils/fonts'
import weights from "../utils/weights";
import ChosenTick from "../icons/ChosenTick";
import CommonButton from "../commons/CommonButton";
import useStatusBar from "../hooks/useStatusBar";
import Progress from "../icons/Progress";

const Quiz = () => {
    const scrollRef = useRef()
    useStatusBar('dark-content', colors.white)

    const [progress, setProgress] = useState(0)
    const [answer, setAnswer] = useState(null)

    const idSelector = useSelector(state => state.auth.user?.id);
    const userId = idSelector

    const quizSelector = useSelector(state => state.quiz)

    const answersSelector = quizSelector !== null && quizSelector.data && JSON.parse(quizSelector.data[0].answer)

    const questionSelector = quizSelector !== null && quizSelector.data && quizSelector.data[0].question && quizSelector.data[0].question

    const answersArray = answersSelector !== null && Object.values(answersSelector).map(answer => Object.values(answer)[0].text)

    const navigation = useNavigation()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            watchGetQuiz(
                1
            )
        )
    }, [])

    useEffect(() => {
        const count = quizSelector.current_page + 1
        const u = (count > 2) ? (100 / quizSelector.last_page * count) : 0
        setProgress(u)

        // console.log(
        //     progress, u, count
        // )

    }, [quizSelector])

    const submitAnswer = () => {
        if (answer !== null) {
            dispatch(watchSetQuiz(
                userId,
                3,
                answer
            ))

            if (quizSelector.current_page === quizSelector.last_page) {
                navigation.navigate("ResultOfQuiz")
            } else {
                dispatch(
                    watchGetQuiz(
                        quizSelector !== null && quizSelector.current_page + 1
                    )
                )
            }
        }

        scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
          });
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            ref={scrollRef}
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
                                    // "ResultOfQuiz"
                                )
                            }
                        >
                            <ArrowBack />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.questionNumber}>
                        <Text style={styles.questionNumberText}>{`${quizSelector.current_page}`}</Text>
                    </View>

                    <View>
                        <Image
                            source={icons.testUp}
                            style={styles.imageBgUp}
                        />

                        <Text
                            style={styles.questionText}
                        >{questionSelector !== null && questionSelector}</Text>

                        <Image
                            source={icons.testDown}
                            style={styles.imageBgDown}
                        />
                    </View>

                </View>

                <View style={styles.questionsContainer}>
                    {
                        answersArray && answersArray.map((string, i) => (
                            <TouchableOpacity
                                key={i}
                                style={styles.answerContainer}
                                onPress={() => setAnswer(string)}
                            >
                                <LinearGradient
                                    style={styles.answerInnerContainer}
                                    colors={
                                        answer === string
                                            ? ['#3CD0BD', '#219BA5']
                                            : ["white", "white"]
                                    }
                                >
                                    <View
                                        style={[
                                            styles.checkBox,
                                            {
                                                backgroundColor: answer === string ? "#172C60"
                                                    : "white"
                                            }
                                        ]}
                                    >
                                        {answer === string
                                            &&
                                            <ChosenTick />
                                        }
                                    </View>

                                    <View style={styles.answerTextContainer}>
                                        <Text
                                            style={[
                                                {
                                                    color: answer === string
                                                        ? "white"
                                                        : "black"
                                                },
                                                styles.answerText
                                            ]}
                                        >{string}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        ))
                    }
                </View>

                <View
                    style={{
                        height: responsiveWidth(34),
                        // width: layout.width,
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1,
                        // paddingHorizontal: responsiveWidth(0.8),
                        backgroundColor: '#EBEBEB',
                        overflow: "hidden"
                    }}
                >
                    <Progress />
                    <View
                        style={{
                            backgroundColor: colors.tealishTwo,
                            position: 'absolute',
                            width: responsiveWidth(progress),
                            height: responsiveWidth(34),
                            // right: responsiveWidth(0.8),
                            // rigth: 0,
                            zIndex: -1
                        }}
                    ></View>
                    <Text
                        style={{
                            position: 'absolute',
                            top: responsiveWidth(20),
                            fontSize: fonts.xlarge,
                            fontWeight: weights.bold,
                            color: colors.coolGrey
                        }}
                    >
                        %{Math.round(progress)}
                    </Text>
                </View>

                <View style={{ paddingHorizontal: responsiveWidth(17.5) }}>
                    <CommonButton
                        title="לשאלה הבאה"
                        onPress={() => submitAnswer()}
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
        paddingBottom: responsiveWidth(20),
        backgroundColor: colors.white,
        // flex: 1,
        // height: layout.height
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
        color: colors.darkSlateBlue,
        paddingTop: responsiveWidth(20),
        fontSize: fonts.small,
        fontWeight: weights.bold,
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
        marginBottom: responsiveWidth(8),
        shadowColor: colors.BLACK_20,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 4.5,
        shadowOpacity: 1,

        elevation: 2
    },
    answerInnerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: responsiveWidth(10),
        borderColor: colors.whiteThree,
        borderRadius: 4,
        borderWidth: responsiveWidth(0.3)
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
        textAlign: 'right',
        color: colors.darkSlateBlue,
        fontSize: fonts.small
    },
    answerTextContainer: {
        marginRight: '10%',
        width: '80%'
    }
});

export default Quiz
