import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function ArrowR13(props) {
    return (
        <Svg
            width={responsiveWidth(2)}
            height={responsiveWidth(3.5)}
            viewBox="0 0 4.031 7.563"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={88.25}
                y1={-202.266}
                x2={88.25}
                y2={-209.692}
                gradientTransform="matrix(1 0 0 -1 -85 -200.937)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M1.978 1.329l3.15 3.692-.021.021.021.021-3.15 3.691-.606-.607 2.649-3.105-2.649-3.107z"
            />
        </Svg>
    );
}