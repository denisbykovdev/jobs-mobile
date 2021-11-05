import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../utils/colors'
import layout, { responsiveWidth } from '../utils/layout'
import Constants from 'expo-constants'

export default function CommonFrame({
    children
}) {
    return (
        <ScrollView
            nestedScrollEnabled={true} 
            style={{
                height: layout.height,
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