import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Planshet(props) {
    return (
        <Svg
            width={responsiveWidth(9.5)}
            height={responsiveWidth(10.5)}
            viewBox="0 0 18.52 20.541"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={153.554}
                y1={-117.332}
                x2={153.554}
                y2={-137.873}
                gradientTransform="matrix(1 0 0 -1 -85 -187.959)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M71.42-68.541h.209c1.465 0 2.93-.001 4.394.001 1.021.001 1.791.77 1.792 1.795v14.862c-.001 1.021-.771 1.795-1.794 1.795-4.978.002-9.955.002-14.934 0-1.001-.001-1.756-.747-1.79-1.748v-.106l-.001-14.721c0-.778.313-1.379 1.034-1.707.243-.109.533-.16.803-.163 1.459-.016 2.917-.009 4.376-.005.112 0 .177-.021.223-.139.473-1.195 1.569-1.951 2.818-1.95 1.228.002 2.344.771 2.813 1.943l.057.143zm2.151 15.15c.036-1.545-.775-3.44-2.637-4.404-1.874-.972-3.717-.824-5.411.436-1.313.973-1.935 2.33-1.976 3.969l10.024-.001zm-4.987-10.874a2.51 2.51 0 00-2.526 2.493 2.51 2.51 0 005.019.033 2.512 2.512 0 00-2.493-2.526zm-.036-2.324a1.044 1.044 0 001.041-1.033 1.051 1.051 0 00-1.046-1.048 1.046 1.046 0 00-1.038 1.054 1.04 1.04 0 001.043 1.027z"
            />
        </Svg>
    );
}