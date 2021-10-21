import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Tab4(props) {
  return (
    <Svg
      width={responsiveWidth(6)}
      height={responsiveWidth(8)}
      viewBox="16.401 -36.885 12.625 15.917"
      {...props}
    >
      <G fillRule="evenodd" clipRule="evenodd" fill="#FEFEFF">
        <Path d="M22.718-21.015H19.36c-2.25 0-2.83-1.47-2.822-2.266.036-3.614 3.275-5.475 6.873-5.051 3.127.369 5.487 1.953 5.501 5.051.004.741-.427 2.265-2.489 2.265-1.653.003-2.053.001-3.705.001zM22.736-29.043a3.848 3.848 0 113.834-3.86 3.85 3.85 0 01-3.834 3.86z" />
      </G>
    </Svg>
  );
}