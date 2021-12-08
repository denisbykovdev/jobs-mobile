import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { responsiveWidth } from '../utils/layout';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import weights from '../utils/weights';
import Like from '../icons/Like';

export default function LikeButton({
    onPress,
    likes
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                marginVertical: responsiveWidth(12),
                marginHorizontal: responsiveWidth(6),
                width: responsiveWidth(23.5),
                height: responsiveWidth(23.5),
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
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center'
            }}
        >
            <Like />
            <Text
                style={{
                    color: colors.whiteTwo,
                    fontSize: fonts.xxxsmall,
                    fontWeight: weights.bold,
                    position: 'absolute',
                    top: responsiveWidth(6.7)
                }}
            >
                {likes}
            </Text>
        </TouchableOpacity>
    )
}