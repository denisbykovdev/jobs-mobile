import { Image, ScrollView, Text, StyleSheet, View, ImageBackground, TouchableOpacity } from "react-native";
import { icons, images } from "../configs/imagesAndIconsUrl";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Stars from 'react-native-stars';
import ReviewsRow from "../components/ReviewsRow";
import { reviews } from "../configs/FakeData"
import Footer from "../components/Footer";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import CommonFrame from "../commons/CommonFrame";
import layout, { responsiveHeight, responsiveWidth } from "../utils/layout";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import weights from "../utils/weights";
import CommonButton from "../commons/CommonButton";
import useModal from "../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { watchStoreReview } from "../actions/reviewsActions";

const PageForApproveReview = () => {
    const navigation = useNavigation()

    const route = useRoute()

    const {
        job_id,
        token,
        first_name,
        last_name,
        phone,
        show_info,
        description,
        stars,
        date,
        duration,
        avatar
    } = route?.params

    const [modalOpen, modalClose, ModalContent] = useModal()

    const dispatch = useDispatch()

    const reviewsMessageSelector = useSelector(state => state.reviews.reviewsMessage)

    useEffect(() => {
        reviewsMessageSelector !== null && modalOpen()
    }, [reviewsMessageSelector])

    return (
        <CommonFrame
            commonFrameStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                paddingTop: 0
            }}
        >
            <ModalContent
                modalContainerStyle={{
                    alignItems: 'center',
                    paddingTop: responsiveWidth(100)
                }}
            >
                <ImageBackground
                    source={images.PopupSuccessBg}
                    style={{
                        width: responsiveWidth(171),
                        height: responsiveWidth(196),
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Text
                        style={{
                            fontSize: fonts.regular,
                            fontWeight: weights.bold,
                            color: colors.darkGreyBlue,
                            width: responsiveWidth(136.5),
                            textAlign: 'center'
                        }}
                    >חוות הדעת פורסמה בהצלחה.</Text>
                    <Text
                        style={{
                            fontSize: fonts.regular,
                            fontWeight: weights.bold,
                            color: colors.darkGreyBlue,
                            width: responsiveWidth(136.5),
                            textAlign: 'center'
                        }}
                    >תודה רבה לך.</Text>

                    <CommonButton
                        onPress={() => navigation.navigate('JobsOpportunity')
                        }
                        buttonHeight={responsiveWidth(26.5)}
                        title="אישור"
                        buttonWidth={responsiveWidth(146.5)}
                        buttonStyle={{
                            marginBottom: responsiveWidth(16),
                            marginTop: responsiveWidth(32)
                        }}
                    />
                </ImageBackground>
            </ModalContent>

            <ImageBackground
                source={images.PageForApproveReviewFon}
                style={{
                    // TODO: Changing options for responsive page.
                    // top: - responsiveWidth(7),
                    top: layout.height > 660 ? layout.responsiveHeight(-15) : layout.responsiveHeight(-48),
                    height: responsiveWidth(280),
                    width: layout.width,
                    paddingHorizontal: responsiveWidth(17.5),
                    // TODO: Changing options for responsive page.
                    // paddingVertical: responsiveWidth(20),
                    paddingVertical: layout.height > 660 ? layout.responsiveHeight(25) : layout.responsiveHeight(58),
                    position: 'relative',
                }}
            >
                <Header
                    whiteHeader={true}
                />

                <View
                    style={{
                        // marginTop: responsiveWidth(50),
                        marginTop: layout.responsiveHeight(42),
                        alignItems: "center"
                    }}
                >
                    <Image source={icons.PageForApproveReviewButton} />
                </View>

            </ImageBackground>

            <View style={styles.successBlock}>
                <Image source={icons.testDownLeft} style={styles.imageBgUp} />
                <View style={{ 
                    alignItems: "center",
                    // TODO: Changing options for responsive page.
                    //  marginTop: "5%" 
                    marginTop: layout.responsiveHeight(-2)
                     }}>
                    <Text
                        style={{
                            color: colors.lightNavy,
                            fontSize: fonts.regular,
                            fontWeight: weights.bold,
                            textAlign: "center",
                            // TODO: Changing options for responsive page.
                            marginTop: layout.height > 660 ? 0 : layout.responsiveHeight(-22)
                        }}
                    >
                        חוות הדעת שלך תפורסם באפליקציה
                        אנו רוצים לוודא שהיא מדוייקת
                       לפני שנוציא אותה לקהל הרחב.
                    </Text>
                </View>
                <Image source={icons.testDown} style={styles.imageBgDown} />
            </View>

            <View
                style={{
                    // TODO: Changing options for responsive page.
                    // marginTop: responsiveWidth(50),
                    marginTop: layout.responsiveHeight(20),
                    alignItems: "center",
                    paddingHorizontal: 32
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("NewReview")}
                >
                    <Text style={{
                        color: "#30b8b2",
                        fontSize: 15,
                        fontWeight: "bold"
                    }}>תראו לי את מה שכתבתי</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btn}
                    onPress={
                        () => dispatch(
                            watchStoreReview(
                                job_id,
                                token,
                                first_name,
                                last_name,
                                phone,
                                show_info,
                                description,
                                stars,
                                date,
                                duration,
                                avatar
                            )
                        )
                    }
                >
                    <Text style={styles.btnText}>אישור הפרטים שכתבתי ושליחה</Text>
                </TouchableOpacity>
            </View>
        </CommonFrame>
    )
}


const styles = StyleSheet.create({
    bgImage: {
        resizeMode: "cover",
        top: -2,
        height: 550,
    },

    bgTitle: {
        color: "white",
        fontSize: 34,
        fontWeight: "bold"
    },


    dotsRow: {
        justifyContent: "space-around",
        flexDirection: "row",
    },


    linerGradientBlock: {
        width: 95,
        height: 95,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        position: "absolute",
        left: "40%",
        bottom: -50
    },

    sucsessIcon: {
        width: 56,
        height: 56,
    },

    imageBgUp: {
        width: "40%",
        height: 86,
        // backgroundColor: "red",
        position: "absolute",
        left: 0,
        // TODO: Changing options for responsive page.
        // marginTop: 70
        marginTop: layout.height > 660 ? layout.responsiveHeight(40) : layout.responsiveHeight(-2)
    },

    imageBgDown: {
        width: "40%",
        height: 86,
        // backgroundColor: "red",
        position: "absolute",
        right: 0,
        // TODO: Changing options for responsive page.
        // marginTop: 70
        marginTop: layout.height > 660 ? layout.responsiveHeight(40) : layout.responsiveHeight(-2)
    },

    successBlock: {
        marginHorizontal: 37,
        // TODO: Changing options for responsive page.
        // marginTop: 25
        marginTop: layout.height > 660 ? layout.responsiveHeight(2) : layout.responsiveHeight(-27)
    },

    // successBlockText: {
    //     color: "#163066",
    //     fontSize:18,
    //     fontWeight:"bold",
    //     textAlign:"center",
    // },


    btn: {
        width: "100%",
        backgroundColor: "#30b8b2",
        paddingVertical: 15,
        alignItems: "center",
        // TODO: Changing options for responsive page.
        // marginTop: 20,
        marginTop: layout.responsiveHeight(5),
        borderRadius: 5,
        // TODO: Changing options for responsive page.
        // marginBottom: responsiveWidth(20)
    },

    btnText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }

});


export default PageForApproveReview
