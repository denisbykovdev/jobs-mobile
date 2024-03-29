import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function Tab3(props) {
    return (
        <Svg
            width={responsiveWidth(7.5)}
            height={responsiveWidth(8)}
            viewBox="-69.148 -55.985 18.501 19.125"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#FFF"
                d="M-59.753-39.073a4.856 4.856 0 01-.424-.944h-5.472c-.925 0-.925-1.435 0-1.435h5.233c-.021-.708.1-1.413.354-2.065h-5.588c-.925 0-.925-1.435 0-1.435h6.484c.652-.696 1.565-1.168 2.728-1.286a4.953 4.953 0 011.288-.178v-9.568h-10.126l-3.874 3.5v15.625h11.469c-.989-.465-1.672-1.273-2.072-2.214zm-5.77-12.879h7.25c.925 0 .925 1.435 0 1.435h-7.25c-.925 0-.925-1.435 0-1.435zm0 3.5h7.25c.925 0 .925 1.435 0 1.435h-7.25c-.925 0-.925-1.435 0-1.435zm10.688 2.717a4.188 4.188 0 100 8.376 4.188 4.188 0 000-8.376zm1.062 4.953h-1.25c-.486 0-.702-.402-.668-.777-.014-.057-.035-.109-.035-.176v-1.125c0-.906 1.406-.906 1.406 0v.672h.547c.906.001.906 1.406 0 1.406z"
            />
        </Svg>
    );
}