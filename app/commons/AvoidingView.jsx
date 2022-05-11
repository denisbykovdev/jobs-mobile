import React from "react";
import {
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import colors from "../utils/colors";
import { responsiveHeight } from "../utils/layout";


export default function AvoidingView({ children, avoidingStyle }) {
    return (
        <KeyboardAvoidingView
            // behavior="padding"  // The keyboard closes the input field.
            behavior="height"
            style={[
                avoidingStyle,
                {
                    flexGrow: 1,
                    color: colors.white
                }
            ]}
            enabled
            keyboardVerticalOffset={Platform.select({
                ios: 0,
                // android: responsiveHeight(-300)   // The keyboard closes the input field.
            })}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
