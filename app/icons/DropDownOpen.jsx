import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function DropDownOpen(props) {
    return (
        <Svg
            width={responsiveWidth(22.5)}
            height={responsiveWidth(22.5)}
            viewBox="0 0 46.167 45.667"
            {...props}
        >
            <Path
                fill="#258C91"
                d="M19.6 28.359c-12.275 0-22.266-9.986-22.266-22.262 0-12.279 9.99-22.264 22.266-22.264 12.274 0 22.261 9.986 22.261 22.264 0 12.274-9.988 22.262-22.261 22.262zm0-41.596C8.94-13.237.265-4.564.265 6.097c0 10.658 8.675 19.332 19.333 19.332 10.659 0 19.331-8.674 19.331-19.332 0-10.661-8.67-19.334-19.329-19.334z"
            />
            <Path
                fill="#75859D"
                d="M25.117 10.396l-5.823-4.965-5.822 4.965-1.137-1.136 6.92-5.905.039.038.037-.038 6.92 5.905z"
            />
        </Svg>
    );
}