import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function IconResults(props) {
    return (
        <Svg
            width={responsiveWidth(21)}
            height={responsiveWidth(24)}
            viewBox="0 0 44.667 50.417" {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={107.348}
                y1={-158.433}
                x2={107.348}
                y2={-208.376}
                gradientTransform="matrix(1 0 0 -1 -85 -158.083)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M.244 25.326c0-3.438.014-6.876-.007-10.315-.011-1.678.71-2.886 2.148-3.716A8551.642 8551.642 0 0020.265.96c1.4-.812 2.768-.815 4.169-.003C30.44 4.438 36.453 7.91 42.464 11.38c1.326.766 1.996 1.904 1.996 3.433v20.981c-.002 1.496-.664 2.643-1.94 3.385a4882.487 4882.487 0 01-18.414 10.643c-1.261.725-2.542.563-3.771-.146-2.035-1.172-4.067-2.35-6.101-3.523-3.978-2.299-7.95-4.607-11.936-6.893-1.396-.801-2.063-1.977-2.06-3.575.012-3.453.006-6.907.006-10.359zm28.36 3.743c3.578-4.383 2.635-10.798-1.526-14.137-3.875-3.11-9.563-2.925-13.161.473-3.705 3.5-4.259 9.07-1.334 13.2 3.005 4.245 9.144 5.658 13.958 2.423.069.114.133.277.244.39a885.121 885.121 0 004.33 4.336c.637.634 1.579.666 2.174.09.572-.557.539-1.538-.09-2.178-.795-.806-1.6-1.602-2.4-2.401l-2.195-2.196z"
            />
            <LinearGradient
                id="prefix__b"
                gradientUnits="userSpaceOnUse"
                x1={105.767}
                y1={-173.274}
                x2={105.767}
                y2={-188.414}
                gradientTransform="matrix(1 0 0 -1 -85 -158.083)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__b)"
                d="M21.001 15.199c4.379.216 7.525 3.706 7.31 8.108-.198 4.036-3.849 7.235-8.004 7.013s-7.295-3.793-7.083-8.058c.198-3.997 3.791-7.259 7.777-7.063zM19.796 25.74l4.834-4.819c-.393-.388-.803-.795-1.271-1.256l-3.655 3.665-1.633-1.652-1.202 1.12c.993.996 1.975 1.985 2.927 2.942z"
            />
        </Svg>
    );
}