import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function NotificationsRead(props) {
    return (
        <Svg
            width={responsiveWidth(22.5)}
            height={responsiveWidth(22.5)}
            viewBox="-9 -7.792 45.083 44.75"
            {...props}
        >
            <Circle
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#C3C8D3"
                cx={13.54}
                cy={14.702}
                r={22.292}
            />
            <G fill="#FFF">
                <Path d="M13.577 18.942l-1.841 2.448-7.2-8.14 2.15-2.069z" />
                <Path d="M9.848 19.227l1.923 2.235L22.542 9.94l-2.224-1.998z" />
            </G>
        </Svg>
    );
}