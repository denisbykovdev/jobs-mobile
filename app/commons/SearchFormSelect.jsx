import React, { Children, useEffect, useRef, useState } from "react";
import { useFormikContext } from "formik";
import {
    Animated,
    Easing,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import colors from "../utils/colors";
import { responsiveWidth } from "../utils/layout";
import fonts from "../utils/fonts";
import weights from "../utils/weights";
import ChosenTick from "../icons/ChosenTick";
import DropDown from "../icons/DropDown";
import DropDownOpen from "../icons/DropDownOpen";
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from "../configs/imagesAndIconsUrl";

export default function SearchFormSelect({
    name,
    array,
    // arrayOfObjects = null,
    placeholder,
    interSepter,
    selectContainerStyle,
    // selectButtonStyle,
    // selectItemStyle,
    // selectListStyle,
    multi = false,
    width = '100%',
    height = responsiveWidth(36),
    leftArrow = false,
    submitting = false,
    children,
    ...otherProps
}) {
    const [isOpen, setOpen] = useState(false);

    const {
        setFieldValue,
        setFieldTouched,
        values,
        submitForm
    } = useFormikContext();

    const [multiSelected, setToMultiSelected] = useState(
            values[name] 
            ? [...values[name]] 
            : []
    )

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

    // const onChangeArrayOfObjects = (selected) => {
    //     setFieldTouched(name)

    //     if(multi) {
    //         if(
    //             // multiSelected.find((item) => item.name === selected)
    //             Object.values(multiSelected).includes(`${selected}`)
    //         ){
                
    //         }
    //     }
    // }

    useEffect(() => {
        if (multi && multiSelected.length > 0) setFieldValue(name, multiSelected)
    }, [multiSelected])

    const openSelectHandler = () => {
        setOpen(!isOpen)
    }

    // console.log(
    //     `--- FormSelect/array:`, array
    // )

    return (
        <View
            style={[
                {
                    width
                },
                selectContainerStyle,
                shadowStyle
            ]}
        >
            <TouchableOpacity onPress={() => openSelectHandler()}>
            <LinearGradient
                colors={[
                    colors.tealishThree,
                    colors.tealishFour
                ]}
                style={[
                    styles.selectButton,
                    {
                        height,
                        borderRadius: 5,
                        flexDirection: !leftArrow ? 'row' : 'row-reverse'
                    }
                ]}
            >
                <View
                    style={{
                        position: 'absolute',
                        left: responsiveWidth(6),
                        height: responsiveWidth(19),
                        width: responsiveWidth(19),
                        backgroundColor: colors.darkSlateBlue,
                        borderRadius: responsiveWidth(50),
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: responsiveWidth(4)
                    }}
                >
                    { children }
                </View>

                <Text
                    style={[
                        styles.selectButtonText,
                        {
                            color: colors.whiteTwo
                                // isOpen
                                // ? colors.whiteTwo
                                // : colors.darkSlateBlue
                        }
                    ]}>
                    {
                        values[name]
                            && multi === false
                            ? values[name]
                            : placeholder
                    }
                </Text>

                <View>
                    {
                        isOpen
                        ?  <DropDownOpen />
                        :  <DropDown />
                    }
                </View>

            </LinearGradient>
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
                            array && array.map((element, i) => (
                                <View
                                    key={i}
                                    // onPress={
                                    //     () => onChangeHandler(element)
                                    // }
                                    style={[
                                        styles.selectItem,
                                        {
                                            borderBottomColor: colors.whiteThree,
                                            borderBottomWidth: i !== (array.length - 1) && responsiveWidth(0.5),
                                        }
                                    ]}
                                    {...otherProps}
                                >
                                    <TouchableOpacity
                                        onPress={
                                            () => onChangeHandler(element)
                                        }
                                        style={[
                                            {
                                                backgroundColor: colors.whiteTwo,
                                                borderColor: colors.tealGreen,
                                                borderWidth: responsiveWidth(1),
                                                width: responsiveWidth(12),
                                                height: responsiveWidth(12),
                                                borderRadius: responsiveWidth(6),
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                position: 'absolute',
                                                left: responsiveWidth(10.5)
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

                                    <Text
                                        style={[
                                            styles.selectItemText
                                        ]}
                                    >
                                        {element}
                                    </Text>

                                    <View
                                        style={{
                                            position: 'absolute',
                                            right: - responsiveWidth(6),
                                            width: responsiveWidth(12), 
                                            height: responsiveWidth(12),
                                            borderRadius: 50,
                                            overflow: 'hidden'
                                            }}
                                    >
                                        <LinearGradient 
                                            colors={[colors.tealishThree, colors.tealishFour]}
                                            style={{
                                                width: responsiveWidth(12), 
                                                height: responsiveWidth(12)
                                                }}
                                        ></LinearGradient>
                                    </View>
                                    
                                </View>
                            ))
                        }
                    </View>
                )
            }
        </View>
    );
}

const shadowStyle = {
    // borderWidth: 0,
    // borderColor: colors.white,
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
    selectButton: {
        borderTopColor: colors.border,
        // borderTopWidth: responsiveWidth(1),
        // borderBottomWidth: responsiveWidth(1),
        borderTopStartRadius: 5,
        borderTopEndRadius: 5,
        borderLeftColor: colors.border,
        // borderLeftWidth: responsiveWidth(1),
        borderRightColor: colors.border,
        // borderRightWidth: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(9),
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    selectList: {
        borderBottomColor: colors.whiteTwo,
        borderBottomWidth: responsiveWidth(1),
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5,
        borderLeftColor: colors.whiteTwo,
        borderLeftWidth: responsiveWidth(0.1),
        borderRightColor: colors.whiteTwo,
        borderRightWidth: responsiveWidth(0.1),
    },
    selectItem: {
        height: responsiveWidth(22.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(9),
        backgroundColor: colors.whiteTwo,
        overflow: 'hidden'
    },
    selectItemText: {
        fontSize: fonts.xsmall,
        fontWeight: weights.thin,
        color: colors.darkGreyBlue,
    },
    selectButtonText: {
        fontSize: fonts.xsmall,
        fontWeight: weights.thin,
        color: colors.darkSlateBlue,
        marginRight: responsiveWidth(4)
    }
});
