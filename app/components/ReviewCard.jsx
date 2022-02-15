import React from 'react';
import { Image, Text } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { url } from '../utils/api';
import { responsiveWidth } from '../utils/layout';
import Stars from 'react-native-stars';
import { icons, images } from "../configs/imagesAndIconsUrl";
import fonts from '../utils/fonts';
import weights from '../utils/weights';
import colors from '../utils/colors';

export default function ReviewCard({
    review
}) {
    const date = new Date(review.created_at)

    return (
        <View style={styles.reviewContainer}>
            <View style={styles.reviewUserInfo}>
                <View style={styles.reviewUserInfoDetails}>
                    <Text style={styles.reviewUserInfoDetailsName}>{review.name}</Text>
                    <Text style={styles.reviewUserInfoDetailsDate}>נכתב בתאריך {
                        date.toLocaleString(
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
                    style={styles.reviewUserInfoAvatar}
                    source={{
                        uri: `${url}${review.avatar}`
                    }}
                />
            </View>
            <View style={styles.reviewStars}>
                <Stars
                    half={false}
                    default={5}
                    count={5}
                    display={review.stars}
                    spacing={5}
                    starSize={responsiveWidth(6)}
                    fullStar={icons.starFilled}
                    emptyStar={icons.starEmpty}
                />
            </View>
            <View>
                <Text style={styles.reviewDescriptionText}>
                    {review.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    reviewContainer: {
        alignItems: 'flex-end',
        marginVertical: responsiveWidth(10)
    },
    reviewUserInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    reviewUserInfoDetails: {
        alignItems: 'flex-end'
    },
    reviewUserInfoAvatar: {
        width: responsiveWidth(25),
        height: responsiveWidth(25),
        marginLeft: responsiveWidth(8),
        borderRadius: responsiveWidth(2.5)
    },
    reviewStars: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: responsiveWidth(8),
        transform: [{ scaleX: -1 }]
    },
    reviewUserInfoDetailsName: {
        fontSize: fonts.medium,
        fontWeight: weights.regular,
        color: colors.darkSlateBlue
    },
    reviewUserInfoDetailsDate: {
        fontSize: fonts.xxsmall,
        fontWeight: weights.regular,
        color: colors.darkSlateBlue50
    },
    reviewDescriptionText: {
        fontSize: fonts.xsmall,
        fontWeight: weights.regular,
        color: colors.darkSlateBlue
    }
})