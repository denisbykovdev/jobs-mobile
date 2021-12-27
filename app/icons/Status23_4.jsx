import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

function Status23_4(props) {
  return (
    <Svg 
      width={responsiveWidth(10)}
      height={responsiveWidth(12.5)}
      viewBox="0 0 22 27" 
      fill="none" 
      {...props}
    >
      <G clipPath="url(#prefix__clip0_1_1792)">
        <Path
          d="M20.999 9.387c0 2.043-.021 4.086.009 6.128.016 1.16-.298 2.214-.847 3.214-.858 1.563-2.077 2.813-3.463 3.913-1.765 1.396-3.718 2.476-5.765 3.393-.162.072-.398.1-.56.036-3.006-1.182-5.754-2.77-7.955-5.183-1.141-1.25-1.98-2.677-2.354-4.348A2.439 2.439 0 010 16.01C-.001 11.572 0 7.136 0 2.7c0-.039 0-.078.002-.117.015-.35.153-.532.5-.604.793-.163 1.589-.314 2.384-.474C5.344 1.02 7.805.536 10.26.032c.47-.096.897.045 1.336.131 2.947.578 5.895 1.17 8.842 1.755.432.086.563.241.563.686v6.781c0 .002-.001.002-.002.002zm-12.16 4.661c-.091-.12-.135-.196-.194-.257-.864-.867-1.731-1.729-2.596-2.599-.246-.248-.533-.352-.871-.259-.611.167-.775.933-.303 1.408 1.1 1.104 2.203 2.205 3.307 3.31.432.43.894.428 1.328-.006l6.469-6.465c.094-.094.189-.187.27-.29a.804.804 0 00-.457-1.29c-.333-.076-.602.043-.842.283-1.91 1.916-3.823 3.827-5.735 5.741-.117.117-.22.246-.375.424z"
          fill="url(#prefix__paint0_linear_1_1792)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_1_1792"
          x1={10.504}
          y1={0.001}
          x2={10.504}
          y2={26.105}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#3CCFBC" />
          <Stop offset={1} stopColor="#219BA5" />
        </LinearGradient>
        <ClipPath id="prefix__clip0_1_1792">
          <Path fill="#fff" d="M0 0h21.008v26.104H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const MemoStatus23_4 = React.memo(Status23_4);
export default MemoStatus23_4;
