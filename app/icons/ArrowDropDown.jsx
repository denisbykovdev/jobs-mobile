import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function ArrowDropDown(props) {
    return (
        <Svg
            width={responsiveWidth(17.5)}
            height={responsiveWidth(17.5)}
            viewBox="0 0 31.938 31.75" {...props}
        >
            <Path
                fill="#258C91"
                d="M15.765 32.525C7.073 32.525 0 25.455 0 16.764 0 8.07 7.073 1 15.765 1s15.762 7.071 15.762 15.764c0 8.69-7.072 15.761-15.762 15.761zm0-29.451c-7.548 0-13.689 6.141-13.689 13.689 0 7.547 6.142 13.688 13.688 13.688s13.686-6.14 13.686-13.687c0-7.549-6.137-13.69-13.685-13.69z"
            />
            <Path
                fill="#75859D"
                d="M21.492 15.195l-5.405 4.612-.03-.03-.03.03-5.406-4.612.888-.888 4.548 3.879 4.549-3.879z"
            />
        </Svg>
    );
}