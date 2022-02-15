import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { watchAnswerBack, watchFirstAnswer } from '../actions/faqActions';
import FormButton from '../commons/FormButton';
import FormContainer from '../commons/FormContainer';
import FormField from '../commons/FormField';
import DropDown from '../icons/DropDown';
import DropDownOpen from '../icons/DropDownOpen';
import IconGray4 from '../icons/IconGray4';
import { url } from '../utils/api';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import { responsiveWidth } from '../utils/layout';
import weights from '../utils/weights';

export default function FaqHrCard({
    question
}) {
    const [isQuestionOpen, setQuestionOpen] = useState(false)

    const [isAnswerEditable, setAnswerEditable] = useState(false)

    const dispatch = useDispatch()

    const tokenSelector = useSelector(state => state.auth?.token)

    console.log(`--- FaqHrCard`, question)

    const formattedDate = new Date(question.created_at)

    const submitAnswer = (values) => {
        dispatch(
            watchFirstAnswer(
                tokenSelector,
                question?.job_id,
                question?.id,
                values.answer
            )
        )

        setAnswerEditable(false)
    }

    const submitAnswerBack = (values) => {
        dispatch(
            watchAnswerBack(
                tokenSelector,
                question?.job_id,
                question?.id,
                values.answer
            )
        )
    }

    const openHandler = () => {
        setQuestionOpen(!isQuestionOpen)
        setAnswerEditable(false)
    }

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardButton}>
                <TouchableOpacity
                    onPress={openHandler}
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        flexDirection: 'row',
                        // justifyContent: 'flex-end',
                    }}
                >
                    <View
                        style={{
                            // transform: [{ rotate: '180deg' }],
                            width: '20%',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            // justifyContent: 'flex-start'
                            // alignSelf: 'flex-start'
                        }}
                    >
                        {
                            !isQuestionOpen
                                ? <DropDown
                                    iconColor={colors.darkSlateBlue}
                                    arrowColor={colors.white}
                                    iconWidth={responsiveWidth(22.5)}
                                    iconHeight={responsiveWidth(22.5)}
                                />
                                : <DropDownOpen
                                    iconColor={colors.tealGreen}
                                    iconWidth={responsiveWidth(22.5)}
                                    iconHeight={responsiveWidth(22.5)}
                                />
                        }
                    </View>

                    <View
                        style={{
                            width: '60%',
                            alignItems: 'flex-end'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: fonts.medium,
                                fontWeight: weights.regular,
                                color: colors.darkSlateBlue
                            }}
                        >
                            {question?.user_id || 'שם המתמודדת'}
                        </Text>
                        <Text
                            style={{
                                fontSize: fonts.xxsmall,
                                fontWeight: weights.regular,
                                color: colors.darkSlateBlue50
                            }}
                        >
                            {
                                formattedDate.toLocaleString(
                                    [],
                                    {
                                        year: 'numeric',
                                        month: 'numeric',
                                        day: 'numeric'
                                    }
                                )
                            }
                        </Text>
                    </View>

                    <Image
                        source={{
                            uri: `${url}${question?.user_avatar}`
                        }}
                        style={{
                            width: responsiveWidth(25),
                            height: responsiveWidth(25),
                            marginLeft: responsiveWidth(8)
                        }}
                    />
                </TouchableOpacity>
            </View>
            {
                !isQuestionOpen
                    ?
                    <View>
                        <Text style={styles.question}>
                            {question.question}
                        </Text>
                    </View>
                    :
                    <>
                        {
                            question?.status === 0
                            || 
                            isAnswerEditable
                                ?
                                <View 
                                    style={{paddingHorizontal: responsiveWidth(17.5)}}
                                >
                                    <Text style={styles.question}>
                                        {question.question}
                                    </Text>
                                    <FormContainer
                                        initialValues={{
                                            answer: ''
                                        }}
                                        // onSubmit={submitAnswer}
                                        onSubmit={submitAnswer}
                                    >
                                        <FormField
                                            name="answer"
                                            area
                                            height={responsiveWidth(66.5)}
                                            placeholder="התשובה שלי היא..."
                                            fieldContainerStyle={{
                                                marginBottom: responsiveWidth(12)
                                            }}
                                        />
                                        <FormButton
                                            buttonHeight={responsiveWidth(26.5)}
                                            title="פרסום התשובה"
                                            buttonStyle={{
                                                marginBottom: responsiveWidth(12)
                                            }}
                                        />
                                    </FormContainer>
                                </View>
                                :
                                <View>
                                    <Text 
                                        style={[
                                            styles.question, 
                                            styles.questionInEdit
                                        ]}
                                    >
                                        {question.question}
                                    </Text>
                                    <View style={{
                                        backgroundColor: colors.silverTwo,
                                        paddingHorizontal: responsiveWidth(17.5)
                                    }}>
                                        <Text
                                            style={{
                                                marginTop: responsiveWidth(12),
                                                fontSize: fonts.xsmall,
                                                color: colors.darkSlateBlue,
                                                textAlign: 'right'
                                            }}
                                        >
                                            {
                                                question?.answer 
                                                || "testing string testing string testing string testing string testing string testing string"
                                            }
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() => setAnswerEditable(true)}
                                            style={{
                                                flexDirection: 'row',
                                                width: '100%',
                                                justifyContent: 'flex-end',
                                                alignItems: 'center',
                                                marginVertical: responsiveWidth(8)
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: fonts.xxsmall,
                                                    color: colors.tealishTwo,
                                                    fontWeight: weights.bold,
                                                    marginHorizontal: responsiveWidth(4)
                                                }}
                                            >ערוך תגובה</Text>
                                            <IconGray4 />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                        }
                    </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderBottomWidth: responsiveWidth(1),
        borderBottomColor: colors.border,
        marginTop: responsiveWidth(12)
    },
    cardButton: {
        paddingHorizontal: responsiveWidth(17.5)
    },
    question: {
        marginVertical: responsiveWidth(12),
        fontSize: fonts.xsmall,
        fontWeight: weights.semiBold,
        color: colors.darkGreyBlue,
        textAlign: 'right',
        width: '100%',
        paddingHorizontal: responsiveWidth(17.5)
    },
    questionInEdit: {
        color: colors.darkSlateBlue50
    }
})