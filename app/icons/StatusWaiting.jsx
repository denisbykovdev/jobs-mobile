import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";
import colors from '../utils/colors'

export default function StatusWaiting({
    iconColor = colors.darkGreyBlueTwo71
}) {
    return (
        <Svg
            width={responsiveWidth(8.5)}
            height={responsiveWidth(8.5)}
            viewBox="16.63 -35.657 17.323 17.22"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                fill={iconColor}
                d="M16.742-29.617c0-1.102-.002-2.204 0-3.307.002-1.302.865-2.356 2.139-2.607a2.75 2.75 0 01.537-.045c2.189-.002 4.381-.002 6.57-.002 1.527.001 2.672 1.137 2.682 2.665.004.762.002 1.522-.002 2.285 0 .106.032.143.137.164 2.535.509 4.211 1.997 4.884 4.492.878 3.255-1.2 6.61-4.495 7.377-3.373.785-6.738-1.441-7.326-4.854-.029-.166-.082-.207-.243-.206-.842.004-1.685.022-2.525-.02-1.15-.057-2.183-1.059-2.325-2.201a3.849 3.849 0 01-.029-.479c-.006-1.088-.004-2.176-.004-3.262zm10.25-.901v-.136-2.24c-.001-.618-.387-1.004-1.004-1.004h-6.539c-.654 0-1.027.371-1.027 1.023v6.538c0 .626.385 1.007 1.016 1.008h2.365c.602-2.875 2.324-4.593 5.189-5.189zm1.498 5.348v-.196c0-.742-.002-1.483 0-2.226a.72.72 0 00-.18-.511.66.66 0 00-.727-.178.661.661 0 00-.434.641v3.037c0 .509.26.771.766.772l2.376-.001c.064 0 .13-.003.194-.012a.664.664 0 00.125-1.282.975.975 0 00-.295-.043c-.6-.003-1.2-.001-1.825-.001z"
            />
        </Svg>
    );
}