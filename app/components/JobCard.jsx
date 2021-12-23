import {
    Image,
    Text,
    StyleSheet,
    View,
    ImageBackground
} from "react-native";
import { icons, images } from "../configs/imagesAndIconsUrl";
import React, { useState } from "react";
import Stars from 'react-native-stars';
import { useDispatch, useSelector } from 'react-redux';
import { watchGetFavoriteJob } from '../actions/jobsActions';
import LikeButton from "../commons/LikeButton";
import ShareButton from "../commons/ShareButton";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import CommonButton from "../commons/CommonButton";
import { responsiveWidth } from "../utils/layout";
import weights from "../utils/weights";
import fonts from "../utils/fonts";
import Tick from "../icons/Tick";
import Delete from "../icons/Delete";

const JobCard = ({
    item,
    favorite = false,
    getBackJobViewHeight
}) => {
    const [isOpenToolTip, setOpenToolTip] = useState(false)

    const dispatch = useDispatch()

    const token = useSelector(state => state.auth.token);

    const navigation = useNavigation()

    const addToFavorite = jobId => {
        setOpenToolTip(true);

        dispatch(watchGetFavoriteJob(token, jobId));

        return setTimeout(() => {
            setOpenToolTip(false);
        }, 5000)
    }

    // console.log(`--- JobCard/scoup/favorite:`, favorite)

    const deleteFromFavorites = jobId => {
        // dispatch()
    }

    return (
        <View
            onLayout={(event) => {getBackJobViewHeight(event.nativeEvent.layout.height)}}
            style={[
                shadowStyle,
                {
                    // width: '100%'
                    // backgroundColor: colors.whiteTwo,
                    // overflow: 'visible',
                    // position: 'relative',
                    // zIndex: -1
                    // height: responsiveWidth(200)
                }
            ]}
        >
            <View
                // style={{ zIndex: -1 }}
            >
                <View
                    style={[styles.mainContainer]}
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
                            {item.organization}
                        </Text>

                        {
                            favorite
                            &&
                            <View
                                style={styles.imageBackgroundDeleteButton}
                            >
                                <Delete />
                            </View>
                        }
                    </ImageBackground>

                    <View style={[styles.reviewsContainer]}>
                        <View style={styles.reviewsInner}>
                            <View style={styles.iconsColumn}>
                                {
                                    !favorite
                                    &&
                                    <LikeButton
                                        oneTime
                                        without
                                        onPress={
                                            !item.is_favorite
                                                ? () => addToFavorite(item.id)
                                                : () => { }
                                        }
                                    />
                                }

                                <ShareButton without />
                            </View>

                            <Text
                                style={styles.reviewsSectorTitle}
                            >
                                {item.title}
                            </Text>

                            <View
                                style={styles.starReviews}
                            >
                                <Stars
                                    half={false}
                                    default={item.stars}
                                    display={item.stars}
                                    spacing={5}
                                    starSize={responsiveWidth(6)}
                                    count={5}
                                    fullStar={icons.starFilled}
                                    emptyStar={icons.starEmpty}
                                />
                            </View>

                            {
                                isOpenToolTip
                                &&
                                !item.is_favorite
                                &&
                                <View
                                    style={[
                                        styles.toolTip,
                                        shadowStyle
                                    ]}
                                >
                                    <View style={styles.toolTipCheck}>
                                        <Tick />
                                    </View>

                                    <Text style={styles.toolTipText}>התקן נוסף למועדפים</Text>

                                    <Image
                                        source={icons.smallDots}
                                        style={styles.toolTipDots}
                                    />
                                </View>
                            }

                            <Text
                                style={styles.reviewsSectorDescription}
                                numberOfLines={2}
                            >
                                {item.description.replace(/(<([^>]+)>)/gi, "")}
                            </Text>

                            <View style={styles.positionsLineContainer}>
                                <Text style={styles.reviewsSectorTitle}>תקנים פתוחים:</Text>
                                <View style={styles.positionsLineWrapper}>
                                    <View
                                        style={[
                                            styles.positionsLine,
                                            {
                                                width: `${100 / item.count_of_all_positions * item.count_of_taken_positions}%`
                                            }
                                        ]}
                                    />
                                </View>
                                <View style={styles.positionsCountContainer}>
                                    <Text style={[styles.positionsCountRange, { color: "#aaaeb7" }]}>
                                        {item.count_of_all_positions}
                                    </Text>
                                    <Text
                                        style={{
                                            color: colors.darkSlateBlue,
                                            fontSize: fonts.xxsmall
                                        }}
                                    > מתוך </Text>
                                    <Text style={styles.positionsCountRange}>
                                        {item.count_of_taken_positions}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View
                style={{
                    marginBottom: responsiveWidth(20),
                    alignItems: 'center'
                }}
            >
                <CommonButton
                    buttonColor={item.send ? colors.tealishTwo : colors.silver}
                    title={item.send ? "הבקשה נשלחה" : "ספרו לי עוד"}
                    onPress={
                        () => navigation.navigate(
                            "JobsOpportunity",
                            {
                                job: item
                            }
                        )
                    }
                    buttonWidth={"80%"}
                    buttonHeight={responsiveWidth(26.5)}
                    buttonStyle={{
                        top: - responsiveWidth(25),
                        position: "absolute"
                    }}
                />
            </View>

        </View>

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
    mainContainer: {
        justifyContent: "center",
        marginBottom: responsiveWidth(10)
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        height: responsiveWidth(59.5),
        // height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: responsiveWidth(10)
    },
    imageBackgroundTitle: {
        color: colors.whiteTwo,
        textAlign: "center",
        fontWeight: weights.bold,
        fontSize: fonts.large
    },
    imageBackGroundSmallTitle: {
        color: colors.whiteTwo,
        fontSize: fonts.xsmall,
        textAlign: "center",
        fontWeight: weights.thin
    },
    imageBackgroundDeleteButton: {
        position: 'absolute',
        top: responsiveWidth(6),
        right: responsiveWidth(6)
    },
    reviewsContainer: {
        marginTop: - responsiveWidth(15),
        backgroundColor: colors.whiteTwo,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: responsiveWidth(15)
    },
    reviewsInner: {
        alignItems: "center",
        position: 'relative'
    },
    iconsColumn: {
        position: "absolute",
        left: "-20%",
        top: "20%",
        zIndex: 1
    },
    reviewsSectorTitle: {
        color: colors.darkSlateBlue,
        fontSize: fonts.xsmall,
        fontWeight: weights.bold,
        textAlign: "center"
    },
    starReviews: {
        alignItems: 'center',
        marginTop: responsiveWidth(6)
    },
    reviewsSectorDescription: {
        color: colors.darkSlateBlue50,
        fontSize: fonts.xxsmall,
        fontWeight: weights.thin,
        marginVertical: responsiveWidth(12),
        textAlign: 'right'
    },
    positionsLineContainer: {
        width: "100%",
        marginBottom: responsiveWidth(26)
    },
    positionsLineWrapper: {
        height: responsiveWidth(3),
        backgroundColor: colors.veryLightBlue,
        borderRadius: 5,
        marginVertical: responsiveWidth(6),
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    positionsLine: {
        height: responsiveWidth(3),
        backgroundColor: colors.tealishTwo,
        borderRadius: 5,
    },
    positionsCountContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    positionsCountRange: {
        color: colors.tealishTwo,
        fontSize: fonts.small,
        fontWeight: weights.bold
    },
    toolTip: {
        backgroundColor: colors.whiteTwo,
        paddingVertical: responsiveWidth(7.5),
        paddingHorizontal: responsiveWidth(12),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: responsiveWidth(30),
        width: responsiveWidth(135),
        top: responsiveWidth(21),
        left: responsiveWidth(4),
        borderRadius: 10,
        zIndex: 10000,
        position: "absolute",
    },
    toolTipCheck: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        backgroundColor: colors.tealishTwo,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        position: 'absolute',
        left: responsiveWidth(8)
    },
    toolTipText: {
        color: colors.tealishTwo,
        fontSize: fonts.small,
        fontWeight: weights.bold
    },
    toolTipDots: {
        position: 'absolute',
        right: responsiveWidth(4),
        width: responsiveWidth(20.5),
        height: responsiveWidth(17.5)
    }
});

export default JobCard
