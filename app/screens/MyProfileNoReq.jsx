import { Image, ImageBackground, AsyncStorage, ScrollView, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { icons, images } from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import TabController from "../components/ListOfOpenOpportunities/TabController";
import Footer from "../components/Footer";
import RequestsItems from "../components/RequestsItems";
import { getUserToken, JobUrl, Token } from "../configs/ApiCallHelper";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { watchGetListOfRequests } from "../actions/profileActions";
import CommonFrame from "../commons/CommonFrame";
import layout, { responsiveWidth } from "../utils/layout";
import colors from "../utils/colors";
import IconLineWrapper from "../commons/IconLineWrapper";
import fonts from "../utils/fonts";
import weights from "../utils/weights";
import BIGICON241 from "../icons/BIGICON241";
import BigICON16 from "../icons/BigICON16";
import CommonButton from "../commons/CommonButton";
import StatusWaiting from "../icons/StatusWaiting";
import StatusDenied from "../icons/StatusDenied";
import Retry from "../icons/Retry";
import StatusTicket from "../icons/StatusTicket";
import StatusApproved from "../icons/StatusApproved";
import { url } from "../utils/api";
import { watchUpdateJobStatus } from "../actions/opportunitiesActions";

const MyProfileNoReq = () => {
    const navigation = useNavigation()

    const dispatch = useDispatch()

    const tokenSelector = useSelector(state => state.auth?.token)

    const listOfRequestsSelector = useSelector(state => state.profile?.listOfRequests)

    const retryStatus = (jobId, statusId) => {
        dispatch(
            watchUpdateJobStatus(
                tokenSelector,
                jobId,
                statusId
            )
        )
    }

    useEffect(() => {
        dispatch(
            watchGetListOfRequests(
                tokenSelector
            )
        )
    }, [])

    return (
        <CommonFrame
            commonFrameStyle={{
                paddingHorizontal: 0
            }}
        >
            <View
                style={{
                    marginHorizontal: responsiveWidth(17.5)
                }}
            >
                <Header />
                <TabController chosenTab={4} />
            </View>

            {
                listOfRequestsSelector && listOfRequestsSelector.length > 0
                    ?
                    <View style={{ paddingHorizontal: responsiveWidth(17.5), paddingTop: responsiveWidth(12) }}>
                        {
                            listOfRequestsSelector.map((item, i) => (
                                <View
                                    key={i}
                                    style={{
                                        marginVertical: responsiveWidth(4)
                                    }}
                                >
                                    <ImageBackground
                                        source={(images.tellMore)}
                                        style={styles.imageBackground}
                                    >
                                        <Text
                                            style={styles.imageBackgroundTitle}
                                        >
                                            {item.title}
                                        </Text>
                                        <Text
                                            style={styles.imageBackGroundSmallTitle}
                                        >
                                            {item.organization_name}
                                        </Text>
                                    </ImageBackground>

                                    <View style={[styles.reviewsContainer, shadowStyle]}>

                                    <View
                                        style={styles.circleOrganizationLogoContainer}
                                    >
                                        <Image
                                            style={styles.organizationLogo}
                                            source={{ uri: `${url}${item?.logo}` }}
                                        />
                                    </View>

                                        <View style={styles.reviewsInner}>
                                            {
                                                item.status === 0 && item.send_again === true
                                                ?
                                                <TouchableOpacity
                                                    onPress={
                                                        () => retryStatus(
                                                            item.id,
                                                            item.status
                                                        )
                                                    }
                                                >
                                                    <Retry />
                                                </TouchableOpacity>
                                                : item.status === 0 && item.send_again === false 
                                                ? 
                                                <StatusWaiting />
                                                :
                                                <StatusDenied />
                                            }
                                            <Text style={{
                                                fontSize: fonts.small,
                                                fontWeight: weights.bold,
                                                marginLeft: responsiveWidth(4),
                                                color: item.status === 0 && item.send_again === true
                                                ? colors.darkGreyBlue
                                                : item.status === 0 && item.send_again === false
                                                ? colors.darkGreyBlueTwo71
                                                : colors.pinkRed
                                            }}>
                                                {item.status_text}
                                            </Text>
                                            <Text style={{
                                                color: colors.darkGreyBlue,
                                                fontSize: fonts.xsmall,
                                                fontWeight: weights.thin,
                                                marginLeft: responsiveWidth(6)
                                            }}>סטטוס:</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                    :
                    <View style={{ marginBottom: responsiveWidth(40) }}>
                        <View
                            style={{
                                alignItems: "center"
                            }}
                        >
                            <Image
                                source={icons.fon}
                                style={{
                                    width: "100%",
                                    height: responsiveWidth(170),
                                    position: 'relative'
                                }}
                            />
                            <View
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: responsiveWidth(116),
                                    height: responsiveWidth(116),
                                    borderRadius: responsiveWidth(100),
                                    marginTop: 120,
                                    backgroundColor: colors.darkSlateBlueTwo,
                                    zIndex: 3,
                                    position: 'absolute'
                                }}>
                                <Image
                                    source={icons.lineTop}
                                    style={{
                                        position: 'absolute',
                                        zIndex: 4,
                                        width: responsiveWidth(29.5),
                                        height: responsiveWidth(36.5),
                                        left: responsiveWidth(90),
                                        bottom: responsiveWidth(77.5)
                                    }}
                                />
                                {/* <BigSadiconSearch /> */}
                                <BigICON16 />
                            </View>

                            <View style={{
                                alignItems: "center",
                                width: '100%',

                            }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: "row",
                                    paddingVertical: responsiveWidth(12),
                                    paddingHorizontal: responsiveWidth(17.5),
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    // height: responsiveWidth(60)
                                }}>
                                    <Image
                                        source={icons.testUp}
                                        style={{
                                            width: responsiveWidth(53),
                                            height: responsiveWidth(42.5),
                                            position: 'absolute',
                                            left: responsiveWidth(17.5),
                                            top: responsiveWidth(12)
                                        }}
                                    />

                                    <Text
                                        style={{
                                            width: '90%',
                                            color: colors.darkGreyBlue,
                                            fontSize: fonts.xlarge,
                                            fontWeight: weights.bold,
                                            textAlign: 'center',
                                            marginVertical: responsiveWidth(30)
                                        }}
                                    >נראה שריק פה. עדיין לא
                                        .שלחת הודעות לרכזות</Text>

                                    <Image
                                        source={icons.testDown}
                                        style={{
                                            width: responsiveWidth(53),
                                            height: responsiveWidth(42.5),
                                            position: 'absolute',
                                            bottom: responsiveWidth(12),
                                            right: responsiveWidth(17.5)
                                        }}
                                    />
                                </View>
                                <Text
                                    style={{
                                        marginBottom: responsiveWidth(12),
                                        color: colors.darkGreyBlue,
                                        fontSize: fonts.xxsmall,
                                        fontWeight: weights.thin
                                    }}
                                >?רוצה למצוא תקנים מעניינים</Text>
                            </View>
                        </View>
                        <CommonButton
                            title="קחו אותי לעמוד החיפוש"
                            buttonHeight={responsiveWidth(26.5)}
                            onPress={() => navigation.navigate('SearchWithFilter')}
                            buttonStyle={{
                                alignSelf: 'center'
                            }}
                            buttonWidth={
                                layout.width - responsiveWidth(33)
                            }
                        />
                    </View>
            }
        </CommonFrame>
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
    imageBackground: {
        resizeMode: "cover",
        height: responsiveWidth(58),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: responsiveWidth(10)
    },
    imageBackgroundTitle: {
        color: colors.whiteTwo,
        textAlign: "center",
        fontWeight: weights.bold,
        fontSize: fonts.large,
        marginHorizontal: responsiveWidth(12)
    },
    imageBackGroundSmallTitle: {
        color: colors.whiteTwo,
        fontSize: fonts.xsmall,
        textAlign: "center",
        fontWeight: weights.thin,
        marginHorizontal: responsiveWidth(12)
    },
    reviewsContainer: {
        marginTop: - responsiveWidth(15),
        backgroundColor: colors.whiteTwo,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        // padding: responsiveWidth(15),
        height: responsiveWidth(34)
    },
    reviewsInner: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'flex-end',
        position: 'relative',
        padding: responsiveWidth(12)
    },
    circleOrganizationLogoContainer: {
        position: 'absolute',
        left: responsiveWidth(12),
        top: - responsiveWidth(12),
        width: responsiveWidth(23.5),
        height: responsiveWidth(23.5),
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
    organizationLogo: {
        width: responsiveWidth(17),
        height: responsiveWidth(17)
    }
});

export default MyProfileNoReq
