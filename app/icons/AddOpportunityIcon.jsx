import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function AddOpportunityIcon({
    iconColor = "#BBBEC7"
}) {
    return (
        <Svg
            width={responsiveWidth(13)}
            height={responsiveWidth(13.5)}
            viewBox="-0.917 -0.271 21.833 26.729"
        >
            <Path
                fill={iconColor}
                d="M10.03 22.228c-.896-.002-1.796-.169-2.74-.27l-.497 4.025c.844-.281 1.601-.523 2.347-.796.099-.035.197-.216.204-.336.024-.411.01-.825.01-1.237H10.7c0 .423-.01.824.008 1.228.007.115.073.301.156.329.772.275 1.555.525 2.397.805-.17-1.392-.337-2.719-.497-4.018-.959.102-1.847.27-2.734.27zM10.82 7.406H9.081V9.68H6.807v1.74h2.274v2.274h1.739V11.42h2.274V9.68H10.82z"
            />
            <G>
                <Path
                    fill={iconColor}
                    d="M9.95 21.1C4.133 21.1-.6 16.368-.6 10.55-.6 4.732 4.133 0 9.95 0S20.5 4.732 20.5 10.55c0 5.818-4.732 10.55-10.55 10.55zm0-19.5C5.015 1.6 1 5.615 1 10.55s4.015 8.95 8.95 8.95 8.95-4.016 8.95-8.951S14.885 1.6 9.95 1.6z"
                />
            </G>
        </Svg>
    );
}