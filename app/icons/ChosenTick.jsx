import React from 'react';
import { Svg, G, Circle, Polygon } from 'react-native-svg';
import { responsiveWidth } from '../utils/layout';

const ChosenTick = ({
    width = responsiveWidth(12),
    height = responsiveWidth(12)
}) => (
    <Svg
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="1.281 -17.344 30.084 30.083"
        enable-background="new 1.281 -17.344 30.084 30.083"
    >
        <Circle
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#152C5E"
            cx="16.392"
            cy="-2.376"
            r="14.833"
        />
        <G>
            <G>
                <Polygon
                    fill="#FFFFFF"
                    points="16.425,1.157 14.825,3.198 8.569,-3.587 10.436,-5.311 		"
                />
                <Polygon
                    fill="#FFFFFF"
                    points="13.183,1.396 14.855,3.259 24.214,-6.344 22.281,-8.01 		"
                />
            </G>
        </G>
    </Svg>
)

export default ChosenTick