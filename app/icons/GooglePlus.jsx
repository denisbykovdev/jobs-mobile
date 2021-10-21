import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function GooglePlus(props) {
    return (
        <Svg
            width={responsiveWidth(11)}
            height={responsiveWidth(9.5)}
            viewBox="0 0 29.667 19.667" {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={94.876}
                y1={-189.101}
                x2={94.876}
                y2={-208.335}
                gradientTransform="matrix(1 0 0 -1 -85 -188.833)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M16.861 3.287l-2.875 2.099c-2.371-2.19-5.946-1.991-8.119-.074-2.035 1.796-2.654 4.773-1.462 7.221a6.084 6.084 0 006.664 3.313c2.355-.457 4.593-2.685 4.738-4.731h-4.665V7.589c.067-.005.128-.012.19-.012 2.568 0 5.136.001 7.705-.004.146 0 .193.049.225.183 1.199 5.176-2.158 10.441-7.355 11.533a9.621 9.621 0 01-11.47-7.547C-.614 6.548 2.872 1.37 8.083.441c3.302-.587 6.174.32 8.597 2.644.045.045.089.092.133.138.013.013.022.031.048.064z"
            />
            <LinearGradient
                id="prefix__b"
                gradientUnits="userSpaceOnUse"
                x1={110.336}
                y1={-194.571}
                x2={110.336}
                y2={-202.866}
                gradientTransform="matrix(1 0 0 -1 -85 -188.833)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__b)"
                d="M29.483 8.519v2.729h-2.782v2.785h-2.726v-2.777h-2.783V8.527h2.774V5.739h2.727V8.52l2.79-.001z"
            />
        </Svg>
    );
}