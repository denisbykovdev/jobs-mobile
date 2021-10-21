import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function ContactusMenu(props) {
    return (
        <Svg
            width={responsiveWidth(7.5)}
            height={responsiveWidth(8.5)}
            viewBox="0 0 15.721 16.514"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={15.267}
                y1={-156.969}
                x2={15.267}
                y2={-173.483}
                gradientTransform="matrix(1 0 0 -1 -85 -191.986)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M-74.365-35.017c1.136.426 1.869 1.268 2.395 2.32.049.094.081.195.124.291.167.368.11.701-.135 1.017-.344.446-.683.898-1.019 1.351-.1.132-.192.269-.279.409-.178.29-.179.586.009.869 1.272 1.911 2.752 3.646 4.495 5.146.269.23.553.439.84.646a.69.69 0 00.77.046c.462-.262.917-.538 1.37-.813.188-.114.367-.243.555-.357a.946.946 0 01.971-.038 4.903 4.903 0 012.228 2.189c.259.503.227.994-.112 1.449-.554.74-1.227 1.339-2.095 1.688-.995.402-2 .373-3.019.079-1.013-.294-1.896-.814-2.729-1.446-.98-.743-1.858-1.595-2.69-2.496-.978-1.06-1.977-2.098-2.84-3.255-.703-.944-1.325-1.938-1.717-3.059-.307-.88-.437-1.777-.29-2.706.125-.794.49-1.471 1.016-2.069a5.207 5.207 0 011.354-1.092c.128-.072.275-.113.415-.169h.383z"
            />
        </Svg>
    );
}