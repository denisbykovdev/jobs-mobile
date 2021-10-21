import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function IconGray5(props) {
    return (
        <Svg
            width={responsiveWidth(8.5)}
            height={responsiveWidth(9.5)}
            viewBox="-0.25 0.814 17.688 18" {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#8B95B1"
                d="M0 9.796c0-4.809 3.898-8.705 8.707-8.704S17.412 4.99 17.411 9.8c-.001 4.795-3.901 8.707-8.68 8.703C3.893 18.5-.001 14.617 0 9.796zm10.059 3.5v-1.334l-.482-.027V7.887H7.322v1.317l.455.021v2.761c-.167.008-.312.016-.457.021v1.311l2.549-.001c.061 0 .122-.013.19-.021zm-1.5-8.216c-.559.002-.956.422-.954 1.003.005.55.437.985.985.992.551.008 1.01-.45 1.01-1.002 0-.566-.453-.995-1.041-.993z"
            />
        </Svg>
    );
}