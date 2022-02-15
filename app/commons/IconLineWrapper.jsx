import React from 'react';
import { View } from 'react-native';
import colors from "../utils/colors";
import { responsiveWidth } from "../utils/layout";

export default function IconLineWrapper({
    children,
    iconLineStyle,
    lineStyle,
    lineColor = colors.tealishTwo
}) {
    return (
        <View
            style={[
                iconLineStyle,
                {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }]}
        >
            <View
                style={[
                    {
                        marginRight: responsiveWidth(15),
                        borderLeftColor: lineColor,
                        height: responsiveWidth(18.5),
                        borderLeftWidth: responsiveWidth(1),
                        transform: [{ rotate: '90deg' }],
                    },
                    lineStyle
                ]}
            />
            {children}
            <View
                style={[
                    {
                        marginLeft: responsiveWidth(15),
                        borderLeftColor: lineColor,
                        height: responsiveWidth(18.5),
                        borderLeftWidth: responsiveWidth(1),
                        transform: [{ rotate: '90deg' }],
                    },
                    lineStyle
                ]}
            />
        </View>
    )
}