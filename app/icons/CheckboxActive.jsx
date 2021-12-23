import * as React from "react";
import Svg, { LinearGradient, Stop, Path, G } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function CheckboxActive(props) {
    return (
        <Svg
            width={responsiveWidth(25)}
            height={responsiveWidth(25)}
            viewBox="3 5 50 50"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={114.039}
                y1={-173.078}
                x2={114.039}
                y2={-213.205}
                gradientTransform="matrix(1 0 0 -1 -85 -168)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M48.665 40.204a5 5 0 01-5 5h-29.25a5 5 0 01-5-5V10.078a5 5 0 015-5h29.25a5 5 0 015 5v30.126z"
            />
            <G fill="#FFF">
                <Path d="M29.079 29.289L27.2 31.684l-7.344-7.964 2.193-2.025z" />
                <Path d="M25.273 29.568l1.961 2.186 10.989-11.273-2.269-1.955z" />
            </G>
        </Svg>
    );
}