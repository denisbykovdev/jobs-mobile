import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function SurName(props) {
    return (
        <Svg
            width={responsiveWidth(8)}
            height={responsiveWidth(10.5)}
            viewBox="0 0 17.5 21.449"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={93.721}
                y1={-187.388}
                x2={93.721}
                y2={-208.366}
                gradientTransform="matrix(1 0 0 -1 -85 -187.052)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M8.697 10.825c2.901.009 5.264-2.336 5.269-5.23a5.245 5.245 0 10-5.269 5.23z"
            />
            <LinearGradient
                id="prefix__b"
                gradientUnits="userSpaceOnUse"
                x1={-481.952}
                y1={-187.388}
                x2={-481.952}
                y2={-208.366}
                gradientTransform="rotate(180 -236.594 -93.526)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__b)"
                d="M8.789 10.825c-2.9.009-5.264-2.336-5.269-5.23a5.245 5.245 0 115.269 5.23z"
            />
            <LinearGradient
                id="prefix__c"
                gradientUnits="userSpaceOnUse"
                x1={94.701}
                y1={-187.388}
                x2={94.701}
                y2={-208.365}
                gradientTransform="matrix(1 0 0 -1 -85 -187.052)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__c)"
                d="M17.241 19.005c-.804-4.629-4.841-7.66-9.521-7.156-1.946.209-3.708 1.133-5.042 2.48-.152 1.953-.528 4.01-.618 6.012.037.302.062.603.093.904 3.325.008 13.729.066 14.242.067.568.001.967-.438.948-1.083a8.54 8.54 0 00-.102-1.224z"
            />
            <LinearGradient
                id="prefix__d"
                gradientUnits="userSpaceOnUse"
                x1={-481.015}
                y1={-187.388}
                x2={-481.015}
                y2={-208.365}
                gradientTransform="rotate(180 -236.594 -93.526)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__d)"
                d="M.288 19.005c.804-4.629 4.841-7.66 9.521-7.156 1.946.209 3.709 1.133 5.043 2.48.151 1.953.527 4.01.617 6.012-.037.302-.062.603-.093.904-3.325.008-13.729.066-14.241.067-.569.001-.968-.438-.949-1.083.011-.407.031-.819.102-1.224z"
            />
        </Svg>
    );
}