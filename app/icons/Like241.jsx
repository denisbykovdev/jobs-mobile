import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Like241(props) {
    return (
        <Svg
            width={responsiveWidth(22)}
            height={responsiveWidth(20.5)}
            viewBox="0 0 44 52"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={108.161}
                y1={-169.668}
                x2={108.161}
                y2={-209.677}
                gradientTransform="matrix(1 0 0 -1 -85 -166.833)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M29.152 16.654h.478c3.244 0 6.488-.007 9.733.002 2.361.007 4.291 1.539 4.858 3.792.195.776.057 1.525-.063 2.283l-1.812 11.556c-.185 1.166-.339 2.34-.563 3.5-.471 2.41-2.102 3.92-4.549 4.238a13.8 13.8 0 01-1.677.1c-5.745.008-11.49-.016-17.236.019-1.587.01-3.028-.261-4.188-1.408-.046.027-.075.035-.083.054-.604 1.395-1.663 2.065-3.185 2.055-1.878-.018-3.757-.002-5.635-.004s-3.224-1.348-3.224-3.232c-.003-6.344-.003-12.686 0-19.03.001-1.915 1.319-3.248 3.234-3.261 1.929-.012 3.856-.014 5.782.001 1.531.011 2.532.802 3.1 2.191.022.006.048.023.066.018 2.123-.749 4.033-1.841 5.558-3.528 1.4-1.546 2.109-3.368 2.107-5.46-.002-2.343.007-4.686-.008-7.026-.003-.303.08-.428.376-.485 1.039-.201 2.083-.28 3.124-.058 1.953.42 3.09 1.69 3.515 3.587.19.848.263 1.737.277 2.609.034 2.329.012 4.66.012 6.988.003.143.003.289.003.499zM5.181 39.684h5.884V20.541H5.181v19.143z"
            />
        </Svg>
    );
}