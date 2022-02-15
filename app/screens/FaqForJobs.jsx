import {
    Image,
    Text,
    StyleSheet,
    View,
    ImageBackground
} from "react-native";
import { icons, images } from "../configs/imagesAndIconsUrl";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import CommonFrame from "../commons/CommonFrame";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { url } from "../utils/api";
import colors from "../utils/colors";
import { responsiveWidth } from "../utils/layout";
import weights from "../utils/weights";
import fonts from "../utils/fonts";
import FormContainer from "../commons/FormContainer";
import FormField from "../commons/FormField";
import SearchIconInField from "../icons/SearchIconInField";
import FormButton from "../commons/FormButton";
import { watchAddQuestion, watchGetAllFaq } from "../actions/faqActions";
import Send from "../icons/Send";
import FaqCard from "../components/FaqCard";

const faqsSelector =
    [
        {
            "id": 2,
            "question": "תוכן השאלה  תוכן השאלה תוכןתוכן השאלה תוכן השאלהתוכן השאלה תוכן השאלה",
            "answers_count": 2,
            "created_at": "2020-11-06T13:20:03.000000Z",
            "job": {
                "id": 2,
                "title": "א.ס.ף – ארגון סיוע לפליטים"
            },
            "user": {
                "id": 445,
                "first_name": "",
                "last_name": "",
                "phone": "+285456",
                "organization_id": null,
                "role_id": {
                    "id": 5,
                    "name": "סיימתי שירות",
                    "icon": "http://jobs.test/storage/users/icons/icon-1.jpg",
                    "icon_active": "http://jobs.test/storage/users/icons/icon-1-active.jpg"
                },
                "provider": null,
                "avatar": null,
                "quiz": [],
                "is_before_school": false,
                "is_midrashot": false,
                "created_at": "2020-11-02T20:05",
                "updated_at": "2020-11-02T20:05"
            },
            "hr": null,
            "answers": [
                {
                    "id": 1,
                    "answer": "test testetest testetest testetest testetest testetest testetest teste",
                    "is_hr": 1,
                    "created_at": "2020-11-10T17:37:41.691323Z"
                },
                {
                    "id": 2,
                    "answer": "test testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest testetest teste",
                    "is_hr": 1,
                    "created_at": "2020-11-10T17:37:41.691468Z"
                }
            ]
        }
    ]

