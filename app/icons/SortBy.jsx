import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function SortBy(props) {
    return (
        <Svg
            width={responsiveWidth(7.5)}
            height={responsiveWidth(5)}
            viewBox="2 1.417 14.125 9.958" {...props}
        >
            <G fillRule="evenodd" clipRule="evenodd" fill="#A3AABB">
                <Path d="M4.871 3.914c-.542.542-1.055 1.054-1.566 1.567-.191.19-.413.278-.683.214a.692.692 0 01-.356-1.143c.096-.107.202-.206.304-.307.813-.815 1.627-1.628 2.442-2.442.356-.357.751-.357 1.106-.001.9.899 1.8 1.797 2.697 2.698.319.318.308.787-.02 1.055-.288.237-.677.213-.957-.064-.483-.481-.964-.965-1.447-1.447-.034-.034-.071-.066-.129-.12v.174c0 1.931-.001 3.862.002 5.793 0 .298-.129.512-.394.631a.699.699 0 01-.771-.102c-.166-.134-.231-.314-.231-.528.003-1.931.002-3.862.002-5.793l.001-.185zM11.833 8.869v-.15l.001-5.808c0-.358.252-.633.61-.674.357-.04.687.176.765.507.017.071.017.147.017.221l.001 5.752v.186a3.15 3.15 0 00.121-.116c.49-.489.978-.98 1.468-1.467a.697.697 0 11.991.98c-.929.93-1.855 1.86-2.789 2.786-.282.281-.701.275-.986-.009A605.656 605.656 0 019.256 8.3a.69.69 0 01-.003-.989.691.691 0 01.988.007c.489.482.973.971 1.459 1.457.034.036.062.081.091.122l.042-.028z" />
            </G>
        </Svg>
    );
}