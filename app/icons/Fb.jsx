import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Fb(props) {
    return (
        <Svg
            width={responsiveWidth(5)}
            height={responsiveWidth(10)}
            viewBox="0 0 11.333 20.333" {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={90.797}
                y1={-188.583}
                x2={90.797}
                y2={-208.225}
                gradientTransform="matrix(1 0 0 -1 -85 -188.167)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M7.366 20.051c-1.164 0-2.25-.012-3.333.006-.401.006-.339-.254-.339-.489-.002-2.284-.002-4.569-.001-6.854 0-.404-.035-.815.021-1.213.042-.308-.059-.375-.322-.371-.762.006-1.523.006-2.285.004-.207 0-.44.037-.438-.295C.673 9.79.67 8.738.67 7.615c.85 0 1.654-.021 2.457.008.445.016.666-.045.633-.587-.051-.836-.015-1.679.017-2.516.067-1.75.83-3.068 2.478-3.771A3.862 3.862 0 017.614.43c1.094-.035 2.19.008 3.315.02v3.255c-.671 0-1.315-.009-1.958.002-1.137.016-1.585.467-1.597 1.603-.008.742 0 1.485 0 2.3h3.463c-.146 1.206-.285 2.34-.432 3.539H7.364c.002 2.997.002 5.921.002 8.902z"
            />
        </Svg>
    );
}