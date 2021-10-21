import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function StarFull(props) {
    return (
        <Svg
            width={responsiveWidth(6.5)}
            height={responsiveWidth(6)}
            viewBox="0 0 12.375 11.375" {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={91.058}
                y1={-197.944}
                x2={91.058}
                y2={-209.134}
                gradientTransform="matrix(1 0 0 -1 -85 -197.125)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M0 5.086l1.166-.219c.918-.171 1.836-.344 2.756-.511a.27.27 0 00.209-.15C4.746 3.117 5.363 2.03 5.98.942c.022-.037.047-.072.077-.123l.082.13c.617 1.087 1.234 2.174 1.849 3.264a.259.259 0 00.199.142c1.248.23 2.494.463 3.74.696l.188.037-.104.112c-.875.908-1.75 1.815-2.629 2.721a.264.264 0 00-.076.246c.15 1.146.297 2.29.445 3.435l.053.407c-.234-.106-.449-.202-.664-.301-.986-.45-1.973-.897-2.957-1.351a.273.273 0 00-.246-.004c-1.16.533-2.322 1.063-3.482 1.592-.041.018-.082.033-.141.059.021-.182.041-.348.063-.515.137-1.071.27-2.144.42-3.212.029-.201-.029-.321-.16-.457C1.789 6.952.951 6.077.107 5.204L0 5.086z"
            />
        </Svg>
    );
}
