import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Echo from 'laravel-echo';
import socketio from 'socket.io-client/dist/socket.io';
import { icons } from "../configs/imagesAndIconsUrl";
import React, { useState, useEffect } from "react";



const Footer = (props) => {
    const [listener, setListener] = useState(false);
    useEffect(() => {
        listenSocket().then()
    }, [])


    const listenSocket = async () => {
        const echo = new Echo({
            host: 'https://api.sherutbekalut.co.il:6001',
            broadcaster: 'socket.io',
            client: socketio,
        });

        echo
            .channel('laravel_database_notification')
            .listen('SendNotificationAdmin', ev => console.log(ev));
        setListener(!listener);
        //        console.log('tap');
    }

    const [chosenFooter, setChosenFooter] = useState(props.chosenFooter)


    return (
        <View style={styles.footerBlock}>
            {/*<TouchableOpacity onPress={() => listenSocket()}>
        <Text>test</Text>
    </TouchableOpacity>*/}

            <TouchableOpacity onPress={() => setChosenFooter(1), () => props.navigation.navigate('BottomStack',{Screen: "MainScreenOfUsers"})}>
                {chosenFooter === 1 ?
                    <Image source={icons.homeBlue} style={styles.home} />
                    :
                    <Image source={icons.home} style={styles.home} />
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setChosenFooter(2), () => props.navigation.navigate('BottomStack',{Screen: "Favorites"})}>
                {chosenFooter === 2 ?
                    <Image source={icons.hartActive} style={styles.hartIcon} />
                    :
                    <Image source={icons.hart} style={styles.hartIcon} />
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setChosenFooter(3),
                    () => props.navigation.navigate('BottomStack', {Screen: "SearchWithFilter"})}>
                {chosenFooter === 3 ?
                    <Image source={icons.searchBlue} style={styles.search} />
                    :
                    <Image source={icons.search} style={styles.search} />
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChosenFooter(4), () => props.navigation.navigate('BottomStack', {Screen: "Notifications"})}>
                {chosenFooter === 4 ?
                    <Image source={icons.notificationsActive} style={styles.search} />
                    :
                    <Image source={icons.notifications} style={styles.search} />
                }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChosenFooter(5), () => props.navigation.navigate('BottomStack', {Screen: "MyProfileMyDetails"})}>
                {chosenFooter === 5 ?
                    <Image source={icons.profileBlue} style={styles.profile} />
                    :
                    <Image source={icons.profile} style={styles.profile} />
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footerBlock: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 34,
        paddingBottom: 30,
        paddingTop: 28

    },
    home: {
        width: 31,
        height: 25
    },

    search: {
        width: 25,
        height: 25
    },

    profile: {
        width: 21,
        height: 26
    },


    hartIcon: {
        width: 26,
        height: 26
    },


});


export default Footer
