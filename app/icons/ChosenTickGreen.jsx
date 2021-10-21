import * as React from "react";
import Svg, { Circle, G, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function ChosenTickGreen(props) {
    return (
        <Svg
            width={responsiveWidth(15)}
            height={responsiveWidth(15)}
            viewBox="0 0 20.75 20.75" {...props}
        >
            <Circle fill="#33B8B0" cx={14.434} cy={14.333} r={10.208} />
            <G fill="#FFF">
                <Path d="M14.456 16.764l-1.101 1.404-4.305-4.669 1.284-1.186z" />
                <Path d="M12.225 16.928l1.151 1.282 6.44-6.608-1.33-1.146z" />
            </G>
        </Svg>
    );
}