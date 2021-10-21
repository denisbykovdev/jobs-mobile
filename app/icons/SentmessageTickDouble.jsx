import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function SentmessageTickDouble(props) {
    return (
        <Svg
            width={responsiveWidth(12)}
            height={responsiveWidth(4)}
            viewBox="0 0 17.872 9.62"
            {...props}
        >
            <G fill="#FFF">
                <Path d="M6.302 8.059a.915.915 0 01-1.299 1.292L.267 4.591a.915.915 0 111.298-1.292l4.737 4.76z" />
                <Path d="M5.637 7.574c-.529.53-.668 1.251-.309 1.606.358.357 1.081.214 1.611-.317l7.048-7.059c.53-.533.669-1.252.309-1.607-.357-.356-1.08-.214-1.609.319l-7.05 7.058zM9.012 7.818c-.529.529-.668 1.251-.309 1.605.358.357 1.081.214 1.611-.317l7.048-7.059c.53-.533.669-1.252.309-1.607-.357-.356-1.08-.214-1.609.319l-7.05 7.059z" />
            </G>
        </Svg>
    );
}