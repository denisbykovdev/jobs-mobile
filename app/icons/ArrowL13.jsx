import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function ArrowL13(props) {
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
                x1={-502.719}
                y1={-202.266}
                x2={-502.719}
                y2={-209.691}
                gradientTransform="rotate(180 -249.735 -100.469)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M5.128 1.935L2.479 5.042l2.649 3.105-.606.607-3.15-3.691.021-.021-.021-.021 3.15-3.692z"
            />
        </Svg>
    );
}