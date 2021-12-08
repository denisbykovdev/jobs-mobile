import React from 'react';
import ArrowUp from '../icons/ArrowUp';
import { responsiveWidth } from '../utils/layout';
import colors from '../utils/colors';
import { TouchableOpacity } from 'react-native';
import ArrowBack from '../icons/ArrowBack';
import { RotationGestureHandler } from 'react-native-gesture-handler';

export default function ScrollToTopButton({
    onPress
}) {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{
                width: responsiveWidth(27.5),
                height: responsiveWidth(27.5),
                borderRadius: responsiveWidth(50),
                borderColor: colors.whiteTwo,
                borderWidth: responsiveWidth(1),
                marginBottom: responsiveWidth(6),
                backgroundColor: colors.whiteTwo,
                shadowColor: colors.BLACK_20,
                shadowOffset: {
                    width: 0,
                    height: 0
                },
                shadowRadius: 4.5,
                shadowOpacity: 1,
                elevation: 5,
                alignItems: "center",
                justifyContent: 'center',
                transform: [{ rotate: '270deg'}],
                position: 'absolute',
                right: responsiveWidth(2),
                bottom: responsiveWidth(33)
            }}
        >
            {/* <ArrowUp /> */}
            <ArrowBack />
        </TouchableOpacity>
    )
}