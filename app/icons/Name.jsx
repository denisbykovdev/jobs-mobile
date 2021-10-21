import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Name(props) {
    return (
        <Svg
            width={responsiveWidth(8)}
            height={responsiveWidth(10.5)}
            viewBox="0 0 18.25 21.583"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={94.033}
                y1={-187.252}
                x2={94.033}
                y2={-208.244}
                gradientTransform="matrix(1 0 0 -1 -85 -186.917)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M9.091.335a5.247 5.247 0 015.239 5.259c-.005 2.896-2.368 5.239-5.269 5.23A5.246 5.246 0 019.091.335zm3.332 5.257a3.339 3.339 0 00-3.315-3.349 3.337 3.337 0 103.315 3.349zM.405 20.111c.134.313.212.671.415.931.233.303.61.354.98.203.446-.187.604-.541.615-1.012.111-5.132 5.722-8.248 10.099-5.589 2.088 1.269 3.152 3.181 3.244 5.623.024.626.399 1.045.954 1.046.569.001.968-.438.949-1.083a8.663 8.663 0 00-.103-1.224c-.805-4.631-4.842-7.662-9.521-7.157-4.121.442-7.445 4.069-7.532 8.217-.032.017-.066.028-.1.045zM9.107 2.244a3.337 3.337 0 10-.042 6.672 3.337 3.337 0 00.042-6.672z"
            />
        </Svg>
    );
}