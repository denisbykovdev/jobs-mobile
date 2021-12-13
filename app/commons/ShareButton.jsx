import React from 'react';
import { TouchableOpacity, Share } from 'react-native';
import { responsiveWidth } from '../utils/layout';
import colors from '../utils/colors';
import ShareIcon from '../icons/Share';
import * as Sharing from 'expo-sharing';

export default function ShareButton({
    url,
    message,
    dialodTitle,
    title,
    without
}) {
    const share = async() => {

        if(dialodTitle && await Sharing.isAvailableAsync()){
            const options = {
                UTI: 'image/*',
                mineType: 'image/*',
                dialodTitle
            }
    
            await Sharing.shareAsync(url, options)
        }

        if(title){
            const content = {
                message,
                url,
                title
            }

            await Share.share(content)
        }

        if(!dialodTitle && !title) {
            const content = {
                message: 'share message',
                url: 'share url',
                title: 'share title'
            }

            await Share.share(content)
        }
    }

    return (
        <TouchableOpacity
            onPress={share}
            style={{
                marginVertical: without ? 0 : responsiveWidth(12),
                marginHorizontal: without ? 0 : responsiveWidth(6),
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
            <ShareIcon />
        </TouchableOpacity>
    )
}