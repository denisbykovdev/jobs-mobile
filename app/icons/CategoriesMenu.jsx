import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function CategoriesMenu(props) {
    return (
        <Svg
            width={responsiveWidth(7.5)}
            height={responsiveWidth(7.5)}
            viewBox="0 0 14.875 14.969"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={58.338}
                y1={-192.785}
                x2={58.338}
                y2={-207.754}
                gradientTransform="matrix(1 0 0 -1 -85 -193.531)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M-27.13 4.223a2 2 0 01-2 2h-2.969a2 2 0 01-2-2V1.254a2 2 0 012-2h2.969a2 2 0 012 2v2.969zm7.906-2.969a2 2 0 00-2-2h-2.969a2 2 0 00-2 2v2.969a2 2 0 002 2h2.969a2 2 0 002-2V1.254zm-7.906 8a2 2 0 00-2-2h-2.969a2 2 0 00-2 2v2.969a2 2 0 002 2h2.969a2 2 0 002-2V9.254zm7.906 0a2 2 0 00-2-2h-2.969a2 2 0 00-2 2v2.969a2 2 0 002 2h2.969a2 2 0 002-2V9.254z"
            />
        </Svg>
    );
}