import React, { useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import colors from '../utils/colors'
import layout, { responsiveWidth } from '../utils/layout'
import Constants from 'expo-constants'
import ScrollToTopButton from './ScrollToTopButton'

export default function CommonFrame({
    withArrow = false,
    children,
    onScroll,
    onScrollEndDrag
}) {
    const scrollRef = useRef()

    return (
        <ScrollView
            ref={scrollRef}
            nestedScrollEnabled={true}
            style={{
                // height: layout.height,
                backgroundColor: colors.white,
                paddingTop: Constants.statusBarHeight,
                paddingHorizontal: responsiveWidth(17.5),
                paddingVertical: responsiveWidth(20)
            }}
            showsVerticalScrollIndicator={false}
            onScroll={onScroll}
            onMomentumScrollEnd={onScrollEndDrag}
            // onScrollEndDrag={onScrollEndDrag}
        >
            {children}
            {
                withArrow
                &&
                <ScrollToTopButton
                    onPress={
                        () => scrollRef.current
                            && scrollRef.current.scrollTo({
                                y: 0,
                                x: 0,
                                animated: true
                            })
                    }
                />
            }
        </ScrollView>
    )
}