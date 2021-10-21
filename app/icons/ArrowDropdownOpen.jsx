import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function ArrowDropdownOpen(props) {
    return (
        <Svg
            width={responsiveWidth(17.5)}
            height={responsiveWidth(17.5)}
            viewBox="0 0 31.938 31.75" {...props}
        >
            <Path
                fill="#FFF"
                d="M15.911 32.673C7.22 32.673.146 25.603.146 16.911c0-8.694 7.073-15.764 15.765-15.764s15.762 7.071 15.762 15.764c0 8.691-7.071 15.762-15.762 15.762z"
            />
            <Path
                fill="#2A3A51"
                d="M20.459 19.659l-4.549-3.878-4.547 3.878-.888-.888 5.405-4.611.03.03.031-.03 5.405 4.611z"
            />
        </Svg>
    );
}