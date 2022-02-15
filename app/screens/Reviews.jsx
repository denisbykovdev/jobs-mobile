import { Image, ScrollView, Text, StyleSheet, View, ImageBackground, TouchableOpacity, AsyncStorage } from "react-native";
import { icons, images } from "../configs/imagesAndIconsUrl";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Stars from 'react-native-stars';
import ReviewsRow from "../components/ReviewsRow";
import { reviews } from "../configs/FakeData"
import Footer from "../components/Footer";
import { getUserToken, JobUrl } from "../configs/ApiCallHelper";
import axios from "axios";
import CommonFrame from "../commons/CommonFrame";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { watchGetReviews } from "../actions/reviewsActions";
import { url } from "../utils/api";
import layout, { responsiveWidth } from "../utils/layout";
import colors from "../utils/colors";
import weights from "../utils/weights";
import fonts from "../utils/fonts";
import CommonButton from "../commons/CommonButton";
import ReviewCard from "../components/ReviewCard";
import BIGICON241 from "../icons/BIGICON241";
import IconLineWrapper from "../commons/IconLineWrapper";
import Like241 from "../icons/Like241";

// const reviewsSelector = {
//     "title": "2B friendly",
//     "cover_image": false,
//     "logo": "/storage/organizations/logos/1604066982.png",
//     "stars": 5,
//     "count": 12,
//     "data": [
//         {
//             "name": "fdgdfgfd",
//             "avatar": "/users/avatars/",
//             "created_at": "2020-10-29T09:27:45.000000Z",
//             "stars": 2,
//             "description": "sdfsaa\n"
//         },
//         {
//             "name": "rete",
//             "avatar": "/users/avatars/",
//             "created_at": "2020-10-29T09:29:58.000000Z",
//             "stars": 3,
//             "description": "fwerewrew\n"
//         }
//     ]
// }

const Reviews = () => {
    const tokenSelector = useSelector(state => state.auth.token);

    const jobSelector = useSelector(state => state.jobs.job !== null && state.jobs?.job)

    const reviewsSelector = useSelector(state => state.reviews?.reviews)

    const dispatch = useDispatch()

    const navigation = useNavigation()

    useEffect(() => {
        tokenSelector
            && dispatch(
                watchGetReviews(
                    tokenSelector,
                    jobSelector.id
                )
            )
    }, [])

    return (
        <>
            {
                reviewsSelector
                    && reviewsSelector !== null
                    && reviewsSelector.length > 0
                    ?
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

                                    <View style={styles.reviewsList}>
                                        <Text style={styles.reviewsListTitle}>{reviewsSelector?.count} חוות דעת</Text>

                                        <View style={{
                                            flexDirection: 'row',
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: '100%',
                                            // marginVertical: responsiveWidth(8),
                                            transform: [{ scaleX: -1 }],
                                            borderBottomColor: colors.silver,
                                            borderBottomWidth: responsiveWidth(1),
                                            paddingBottom: responsiveWidth(12)
                                        }}>
                                            <Stars
                                                half={false}
                                                default={5}
                                                count={5}
                                                display={reviewsSelector.stars}
                                                spacing={5}
                                                starSize={responsiveWidth(6)}
                                                fullStar={icons.starFilled}
                                                emptyStar={icons.starEmpty}
                                            />
                                        </View>
                                        <View>
                                            {
                                                reviewsSelector
                                                && reviewsSelector !== null
                                                && reviewsSelector.data.map((review, i) => (
                                                    <ReviewCard
                                                        key={i}
                                                        review={review}
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
                            <CommonButton
                                title="גם לי יש מה להגיד"
                                onPress={() => navigation.navigate('NewReview')}
                                buttonHeight={responsiveWidth(26.5)}
                                buttonWidth={responsiveWidth(90.5)}
                            />
                        </View>
                    </>
                    :
                    <>
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
                            </View>
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
                                            position: 'relative',
                                            top: -responsiveWidth(6)
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
                                        {/* <BigICON16 /> */}
                                        {/* <NoOpportunities /> */}
                                        <BIGICON241 />
                                    </View>

                                    <View style={{
                                        alignItems: "center",
                                        width: '100%',

                                    }}>
                                        <View style={{
                                            width: '100%',
                                            // flexDirection: "row",
                                            paddingVertical: responsiveWidth(12),
                                            paddingHorizontal: responsiveWidth(17.5),
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            height: responsiveWidth(140)
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

                                            <IconLineWrapper>
                                                <Like241 />
                                            </IconLineWrapper>

                                            <View style={{
                                                width: '100%',
                                                // marginVertical: responsiveWidth(30),
                                                alignItems: 'center',
                                                justifyContent: "center",
                                            }}>
                                                <Text
                                                    style={{
                                                        width: '100%',
                                                        color: colors.darkGreyBlue,
                                                        fontSize: fonts.regular,
                                                        fontWeight: weights.bold,
                                                        textAlign: 'center',
                                                        // marginVertical: responsiveWidth(30)
                                                    }}
                                                >
                                                    וואי, לא נעים אבל...
                                                </Text>
                                                <Text
                                                    style={{
                                                        width: '100%',
                                                        color: colors.darkGreyBlue,
                                                        fontSize: fonts.regular,
                                                        fontWeight: weights.bold,
                                                        textAlign: 'center',
                                                        // marginVertical: responsiveWidth(30)
                                                    }}
                                                >
                                                    אין לנו עדיין חוות דעת על התקן הזה.
                                                </Text>
                                                <Text
                                                    style={{
                                                        width: '100%',
                                                        color: colors.darkGreyBlue,
                                                        fontSize: fonts.regular,
                                                        fontWeight: weights.bold,
                                                        textAlign: 'center',
                                                        // marginVertical: responsiveWidth(30)
                                                    }}
                                                >
                                                    אם היית שם - נשמח לשמוע ממך.
                                                </Text>
                                            </View>

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
                                    </View>
                                </View>
                                <CommonButton
                                    title="הוספת חוות דעת"
                                    buttonHeight={responsiveWidth(26.5)}
                                    onPress={() => navigation.navigate('NewReview')}
                                    buttonStyle={{
                                        alignSelf: 'center',
                                        marginTop: responsiveWidth(12)
                                    }}
                                    buttonWidth={
                                        layout.width - responsiveWidth(33)
                                    }
                                />
                            </View>
                        </CommonFrame>
                    </>
            }
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
        alignItems: 'center',
        paddingTop: responsiveWidth(20)
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
    reviewsList: {
        marginTop: - responsiveWidth(10),
        backgroundColor: colors.whiteTwo,
        height: '100%',
        width: '100%',
        paddingHorizontal: responsiveWidth(12)
    },
    reviewsListTitle: {
        marginVertical: responsiveWidth(12),
        fontSize: fonts.xsmall,
        color: colors.darkSlateBlue,
        fontWeight: weights.bold,
        textAlign: 'center'
    }
});

export default Reviews
