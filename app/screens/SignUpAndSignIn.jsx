import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native';
import React from 'react';
import { icons } from "../configs/imagesAndIconsUrl";
import { SocialClientId } from "../configs/ApiCallHelper"
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import * as AppleAuthentication from 'expo-apple-authentication';
import FormSelect from '../commons/FormSelect';
import FormContainer from '../commons/FormContainer';
import FormField from '../commons/FormField';
import FormButton from '../commons/FormButton';
import { responsiveWidth } from '../utils/layout';
import { useDispatch, useSelector } from 'react-redux';
import { watchProvider, watchRegister } from '../actions/authActions';
import { registerSchema } from '../utils/schemas';
import AvoidingView from '../commons/AvoidingView';
import CommonFrame from '../commons/CommonFrame';
import Fb from '../icons/Fb';
import fonts from '../utils/fonts';
import weights from '../utils/weights';
import colors from '../utils/colors';
import GooglePlus from '../icons/GooglePlus';
import Login from '../icons/Login';
import LogoHorizontal from '../icons/LogoHorizontal';
import useStatusBar from '../hooks/useStatusBar';
import { Platform } from "react-native";
import IconLineWrapper from '../commons/IconLineWrapper';
import { useNavigation, useRoute } from '@react-navigation/native';

const SignUpAndSignIn = () => {
    useStatusBar('dark-content', colors.white)

    const navigation = useNavigation()

    const route = useRoute()

    const dispatch = useDispatch()

    const userType = route.params.chosenUser

    const tokenSelector = useSelector(state => state.auth.token)

    const phoneNumberPickerArray = [
        "+972",
        "+374",
        "+050",
        "+380"
    ]

    const loginFb = async () => {
        try {
            await Facebook.initializeAsync({
                appId: '757785588252998',
            });
            const {
                type,
                token
            } = await Facebook.logInWithReadPermissionsAsync(
                {
                    permissions: ['public_profile'],
                });
            if (type === 'success') {
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`);

                const res = await response.json()

                let user = {
                    email: res.email,
                    name: res.name,
                    id: res.id,
                    photoUrl: res.picture?.data?.url,
                }

                dispatch(
                    watchProvider(
                        'facebook',
                        user,
                        token,
                        '',
                        '',
                        userType,
                        0
                    )
                )

                tokenSelector && navigation.navigate("User", { isBlog: true })
            }
        } catch (e) {
            console.log('errorFacebook', e);
        }
    }

    const loginApple = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
            });

            console.log(
                `--- sns/loginApple:`, credential
            )

            let user = {
                email: credential.email,
                name: credential.fullName.givenName,
                id: credential.user,
                photoUrl: '',
            }

            dispatch(
                watchProvider(
                    'apple',
                    user,
                    credential.identityToken,
                    '',
                    '',
                    userType,
                    0
                )
            )

            tokenSelector && navigation.navigate("User", { isBlog: true })
        } catch (e) {
            console.log('errorApple', e);
        }
    }

    const loginGoogle = async () => {
        try {
            const data = await Google.logInAsync({
                androidClientId: SocialClientId.androidClientId,
                iosClientId: SocialClientId.iosClientId,
                scopes: ['profile', 'email'],
            });

            console.log(
                `--- sns/loginGoogle:`, data
            )

            let user = {
                email: data.user.email,
                name: data.user.name,
                id: data.user.id,
                photoUrl: data.user.photoUrl,
            }

            dispatch(
                watchProvider(
                    'google',
                    user,
                    data.accessToken,
                    '',
                    '',
                    userType,
                    0
                )
            )

            tokenSelector && navigation.navigate("User", { isBlog: true })
        } catch (e) {
            console.log('errorGoogle', e)
        }
    }

    const submitPhone = async (values) => {
        const phone = `${values.phoneCode}${values.phone}`
        dispatch(watchRegister(
            phone,
            userType,
            0
        ))
        
        navigation.navigate(
            "SMSCodeHR",
            {
                fromHr: false,
                userType: userType,
                phone: phone,
                isBlog: true
            }
        )
    }

    return (
        <AvoidingView>
            <CommonFrame>
                <View style={styles.container}>
                    <LogoHorizontal />
                    <View
                        style={{
                            marginTop: responsiveWidth(42.5)
                        }}
                    >
                        <IconLineWrapper>
                            <Login />
                        </IconLineWrapper>
                    </View>
                    <View>
                        <Image
                            source={icons.testUp}
                            style={styles.imageBgUp}
                        />
                        <Text style={styles.title}>כניסה </Text>
                        <Text style={styles.mainTitle}>מספר הטלפון שלך הוא חלק בלתי נפרד ממך</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignUpHR")}
                        >
                            <Text style={styles.toHrText}>מעבר לאזור הרכזות</Text>
                        </TouchableOpacity>
                        <View>
                            <FormContainer
                                validationSchema={registerSchema}
                                initialValues={{
                                    phoneCode: '',
                                    phone: ''
                                }}
                                onSubmit={(values) => submitPhone(values)}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginVertical: responsiveWidth(13)
                                    }}
                                >
                                    <FormSelect
                                        name="phoneCode"
                                        placeholder={phoneNumberPickerArray[0]}
                                        array={phoneNumberPickerArray}
                                        width={responsiveWidth(50.5)}
                                        height={responsiveWidth(24.5)}
                                    />
                                    <FormField
                                        name="phone"
                                        placeholder="מספר טלפון נייד"
                                        width={responsiveWidth(104.5)}
                                        keyboardType="numeric"
                                        height={responsiveWidth(24.5)}
                                    />
                                </View>
                                <FormButton
                                    title="שלחו לי קוד לנייד "
                                    buttonWidth='100%'
                                    buttonStyle={{
                                        zIndex: -1
                                    }}
                                    buttonHeight={responsiveWidth(26.5)}
                                />
                            </FormContainer>
                            <Text style={styles.SMSText}>
                                SMS קוד בן ארבע ספרות יגיע לנייד שלך בהודעת
                            </Text>
                            <Image source={icons.testDown} style={styles.imageBgDown} />
                        </View>

                        <View style={styles.socialBtns}>
                            <TouchableOpacity onPress={() => loginFb()}>
                                <View style={styles.socialBtn}>
                                    <View style={styles.socialIconStyles}>
                                        <Fb />
                                    </View>
                                    <Text style={styles.socialBtnText}>Facebook כניסה באמצעות </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => loginGoogle()}>
                                <View style={[styles.socialBtn]}>
                                    <View style={styles.socialIconStyles}>
                                        <GooglePlus />
                                    </View>
                                    <Text style={styles.socialBtnText}>Google כניסה באמצעות </Text>
                                </View>
                            </TouchableOpacity>
                            {
                                Platform.OS === "ios"
                                && <TouchableOpacity
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingVertical: responsiveWidth(9.5),
                                        borderColor: colors.tealGreen,
                                        borderWidth: responsiveWidth(1),
                                        borderRadius: 4,
                                        marginBottom: responsiveWidth(11.5)
                                    }}
                                    onPress={() => loginApple()}
                                >
                                    <AppleAuthentication.AppleAuthenticationButton
                                        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                                        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
                                        cornerRadius={4}
                                        style={{
                                            width: responsiveWidth(29),
                                            height: responsiveWidth(29),
                                            padding: 0,
                                            margin: 0,
                                            position: 'absolute',
                                            left: responsiveWidth(11.5),
                                            left: 0
                                        }}
                                        onPress={() => loginApple()}
                                    />
                                    <Text style={styles.socialBtnText}>Apple כניסה באמצעות </Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            </CommonFrame>
        </AvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: responsiveWidth(40),
        alignItems: "center"
    },
    title: {
        color: colors.darkSlateBlue,
        textAlign: "center",
        alignSelf: 'center',
        fontSize: fonts.xxsmall,
        fontWeight: weights.regular,
        marginTop: responsiveWidth(12.5)
    },
    mainTitle: {
        color: colors.darkSlateBlue,
        fontSize: fonts.xlarge,
        paddingVertical: responsiveWidth(17.5),
        fontWeight: weights.bold,
        textAlign: "center",
        alignSelf: 'center'
    },
    toHrText: {
        color: "#30b8b2",
        fontSize: responsiveWidth(7),
        paddingTop: responsiveWidth(10.5),
        fontWeight: "bold",
        textAlign: "center"
    },
    SMSText: {
        alignSelf: 'center',
        fontSize: fonts.xxsmall,
        color: colors.darkSlateBlue,
        marginTop: responsiveWidth(8),
        zIndex: -1
    },
    socialBtns: {
        marginTop: responsiveWidth(50)
    },
    socialBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: responsiveWidth(9.5),
        borderColor: colors.tealGreen,
        borderWidth: responsiveWidth(1),
        borderRadius: 4,
        marginBottom: responsiveWidth(11.5)
    },
    socialIconStyles: {
        position: 'absolute',
        left: responsiveWidth(11.5)
    },
    socialBtnText: {
        color: colors.darkSlateBlue,
        fontSize: fonts.xsmall,
        fontWeight: weights.bold
    },
    imageBgUp: {
        width: responsiveWidth(53),
        height: responsiveWidth(42.5),
        position: "absolute",
        left: 0,
        top: 0
    },
    imageBgDown: {
        width: responsiveWidth(53),
        height: responsiveWidth(42.5),
        position: "absolute",
        right: 0,
        top: responsiveWidth(85)
    }
});

export default SignUpAndSignIn