const FaqForJobs = () => {
    const tokenSelector = useSelector(state => state.auth.token);

    const jobSelector = useSelector(state => state.jobs.job !== null && state.jobs?.job)

    // const faqsSelector = useSelector(state => state.faq?.faqs)

    const dispatch = useDispatch()

    const navigation = useNavigation()

    useEffect(() => {
        tokenSelector && dispatch(
            watchGetAllFaq(
                tokenSelector,
                jobSelector.id,
                ''
            )
        )
    }, [tokenSelector, jobSelector])


    // const fetchData = async (text = "") => {
    //     console.log(id)
    //     const url = `${JobUrl}/api/jobs/${id}/faq`
    //     // const token = await getUserToken()
    //     // const token = await AsyncStorage.getItem('token');

    //     axios.get(url,
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${JSON.parse(tokenSelector)}`
    //             },
    //         }).then(response => {
    //             console.log("responseJobs", response);
    //             const data = response && response.data && response.data.data
    //             setArray(data);
    //         }).catch(error => console.log("FaqError", error));
    // }

    const submitFagSearch = (values) => {
        dispatch(
            watchGetAllFaq(
                tokenSelector,
                jobSelector.id,
                values.searchString
            )
        )
    }

    const submitQuestion = (values, { resetForm }) => {
        console.log(
            `--- Faq/submitQ/props:`,
            values.question,
            jobSelector.id,
        )
        dispatch(
            watchAddQuestion(
                tokenSelector,
                jobSelector.id,
                values.question
            )
        )
        resetForm()
    }

    return (
        <>
            <CommonFrame withArrow commonFrameStyle={{ position: 'relative' }}>
                <Header visibleBackArrow />
                <View style={styles.jobsOpportunityContainer}>
                    <ImageBackground
                        source={images.tellMore}
                        style={styles.headerContainer}
                    >
                        <Text
                            style={styles.headerContainerTitle}
                        >
                            {jobSelector?.title}
                        </Text>
                        <Text
                            style={styles.headerContainerSubTitle}
                        >
                            {jobSelector?.organization_name}
                        </Text>
                        <Text
                            style={styles.headerContainerSubTitle}
                        >
                            {jobSelector?.city_name}
                        </Text>
                    </ImageBackground>

                    <View style={[styles.mainContainer, shadowStyle]}>
                        <View style={styles.titleLogo}>
                            <View
                                style={styles.circleLogoContainer}
                            >
                                <Image
                                    style={styles.circleLogo}
                                    source={{
                                        uri: `${url}${jobSelector?.logo}`
                                    }}
                                />
                            </View>
                        </View>

                        <LinearGradient
                            colors={[
                                colors.tealishFour,
                                colors.tealishThree
                            ]}
                            style={{
                                width: '100%',
                                paddingTop: responsiveWidth(24),
                                paddingHorizontal: responsiveWidth(12),
                                borderRadius: 15,
                                height: responsiveWidth(64),
                                alignItems: 'center'
                            }}
                        >
                            <FormContainer
                                initialValues={{ searchString: '' }}
                                onSubmit={submitFagSearch}
                            >
                                <FormField
                                    name="searchString"
                                    fieldStyle={{
                                        borderColor: colors.whiteTwo,
                                        flexDirection: 'row-reverse',
                                        padding: 5,
                                        paddingStart: responsiveWidth(20)
                                    }}
                                    placeholder="חפש שאלות"
                                >
                                    <FormButton
                                        buttonColor="transparent"
                                        buttonWidth={responsiveWidth(5)}
                                        buttonHeight={responsiveWidth(5)}
                                    >
                                        <SearchIconInField />
                                    </FormButton>

                                </FormField>
                            </FormContainer>
                        </LinearGradient>

                        <View style={styles.questionsList}>
                            <Text style={styles.questionsListTitle}>שאלות נפוצות מהבנות שלנו</Text>
                            <View>
                                {
                                    faqsSelector
                                    && faqsSelector !== null
                                    && faqsSelector.map((faq, i) => (
                                        <FaqCard
                                            key={i}
                                            faq={faq}
                                        />
                                    ))
                                }
                            </View>
                        </View>

                    </View>
                </View>
            </CommonFrame>

            <View
                style={[
                    {
                        height: responsiveWidth(40),
                        // paddingBottom: responsiveWidth(20),
                        alignItems: "center",
                        justifyContent: "center",
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        left: 0,
                        paddingHorizontal: responsiveWidth(17.5),
                        backgroundColor: colors.white
                    },
                    shadowStyle
                ]}
            >
                <FormContainer
                    initialValues={{ question: '' }}
                    onSubmit={(values, { resetForm }) => submitQuestion(values,{ resetForm })}
                >
                    <FormField
                        name="question"
                        fieldStyle={{
                            borderColor: colors.darkGreyBlueLight,
                            flexDirection: 'row-reverse',
                            padding: 0,
                            paddingHorizontal: 15,
                            paddingStart: responsiveWidth(20)
                        }}
                        placeholder="יש לך שאלה לגבי התקן?"
                    >
                        <FormButton
                            buttonColor="transparent"
                            buttonWidth={responsiveWidth(5)}
                            buttonHeight={responsiveWidth(5)}
                        >
                            <Send />
                        </FormButton>
                    </FormField>
                </FormContainer>
            </View>
        </>
    )
}

const shadowStyle = {
    borderWidth: 0,
    borderColor: colors.white,
    shadowColor: colors.BLACK_20,
    shadowOffset: {
        width: 0,
        height: 0
    },
    shadowRadius: 4.5,
    shadowOpacity: 1,
    elevation: 5
}

const styles = StyleSheet.create({
    jobsOpportunityContainer: {
        marginBottom: responsiveWidth(40)
    },
    headerContainer: {
        resizeMode: "cover",
        // height: responsiveWidth(88),
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: responsiveWidth(36),
        paddingTop: responsiveWidth(12)
    },
    headerContainerTitle: {
        color: colors.whiteTwo,
        textAlign: "center",
        fontWeight: weights.bold,
        fontSize: fonts.large,
        marginBottom: responsiveWidth(2.5)
    },
    headerContainerSubTitle: {
        color: colors.whiteTwo,
        textAlign: "center",
        fontWeight: weights.thin,
        fontSize: fonts.xsmall,
        marginBottom: responsiveWidth(2.5)
    },
    mainContainer: {
        marginTop: - responsiveWidth(20),
        backgroundColor: colors.whiteTwo,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center'
    },
    titleLogo: {
        position: 'absolute',
        zIndex: 1,
        top: - responsiveWidth(15)
    },
    circleLogoContainer: {
        width: responsiveWidth(31),
        height: responsiveWidth(31),
        borderRadius: responsiveWidth(50),
        borderColor: colors.whiteTwo,
        borderWidth: responsiveWidth(1),
        marginBottom: responsiveWidth(6),
        backgroundColor: colors.whiteTwo,
        shadowColor: colors.BLACK_20,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 4.5,
        shadowOpacity: 1,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleLogo: {
        width: responsiveWidth(22.5),
        height: responsiveWidth(22.5)
    },
    questionsList: {
        marginTop: - responsiveWidth(10),
        backgroundColor: colors.whiteTwo,
        height: '100%',
        width: '100%',
        paddingHorizontal: responsiveWidth(12)
    },
    questionsListTitle: {
        marginVertical: responsiveWidth(12),
        fontSize: fonts.xsmall,
        color: colors.darkSlateBlue,
        fontWeight: weights.bold,
        textAlign: 'center'
    }
});

export default FaqForJobs
