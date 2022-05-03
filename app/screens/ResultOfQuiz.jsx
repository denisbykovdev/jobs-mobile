import {
    Image,
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from "react-native";
import { icons } from "../configs/imagesAndIconsUrl";
import React, { useState, useEffect } from "react";
// import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
// import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { watchQuizResult } from '../actions/quizActions';
import CommonFrame from "../commons/CommonFrame";
import CommonButton from "../commons/CommonButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import  layout, { responsiveWidth } from "../utils/layout";
import Header from "../components/Header";
import IconLineWrapper from "../commons/IconLineWrapper";
import IconResults from "../icons/IconResults";
import fonts from "../utils/fonts";
import weights from "../utils/weights";
import colors from "../utils/colors";
import FormSelect from "../commons/FormSelect";
import DropDownOpen from "../icons/DropDownOpen";
import FormContainer from "../commons/FormContainer";
import BIGICON from "../icons/BIGICON";
import TabController from "../components/ListOfOpenOpportunities/TabController";

const ResultOfQuiz = () => {
    // const [education, setEducation] = useState(false)
    // const [social, setSocial] = useState(false)
    // const [agriculture, setagriculture] = useState(false)

    const dispatch = useDispatch()

    const navigation = useNavigation()

    const route = useRoute()
    
    const idSelector = useSelector(state => state.auth.user?.id)

    const sub_categoriesSelector = useSelector(state => state.auth?.user?.sub_categories)

    useEffect(() => {
        dispatch(
            watchQuizResult(
                idSelector
            )
        )

        console.log(
            `--- ResultOfQuiz/userTabController:${route.params !== undefined && route.params.userTabController}`
        )
    }, []);

    return (
        <CommonFrame>
            <Header visibleMenuButton={route.params !== undefined && route.params.userTabController ? true : false} />

            {
                route.params !== undefined && route.params.userTabController
                &&
                <TabController chosenTab={2} />
            }

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View>
                    <Image source={icons.testUp} style={styles.dotsIconStyles} />
                </View>
                <View>
                    <Image source={icons.testUpRight} style={styles.dotsIconStyles} />
                </View>
            </View>

            {
                route.params !== undefined && route.params.userTabController
                ?
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        // TODO: Changing options for responsive page.
                        // marginBottom: responsiveWidth(21)
                        marginBottom:layout.responsiveHeight(15)
                    }}
                >
                    <BIGICON />
                </View>
                :
                <View style={styles.headerTitles}>
                <IconLineWrapper>
                    <IconResults />
                </IconLineWrapper>

                <Text style={styles.headerTitle}> התוצאות שלך</Text>

                <Text style={styles.headerSubTitle}>נקדים ונאמר שממש התרשמנו ואנו בטוחים</Text>

                <Text style={styles.headerSubTitle}>שמחכה לך תקן מעולה שמתאים בול בשבילך</Text>
                </View>
            }
            

            <View
                style={styles.main}
            >
                {
                    route.params !== undefined && route.params.userTabController
                    ||
                    <Text style={styles.mainTitle}>התחומים ותתי התחומים אשר</Text>
                }
                {
                    route.params !== undefined && route.params.userTabController
                    ||
                    <Text style={styles.mainTitle}>נמצאו מתאימים עבורך:</Text>
                }
                

                <FormContainer
                    initialValues={{
                        education: '',
                        social: '',
                        agriculture: ''
                    }}
                >
                    <FormSelect
                        placeholder="חינוך"
                        name="education"
                        leftArrow
                        height={responsiveWidth(26.5)}
                        selectButtonStyle={{
                            marginBottom: responsiveWidth(6),
                            backgroundColor: colors.darkSlateBlue,
                            borderTopColor: colors.darkSlateBlue,
                            borderLeftColor: colors.darkSlateBlue,
                            borderRightColor: colors.darkSlateBlue,
                            borderBottomColor: colors.darkSlateBlue,
                        }}
                        whiteTitle
                    >
                        <DropDownOpen />
                    </FormSelect>
                    <FormSelect
                        placeholder="סוציאלי"
                        name="social"
                        leftArrow
                        height={responsiveWidth(26.5)}
                        selectButtonStyle={{
                            marginBottom: responsiveWidth(6),
                            backgroundColor: colors.darkSlateBlue,
                            borderTopColor: colors.darkSlateBlue,
                            borderLeftColor: colors.darkSlateBlue,
                            borderRightColor: colors.darkSlateBlue,
                            borderBottomColor: colors.darkSlateBlue,
                            opacity: 0.7
                        }}
                        whiteTitle
                    >
                        <DropDownOpen />
                    </FormSelect>
                    <FormSelect
                        placeholder="חקלאות"
                        name="agriculture"
                        leftArrow
                        height={responsiveWidth(26.5)}
                        selectButtonStyle={{
                            marginBottom: responsiveWidth(6),
                            backgroundColor: colors.darkSlateBlue,
                            borderTopColor: colors.darkSlateBlue,
                            borderLeftColor: colors.darkSlateBlue,
                            borderRightColor: colors.darkSlateBlue,
                            borderBottomColor: colors.darkSlateBlue,
                            opacity: 0.4
                        }}
                        whiteTitle
                    >
                        <DropDownOpen />
                    </FormSelect>
                </FormContainer>

            </View>

            <CommonButton
                buttonStyle={{
                    // TODO: Changing options for responsive page.
                    // marginTop: responsiveWidth(10) 
                    marginTop:layout.responsiveHeight(8)
                }}
                title="קדימה, לרשימת התקנים"
                onPress={() => navigation.navigate('MainScreenOfUsers')}
                buttonHeight={responsiveWidth(26.5)}
            />
        </CommonFrame>
    )
}

const styles = StyleSheet.create({
    dotsIconStyles: {
        width: responsiveWidth(53),
        height: responsiveWidth(42),
    },

    headerTitles: {
        alignItems: "center",
        marginTop: - responsiveWidth(24),
        marginBottom: responsiveWidth(16)
    },
    headerTitle: {
        marginTop: responsiveWidth(24),
        marginBottom: responsiveWidth(6),
        color: colors.darkGreyBlue,
        fontSize: fonts.xlarge,
        fontWeight: weights.bold
    },
    headerSubTitle: {
        color: colors.darkGreyBlue,
        fontSize: fonts.small,
        fontWeight: weights.semiBold,
        marginTop: responsiveWidth(6)
    },
    main: {
        alignItems: 'center'
    },
    mainTitle: {
        color: colors.darkGreyBlue,
        fontSize: fonts.small,
        fontWeight: weights.semiBold,
        marginBottom: responsiveWidth(6)
    }
});


export default ResultOfQuiz
