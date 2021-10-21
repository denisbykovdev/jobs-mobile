import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from '../utils/layout';

export default function MenuHeaderWhite(props) {
    return (
        <Svg
            width={responsiveWidth(14.5)}
            height={responsiveWidth(12)}
            viewBox="0 0 28.542 24.167" {...props}
        >
            <Path
                fill="#FFF"
                d="M26.488 4.104H.271V.228h26.217s1.846-.143 1.846 1.875-1.846 2.001-1.846 2.001zm0 16.062H.271v3.875h26.217s1.846.017 1.846-2.002c-.001-2.018-1.846-1.873-1.846-1.873zm-3.092-8.064c0-2.018-1.846-1.875-1.846-1.875H.271v3.876H21.55c0 .001 1.846.018 1.846-2.001z"
            />
        </Svg>
    );
}