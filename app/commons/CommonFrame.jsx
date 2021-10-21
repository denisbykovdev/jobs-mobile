import React from 'react'
import { ScrollView } from 'react-native'
import colors from '../utils/colors'
import { responsiveWidth } from '../utils/layout'
import Constants from 'expo-constants'

export default function CommonFrame({
    children
}) {
    return (
        <ScrollView
            style={{
                height: "100%",
                backgroundColor: colors.white,
                // paddingTop: Constants.statusBarHeight,
                paddingHorizontal: responsiveWidth(17.5),
                paddingVertical: responsiveWidth(20)
            }}
            showsVerticalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    )
}