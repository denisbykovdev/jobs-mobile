import React from "react";
import { useFormikContext } from "formik";
import FormErrorMessage from "./FormErrorMessage";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../utils/colors";
import { responsiveWidth } from "../utils/layout";
import fonts from "../utils/fonts";
import weights from "../utils/weights";

export default function FormField({
    name,
    width = "100%",
    height = responsiveWidth(20),
    placeholder,
    borderRadius = 5,
    children,
    fieldStyle,
    inputStyle,
    area = false,
    interSepter,
    fieldContainerStyle,
    ...otherProps
}) {
    const {
        setFieldValue,
        setFieldTouched,
        values,
        errors,
        touched,
    } = useFormikContext();
    
    return (
        <View style={[styles.formFieldContainer, fieldContainerStyle]}>
            <View
                style={[
                    
                    {
                        width,
                        borderRadius,
                        height: height,
                        borderColor: touched[name] && errors[name] ? colors.pinkRed : colors.border,
                    },
                    styles.formField,
                    fieldStyle
                ]}
            >
                <TextInput
                    value={values[name]}
                    onChangeText={(text) => {
                        setFieldValue(name, text);
                        interSepter && interSepter(name, text)
                    }}
                    onBlur={() => setFieldTouched(name)}
                    style={[
                        styles.input,
                        inputStyle,
                        {
                            textAlignVertical: area ? 'top' : 'auto',
                        }
                    ]}
                    placeholder={placeholder}
                    multiline={area}
                    {...otherProps}
                />

                {children}
            </View>
            <FormErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}

const styles = StyleSheet.create({
    formFieldContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    },
    formField: {
        alignItems: "center",
        backgroundColor: colors.whiteTwo,
        justifyContent: "flex-end",
        flexDirection: "row",
        borderStyle: "solid",
        borderWidth: responsiveWidth(1),
        padding: responsiveWidth(5),
        paddingStart: responsiveWidth(5)
    },
    input: {
        height: "100%",
        width: "100%",
        textAlign: "right",
        marginRight: responsiveWidth(5),
        fontSize: fonts.xsmall,
        fontWeight: weights.regular,
        color: colors.darkSlateBlue,
        paddingTop: 0,
        paddingBottom: 0
    }
});
