import React, { useEffect, useRef, useState } from "react";
import { useFormikContext } from "formik";
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import colors from "../utils/colors";
import { responsiveWidth } from "../utils/layout";
import fonts from "../utils/fonts";
import weights from "../utils/weights";
import ArrowDown from "../icons/ArrowDown"
import ChosenTick from "../icons/ChosenTick";
import ArrowUp from "../icons/ArrowUp";

export default function FormSelect({
    name,
    array,
    placeholder,
    interSepter,
    selectContainerStyle,
    multi = false,
    width = '100%',
    height = responsiveWidth(20),
    ...otherProps
}) {
    const [isOpen, setOpen] = useState(false);

    const {
        setFieldValue,
        setFieldTouched,
        values
    } = useFormikContext();

    const animatedIconRotation = useRef(new Animated.Value(0)).current;

    const [multiSelected, setToMultiSelected] = useState(values[name] ? [...values[name]] : [])

    const interIcon = animatedIconRotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    const onChangeHandler = (e) => {
        setFieldTouched(name)
        if (multi) {
            if (multiSelected.includes(e)) {
                setToMultiSelected(multiSelected => [...multiSelected.filter(item => item.toString() !== e.toString())])
            } else {
                setToMultiSelected(multiSelected => [...multiSelected, e])
            }
        } else {
            setFieldValue(name, e);
            interSepter && interSepter(name, e)
            setOpen(false)
        }
    }

    useEffect(() => {
        if (multi && multiSelected.length > 0) setFieldValue(name, multiSelected)
    }, [multiSelected])

    const openSelectHandler = () => {
        setOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            Animated.timing(animatedIconRotation, {
                duration: 250,
                easing: Easing.linear,
                toValue: 0,
                useNativeDriver: true,
            }).start();
        } else if (!isOpen) {
            Animated.timing(animatedIconRotation, {
                duration: 250,
                easing: Easing.linear,
                toValue: 1,
                useNativeDriver: true,
            }).start();
        }
    }, [isOpen])

    return (
        <View
            style={[
                {
                    width
                },
                selectContainerStyle
            ]}
        >
            <TouchableOpacity
                style={[
                    styles.selectButton,
                    {
                        height,
                        backgroundColor: isOpen
                            ? colors.border
                            : colors.whiteTwo,
                        borderBottomColor: !isOpen && colors.border,
                        borderBottomStartRadius: !isOpen && 5,
                        borderBottomEndRadius: !isOpen && 5,
                    }
                ]}
                onPress={() => openSelectHandler()}
            >

                <Text
                    style={[
                        styles.selectButtonText,
                        {
                            color: isOpen
                                ? colors.whiteTwo
                                : colors.darkSlateBlue
                        }
                    ]}>
                    {
                        values[name]
                            && multi === false
                            ? values[name]
                            : placeholder
                    }
                </Text>

                <Animated.View
                    style={[
                        {
                            transform: [{ rotate: interIcon }]
                        }
                    ]}
                >
                    <ArrowDown
                        style={{ transform: [{ rotate: '180deg' }] }}
                        iconColor={isOpen ? colors.whiteTwo : colors.darkGreyBlue}
                    />
                </Animated.View>

            </TouchableOpacity>
            {
                isOpen && (
                    <View
                        style={[
                            styles.selectList,
                            {
                                position: 'absolute',
                                top: height,
                                width,
                                zIndex: 1
                            }
                        ]}
                    >
                        {
                            array && array.map((e, i) => (
                                <TouchableOpacity
                                    key={i}
                                    onPress={
                                        () => onChangeHandler(e)
                                    }
                                    style={[
                                        styles.selectItem
                                    ]}
                                    {...otherProps}
                                >
                                    <TouchableOpacity
                                        onPress={
                                            () => onChangeHandler(e)
                                        }
                                        style={[
                                            {
                                                backgroundColor: colors.whiteTwo,
                                                borderColor: colors.border,
                                                borderWidth: responsiveWidth(1),
                                                width: responsiveWidth(12),
                                                height: responsiveWidth(12),
                                                borderRadius: responsiveWidth(6),
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'absolute',
                                                left: responsiveWidth(5)
                                            }
                                        ]}
                                    >
                                        {
                                            values[name] === e
                                            && <View
                                                style={{
                                                    backgroundColor: colors.whiteTwo,
                                                    borderColor: colors.darkSlateBlue,
                                                    borderWidth: responsiveWidth(3.5),
                                                    width: responsiveWidth(12),
                                                    height: responsiveWidth(12),
                                                    borderRadius: responsiveWidth(6)
                                                }}
                                            >
                                            </View>
                                            || multi
                                            && multiSelected.includes(e)
                                            && <ChosenTick />
                                        }
                                    </TouchableOpacity>

                                    <Text
                                        style={[
                                            styles.selectItemText
                                        ]}
                                    >
                                        {e}
                                    </Text>


                                </TouchableOpacity>
                            ))
                        }
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    selectButton: {
        borderTopColor: colors.border,
        borderTopWidth: responsiveWidth(1),
        borderBottomWidth: responsiveWidth(1),
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        borderLeftColor: colors.border,
        borderLeftWidth: responsiveWidth(1),
        borderRightColor: colors.border,
        borderRightWidth: responsiveWidth(1),

        paddingHorizontal: responsiveWidth(9),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    selectList: {
        borderBottomColor: colors.border,
        borderBottomWidth: responsiveWidth(1),
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,
        borderLeftColor: colors.border,
        borderLeftWidth: responsiveWidth(1),
        borderRightColor: colors.border,
        borderRightWidth: responsiveWidth(1),
    },
    selectItem: {
        height: responsiveWidth(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: responsiveWidth(5),
        backgroundColor: colors.whiteTwo
    },
    selectItemText: {
        fontSize: fonts.xsmall,
        fontWeight: weights.thin,
        color: colors.darkSlateBlue,
    },
    selectButtonText: {
        fontSize: fonts.xsmall,
        fontWeight: weights.thin,
        color: colors.darkSlateBlue,
    }
});
