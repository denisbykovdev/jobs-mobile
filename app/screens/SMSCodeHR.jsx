import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { icons } from "../configs/imagesAndIconsUrl";
import { FontAwesome } from '@expo/vector-icons';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { watchRegister, watchVerification } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import AvoidingView from '../commons/AvoidingView';
import CommonFrame from '../commons/CommonFrame';
import LogoHorizontal from '../icons/LogoHorizontal';
import Login from '../icons/Login';
import { responsiveWidth } from '../utils/layout';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import weights from '../utils/weights';
import useStatusBar from '../hooks/useStatusBar';
import IconLineWrapper from '../commons/IconLineWrapper';
import CommonButton from '../commons/CommonButton';
import { useNavigation, useRoute } from '@react-navigation/native';

const SMSCodeHR = () => {
    useStatusBar('dark-content', colors.white)

    const navigation = useNavigation()
    const route = useRoute()

    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
    const [value, setValue] = useState('')
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const dispatch = useDispatch()

    const codeSelector = useSelector(state => state.auth?.code)
    const tokenSelector = useSelector(state => state.auth?.token)
    const isHrSelector = useSelector(state => state.auth.user?.is_hr)

    const CELL_COUNT = 4;

    const submitCode = () => {
        dispatch(watchVerification(
            codeSelector
        ))
    }

    const submitPhoneAgain = () => {
        dispatch(watchRegister(
            route.params?.phone,
            route.params?.userType || 0,
            route.params?.fromHr ? 1 : 0
        ))

        setValue('')
    }

    useEffect(() => {
        if(tokenSelector && tokenSelector !== null && isHrSelector !== null && isHrSelector) {
            navigation.navigate("Hr") 
        }else if(tokenSelector && tokenSelector !== null && isHrSelector !== null && !isHrSelector){
            navigation.navigate("FirstScreen", { isBlog: true })
        }
    }, [tokenSelector])

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

                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image source={icons.testUp} style={styles.imageBgUp} />
                        <Text style={styles.title}>כניסה </Text>
                    </View>

                    <Text style={styles.mainTitle}>מה הקוד שקיבלת?</Text>

                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFiledRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <View
                                onLayout={getCellOnLayoutHandler(index)}
                                key={index}
                                style={[
                                    styles.cellRoot,
                                    isFocused && styles.focusCell
                                ]}
                            >
                                <Text style={styles.cellText}>
                                    {
                                        symbol
                                        || (
                                            isFocused
                                                ? <Cursor />
                                                : <FontAwesome
                                                    name="circle"
                                                    size={responsiveWidth(11)}
                                                    color={colors.cloudyBlue}
                                                />
                                        )
                                    }
                                </Text>
                            </View>
                        )}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                            marginTop: responsiveWidth(19)
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => submitPhoneAgain()}
                        >
                            <Text style={styles.submitPhoneAgainButtonTitle}>שלחו לי שוב</Text>
                        </TouchableOpacity>

                        <Image source={icons.testDown} style={styles.imageBgDown} />
                    </View>
                </View>
                <CommonButton
                    onPress={() => submitCode()}
                    buttonHeight={responsiveWidth(26.5)}
                    title="ממשיכים"
                    buttonStyle={{
                        position: 'absolute',
                        bottom: -120
                    }}
                />
            </CommonFrame>
        </AvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
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
    codeFiledRoot: {
        marginTop: responsiveWidth(28),
        width: "100%"
    },
    cellRoot: {
        width: responsiveWidth(34.5),
        height: responsiveWidth(32),
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: colors.cloudyBlue,
        borderBottomWidth: responsiveWidth(2),
    },
    cellText: {
        color: colors.darkSlateBlue,
        fontSize: fonts.xxlarge,
        textAlign: 'center',
        alignSelf: 'center'
    },
    submitPhoneAgainButtonTitle: {
        color: colors.tealishTwo,
        fontSize: fonts.small,
        textAlign: "center"
    },
    imageBgUp: {
        width: responsiveWidth(53),
        height: responsiveWidth(42),
        position: "absolute",
        left: 0,
        top: 0
    },
    imageBgDown: {
        width: responsiveWidth(53),
        height: responsiveWidth(42),
        position: "absolute",
        right: 0
    }
})

export default SMSCodeHR
