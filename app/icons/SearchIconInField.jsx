import * as React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../utils/colors";
import { responsiveWidth } from "../utils/layout";

export default function SearchIconInField({
    width = responsiveWidth(9.5),
    height = responsiveWidth(9.5),
    iconColor = colors.dusk
}) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="12.146 9.354 19.375 19"
        >
            <Path
                fill={iconColor}
                d="M31.111 26.708c-.059-.066-.123-.127-.188-.189l-2.978-2.978a8.66 8.66 0 001.808-5.304c0-4.801-3.905-8.708-8.707-8.708-4.801 0-8.707 3.907-8.707 8.708s3.906 8.708 8.707 8.708a8.667 8.667 0 005.376-1.863c.205-.113.359-.083.552.123.393.422.811.82 1.219 1.228.522.521 1.04 1.05 1.569 1.564.396.383 1.009.404 1.357.067.373-.361.369-.919-.008-1.356zm-10.065-1.523c-3.832 0-6.948-3.117-6.948-6.949s3.116-6.949 6.948-6.949 6.949 3.117 6.949 6.949-3.117 6.949-6.949 6.949z"
            />
        </Svg>
    );
}