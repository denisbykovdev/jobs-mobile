import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function DocumentMenu(props) {
    return (
        <Svg
            width={responsiveWidth(9)}
            height={responsiveWidth(11.5)}
            viewBox="0 0 18.502 19.125"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={-28.149}
                y1={-132.954}
                x2={-9.646}
                y2={-132.954}
                gradientTransform="matrix(1 0 0 -1 -85 -189.375)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M-103.752-49.073a4.739 4.739 0 01-.424-.944h-5.473c-.924 0-.924-1.435 0-1.435h5.234c-.021-.708.1-1.413.354-2.065h-5.588c-.924 0-.924-1.435 0-1.435h6.484c.652-.696 1.566-1.168 2.729-1.286a4.94 4.94 0 011.287-.178v-9.568h-10.125l-3.875 3.5v15.625h11.469c-.99-.465-1.672-1.273-2.072-2.214zm-5.771-12.879h7.25c.926 0 .926 1.435 0 1.435h-7.25c-.924 0-.924-1.435 0-1.435zm0 3.5h7.25c.926 0 .926 1.435 0 1.435h-7.25c-.924 0-.924-1.435 0-1.435zm10.689 2.717a4.188 4.188 0 100 8.376 4.188 4.188 0 000-8.376zm1.061 4.953h-1.25c-.486 0-.701-.402-.668-.777-.014-.057-.035-.109-.035-.176v-1.125c0-.906 1.406-.906 1.406 0v.672h.547c.906.001.906 1.406 0 1.406z"
            />
        </Svg>
    );
}