import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function FavoritesMenu(props) {
    return (
        <Svg
            width={responsiveWidth(9.5)}
            height={responsiveWidth(11)}
            viewBox="0 0 16.912 17.678"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={-0.535}
                y1={-163.826}
                x2={-0.535}
                y2={-177.249}
                gradientTransform="matrix(1 0 0 -1 -85 -190.822)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M-92.553-13.618l2.359-2.112a11.75 11.75 0 01-.144-.175c-1.133-1.353-1.675-2.911-1.613-4.673.106-3.049 2.41-5.728 5.402-6.293 3.034-.573 5.943.858 7.337 3.608 1.197 2.364.822 5.347-.921 7.343-1.082 1.24-2.432 2.005-4.057 2.267-.369.06-.748.078-1.123.079-2.365.002-4.73-.005-7.097-.01h-.131a.23.23 0 00-.012-.034zm6.45-7.914c.014-.073.021-.138.039-.2a.845.845 0 01.623-.63.807.807 0 01.848.249.81.81 0 01.168.907c-.145.357-.426.533-.808.545-.183.006-.367.001-.556.001v1.628h1.128c.006-.02.011-.029.011-.039.001-.125.011-.251 0-.375-.013-.117.037-.159.14-.202.8-.328 1.272-.921 1.329-1.786.072-1.074-.702-1.962-1.798-2.121-.979-.142-1.973.556-2.212 1.56-.035.148-.041.301-.063.462l1.151.001zm.313 3.241v.977h1.133v-.977h-1.133z"
            />
            <LinearGradient
                id="prefix__b"
                gradientUnits="userSpaceOnUse"
                x1={3.525}
                y1={-171.5}
                x2={3.525}
                y2={-181.503}
                gradientTransform="matrix(1 0 0 -1 -85 -190.822)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__b)"
                d="M-77.696-11.257l2.056 1.896c-.046.008-.067.016-.09.017-2.149.003-4.302.057-6.45-.003-2.273-.064-3.952-1.18-5.053-3.167-.027-.046-.045-.097-.078-.168h.182c.736-.008 1.474.01 2.209-.027a7.297 7.297 0 004.063-1.471c1.519-1.13 2.486-2.626 2.899-4.477.047-.209.078-.423.122-.665 1.088 1.129 1.661 2.455 1.686 4.004.023 1.551-.517 2.9-1.546 4.061z"
            />
        </Svg>
    );
}