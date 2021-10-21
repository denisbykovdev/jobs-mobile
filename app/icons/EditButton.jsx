import * as React from "react";
import Svg, { LinearGradient, Stop, Circle, G, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function EditButton(props) {
    return (
        <Svg
            width={responsiveWidth(23.5)}
            height={responsiveWidth(23.5)}
            viewBox="0 0 47.75 47.739"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={108.832}
                y1={-161.211}
                x2={108.832}
                y2={-208.211}
                gradientTransform="matrix(1 0 0 -1 -85 -160.76)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Circle fill="url(#prefix__a)" cx={23.832} cy={23.95} r={23.5} />
            <G fill="#FFF">
                <Path d="M18.045 26.15c.156-.269.246-.53.423-.708 3.245-3.261 6.499-6.513 9.757-9.764.418-.417.795-.407 1.209.005a480.7 480.7 0 012.575 2.574c.501.504.496.863-.009 1.367l-9.609 9.61c-.544.543-.969.541-1.514-.005-.81-.809-1.624-1.607-2.42-2.43-.166-.166-.261-.405-.412-.649zM17.066 30.747c.719-.187 1.356-.354 1.996-.516.525-.134.93.068 1.036.512.11.457-.132.817-.659.955-1.021.266-2.044.529-3.068.782-.805.2-1.219-.218-1.051-1.038.211-1.021.418-2.042.626-3.063.12-.586.519-.92.979-.819.437.097.657.534.547 1.116-.124.664-.259 1.324-.406 2.071z" />
            </G>
        </Svg>
    );
}