import {
    View
} from "react-native";
import React from "react";
import Header from "../components/Header";
import CommonFrame from "../commons/CommonFrame";
import { responsiveWidth } from "../utils/layout";
import IconLineWrapper from "../commons/IconLineWrapper";
import colors from "../utils/colors";
import IconNotifications from "../icons/IconNotifications";
import { useSelector } from "react-redux";
import NotificationCard from "../components/NotificationCard";

const Notifications = () => {
    const notificationsSelector = useSelector(state => state.notifications?.notifications)

    return (
        <CommonFrame
            commonFrameStyle={{
                paddingHorizontal: 0
            }}
        >
            <View
                style={{
                    paddingHorizontal: responsiveWidth(17.5)
                }}
            >
                <Header />
                <IconLineWrapper lineColor={colors.cloudyBlue}>
                    <IconNotifications />
                </IconLineWrapper>
            </View>
            
            {
                notificationsSelector
                && notificationsSelector.length > 0
                && notificationsSelector.map((notification, i) => (
                    <NotificationCard
                        key={i}
                        notification={notification}
                    />
                )) 
            }
        </CommonFrame>
    )
}

export default Notifications