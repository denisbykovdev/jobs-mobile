import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

function Planshet(props) {
  return (
    <Svg 
        width={responsiveWidth(9.5)}
        height={responsiveWidth(10.5)}
        viewBox="0 0 19 21" 
        fill="none" 
        {...props}
    >
      <Path
        d="M12.124 2.086h.209c1.465 0 2.93-.001 4.394.001 1.021.001 1.791.77 1.792 1.795v14.862c-.001 1.021-.771 1.795-1.794 1.795-4.978.002-9.955.002-14.934 0-1.001-.001-1.756-.747-1.79-1.748v-.106L0 3.964c0-.778.313-1.379 1.034-1.707.243-.109.533-.16.803-.163 1.459-.016 2.917-.009 4.376-.005.112 0 .177-.021.223-.139C6.909.755 8.005-.001 9.254 0c1.228.002 2.344.771 2.813 1.943l.057.143zm2.151 15.15c.036-1.545-.775-3.44-2.637-4.404-1.874-.972-3.717-.824-5.411.436-1.313.973-1.935 2.33-1.976 3.969l10.024-.001zM9.288 6.362a2.51 2.51 0 00-2.526 2.493 2.51 2.51 0 005.019.033 2.512 2.512 0 00-2.493-2.526zm-.036-2.324a1.044 1.044 0 001.041-1.033 1.051 1.051 0 00-1.046-1.048 1.046 1.046 0 00-1.038 1.054 1.04 1.04 0 001.043 1.027z"
        fill="url(#prefix__paint0_linear_1_1797)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_1_1797"
          x1={9.258}
          y1={0}
          x2={9.258}
          y2={20.541}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3CCFBC" />
          <Stop offset={1} stopColor="#219BA5" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

const MemoPlanshet = React.memo(Planshet);
export default MemoPlanshet;
