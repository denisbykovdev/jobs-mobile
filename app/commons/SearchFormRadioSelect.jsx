import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import ChosenTick from '../icons/ChosenTick';
import colors from '../utils/colors';
import { responsiveWidth } from '../utils/layout';
import { LinearGradient } from 'expo-linear-gradient';

export default function SearchFormRadioSelect({
    name,
    array
}) {
    console.log(
        `--- SearchFormRadioSelect/array:`, array
    )

    const [isActive, setActive] = useState(false)

    const {
        setFieldValue,
        setFieldTouched
    } = useFormikContext();

    useEffect(() => {
        setFieldTouched(name)
        if (isActive) {
            setFieldValue(name, array && array[0])
        } else {
            setFieldValue(name, array && array[1])
        }
    }, [isActive])
    return (
        <View
            style={styles.radioSelectContainer}
        >
            <LinearGradient
                colors={[
                    !isActive ? colors.tealishFour : colors.whiteTwo, 
                    !isActive ? colors.tealishThree : colors.whiteTwo
                ]}
                style={[styles.radioButton, shadowStyle]}
            >
                <TouchableOpacity
                    style={styles.radioCircle}
                    onPress={() => setActive(false)}
                >
                    {
                        !isActive
                        &&
                        <ChosenTick />
                    }
                </TouchableOpacity>
                <Text>
                    תקן חוץ
                </Text>
            </LinearGradient>

            <LinearGradient
                colors={[
                    isActive ? colors.tealishFour : colors.whiteTwo, 
                    isActive ? colors.tealishThree : colors.whiteTwo
                ]}
                style={[styles.radioButton, shadowStyle]}
            >
                <TouchableOpacity
                    style={styles.radioCircle}
                    onPress={() => setActive(true)}
                >
                    {
                        isActive
                        &&
                        <ChosenTick />
                    }
                </TouchableOpacity>
                <Text>
                    תקן בית
                </Text>
            </LinearGradient>
        </View>
    )
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
    radioSelectContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    radioButton: {
        height: responsiveWidth(26.5),
        width: responsiveWidth(76.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(8),
        borderRadius: responsiveWidth(3),
        borderColor: colors.whiteTwo,
        borderWidth: responsiveWidth(1),
        backgroundColor: colors.whiteTwo
    },
    radioCircle: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        borderWidth: responsiveWidth(1.5),
        borderRadius: responsiveWidth(50),
        borderColor: colors.darkSlateBlue,
    }
})