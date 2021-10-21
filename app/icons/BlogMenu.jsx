import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function BlogMenu(props) {
    return (
        <Svg
            width={responsiveWidth(9)}
            height={responsiveWidth(8)}
            viewBox="0 0 19.477 15.377"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={13.852}
                y1={-200.075}
                x2={13.852}
                y2={-212.226}
                gradientTransform="matrix(1 0 0 -1 -85 -193.123)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M-66.701 6.952c-.27.292-.524.596-.808.872-.551.534-1.119 1.048-1.667 1.583a.606.606 0 00-.155.357 429.644 429.644 0 00-.377 3.598c-.029.291.143.465.436.433 1.232-.142 2.467-.282 3.698-.437a.702.702 0 00.366-.186c.636-.589 1.26-1.189 1.888-1.785.02-.018.044-.027.087-.055.004.09.012.158.012.227l.001 3.92c-.001.762-.409 1.17-1.173 1.17-2.968 0-5.936.002-8.902-.004a.844.844 0 00-.598.22c-.792.69-1.592 1.372-2.389 2.059-.063.054-.13.104-.222.179-.008-.104-.014-.179-.014-.252-.001-.525.002-1.052-.002-1.576-.002-.406-.196-.602-.602-.604-.306-.003-.611.003-.916-.002-.609-.012-1.035-.427-1.036-1.036-.004-2.542-.004-5.083 0-7.626.001-.645.44-1.051 1.111-1.052 1.483-.003 2.968-.002 4.452-.002h6.604l.206-.001z"
            />
            <LinearGradient
                id="prefix__b"
                gradientUnits="userSpaceOnUse"
                x1={21.543}
                y1={-196.849}
                x2={21.543}
                y2={-204.484}
                gradientTransform="matrix(1 0 0 -1 -85 -193.123)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__b)"
                d="M-65.905 11.36l-1.408-1.404c2.099-2.07 4.214-4.157 6.313-6.23l1.4 1.401c-2.09 2.067-4.205 4.155-6.305 6.233z"
            />
            <LinearGradient
                id="prefix__c"
                gradientUnits="userSpaceOnUse"
                x1={17.516}
                y1={-203.847}
                x2={17.516}
                y2={-205.576}
                gradientTransform="matrix(1 0 0 -1 -85 -193.123)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__c)"
                d="M-66.601 12.185c-.614.094-1.177.18-1.765.268.094-.6.181-1.163.267-1.729.495.481.971.946 1.498 1.461z"
            />
        </Svg>
    );
}