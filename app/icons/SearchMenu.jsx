import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function SearchMenu(props) {
    return (
        <Svg
            width={responsiveWidth(9)}
            height={responsiveWidth(9)}
            viewBox="0 0 18.585 18.368"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={94.291}
                y1={-190.132}
                x2={94.291}
                y2={-208.502}
                gradientTransform="matrix(1 0 0 -1 -85 -190.132)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M14.028 11.049c.034.023.091.055.134.098 1.287 1.288 2.572 2.577 3.858 3.866.753.756.753 1.739 0 2.493-.117.117-.233.234-.353.35-.685.684-1.693.686-2.377.002a1779.213 1779.213 0 01-3.885-3.886c-.09-.091-.15-.109-.27-.041-4.258 2.439-9.676.14-10.9-4.621C-.786 5.336 1.621 1.266 5.601.237c3.986-1.03 8.098 1.406 9.087 5.401.45 1.821.256 3.58-.599 5.257-.016.027-.028.055-.041.083-.004.009-.006.021-.02.071zM12.357 7.51c.016-2.714-2.18-4.922-4.902-4.936a4.925 4.925 0 00-4.943 4.899c-.015 2.718 2.188 4.934 4.913 4.945 2.712.013 4.918-2.184 4.932-4.908z"
            />
        </Svg>
    );
}