import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React from "react";
import Header from "../components/Header";
import HrNotificationsRow from "../components/HrNotificationRow";
import {notifications} from "../configs/FakeData";
import HrFooter from "../components/HrFooter";

const NotificationsHr = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <Header navigation={navigation}/>
                <View style={styles.imageContainer}>
                    <View style={[styles.borderLeftRight, {marginRight: 30}]}/>
                    <Image
                        source={icons.iconNotification}
                        style={styles.keyDoorStyle}/>
                    <View style={[styles.borderLeftRight, {marginLeft: 30}]}/>
                </View>
                <View>
                    {notifications.map((item, index) => {
                        return (
                            <HrNotificationsRow
                                key={index}
                                item={item}
                            />
                        )
                    })
                    }
                </View>


                <TouchableOpacity style={{backgroundColor:"red",paddingVertical: 20,paddingHorizontal:20}} onPress={()=>navigation.navigate("Organzation")}>
                    <Text>navigate</Text>
                </TouchableOpacity>

            </ScrollView>
            <HrFooter chosenFooter={5} navigation={navigation}/>

        </View>
    )
}

const styles = StyleSheet.create({
    borderBottom: {
        borderBottomColor: "#2b3e6e",
        borderBottomWidth: 1,
        paddingBottom: 29
    },

    keyDoorStyle: {
        width: 39,
        height: 45,
    },

    borderLeftRight: {
        borderLeftColor: "#c3c8d3",
        height: 40,
        borderLeftWidth: 2,
        transform: [{rotate: '90deg'}],
    },

    imageContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25
    },

    notificationRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    bellRow: {
        width: 45,
        height: 45,
        backgroundColor: "#2b3e6e",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },

    bellIcon: {
        width: 23,
        height: 26
    },

    notificationTitle: {
        color: "#39496d",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "right"
    },

    notificationTime: {
        color: "#39496d",
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right"
    },

    notificationText: {
        paddingTop: 21,
        textAlign: "right",
        color: "#172c60",
        fontSize: 17,
        fontWeight: "300"
    }

});


export default NotificationsHr
