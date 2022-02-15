import { useRoute } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { watchGetMessages } from '../actions/chatActions';
import CommonFrame from '../commons/CommonFrame';
import FormButton from '../commons/FormButton';
import FormContainer from '../commons/FormContainer';
import Header from '../components/Header';
import colors from '../utils/colors';
import layout, { responsiveWidth } from '../utils/layout';
import Send from "../icons/Send";
import FormField from '../commons/FormField';
import { watchCreateMessage } from '../actions/chatActions'
import IconLineWrapper from '../commons/IconLineWrapper';
import Read from '../icons/Read';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants'
import SentmessageTickDouble from '../icons/SentmessageTickDouble';
import SentmessageTickDoubleGreen from '../icons/SentmessageTickDoubleGreen';
import fonts from '../utils/fonts';

export default function ConversationPage() {
    const flatListRef = useRef()

    const route = useRoute()

    const dispatch = useDispatch()

    const messagesSelector = useSelector(state => state.chats?.messages)

    const tokenSelector = useSelector(state => state.auth?.token)

    useEffect(() => {
        dispatch(
            watchGetMessages(
                tokenSelector,
                route?.params?.chat_id
            )
        )
    }, [])

    const sendMessage = (values, { resetForm }) => {
        dispatch(
            watchCreateMessage(
                tokenSelector,
                route?.params?.chat_id,
                values.message,
                new Date(Date.now()),
                true
            )
        )

        resetForm()
    }

    return (
        <>
            <View
                style={{
                    paddingVertical: responsiveWidth(20),
                    backgroundColor: colors.white,
                    paddingTop: Constants.statusBarHeight,
                }}
            >
                <View
                    style={{
                        paddingHorizontal: responsiveWidth(17.5)
                    }}
                >
                    <Header />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginVertical: responsiveWidth(8)
                    }}
                >
                    <View
                        style={{
                            height: responsiveWidth(1),
                            width: responsiveWidth(84),
                            backgroundColor: colors.duskBlueLight
                        }}
                    ></View>
                    <Read />
                    <View
                        style={{
                            height: responsiveWidth(1),
                            width: responsiveWidth(84),
                            backgroundColor: colors.duskBlueLight
                        }}
                    ></View>
                </View>

                <FlatList
                    ref={flatListRef}
                    data={messagesSelector
                        // && messagesSelector !== null
                        // && messagesSelector
                    }
                    keyExtractor={item => item.id.toString()}
                    inverted={true}
                    style={{
                        backgroundColor: colors.veyLightPink,
                        height: '100%',
                        width: '100%',
                        paddingHorizontal: responsiveWidth(17.5)
                    }}
                    renderItem={({ item, index }) => {
                        if (item.is_me === true) {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        width: '100%',
                                        // height: '100%',
                                        flexDirection: 'row',
                                        paddingVertical: responsiveWidth(3)
                                    }}
                                >
                                    <View
                                        style={{
                                            width: responsiveWidth(10),
                                            height: 0,
                                            borderTopWidth: 10,
                                            borderTopColor: colors.tealishFour,
                                            borderLeftWidth: 10,
                                            borderLeftColor: 'transparent',
                                            marginRight: - responsiveWidth(5)
                                        }}
                                    ></View>
                                    <LinearGradient
                                        colors={[
                                            colors.tealishFour,
                                            colors.tealishThree
                                        ]}
                                        style={{
                                            width: '100%',
                                            // height: '100%',
                                            borderRadius: responsiveWidth(2.5),
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: '35%',
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-start',
                                                paddingBottom: responsiveWidth(4),
                                                paddingLeft: responsiveWidth(4)
                                            }}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: "center"
                                                }}
                                            >
                                                <SentmessageTickDouble />
                                                <Text
                                                    style={{
                                                        fontSize: fonts.xsmall,
                                                        color: colors.whiteTwo50
                                                    }}
                                                >
                                                    {
                                                        new Date(item.date).toLocaleString(
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
                                        <View
                                            style={{
                                                padding: responsiveWidth(8),
                                                flexDirection: 'row'
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: fonts.xsmall,
                                                    color: colors.whiteTwo
                                                }}
                                            >
                                                {item.message}
                                            </Text>
                                        </View>
                                    </LinearGradient>
                                </View>
                            )
                        } else if (item.is_me === false) {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        width: '100%',
                                        // height: '100%',
                                        flexDirection: 'row',
                                        paddingVertical: responsiveWidth(3)
                                    }}
                                >
                                    <View
                                        style={{
                                            width: '100%',
                                            // height: '100%',
                                            backgroundColor: colors.whiteTwo,
                                            borderRadius: responsiveWidth(2.5),
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <View
                                            style={{
                                                width: '35%',
                                                flexDirection: 'row',
                                                alignItems: 'flex-end',
                                                justifyContent: 'flex-start',
                                                paddingBottom: responsiveWidth(4),
                                                paddingLeft: responsiveWidth(4)
                                            }}
                                        >
                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <SentmessageTickDoubleGreen />
                                                <Text
                                                    style={{
                                                        fontSize: fonts.xsmall,
                                                        color: colors.darkGreyColor50
                                                    }}
                                                >
                                                    {
                                                        new Date(item.date).toLocaleString(
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
                                        <View
                                            style={{
                                                padding: responsiveWidth(8),
                                                flexDirection: 'row',
                                                width: '65%'
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: fonts.xsmall,
                                                    color: colors.darkSlateBlue
                                                }}
                                            >
                                                {item.message}
                                            </Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            width: responsiveWidth(10),
                                            height: 0,
                                            borderTopWidth: 10,
                                            borderTopColor: colors.whiteTwo,
                                            borderRightWidth: 10,
                                            borderRightColor: 'transparent',
                                            marginLeft: - responsiveWidth(5)
                                        }}
                                    ></View>
                                </View>
                            )
                        }
                    }}
                    contentContainerStyle = {{
                        paddingTop: responsiveWidth(100)
                    }}
                />
            </View>

            <View
                style={[
                    {
                        height: responsiveWidth(40),
                        alignItems: "center",
                        justifyContent: "center",
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        left: 0,
                        paddingHorizontal: responsiveWidth(17.5),
                        backgroundColor: colors.white
                    }
                ]}
            >
                <FormContainer
                    initialValues={{ message: '' }}
                    onSubmit={(values, { resetForm }) => sendMessage(values, { resetForm })}
                >
                    <FormField
                        name="message"
                        fieldStyle={{
                            borderColor: colors.darkGreyBlueLight,
                            flexDirection: 'row-reverse',
                            padding: 0,
                            paddingHorizontal: 15,
                            paddingStart: responsiveWidth(20)
                        }}
                        placeholder="הודעה"
                    >
                        <FormButton
                            buttonColor="transparent"
                            buttonWidth={responsiveWidth(5)}
                            buttonHeight={responsiveWidth(5)}
                        >
                            <Send />
                        </FormButton>
                    </FormField>
                </FormContainer>
            </View>
        </>
    )
}