import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function HomeMenu(props) {
    return (
        <Svg
            width={responsiveWidth(9)}
            height={responsiveWidth(8)}
            viewBox="0 0 18.084 15.977"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={94.042}
                y1={-192.523}
                x2={94.042}
                y2={-208.499}
                gradientTransform="matrix(1 0 0 -1 -85 -192.523)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M14.99 8.419c.073.059.104.12.104.214-.003 2.402-.002 4.803-.002 7.204 0 .044-.006.088-.01.139h-3.943v-.189-4.16c0-.424-.19-.612-.619-.612H7.582c-.439 0-.638.196-.638.629v4.332H2.999c-.004-.058-.008-.105-.008-.155 0-2.392 0-4.781-.002-7.174 0-.098.026-.165.105-.229 1.949-1.559 3.895-3.12 5.843-4.682.03-.024.063-.049.102-.077.037.027.073.051.107.078 1.949 1.561 3.896 3.123 5.844 4.682zM9.042 0L0 7.246l1.313 1.372c.042-.03.08-.055.114-.082l7.344-5.868c.178-.142.359-.145.536-.004l7.402 5.867c.037.028.079.057.121.087l1.254-1.374C15.063 4.826 12.058 2.416 9.042 0z"
            />
        </Svg>
    );
}