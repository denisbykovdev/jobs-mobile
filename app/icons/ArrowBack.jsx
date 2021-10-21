import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function ArrowBack(props) {
  return (
    <Svg 
        width={responsiveWidth(11.5)}
        height={responsiveWidth(8)}
        viewBox="0 0 24.375 16" {...props}
    >
      <LinearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={-473.363}
        y1={-192.688}
        x2={-473.363}
        y2={-208.342}
        gradientTransform="rotate(180 -230.55 -96.25)"
      >
        <Stop offset={0} stopColor="#3ccfbc" />
        <Stop offset={1} stopColor="#219ba5" />
      </LinearGradient>
      <Path
        fill="url(#prefix__a)"
        d="M11.217 15.843h4.708c.087-.092.168-.188.259-.274 2.576-2.428 5.151-4.856 7.73-7.282.092-.084.211-.137.339-.219-.164-.154-.239-.226-.317-.297L16.184.464c-.091-.086-.172-.183-.259-.275h-4.708c.088.09.173.184.265.271 2.014 1.897 4.026 3.794 6.042 5.689.08.076.184.13.276.194l-.063.104h-.332L.619 6.446c-.115 0-.23-.013-.347-.02v3.183c.104-.009.209-.024.315-.024h16.849c.101 0 .201.01.405.021-.143.123-.223.186-.296.254-.904.851-1.809 1.699-2.709 2.551-1.208 1.142-2.412 2.288-3.619 3.432z"
      />
    </Svg>
  );
}