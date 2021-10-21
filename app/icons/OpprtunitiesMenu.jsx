import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function OpprtunitiesMenu(props) {
    return (
        <Svg
            width={responsiveWidth(12)}
            height={responsiveWidth(11.5)}
            viewBox="0 0 19.425 19.432"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={58.775}
                y1={-186.612}
                x2={58.775}
                y2={-206.045}
                gradientTransform="matrix(1 0 0 -1 -85 -189.068)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M-25.192 16.977h-2.045c-.051-.5-.104-.992-.146-1.485-.042-.543-.12-.646-.645-.773a7.703 7.703 0 01-2.264-.971c-.338-.21-.498-.199-.803.053l-1.248 1.029-1.447-1.449 1.045-1.266c.23-.279.242-.459.044-.767a7.618 7.618 0 01-1.017-2.41c-.078-.33-.205-.448-.543-.485-.555-.06-1.109-.112-1.677-.168V6.232l1.344-.133c.052-.006.104-.006.156-.012.557-.059.626-.117.761-.662.197-.8.529-1.543.967-2.241.21-.336.199-.5-.049-.803l-1.031-1.245 1.445-1.451 1.252 1.033c.302.249.47.26.803.046a7.595 7.595 0 012.371-.998c.373-.088.485-.215.524-.612.054-.531.102-1.063.153-1.609h2.059c.037.384.078.771.115 1.162.02.184.031.37.053.554.027.254.172.432.422.486.91.198 1.748.566 2.535 1.063.246.157.439.143.674-.048.432-.353.861-.709 1.262-1.041l1.463 1.418-1.043 1.259c-.232.281-.244.461-.047.766a7.62 7.62 0 011.018 2.41c.078.336.205.453.543.489.551.06 1.105.111 1.676.168v2.053l-1.314.133c-.059.006-.117.007-.176.012-.533.059-.602.121-.732.639a7.876 7.876 0 01-.973 2.263c-.215.342-.201.508.059.821l1.012 1.222-1.447 1.453-.752-.621c-.189-.156-.377-.316-.568-.469-.215-.169-.414-.187-.639-.04a7.716 7.716 0 01-2.553 1.072c-.266.06-.396.242-.422.533-.047.504-.096 1.007-.145 1.51-.005.05-.019.1-.03.165zm-1.026-4.778c2.717-.006 4.941-2.236 4.936-4.948-.004-2.72-2.232-4.942-4.947-4.938-2.717.004-4.942 2.233-4.936 4.948.003 2.72 2.232 4.944 4.947 4.938zm-.013-1.052a3.877 3.877 0 003.896-3.895 3.876 3.876 0 00-3.881-3.884 3.874 3.874 0 00-3.897 3.894 3.878 3.878 0 003.882 3.885z"
            />
        </Svg>
    );
}