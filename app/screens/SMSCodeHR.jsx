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
import layout, { responsiveWidth, responsiveHeight } from '../utils/layout';
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
    const isMidrashotSelector = useSelector(state => state.auth?.user?.is_midrashot)
    const isBeforeSchoolSelector = useSelector(state => state.auth?.user?.is_before_school)

    const CELL_COUNT = 4;

    const [isErrorCode, setErrorCode ] = useState(false);

    const submitCode = () => {
        if (value === codeSelector){
            setErrorCode(false);
            dispatch(watchVerification(
                value
            ))
        } else {
            setErrorCode(true);
        }
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
        if(
            tokenSelector 
            && tokenSelector !== null 
            && isHrSelector !== null 
            && isHrSelector
        ) {
            navigation.navigate("Hr") 
        }else if(
            tokenSelector 
            && tokenSelector !== null 
            && isHrSelector !== null 
            && !isHrSelector
        ){
            navigation.navigate(
                "FirstScreen", 
                {
                    isBlog: isMidrashotSelector === false &&     isBeforeSchoolSelector === false
                        ? false
                        : true
                }
            )
        }
    }, [tokenSelector])

    return (
        <AvoidingView>
            <CommonFrame>
                {/* <> */}
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
                                    isFocused && styles.focusCell,
                                    {borderBottomColor: isErrorCode ? colors.pinkRed : colors.cloudyBlue}
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
                    {isErrorCode &&
                        <Text style={styles.errorText} >
                            הקוד לא נכון. כדאי לבדוק שוב את ההודעה.
                        </Text>
                    }

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
                    <CommonButton
                    onPress={() => submitCode()}
                    buttonHeight={responsiveWidth(26.5)}
                    title="ממשיכים"
                    buttonStyle={{
                        // position: 'absolute',
                        // bottom: -120       // TODO: Changing options for responsive page.
                        top: responsiveHeight(60)    // TODO: Changing options for responsive page.
                        // botton: 0
                    }}
                />
                </View>
                {/* <CommonButton
                    onPress={() => submitCode()}
                    buttonHeight={responsiveWidth(26.5)}
                    title="ממשיכים"
                    buttonStyle={{
                        position: 'absolute',
                        bottom: 0
                        // bottom: -120
                    }}
                /> */}
                {/* </> */}
            </CommonFrame>
        </AvoidingView>
    );``
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: layout.height,
        // TODO: Changing options for responsive page.
        // marginBottom: responsiveWidth(40),    
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
    },
    errorText: {
        color: colors.pinkRed
    }
})

export default SMSCodeHR
