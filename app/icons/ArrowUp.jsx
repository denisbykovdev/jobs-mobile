import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function ArrowUp(props) {
    return (
        <Svg
            width={responsiveWidth(8)}
            height={responsiveWidth(11.5)}
            // width={'100%'}
            // height={'100%'}
            viewBox="0 0 15.938 24.438" {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={-567.773}
                y1={406.4}
                x2={-567.773}
                y2={422.055}
                gradientTransform="matrix(0 1 1 0 -401.965 575.787)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M20.09 9.061V4.353c-.092-.087-.188-.168-.275-.259-2.428-2.576-4.854-5.151-7.281-7.729-.084-.093-.138-.212-.22-.34-.153.164-.226.239-.297.317L4.709 4.094c-.085.091-.182.172-.274.259v4.708c.09-.088.185-.174.271-.266C6.603 6.781 8.5 4.77 10.395 2.754c.076-.08.13-.185.194-.276l.104.063v.332l-.001 16.786c0 .114-.013.229-.02.347h3.182c-.008-.104-.021-.209-.021-.315V2.842c0-.101.01-.201.02-.405.123.144.187.224.254.296.853.904 1.699 1.81 2.552 2.709 1.14 1.207 2.286 2.412 3.431 3.619z"
            />
        </Svg>
    );
}
