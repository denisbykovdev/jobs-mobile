import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import React from 'react';
import { icons } from "../configs/imagesAndIconsUrl";
import FormSelect from '../commons/FormSelect';
import FormContainer from '../commons/FormContainer';
import FormField from '../commons/FormField';
import FormButton from '../commons/FormButton';
import { responsiveWidth } from '../utils/layout';
import fonts from '../utils/fonts';
import { useDispatch } from 'react-redux';
import { watchRegister } from '../actions/authActions';
import { registerSchema } from '../utils/schemas';
import AvoidingView from '../commons/AvoidingView';
import colors from '../utils/colors';
import CommonFrame from '../commons/CommonFrame';
import IconLineWrapper from '../commons/IconLineWrapper';
import Login from '../icons/Login';
import LogoHorizontal from '../icons/LogoHorizontal';
import weights from '../utils/weights';
import useStatusBar from '../hooks/useStatusBar';

const SignUpHr = ({ navigation }) => {
    useStatusBar('dark-content', colors.white)

    const dispatch = useDispatch()

    const phoneNumberPickerArray = [
        "+972",
        "+374",
        "+050",
        "+380",
    ]

    const submitPhone = async (values) => {
        console.log(
            `--- submitPhone/values`, values
        )
        const phone = `${values.phoneCode}${values.phone}`
        dispatch(watchRegister(
            phone,
            1,
            1
        ))
        navigation.navigate("SMSCodeHR", { fromHr: true, phone })
    }

    return (
        <AvoidingView>
            <CommonFrame>
                <View style={styles.mainContainer}>
                    <LogoHorizontal />
                    <View style={styles.innerContainer}>
                        <IconLineWrapper>
                            <Login />
                        </IconLineWrapper>
                        <View>
                            <Image source={icons.testUp} style={styles.imageBgUp} />
                            <Text style={styles.title}>כניסה </Text>
                            <Text style={styles.mainTitle}>ברוכה הבאה לאזור הרכזות</Text>
                            <Text style={styles.inputTitle}>לצורך אימות החשבון שלך, הזיני מספר טלפון נייד ואנו נשלח אלייך קוד אישי</Text>


                            {/* {error &&
                                <Text style={{ textAlign: "right", paddingTop: 10, color: "#f50068" }}>היי, שכחת למלא טלפון</Text>
                            } */}
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
                                            marginVertical: responsiveWidth(17)
                                        }}
                                    >
                                        <FormSelect
                                            name="phoneCode"
                                            placeholder={phoneNumberPickerArray[0]}
                                            array={phoneNumberPickerArray}
                                            width={responsiveWidth(50.5)}
                                            height={responsiveWidth(26)}
                                        />
                                        <FormField
                                            name="phone"
                                            placeholder="מספר טלפון נייד "
                                            width={responsiveWidth(104.5)}
                                            keyboardType="numeric"
                                            height={responsiveWidth(26)}
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
                                <Text
                                    style={styles.SMSText}
                                >
                                    SMS קוד בן ארבע ספרות יגיע לנייד שלך בהודעת
                                </Text>
                                <Image source={icons.testDown} style={styles.imageBgDown} />
                            </View>
                        </View>
                    </View>
                </View>
            </CommonFrame>
        </AvoidingView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: responsiveWidth(40),
        alignItems: "center"
    },
    innerContainer: {
        marginTop: responsiveWidth(42.5)
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
    inputTitle: {
        // color: "#30b8b2",  //The color didn't match the design.
        color: colors.darkSlateBlue, 
        fontSize: responsiveWidth(7),
        paddingTop: responsiveWidth(10.5),
        fontWeight: "bold",
        textAlign: "center"
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
        top: responsiveWidth(97.5)
    },
    SMSText: {
        alignSelf: 'center',
        fontSize: fonts.xxsmall,
        color: colors.darkSlateBlue,
        marginTop: responsiveWidth(8),
        zIndex: -1
    }
});

export default SignUpHr
