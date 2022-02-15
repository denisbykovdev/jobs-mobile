import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { responsiveWidth } from '../utils/layout';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import weights from '../utils/weights';
import Like from '../icons/Like';

export default function LikeButton({
    onPress,
    likes,
    without,
    oneTime,
    liked = false
}) {
    const [isLiked, setLiked] = useState(liked)
    
    const [isClicked, setClicked] = useState(false)

    const like = () => {
        if(
            oneTime && !isClicked
        ){
            onPress();
            setLiked(!isLiked);
            oneTime && setClicked(true)
        }
    }

    return (
        <TouchableOpacity
            onPress={() => like()}
            style={{
                marginVertical: without ? 0 : responsiveWidth(12),
                marginHorizontal: without ? 0 : responsiveWidth(6),
                width: responsiveWidth(23.5),
                height: responsiveWidth(23.5),
                borderRadius: responsiveWidth(50),
                borderColor: isLiked ? colors.tealishTwo : colors.whiteTwo,
                borderWidth: responsiveWidth(1),
                marginBottom: responsiveWidth(6),
                backgroundColor: isLiked ? colors.tealishTwo : colors.whiteTwo,
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
            <Like 
                iconColor={isLiked ? colors.silver : colors.tealishTwo}
            />
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