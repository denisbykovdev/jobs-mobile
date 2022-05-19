import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, Text, View, Image, ScrollView } from 'react-native';
import { images } from "../configs/imagesAndIconsUrl";
import { LinearGradient } from "expo-linear-gradient";
import { JobUrl } from "../configs/ApiCallHelper";
import { useDispatch, useSelector } from 'react-redux';
import { verificationSuccess, watchSimpleTypes } from '../actions/authActions';
import { responsiveWidth, responsiveHeight } from '../utils/layout';
import fonts from '../utils/fonts';
import useStatusBar from '../hooks/useStatusBar';
import colors from '../utils/colors';
import { LogoHorizontalWhite } from '../icons/LogoHorizontalWhite';
import IconHeart from '../icons/IconHeart';
import weights from '../utils/weights';
import IconLineWrapper from '../commons/IconLineWrapper';
import useSecure from '../hooks/useSecure';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const ChooseTheTypeUsers = () => {
    // (async() => {
    //     await SecureStore.deleteItemAsync('user')
    //     await SecureStore.deleteItemAsync('token')
    // })()

    useStatusBar('light-content', colors.white)

    const { secure: secureToken } = useSecure(`token`)

    const { secure: secureUser } = useSecure(`user`)

    const navigation = useNavigation()

    const simpleTypesSelector = useSelector(state => state.auth.simpleTypes)

    const tokenSelector = useSelector(state => state.auth?.token);

    const userSelector = useSelector(state => state.auth?.user)

    const [chosenUser, setChosenUser] = useState(0)

    const users = simpleTypesSelector;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(watchSimpleTypes())
    }, [])

    useEffect(()=>{
        simpleTypesSelector && chosenUser === 0 &&  setChosenUser(simpleTypesSelector[1].id)
    }, [simpleTypesSelector])

    useEffect(() => {
        if(secureToken
            && secureUser) {
                console.log(
                    `--- ChooseTheTypeUsers/effect/secure:`,
                    secureToken,
                    secureUser
                )

                // dispatch(
                //     verificationSuccess(
                //         secureToken,
                //         secureUser
                //     )
                // )

                // setChosenUser(secureUser.role_id.id)
        }
    }, [secureToken, secureUser])

    const userHandler = () => {
        console.log(
            `--- ChooseTheTypeUsers/userHandler/props:`,
            userSelector?.is_midrashot,
            userSelector?.is_before_school
        )
        // secureToken && !secureUser.is_hr 
        tokenSelector
            && !userSelector?.is_hr
            ? navigation.navigate(
                `User`,
                {
                    isBlog: !userSelector?.is_midrashot 
                        && !userSelector?.is_before_school
                }
            )
            : navigation.navigate(`SignUpAndSignIn`, { chosenUser })
    }

    const hrHandler = () => {
        // secureToken && secureUser.is_hr 
        tokenSelector
            && userSelector?.is_hr
            ? navigation.navigate(`Hr`)
            : navigation.navigate("SignUpHR")
    }

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <ImageBackground
                source={images.userTypeBg}
                style={styles.image}
            >
                <View
                    style={[
                        styles.imageContainer,
                        { marginTop: responsiveWidth(20) }
                    ]}
                >
                    <LogoHorizontalWhite />
                </View>

                <View>
                    <IconLineWrapper
                        iconLineStyle={{
                            // TODO: Changing options for responsive page.
                            // marginTop: responsiveWidth(47.5) 
                            marginTop: responsiveHeight(40.5)
                        }}
                    >
                        <IconHeart />
                    </IconLineWrapper>

                    <View style={styles.textBlock}>
                        <Text style={styles.bigTitle}>מה הסטטוס שלך?</Text>
                    </View>
                </View>
                {/* //?מה הסטטוס שלך */}
            </ImageBackground>
            {/* .slice(0).reverse() */}
            <View style={styles.usersChosenContainer}>
                {
                    users !== null
                    && users.map((item, index) => {
                        return (
                            <LinearGradient
                                key={index}
                                colors={
                                    // userSelector.role_id.id 
                                    //     === item.id 
                                    //     ||
                                    chosenUser === item.id
                                        ? ['#3CD0BD', '#219BA5']
                                        : ["white", "white"]
                                }
                                style={styles.chooseUserBlock}
                            >
                                <TouchableOpacity
                                    onPress={
                                        userSelector === null 
                                        || userSelector !== null 
                                        && userSelector.role_id.id 
                                        === item.id 
                                        ? () => setChosenUser(item.id) 
                                        : () => {}
                                    }
                                >
                                    <View style={styles.mainUserBlock}>
                                        <View
                                            style={[
                                                styles.iconBlock,
                                                {
                                                    backgroundColor: chosenUser === item.id
                                                        ? "#83E0D9"
                                                        : "#F4F8F9"
                                                }
                                            ]}
                                        >
                                            <Image
                                                source={{
                                                    uri: chosenUser === item.id
                                                        ? JobUrl + item.icon_active
                                                        : JobUrl + item.icon
                                                }}
                                                style={{
                                                    resizeMode: 'contain',
                                                    width: 51,
                                                    height: 63
                                                }}
                                            />
                                        </View>
                                        <View
                                            style={
                                                chosenUser === item.id
                                                    ? styles.chosenUser
                                                    : styles.passiveChosenUser
                                            }
                                        >
                                            {
                                                chosenUser === item.id
                                                &&
                                                <View
                                                    style={styles.whiteCircle}
                                                />
                                            }
                                        </View>
                                    </View>
                                    <Text
                                        style={[
                                            styles.userBlockText,
                                            {
                                                color: chosenUser === item.id
                                                    ? colors.white
                                                    : colors.darkSlateBlue
                                            }
                                        ]}
                                    >{item.name}</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        )
                    }
                    )}
            </View>
            <TouchableOpacity
                onPress={
                    userSelector === null ||
                    userSelector?.is_hr 
                    ? () => hrHandler()
                    : () => {}
                }
            >
                <Text
                    style={styles.greenTitle}
                >מעבר לאזור הרכזות</Text>
            </TouchableOpacity>
            <View style={{ paddingHorizontal: 34 }}>
                <TouchableOpacity onPress={() => userHandler()}>
                    <View style={styles.footerBtn}>
                        <Text style={styles.btnText}>כניסה</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    usersChosenContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: responsiveWidth(-21)
    },
    image: {
        flex: 1,
        resizeMode: "center",
        // TODO: Changing options for responsive page.
        // height: responsiveWidth(198),
        height: responsiveHeight(180)
    },
    imageContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    borderLeftRight: {
        borderLeftColor: colors.tealishTwo,
        height: responsiveWidth(18.5),
        borderLeftWidth: responsiveWidth(1),
        transform: [{ rotate: '90deg' }],
    },
    textBlock: {
        alignItems: "center",
        // TODO: Changing options for responsive page.
        // marginTop: responsiveWidth(13.5),
        marginTop: responsiveHeight(12),
        marginBottom: responsiveWidth(51)
    },
    bigTitle: {
        color: "white",
        fontWeight: weights.bold,
        fontSize: fonts.xlarge,
    },
    mainUserBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    chooseUserBlock: {
        width: responsiveWidth(78.5),
        // TODO: Changing options for responsive page.
        // height: responsiveWidth(85),
        // marginTop: responsiveWidth(12),
        height: responsiveHeight(89),
        marginTop: responsiveHeight(11),
        borderRadius: 4,
        elevation: 7,
        borderColor: "grey",
        borderWidth: 0.1,
    },
    whiteCircle: {
        width: responsiveWidth(6),
        height: responsiveWidth(6),
        backgroundColor: "white",
        borderRadius: 50
    },
    iconBlock: {
        paddingLeft: responsiveWidth(9.8),
        paddingTop: responsiveWidth(8.5),
        width: responsiveWidth(48.3),
        // TODO: Changing options for responsive page.
        // height: responsiveWidth(55),
        height:  responsiveHeight(56),
        borderTopEndRadius: responsiveWidth(40),
        borderBottomEndRadius: responsiveWidth(100),
        borderBottomLeftRadius: responsiveWidth(25),
    },
    chosenUser: {
        backgroundColor: "#172C60",
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        borderRadius: 50,
        marginTop: responsiveWidth(9.5),
        marginRight: responsiveWidth(6.5),
        justifyContent: "center",
        alignItems: "center"
    },
    passiveChosenUser: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        borderRadius: 50,
        marginTop: responsiveWidth(9.5),
        marginRight: responsiveWidth(6.5),
        borderColor: "#3CD0BD",
        borderWidth: 2
    },
    userBlockText: {
        marginTop: responsiveWidth(4.5),
        textAlign: "center",
        justifyContent: "center",
        fontSize: fonts.small,
    },
    greenTitle: {
        color: colors.tealishTwo,
        fontSize: fonts.xxsmall,
        textAlign: "center",
        // TODO: Changing options for responsive page.
        // paddingVertical: responsiveWidth(15)
        paddingVertical: responsiveHeight(10)
    },
    footerBtn: {
        width: "100%",
        alignItems: "center",
        backgroundColor: colors.tealishTwo,
        paddingVertical: responsiveWidth(10),
        borderRadius: 4,
        // TODO: Changing options for responsive page.
        // marginBottom: responsiveWidth(25)
        marginBottom: responsiveHeight(6),
    },
    btnText: {
        color: colors.whiteTwo,
        fontSize: fonts.small,
        fontWeight: weights.bold
    }
});

export default ChooseTheTypeUsers
