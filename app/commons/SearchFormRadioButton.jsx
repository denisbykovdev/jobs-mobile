import { useFormikContext } from 'formik';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { useState } from 'reinspect';
import CheckboxActive from '../icons/CheckboxActive';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import { responsiveWidth } from '../utils/layout';
import weights from '../utils/weights';

export default function SearchFormRadioButton({
    name,
    array,
    title
}) {
    const [isActive, setActive] = useState(true)

    const {
        setFieldValue,
        setFieldTouched
    } = useFormikContext();

    useEffect(() => {
        setFieldTouched(name)
        if(isActive){
            setFieldValue(name, array && array[0])
        }else{
            setFieldValue(name, array && array[1])
        }
    }, [isActive])

    return (
        <View
            style={styles.buttonContainer}
        >
            <TouchableOpacity
                style={styles.buttonRadioPicker}
                onPress={() => setActive(!isActive)}
            >
                {
                    isActive
                    &&
                    <CheckboxActive />
                }
            </TouchableOpacity>
            
            <Text
                style={styles.buttonTitle}
            >
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.darkGreyBlueTwo,
        paddingHorizontal: responsiveWidth(12),
        height: responsiveWidth(33),
        marginVertical: responsiveWidth(12),
        borderRadius: responsiveWidth(2.5),
        zIndex: -5
    },
    buttonRadioPicker: {
        height: responsiveWidth(20),
        width: responsiveWidth(19.5),
        backgroundColor: colors.tealishTwo,
        borderRadius: responsiveWidth(2.5),
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonTitle: {
        fontSize: fonts.small,
        color: colors.whiteTwo,
        fontWeight: weights.semiBold
    }
})