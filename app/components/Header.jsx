import { TouchableOpacity, View } from "react-native";
import React from "react";
import LogoHorizontal from "../icons/LogoHorizontal";
import ArrowBack from "../icons/ArrowBack";
import { LogoHorizontalWhite } from "../icons/LogoHorizontalWhite";
import MenuHeader from "../icons/MenuHeader";
import MenuHeaderWhite from "../icons/MenuHeaderWhite";
import useStatusBar from "../hooks/useStatusBar";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { responsiveWidth } from "../utils/layout";
import { useSelector } from "react-redux";

const Header = ({
    whiteHeader,
    visibleBackArrow,
    visibleMenuButton = true,
    headerStyle,
    // hr = false
}) => {
    const hr = useSelector(state => state.auth?.user.is_hr)

    useStatusBar(
        !whiteHeader
            ?
            `'dark-content', ${colors.whiteTwo}`
            :
            `'light-content','transparent'`
    )

    const navigation = useNavigation()

    return (
        <View
            style={[{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
                height: responsiveWidth(40),
                backgroundColor: !whiteHeader
                    ? colors.whiteTwo
                    : 'transparent'
            },
                headerStyle
            ]}
        >
            {
                visibleMenuButton
                &&
                <TouchableOpacity
                    onPress={() => navigation.navigate( hr ? 'HeaderMenuHR' : "HeaderMenu")}
                    style={{
                        position: 'absolute',
                        left: 0
                    }}
                >
                    {
                        !whiteHeader
                            ?
                            <MenuHeader />
                            :
                            <MenuHeaderWhite />
                    }

                </TouchableOpacity>

            }
            {
                !whiteHeader
                    ?
                    <LogoHorizontal />
                    :
                    <LogoHorizontalWhite />
            }

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    position: 'absolute',
                    right: 0
                }}
            >
                <View>
                    {
                        visibleBackArrow && <ArrowBack />
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Header
