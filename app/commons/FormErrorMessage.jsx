import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import { responsiveWidth } from "../utils/layout";

export default function FormErrorMessage({ error, visible }) {
    if (!error || !visible) {
        return null;
    }

    return (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    errorContainer: {
        alignItems: "flex-end",
        justifyContent: "center",
        width: "100%"
    },
    errorText: {
        fontSize: fonts.extrasmall,
        color: colors.pinkRed,
        marginBottom: responsiveWidth(10)
    },
});
