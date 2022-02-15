import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NotificationsNew from '../icons/NotificationsNew';
import NotificationsRead from '../icons/NotificationsRead';
import { api } from '../utils/api';
import colors from '../utils/colors';
import fonts from '../utils/fonts'
import { responsiveWidth } from '../utils/layout';
import weights from '../utils/weights';
import Autolink from 'react-native-autolink';
import authHeader from '../utils/authHeader';
import { useSelector } from 'react-redux';

export default function NotificationCard({
    notification
}) {
    const [isNotificationOpen, setNotificationOpen] = useState(false)

    const tokenSelector = useSelector(state => state.auth?.token)

    const postReadNotification = async () => {
        await axios.post(
            `${api}/notifications/${notification.id}/update`,
            {
                read: true
            },
            authHeader(
                tokenSelector
            )
        )
    }

    const readNotification = () => {
        setNotificationOpen(!isNotificationOpen)
        if (notification?.read === false) postReadNotification()
    }

    const formattedDate = new Date(notification.created_at)

    return (
        <View style={styles.notificationContainer}>
            <View
                style={styles.notificationButton}
            >
                <TouchableOpacity onPress={() => readNotification()}>
                    {
                        notification?.read
                            ? <NotificationsRead />
                            : <NotificationsNew />
                    }
                </TouchableOpacity>

                <View style={styles.notificationButtonInfo}>
                    <Text style={styles.notificationTitle}>
                        {notification.title}
                    </Text>
                    <Text style={styles.notificationDate}>
                        {
                            formattedDate.toLocaleString(
                                [],
                                {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric'
                                }
                            )
                        }
                    </Text>
                </View>
            </View>
            {
                isNotificationOpen
                &&
                <Text style={styles.notificationText}>
                    {/* {notification.text} */}
                    <Autolink
                        url
                        text={notification.text}
                    />
                </Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    notificationContainer: {
        width: '100%',
        borderBottomColor: colors.border,
        borderBottomWidth: responsiveWidth(1),
        paddingHorizontal: responsiveWidth(17.5)
    },
    notificationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: responsiveWidth(52),
    },
    notificationButtonInfo: {
        alignItems: 'flex-end'
    },
    notificationTitle: {
        fontSize: fonts.small,
        color: colors.darkGreyBlue,
        fontWeight: weights.bold,
        textAlign: 'right'
    },
    notificationDate: {
        fontSize: fonts.xsmall,
        color: colors.darkGreyBlueLight,
        fontWeight: weights.bold,
        textAlign: 'right'
    },
    notificationText: {
        marginVertical: responsiveWidth(8),
        fontSize: fonts.small,
        color: colors.darkSlateBlue,
        fontWeight: weights.bold,
        textAlign: 'right'
    }
})