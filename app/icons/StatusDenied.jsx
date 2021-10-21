import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function StatusDenied({
    iconColor = "#C4CAD5"
}) {
    return (
        <Svg
            width={responsiveWidth(8)}
            height={responsiveWidth(8)}
            viewBox="17.984 -34.344 16.125 16.031"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                fill={iconColor}
                d="M26.016-34.312a7.938 7.938 0 100 15.876 7.938 7.938 0 000-15.876zm3.487 11.706c-.586.586-1.582.539-2.227-.104l-1.198-1.199-1.198 1.199c-.645.644-1.641.69-2.227.104s-.539-1.582.104-2.226l1.199-1.199-1.198-1.198c-.645-.645-.691-1.641-.105-2.227s1.582-.539 2.227.105l1.198 1.198 1.198-1.198c.645-.645 1.641-.691 2.227-.105s.539 1.582-.105 2.227L28.2-26.031l1.199 1.199c.643.644.69 1.64.104 2.226z"
            />
        </Svg>
    );
}