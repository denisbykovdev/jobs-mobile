import {Image, ScrollView, StyleSheet, Text, TextInput, AsyncStorage, TouchableOpacity, View} from "react-native";

import React from "react";
import {icons, images} from "../../configs/imagesAndIconsUrl";
import {getUserToken, JobUrl, Token} from "../../configs/ApiCallHelper";
import axios from "axios";

const ButtonsSMS = (props) => {
    console.log(props);


    const UpdateOpportunityContenderStatus = async() => {
        const url = `${JobUrl}/api/opportunity/${props.jobId}/contenders/${props.contenderId}/update/1`
        // const token = await getUserToken()
        const token = await AsyncStorage.getItem('token') ;
        axios.post(url, {},
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            }).then(response => {
             console.log("UpdateStatus", response);
        }).catch(error => console.log("UpdateStatusError", error));
    }

    const CreateMessage = async() => {
        const url = `${JobUrl}/api/chat/conversation/${props.contenderId}/store`
        const token = await AsyncStorage.getItem('token') ;
        console.log(token);
        axios.post(url, {},
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            }).then(response => {
             console.log("Chat", response);
        }).catch(error => console.log("chatError", error));
    }

    const OpenChat = async() => {
        const url = `${JobUrl}/api/chat/conversation/open/${props.contenderId}`
        const token = await AsyncStorage.getItem('token') ;
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            }).then(response => {
//                console.log(response.data)
             props.navigation.navigate("ConversationPageHr", {data:response.data});
        }).catch(error => console.log("openChatError", error));
    }


    return (
            <View style={styles.buttons}>

                <TouchableOpacity>
                    <View style={styles.circleUp}>
                        <View style={styles.circle}>
                            <Image source={icons.phone}
                                   style={{width: 20, height: 20}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>UpdateOpportunityContenderStatus()}>
                    <View style={styles.circleUp}>
                        <View style={styles.circle}>
                            <Image source={icons.whatsApp}
                                   style={{width: 20, height: 20}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.circleUp}>
                        <View style={styles.circle}>
                            <Image source={icons.SMS}
                                   style={{width: 28, height: 10}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>OpenChat()}>
                    <View style={styles.circleUp}>
                        <View style={styles.circle}>
                            <Image source={icons.chat}
                                   style={{width: 21, height: 20}}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


    )
}

const styles = StyleSheet.create({
    buttonBoxMain: {
        top: -30,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 0.7,
        borderTopWidth: 0.7,
        borderColor: "rgba(31, 30, 29, 0.2)",
        paddingTop: 20,
        paddingBottom: 50,
        marginBottom: 20

    },

    buttons: {
        flexDirection: "row-reverse",
        justifyContent:"space-between",
        paddingHorizontal: 10,
        width:"100%",
        marginTop: 36,
        flexWrap:"wrap"
    },

    circleUp: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "#aed9d8",
        //marginLeft: 35
    },

    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: 42,
        height: 42,
        opacity: 1,
        borderRadius: 42 / 2,
        backgroundColor: "#30b8b2"
    },


})

export default ButtonsSMS