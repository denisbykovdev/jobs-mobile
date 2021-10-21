import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function WhiteArrowBack(props) {
    return (
        <Svg
            width={responsiveWidth(11.5)}
            height={responsiveWidth(8)}
            viewBox="0 0 24.375 16"
            {...props}
        >
            <Path
                fill="#FFF"
                d="M11.217 15.843h4.708c.086-.092.168-.188.259-.273a7567.19 7567.19 0 017.73-7.283c.092-.084.211-.137.339-.219l-.317-.297L16.184.464c-.091-.086-.173-.183-.259-.275h-4.708c.088.09.173.184.265.271 2.014 1.897 4.026 3.794 6.042 5.689.08.076.184.13.276.194l-.063.104h-.332L.618 6.446c-.115 0-.23-.014-.347-.021v3.183c.105-.008.21-.023.316-.023h16.849c.101 0 .2.01.405.021-.143.123-.223.186-.296.255-.904.85-1.808 1.698-2.709 2.55-1.208 1.142-2.412 2.288-3.619 3.432z"
            />
        </Svg>
    );
}