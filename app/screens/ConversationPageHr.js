import {ScrollView, Text, StyleSheet, View, TextInput, AsyncStorage, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import HrFooter from "../components/HrFooter";
import HrMessage from "../components/HrMessage";
import UserMessage from "../components/UserMessage";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";

const ConversationPage = ({navigation}) => {
    const chatId = navigation.state.params.data.id;
    const [messages, setMessages] = useState([]);
    const [textMessage, setTextMessage] = useState('');

    useEffect(() => {
        getChat().then();
    }, []);

    const getChat = async() => {
        const url = `${JobUrl}/api/chat/conversation/${chatId}`
        const token = await AsyncStorage.getItem('token') ;
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            }).then(response => {
//                console.log(response.data.data);
                setMessages(response.data.data);

        }).catch(error => console.log("openChatError", error));
    }

    const pushMessage = async () => {
        const url = `${JobUrl}/api/chat/conversation/${chatId}/store`
        const token = await AsyncStorage.getItem('token') ;
        console.log(token)
        axios.post(url,
            {
                message : textMessage,
            },
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            }).then(response => {
                console.log(response.data.data);
                setTextMessage('');
        }).catch(error => console.log("messageError", error));
    }

    const [pickerOpen, setPickerOpen] = useState(false)
    return (
        <View style={{flex: 1}}>

            <Header navigation={navigation}/>
            <ScrollView>
                <View style={[styles.mainContainer]}>
                {messages.map((item, index) => {
                        return (
                        <>
                            <HrMessage/>
                            <UserMessage/>
                            <HrMessage/>
                        </>
                        )
                    }
                )}
                </View>
            </ScrollView>
            <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : null}
                                  >
                <View style={styles.sendBlock}>
                    <TouchableOpacity style={styles.btn}
                    onPress={()=>pushMessage()}
                    >
                        <Text style={styles.btnText}>
                            לשלוח
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.text_input}
                        onChangeText={text => setTextMessage(text)}
                        placeholder={" חיפוש... "}
                        placeholderTextColor={"#e1e1e1"}
                        placeholderStyle={styles.placeHolder_styles}
                    />
                </View>
            </KeyboardAvoidingView>
            <HrFooter chosenFooter={3} navigation={navigation}/>
        </View>
    )
}

const shadowStyleMain = {
    shadowOpacity: 0.5
}

const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1},
    // shadowRadius: 2,
    // elevation: 1,
    // borderTopWidth: 0,
    borderWidth: 0.5,
    borderColor: "#EEEEEE"
}

const styles = StyleSheet.create({
    mainContainer: {
        // paddingHorizontal: 32,
        justifyContent: "center",
        marginTop: 25,
    },

    hrMessageBlock: {
        paddingRight: 33,
        paddingLeft: 43,
        backgroundColor: "#f8f8f9",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },

    userMessageBlock: {
        paddingRight: 33,
        paddingLeft: 43,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },

    coordinatorName: {
        color: "#172c60",
        fontSize: 24,
        fontWeight: "800",
        textAlign: "right"
    },

    sendDate: {
        color: "#39496d",
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right",
    },

    conversationUserImage: {
        width: 50,
        height: 50
    },

    nameDateBLock: {
        paddingTop: 19,
        flexDirection: "row"
    },

    conversationText: {
        textAlign: "right",
        fontSize: 16,
        color: "#172c60",
        fontWeight: "300",
        paddingVertical: 23
    },

    sendBlock: {
        flexDirection: "row",
        paddingHorizontal: 33,
        justifyContent: "space-between",
        paddingTop: 29,
        borderTopColor: "#1f1e1d33",
        borderTopWidth: 1
    },

    text_input: {
        borderRadius: 10,
        textAlign: "right",
        paddingRight: 20,
        paddingVertical: 13,
        borderColor: "#f8f8f9",
        borderWidth: 4,
        width: "70%",

    },

    placeHolder_styles: {
        fontWeight: '500',
        color: 'white',
    },

    btn: {
        width: "20%",
        backgroundColor: "#30b8b2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },

    btnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "800"
    }

});


export default ConversationPage
