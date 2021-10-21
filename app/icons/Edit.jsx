import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import colors from "../utils/colors";
import { responsiveWidth } from "../utils/layout";

export default function Edit({
    width = responsiveWidth(8.5),
    height = responsiveWidth(8),
    iconColor = colors.darkGreyBlue
}) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="6.521 7.792 25 24.833" {...props}
        >
            <G fillRule="evenodd" clipRule="evenodd" fill={iconColor}>
                <Path d="M10.864 23.159c.217-.371.342-.738.588-.986 4.523-4.546 9.061-9.079 13.6-13.609.582-.581 1.109-.569 1.688.007a867.19 867.19 0 013.589 3.588c.698.704.69 1.203-.013 1.906L16.92 27.461c-.758.758-1.349.755-2.11-.005-1.127-1.126-2.264-2.244-3.373-3.387-.231-.237-.364-.569-.573-.91zM9.499 29.566c1-.258 1.891-.491 2.783-.717.732-.187 1.295.095 1.443.711.154.639-.184 1.141-.919 1.332-1.424.37-2.849.738-4.277 1.093-1.12.278-1.7-.305-1.464-1.449.293-1.422.582-2.846.872-4.269.165-.814.724-1.282 1.364-1.142.607.134.915.746.762 1.559-.172.923-.359 1.843-.564 2.882z" />
            </G>
        </Svg>
    );
}