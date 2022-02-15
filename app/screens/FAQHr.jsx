import {
    Image,
    TouchableOpacity,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    TextInput,
    AsyncStorage
} from "react-native";
import { icons, images } from "../configs/imagesAndIconsUrl";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useSelector } from "react-redux";
import authHeader from "../utils/authHeader";
import CommonFrame from "../commons/CommonFrame";
import IconLineWrapper from "../commons/IconLineWrapper";
import IconQuestion from "../icons/IconQuestion";
import colors from "../utils/colors";
import { url } from "../utils/api";
import { useIsFocused } from "@react-navigation/native";
import FaqHrCard from "../components/FaqHrCard";
import { responsiveWidth } from "../utils/layout";

const FAQHr = () => {
    const [faqQuestions, setFaqQuestions] = useState(null)

    const [error, setError] = useState(null)

    const tokenSelector = useSelector(state => state.auth.token)

    const userSelector = useSelector(state => state.auth.user)

    const isFocused = useIsFocused()

    const firstAnswerMessageSelector = useSelector(state => state.faq?.firstAnswerMessage)

    useEffect(() => {
        isFocused && getFaqQuestions()
    }, [isFocused, firstAnswerMessageSelector])

    const getFaqQuestions = async () => {
        try {
            const questionsUrl = `${url}/api/hr/jobs/questions?hr_id=${userSelector.id}`

            const result = await axios.get(
                questionsUrl,
                authHeader(
                    tokenSelector
                )
            )

            console.log(
                `--- FaqHr/faqQuestions:`, result
            )

            setFaqQuestions(result.data.faqs)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        console.log(
            `--- FaqHr/faqQuestions:`, faqQuestions
        )
    }, [faqQuestions])

    return (
        <CommonFrame
            commonFrameStyle={{
                paddingHorizontal: 0
            }}
        >
            <View
                style={{
                    paddingHorizontal: responsiveWidth(17.5)
                }}
            >
                <Header />
                <IconLineWrapper lineColor={colors.cloudyBlue}>
                    <IconQuestion iconColor={colors.cloudyBlue} />
                </IconLineWrapper>
            </View>
            
            {
                faqQuestions &&
                faqQuestions !== null
                && faqQuestions.map((question, i) => 
                    <FaqHrCard
                        key={i}
                        question={question}
                    />
                )
            }
        </CommonFrame>
    )
}

export default FAQHr
