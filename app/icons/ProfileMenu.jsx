import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function ProfileMenu(props) {
    return (
        <Svg
            width={responsiveWidth(6)}
            height={responsiveWidth(8)}
            viewBox="0 0 12.375 15.723"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={63.439}
                y1={-184.406}
                x2={63.439}
                y2={-200.129}
                gradientTransform="matrix(1 0 0 -1 -85 -192.778)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M-21.569 7.35h-3.357c-2.25 0-2.83-1.472-2.822-2.268.036-3.614 3.274-5.475 6.873-5.051 3.127.369 5.487 1.953 5.501 5.051.004.741-.427 2.267-2.489 2.267-1.655.003-2.054.001-3.706.001zm.018-8.028a3.848 3.848 0 113.834-3.86 3.852 3.852 0 01-3.834 3.86z"
            />
        </Svg>
    );
}