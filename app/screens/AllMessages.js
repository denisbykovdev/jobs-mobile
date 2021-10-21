import {Image, ScrollView,Text,TouchableOpacity, AsyncStorage, StyleSheet, View, TextInput} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import MessagesBlock from "../components/MessagesBlock";
import {conversation} from "../configs/FakeData"
import HrFooter from "../components/HrFooter";
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import axios from "axios";

const AllMessages = ({navigation}) => {

    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
    //        console.log(id)
            const url = `${JobUrl}/api/chat/conversations`
            const token = await AsyncStorage.getItem('token');
            axios.get(url,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`
                    },
                }).then(response => {
                 setMessages(response.data && response.data.data);
                 console.log(response.data)
            }).catch(error => console.log("subcategories", error));
        }
    useEffect(() => {
        getMessages().then()
    }, [])

    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
        <ScrollView style={{flex: 1}}>
            <View style={styles.mainContainer}>
                <View style={styles.messagesMainContainer}>
                    <View style={styles.imageContainer}>
                        <View style={[styles.borderLeftRight, {marginRight: 30}]}/>
                        <Image
                            source={icons.messages}
                            style={styles.keyDoorStyle}/>
                        <View style={[styles.borderLeftRight, {marginLeft: 30}]}/>
                    </View>
                </View>

                <View style={styles.inputBlock}>
                    <Image source={icons.searchBlue} style={styles.searchIcon}/>
                    <TextInput
                        style={styles.text_input}
                        multiline={false}
                        keyboardType={"numeric"}
                        placeholder={" חיפוש... "}
                        secureTextEntry={false}
                        placeholderTextColor={"#e1e1e1"}
                        placeholderStyle={styles.placeHolder_styles}
                    />
                </View>
            </View>
                {messages.map((item, index) => {
                    return (
                        <MessagesBlock
                            key={index}
                            item={item}
                        />
                    )
                })
                }
        </ScrollView>
            <HrFooter chosenFooter = {3} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 32,
        justifyContent: "center"
    },

    messagesMainContainer: {
        marginTop: 54,
        alignItems: "center"
    },

    keyDoorStyle: {
        width: 54,
        height: 52,
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
    },

    inputBlock: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 26,
        borderColor: "#e1e1e1",
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 15,
    },

    text_input: {
        borderRadius: 4,
        textAlign: "right",
        paddingRight: 20,
        paddingVertical: 15
    },

    searchIcon: {
        width: 19,
        height: 19
    },


});


export default AllMessages
