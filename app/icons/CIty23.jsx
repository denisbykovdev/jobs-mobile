import * as React from "react";
import Svg, { LinearGradient, Stop, Path } from "react-native-svg";
import { responsiveWidth } from "../utils/layout";

export default function City23(props) {
    return (
        <Svg
            width={responsiveWidth(10)}
            height={responsiveWidth(10)}
            viewBox="0 0 20.385 20.083"
            {...props}
        >
            <LinearGradient
                id="prefix__a"
                gradientUnits="userSpaceOnUse"
                x1={95.115}
                y1={-188.583}
                x2={95.115}
                y2={-208.44}
                gradientTransform="matrix(1 0 0 -1 -85 -188.417)"
            >
                <Stop offset={0} stopColor="#3ccfbc" />
                <Stop offset={1} stopColor="#219ba5" />
            </LinearGradient>
            <Path
                fill="url(#prefix__a)"
                d="M10.925 18.722h.959V6.006l7.076 1.939v10.808h1.271v1.271H0v-1.265h1.267V2.085L10.925.167v18.555zm-3.618.021v-3.197H4.883c-.005.031-.013.054-.013.076-.001 1 .001 2-.003 3.002 0 .117.052.135.15.135.717-.004 1.433-.002 2.148-.002.047-.003.093-.008.142-.014zm-4.43-15.03v1.645h1.262V3.713H2.877zm6.417.001H8.038V5.36h1.256V3.714zM4.137 8.32V6.677H2.879V8.32h1.258zm-1.263 2.94h1.264V9.618H2.874v1.642zm5.163-1.643v1.646h1.252V9.617H8.037zm6.718 1.646V9.618h-1.26v1.645h1.26zm-1.256 4.28v1.646h1.253v-1.646h-1.253zM5.459 5.355h1.257V3.714H5.459v1.641zm.003 1.311v1.652h1.266c0-.526.002-1.045-.005-1.563 0-.03-.063-.085-.098-.086-.383-.005-.765-.003-1.163-.003zm3.826 1.653V6.677H8.035v1.642h1.253zM5.464 9.616v1.644h1.253V9.616H5.464zm11.866.005h-1.259v1.642h1.259V9.621zm-1.259 5.921v1.649h1.254v-1.649h-1.254zM2.878 12.583v1.637h1.257v-1.637H2.878zm3.84.001H5.462v1.637h1.256v-1.637zm2.572 1.641v-1.641H8.037v1.641H9.29zm4.207-1.642v1.633h1.257v-1.633h-1.257zm3.832.005h-1.26v1.629h1.26v-1.629z"
            />
        </Svg>
    );
}