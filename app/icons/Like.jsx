import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";
import colors from '../utils/colors'

export default function Like({
    iconColor = colors.tealishTwo
}) {
    return (
        <Svg
            width={responsiveWidth(11.5)}
            height={responsiveWidth(10.5)}
            viewBox="0 0 24.708 23.042"
        >
            <Path
                fill={iconColor}
                d="M24.606 8.073c-.043 2.277-.811 4.16-2.335 5.727-2.267 2.334-4.54 4.658-6.804 6.996-.508.524-.948 1.109-1.523 1.578-.992.81-2.311.771-3.203-.154-2.767-2.87-5.533-5.739-8.299-8.611C.879 11.984.074 10.044.129 7.787.212 4.279 2.518 1.262 5.812.37c2.311-.625 4.463-.216 6.427 1.156.341.238.34.244.662-.029A5.251 5.251 0 0116.335.224c1.892-.021 3.652.399 5.156 1.603 2.022 1.62 3.051 3.747 3.115 6.246z"
            />
        </Svg>
    );
}
