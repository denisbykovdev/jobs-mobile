import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function CreateOpportunityMenu(props) {
    return (
        <Svg
            width={responsiveWidth(9)}
            height={responsiveWidth(11.5)}
            viewBox="0 0 17.468 22.539"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={3.21}
                y1={-128.081}
                x2={3.21}
                y2={-150.62}
                gradientTransform="matrix(1 0 0 -1 -85 -185.96)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M-81.809-57.88c4.814-.008 8.744 3.903 8.753 8.714.009 4.813-3.906 8.745-8.715 8.754-4.813.008-8.745-3.907-8.753-8.715-.007-4.815 3.905-8.745 8.715-8.753zm.622 12.325v-3.181h3.486v-1.012h-3.512v-3.403h-1.096v3.427h-3.235v1.013h3.259v3.156h1.098zm2.115 6.106c-1.834.506-3.625.493-5.438.004l-.507 4.104c.836-.279 1.604-.526 2.362-.799.09-.032.178-.199.185-.308.021-.414.008-.829.008-1.249h1.345c0 .432-.013.835.007 1.237.007.111.087.283.175.315.76.272 1.529.518 2.376.798l-.513-4.102z"
            />
        </Svg>
    );
}