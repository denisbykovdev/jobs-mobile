import { Image, ScrollView, Text, TouchableOpacity, AsyncStorage, StyleSheet, View, TextInput } from "react-native";
import { icons } from "../configs/imagesAndIconsUrl";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MessagesBlock from "../components/MessagesBlock";
import { conversation } from "../configs/FakeData"
import HrFooter from "../components/HrFooter";
import { getUserToken, JobUrl, Token } from "../configs/ApiCallHelper";
import axios from "axios";
import CommonFrame from "../commons/CommonFrame";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { watchGetConversations } from "../actions/chatActions";
import { responsiveWidth } from "../utils/layout";
import IconLineWrapper from "../commons/IconLineWrapper";
import colors from '../utils/colors'
import ChatConvertGrey from "../icons/ChatConvertGrey";
import Read from "../icons/Read";
import NotRead from "../icons/NotRead";
import fonts from "../utils/fonts";
import weights from "../utils/weights";
import NoPersonalPhoto from "../icons/NoPersonalPhoto";
import useSearch from "../hooks/useSearch";
import { useNavigation } from "@react-navigation/native";

export default function AllMessages(){
    const dispatch = useDispatch()

    // const navigation = useNavigation()

    const conversationsSelector = useSelector(state => state.chats?.conversations)

    const tokenSelector = useSelector(state => state.auth?.token)

    const [
        searchArray,
        RenderSearch
    ] = useSearch({arrayOfObjects: conversationsSelector})

    // useEffect(() => {
    //     dispatch(
    //         watchGetConversations(
    //             tokenSelector
    //         )
    //     )
    // }, [])

    console.log(
        `--- searcharray:`, searchArray
    )

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
                    <ChatConvertGrey />
                </IconLineWrapper>

                <RenderSearch 
                    searchInputContainerStyles={{
                        marginTop: responsiveWidth(20),
                        marginBottom: responsiveWidth(8)
                    }}
                />
            </View>

            {
                !searchArray || searchArray.length < 1 &&
                conversationsSelector
                && conversationsSelector !== null
                && conversationsSelector.length > 0
                ? conversationsSelector.map((chat, i) => (
                    <ChatCard
                        key={i}
                        chat={chat}
                    />
                ))
                : searchArray.map((chat, i) => (
                    <ChatCard
                        key={i}
                        chat={chat}
                    />
                ))
            }
        </CommonFrame>
    )
}

export function ChatCard({
    chat
}){
    const navigation = useNavigation()

    return(
        <View style={{
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'flex-end',
            paddingHorizontal: responsiveWidth(17.5),
            height: responsiveWidth(60),
            width: '100%',
            borderBottomColor: colors.border,
            borderBottomWidth: responsiveWidth(1)
        }}>
            <View
                style={{
                    position: 'absolute',
                    left: responsiveWidth(17.5)
                }}
            >
            {
                chat.new_message
                && chat.new_message !== null
                && chat.new_message > 0
                ?
                <TouchableOpacity
                    style={{
                        width: responsiveWidth(22.5),
                        height: responsiveWidth(22.5)
                    }}
                    onPress={
                        () => navigation.navigate(
                            'ConversationPage', 
                            { chat_id: chat.id}
                        )
                    }
                >
                    <NotRead />
                    <View
                        style={{
                            backgroundColor: colors.aquaMarineTwo,
                            width: responsiveWidth(12),
                            height: responsiveWidth(12),
                            borderRadius: responsiveWidth(12 / 2),
                            position: 'absolute',
                            bottom: - responsiveWidth(2.5),
                            right: - responsiveWidth(2.5),
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: fonts.xxsmall,
                                color: colors.whiteTwo,
                                fontWeight: weights.bold
                            }}
                        >
                            {
                                chat.new_message
                            }
                        </Text>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={{
                        width: responsiveWidth(22.5),
                        height: responsiveWidth(22.5)
                    }}
                    onPress={
                        () => navigation.navigate(
                            'ConversationPage', 
                            { chat_id: chat.id}
                        )
                    }
                >
                    <Read />
                </TouchableOpacity>
            }
            </View>
            <View
                style={{
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: fonts.regular,
                        color: colors.darkSlateBlue,
                        fontWeight: weights.bold,
                        marginBottom: responsiveWidth(4)
                    }}
                >
                    {chat.first_name} {chat.last_name}
                </Text>
                <Text
                    style={{
                        fontSize: fonts.xsmall,
                        color: colors.darkSlateBlue50,
                        fontWeight: weights.thin
                    }}
                >
                    {chat.organization_name}
                </Text>
            </View>

            <View
                style={{
                    marginLeft: responsiveWidth(8)
                }}
            >
            {
                chat.avatar
                && chat.avatar.length > 0
                ?
                <Image
                    style={{
                    width: responsiveWidth(25),
                    height: responsiveWidth(25),
                    borderRadius: responsiveWidth(2.5)
                    }}
                    source={{ uri: `${url}${chat.avatar}`}}
                />
                :
                <NoPersonalPhoto />
            }
            </View>
        </View>
    )
}