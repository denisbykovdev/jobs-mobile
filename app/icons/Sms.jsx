import * as React from "react";
import Svg, { Circle, Path, G, Text } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Sms(props) {
    return (
        <Svg
            width={responsiveWidth(21)}
            height={responsiveWidth(21)}
            viewBox="0 0 50 49.375"
            {...props}
        >
            <Circle fill="#30BAB2" cx={-12.032} cy={16.33} r={22.249} />
            <Path
                fill="#C1EAE8"
                d="M-12.032 40.73c-13.456 0-24.402-10.945-24.402-24.4 0-13.456 10.947-24.403 24.402-24.403C1.423-8.073 12.37 2.874 12.37 16.33c0 13.455-10.947 24.4-24.402 24.4zm0-44.497c-11.081 0-20.096 9.016-20.096 20.097 0 11.08 9.015 20.095 20.096 20.095S8.063 27.41 8.063 16.33c0-11.081-9.014-20.097-20.095-20.097z"
            />
            <G>
                <Text
                    transform="translate(-25.231 20.405)"
                    fill="#FFF"
                    fontFamily="'Assistant-ExtraBold'"
                    fontSize={13.865}
                >
                    {"SMS"}
                </Text>
            </G>
        </Svg>
    );
}