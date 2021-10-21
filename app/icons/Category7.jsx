import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Category7(props) {
    return (
        <Svg
            width={responsiveWidth(15.5)}
            height={responsiveWidth(21.5)}
            viewBox="0 0 32.155 46.188"
            {...props}
        >
            <G fillRule="evenodd" clipRule="evenodd" fill="#FEFFFF">
                <Path d="M24.084 0v2.838h-1.815v.449c0 3.874.005 7.747-.008 11.62-.001.313.114.437.379.563 5.287 2.518 8.474 6.661 9.342 12.452 1.284 8.581-4.7 16.637-13.301 18.05-8.704 1.43-16.893-4.391-18.44-13.11-1.27-7.159 2.584-14.417 9.24-17.376.302-.134.416-.278.414-.617-.014-3.848-.009-7.695-.009-11.543v-.457H8.073V0h16.011zM12.213 4.017v12.092c0 .789 0 .789-.732 1.055-6.304 2.297-10.017 8.573-8.964 15.151 1.206 7.537 8.35 12.641 15.883 11.349 8.118-1.394 13.223-9.562 10.841-17.447-1.357-4.501-4.346-7.52-8.763-9.113-.417-.151-.55-.332-.547-.778.021-3.95.012-7.901.012-11.852v-.457h-7.73z" />
                <Path d="M31.137 28.542c.364 5.126-3.065 11.413-7.416 14.167-4.364 2.762-12.127 1.834-16.5-.917-4.374-2.751-6.865-8.023-6.5-13.167 8.283 0 22.101-.083 30.416-.083zm-10.639 4.282a1.61 1.61 0 001.619-1.608 1.629 1.629 0 00-1.6-1.636 1.643 1.643 0 00-1.646 1.636 1.627 1.627 0 001.627 1.608zm-7.72.138a1.372 1.372 0 00-1.34-1.396 1.376 1.376 0 00-1.4 1.376c0 .753.612 1.374 1.362 1.38.75.007 1.37-.606 1.378-1.36zm5.67 6.083c.612 0 1.095-.479 1.098-1.089a1.087 1.087 0 00-1.084-1.102 1.1 1.1 0 00-1.124 1.108c.01.607.498 1.083 1.11 1.083zM14.656 22.37a2.113 2.113 0 012.113 2.132 2.13 2.13 0 01-2.109 2.106 2.12 2.12 0 01-2.127-2.121c0-1.181.942-2.121 2.123-2.117zM15.408 17.644a1.09 1.09 0 01-1.111-1.116 1.11 1.11 0 011.086-1.112 1.14 1.14 0 011.143 1.106 1.117 1.117 0 01-1.118 1.122z" />
            </G>
        </Svg>
    );
}