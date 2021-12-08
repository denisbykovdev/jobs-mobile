import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { icons } from '../configs/imagesAndIconsUrl';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import { responsiveWidth } from '../utils/layout';
import weights from '../utils/weights';

export default function DotsTitle({
    children
}) {
    return (
        <View
            style={styles.dotsTitleContainer}
        >
            <Image
                source={icons.testUp}
                style={styles.imageUp}
            />

            <View
                style={styles.titleContainer}
            >
                {children}
            </View>

            <Image
                source={icons.testDown}
                style={styles.imageDown}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dotsTitleContainer: {
        marginVertical: responsiveWidth(12)
    },
    titleContainer: {
        paddingHorizontal: responsiveWidth(23.5),
        paddingVertical: responsiveWidth(22.5),
        color: colors.darkSlateBlue,
        paddingTop: responsiveWidth(20),
        fontSize: fonts.small,
        fontWeight: weights.bold,
        textAlign: "center"
    },
    imageUp: {
        width: 106,
        height: 86,
        position: "absolute",
        left: 0
    },
    imageDown: {
        width: 106,
        height: 86,
        position: "absolute",
        right: 0,
        bottom: 0
    },
})