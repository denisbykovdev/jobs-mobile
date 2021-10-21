import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function StatusApproved() {
    return (
        <Svg
            width={responsiveWidth(8.5)}
            height={responsiveWidth(8.5)}
            viewBox="16.234 -36.031 17.656 17.594"
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={25.116}
                y1={-35.971}
                x2={25.116}
                y2={-18.541}
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="url(#prefix__a)"
                d="M16.401-27.265c.009-4.816 3.926-8.722 8.732-8.705 4.813.017 8.706 3.922 8.697 8.724-.01 4.816-3.93 8.725-8.732 8.706-4.815-.019-8.705-3.922-8.697-8.725zm8.707 1.036c-1.354 0-2.709.019-4.063-.007-.707-.013-.738.267-.688.779.136 1.358.73 2.488 1.738 3.393 1.063.953 2.303 1.411 3.738 1.16 2.188-.383 4.01-2.552 4.052-4.788.007-.383-.143-.536-.526-.536l-4.251-.001zm-3.155-1.199h1.071c.414-.002.711-.28.707-.662-.002-.376-.297-.65-.701-.651a388.8 388.8 0 00-2.16 0c-.403.001-.697.278-.699.653-.002.376.293.657.693.66h1.089zm6.433-1.314c-.369 0-.737-.003-1.105 0-.388.004-.678.29-.677.659s.292.652.682.653c.731.003 1.464.003 2.194 0 .391-.001.682-.281.686-.65.002-.376-.291-.659-.691-.662-.364-.003-.726 0-1.089 0z"
            />
        </Svg>
    );
}