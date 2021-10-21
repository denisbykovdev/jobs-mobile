import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Persons(props) {
    return (
        <Svg
            width={responsiveWidth(3)}
            height={responsiveWidth(4)}
            viewBox="-0.172 -0.969 6.719 8.563"
            {...props}
        >
            <G fillRule="evenodd" clipRule="evenodd" fill="#B9BFCF">
                <Path d="M1.441 3.133c.516.465 1.116.708 1.808.708.69 0 1.288-.241 1.808-.709l.131.112c.585.532 1.012 1.163 1.224 1.931.114.416.109.836.021 1.255s-.352.691-.744.847c-.329.132-.673.189-1.023.223-.752.075-1.506.074-2.258.042-.465-.018-.928-.056-1.377-.188-.252-.073-.488-.177-.676-.368-.234-.239-.305-.543-.339-.864-.086-.818.206-1.521.662-2.174.193-.279.424-.527.681-.748l.082-.067z" />
                <Path d="M3.25 3.255a2.076 2.076 0 01-2.075-2.073 2.074 2.074 0 014.147-.001A2.075 2.075 0 013.25 3.255z" />
            </G>
        </Svg>
    );
}