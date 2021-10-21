import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";
import { colors } from "../utils/colors";

function Tick({
    width = responsiveWidth(8.5),
    height = responsiveWidth(6.5),
    iconColor = colors.whiteTwo
}) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 12.563 8.979" {...props}
        >
            <Path fill={iconColor} d="M6.234 7.328L4.977 8.932.062 3.601 1.53 2.246z" />
            <Path fill={iconColor} d="M3.688 7.515L5 8.979l7.354-7.545L10.835.125z" />
        </Svg>
    );
}