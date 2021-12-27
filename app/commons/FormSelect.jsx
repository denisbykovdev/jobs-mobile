import React, { Children, useEffect, useRef, useState } from "react";
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
import { ScrollView } from "react-native";

export default function FormSelect({
    name,
    array,
    placeholder,
    interSepter,
    selectContainerStyle,
    selectButtonStyle,
    selectItemStyle,
    selectListStyle,
    multi = false,
    width = '100%',
    height = responsiveWidth(20),
    leftArrow = false,
    submitting = false,
    children,
    whiteTitle = false,
    withDownListButton = false,
    downListButtonTitle,
    downListButtonFunction,
    selectButtonTitleStyle,
    withOutCircle = false,
    ...otherProps
}) {
    const [isOpen, setOpen] = useState(false);

    const {
        setFieldValue,
        setFieldTouched,
        values,
        submitForm
    } = useFormikContext();

    const animatedIconRotation = useRef(new Animated.Value(0)).current;

    const [multiSelected, setToMultiSelected] = useState(
            values[name] 
            ? [...values[name]] 
            : []
    )

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
            submitting && submitForm()
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

    const downListButtonHandler = () => {
        downListButtonFunction()
        setOpen(false)
    }

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

                        flexDirection: !leftArrow ? 'row' : 'row-reverse'
                    },
                    selectButtonStyle
                ]}
                onPress={() => openSelectHandler()}
            >
                <Text
                    style={[
                        styles.selectButtonText,
                        {
                            color: isOpen && !whiteTitle
                                ? colors.whiteTwo
                                : !isOpen && !whiteTitle
                                ? colors.darkSlateBlue
                                : colors.whiteTwo
                        },
                        selectButtonTitleStyle
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
                    {
                        children
                        ?
                        children
                        :
                        <ArrowDown
                            style={{ 
                                transform: [{ 
                                    rotate: '180deg' 
                                }] 
                            }}
                            iconColor={
                                isOpen 
                                ? colors.whiteTwo 
                                : colors.darkGreyBlue
                            }
                        />
                    }
                </Animated.View>

            </TouchableOpacity>
            {
                isOpen && (
                <View
                    style={{
                        position: 'absolute',
                        top: height,
                        width,
                        zIndex: 1
                    }}
                >
                    <ScrollView
                        style={[
                            styles.selectList,
                            // {
                            //     position: 'absolute',
                            //     top: height,
                            //     width,
                            //     zIndex: 1
                            // },
                            selectListStyle
                        ]}
                    >
                       {
                            array && array.map((element, i) => (
                                <TouchableOpacity
                                    key={i}
                                    onPress={
                                        () => onChangeHandler(element)
                                    }
                                    style={[
                                        styles.selectItem,
                                        selectItemStyle
                                    ]}
                                    {...otherProps}
                                >
                                    {
                                        !withOutCircle
                                        &&
                                        <TouchableOpacity
                                        onPress={
                                            () => onChangeHandler(element)
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
                                            values[name] === element
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
                                            && multiSelected.includes(element)
                                            && <ChosenTick />
                                        }
                                    </TouchableOpacity>
                                    }
                                    

                                    <Text
                                        style={[
                                            styles.selectItemText
                                        ]}
                                    >
                                        {element}
                                    </Text>


                                </TouchableOpacity>
                            ))
                        }

                        </ScrollView>

                        {
                            withDownListButton
                            &&
                            <TouchableOpacity
                                    onPress={
                                        downListButtonHandler
                                    }
                                    style={[
                                        styles.downListButton
                                    ]}
                                    {...otherProps}
                                >
                                    <Text
                                        style={[
                                            styles.downListButtonTitle
                                        ]}
                                    >
                                        {downListButtonTitle}
                                    </Text>
                            </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'space-between',
        // width: '100%'
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
        // width: '100%'
    },
    selectItem: {
        height: responsiveWidth(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: responsiveWidth(5),
        backgroundColor: colors.whiteTwo,
        // width: '100%'
    },
    selectItemText: {
        fontSize: fonts.xsmall,
        fontWeight: weights.thin,
        color: colors.darkSlateBlue,
        // width: '100%'
    },
    selectButtonText: {
        fontSize: fonts.xsmall,
        fontWeight: weights.thin,
        color: colors.darkSlateBlue,
        // width: '100%'
    },
    downListButton: {
        height: responsiveWidth(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: responsiveWidth(5),
        backgroundColor: colors.veryLightPinkLighter,
        // alignSelf: 'flex-end'
    },
    downListButtonTitle: {
        fontSize: fonts.small,
        fontWeight: weights.bold,
        color: colors.darkSlateBlue,
    }
});
