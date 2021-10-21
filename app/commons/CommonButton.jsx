import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import { responsiveWidth } from "../utils/layout";
import weights from "../utils/weights";

export default function CommonButton({
    buttonHeight = responsiveWidth(20),
    buttonWidth = '100%',
    buttonColor = colors.tealishTwo,
    title,
    titleColor = colors.paleLavender,
    onPress,
    children,
    buttonShadow = false,
    buttonShadowColor,
    borderRadius = 5,
    borderColor = buttonColor,
    titleFontSize = fonts.small,
    buttonStyle,
    titleStyle,
    disabled
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                {
                    backgroundColor: disabled !== true ? buttonColor : colors.blueyGrey,
                    height: buttonHeight,
                    width: buttonWidth,
                    shadowColor: buttonShadowColor,
                    borderColor,
                    borderRadius
                },
                buttonShadow ? styles.buttonShadow : "",
                buttonStyle
            ]}
        >
            <Text
                style={[
                    styles.buttonTitle,
                    {
                        color: titleColor,
                        fontSize: titleFontSize
                    },
                    titleStyle
                ]}
            >
                {title}
            </Text>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'space-around',
        borderStyle: 'solid',
        borderWidth: responsiveWidth(2),
        flexDirection: 'row',
        justifyContent: 'center',
        padding: responsiveWidth(5)
    },
    buttonTitle: {
        fontWeight: weights.bold,
        fontSize: fonts.small
    },
    buttonShadow: {
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 3.5,
        shadowOpacity: 1,
        elevation: 10
    }
})