import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Email(props) {
    return (
        <Svg
            width={responsiveWidth(9.5)}
            height={responsiveWidth(6)}
            viewBox="0 0 17.682 11.213"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={93.841}
                y1={-198.392}
                x2={93.841}
                y2={-208.5}
                gradientTransform="matrix(1 0 0 -1 -85 -197.287)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M17.682 1.105V9.859c0 .803-.552 1.354-1.354 1.354-4.988.002-9.978 0-14.966 0-.814 0-1.36-.548-1.361-1.363V1.371v-.262c.085.064.145.107.199.154 2.409 2.054 4.82 4.109 7.232 6.163.854.726 1.964.716 2.818-.013 2.421-2.061 4.844-4.119 7.266-6.179.041-.034.084-.065.166-.129z"
            />
            <LinearGradient
                id="prefix__b"
                gradientUnits="userSpaceOnUse"
                x1={93.839}
                y1={-197.287}
                x2={93.839}
                y2={-203.982}
                gradientTransform="matrix(1 0 0 -1 -85 -197.287)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__b)"
                d="M.798.066c.204-.025.356-.063.509-.063 5.024-.004 10.049-.004 15.073 0 .15 0 .301.038.501.065-.376.319-.706.603-1.037.884a17002.09 17002.09 0 01-6.458 5.495c-.382.325-.713.331-1.092.01L.945.206C.911.177.878.142.798.066z"
            />
        </Svg>
    );
}