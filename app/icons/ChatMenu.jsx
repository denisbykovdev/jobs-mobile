import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function ChatMenu(props) {
    return (
        <Svg
            width={responsiveWidth(9)}
            height={responsiveWidth(8)}
            viewBox="-96.696 -25.198 16.517 11.312"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={-88.438}
                y1={-25.198}
                x2={-88.438}
                y2={-13.886}
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M-88.42-25.198h7.227c.465 0 .793.208.945.596.107.271.104.28-.129.443l-7.249 5.07c-.542.38-1.078.381-1.619.003-2.446-1.711-4.892-3.423-7.341-5.131-.097-.068-.113-.13-.086-.237a.98.98 0 01.848-.736c.086-.008.174-.009.262-.009l7.142.001zm-7.717 11.261c.172.017.344.048.516.049 2.437.003 4.872.002 7.308.002 2.362 0 4.726.001 7.087-.002.164 0 .328-.034.492-.053l.004-.043-.65-.608c-1.573-1.467-3.146-2.934-4.718-4.404-.077-.072-.127-.086-.217-.019-.257.192-.522.374-.784.559-.875.62-1.762.619-2.638-.002l-.894-.632-5.514 5.105.008.048zm-.559-9.376v1.833c0 2.198-.001 4.396.001 6.593 0 .082.015.163.025.278l5.343-4.932-5.369-3.772zm16.508 8.68v-8.672l-5.359 3.764 5.359 4.908z"
            />
        </Svg>
    );
}