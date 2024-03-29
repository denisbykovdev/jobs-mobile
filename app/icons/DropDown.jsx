import * as React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../utils/colors";
import { responsiveWidth } from "../utils/layout";

export default function DropDown({
    iconColor = colors.whiteTwo,
    arrowColor = colors.darkGreyBlue,
    iconWidth = responsiveWidth(15.5),
    iconHeight = responsiveWidth(15.5)
}) {
    return (
        <Svg
            width={iconWidth}
            height={iconHeight}
            viewBox="-3.531 -16.792 46.167 45.667"
        >
            <Path
                fill={iconColor}
                d="M19.6 28.359c-12.275 0-22.266-9.986-22.266-22.262 0-12.279 9.99-22.264 22.266-22.264 12.274 0 22.261 9.986 22.261 22.264 0 12.274-9.988 22.262-22.261 22.262z"
            />
            <Path
                fill={arrowColor}
                d="M26.252 4.492l-6.921 5.904-.037-.037-.039.037-6.92-5.904 1.137-1.136 5.822 4.965 5.823-4.965z"
            />
        </Svg>
    );
}