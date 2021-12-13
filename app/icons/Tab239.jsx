import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Tab239(props) {
  return (
    <Svg
      width={responsiveWidth(8)}
      height={responsiveWidth(9)}
      viewBox="-0.125 1.005 17.208 16.005"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FFF"
        d="M14.752 2.267c-1.037-.83-2.254-1.12-3.561-1.106a3.62 3.62 0 00-2.369.879c-.223.188-.222.184-.457.02-1.357-.947-2.843-1.23-4.438-.799C1.653 1.877.06 3.961.002 6.383c-.037 1.558.519 2.899 1.599 4.02 1.908 1.982 3.819 3.965 5.729 5.946.617.64 1.525.665 2.212.106.396-.324.701-.727 1.053-1.089 1.562-1.614 3.133-3.22 4.698-4.831 1.052-1.082 1.582-2.383 1.611-3.955-.044-1.724-.754-3.193-2.152-4.313zm-6.431 9.929c-5.401 0-5.401-8.375 0-8.375s5.401 8.375 0 8.375z"
      />
      <Circle
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FFF"
        cx={8.453}
        cy={8.042}
        r={2.948}
      />
    </Svg>
  );
}