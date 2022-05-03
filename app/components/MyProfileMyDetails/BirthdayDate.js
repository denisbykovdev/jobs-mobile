import {
    Image,
    StyleSheet,
    View
} from "react-native";
import React, { useState } from "react";
import { icons, images } from "../../configs/imagesAndIconsUrl";
import FormContainer from "../../commons/FormContainer";
import colors from "../../utils/colors";
import layout, { responsiveWidth } from "../../utils/layout";
import { useDispatch, useSelector } from "react-redux";
import fonts from "../../utils/fonts";
import weights from "../../utils/weights";
import FormSelect from "../../commons/FormSelect";
import FormButton from "../../commons/FormButton";
import FormField from "../../commons/FormField";
import { watchStoreBirthdayInfo } from "../../actions/profileActions";

const BirthdayDate = () => {
    const userSelector = useSelector(state => state.auth?.user)

    const tokenSelector = useSelector(state => state.auth?.token)

    const profileInfoSelector = useSelector(state => state.profile?.profileInfo)

    const [isRegular, setRegular] = useState(true)

    const dispatch = useDispatch()

    const isRegularIntersepter = (name, text) => {
        let regular = profileInfoSelector.dateTypes.find(element => element.name === text)

        setRegular(regular.is_regular)
    }

    const submitDirthdayInfo = (values) => {

        dispatch(
            watchStoreBirthdayInfo(
                tokenSelector,
                isRegular === true ? 1 : 0,
                values.day,
                values.month,
                values.year
            )
        )
    }

    return (
        <View style={styles.userProfileContainer}>
            <View style={styles.personalDataContainer}>
                <FormContainer
                    initialValues={{
                        is_regular: '',
                        day: '',
                        month: '',
                        year: ''
                    }}
                    onSubmit={submitDirthdayInfo}
                >
                    <FormSelect
                        name="school"
                        array={
                            profileInfoSelector &&
                            profileInfoSelector.dateTypes && profileInfoSelector.dateTypes.map(item => item.name)
                        }
                        placeholder={'תאריך לידה לועזי'}
                        leftArrow
                        selectButtonStyle={{
                            borderBottomColor: colors.whiteTwo,
                            borderTopColor: colors.whiteTwo,
                            borderRightColor: colors.whiteTwo,
                            borderLeftColor: colors.whiteTwo,
                            backgroundColor: colors.whiteTwo,
                            //TODO: Changing options for responsive page.
                            marginTop: layout.height > 650 ? 0 : responsiveWidth(-14),
                            marginBottom: layout.height > 650 ? 0 : responsiveWidth(-5)
                        }}
                        selectButtonTitleStyle={{
                            color: colors.darkGreyBlue
                        }}
                        selectListStyle={{
                            borderBottomColor: colors.veryLightPinkLighter,
                            borderTopColor: colors.whiteTwo,
                            borderRightColor: colors.veryLightPinkLighter,
                            borderLeftColor: colors.veryLightPinkLighter,
                            // maxHeight: responsiveWidth(60),
                            // overflow: 'scroll'
                        }}
                        selectItemStyle={{
                            backgroundColor: colors.veryLightPinkLighter
                        }}
                        withOutCircle
                        interSepter={isRegularIntersepter}
                    />

                    {
                        !isRegular
                            ?
                            <View style={{
                                zIndex: -1,
                                flexDirection: 'row',
                                width: '100%',
                                marginTop: responsiveWidth(8),
                                justifyContent: 'space-between'
                            }}>

                                <FormField
                                    name="year"
                                    placeholder="שנה"
                                    fieldStyle={{
                                        borderColor: colors.whiteTwo
                                    }}
                                    width={responsiveWidth(48.5)}
                                />

                                <FormField
                                    name="month"
                                    placeholder="חודש"
                                    fieldStyle={{
                                        borderColor: colors.whiteTwo
                                    }}
                                    width={responsiveWidth(48.5)}
                                />

                                <FormField
                                    name="day"
                                    placeholder="יום"
                                    fieldStyle={{
                                        borderColor: colors.whiteTwo
                                    }}
                                    width={responsiveWidth(48.5)}
                                />
                            </View>
                            :
                            <View style={{
                                zIndex: -1,
                                flexDirection: 'row',
                                width: '100%',
                                marginTop: responsiveWidth(8),
                                justifyContent: 'space-between'
                            }}>
                                <FormSelect
                                    width={responsiveWidth(48.5)}
                                    placeholder="שנה"
                                    name="year"
                                    array={[
                                        '1990',
                                        '1989',
                                        '1988',
                                        '1987',
                                        '1986',
                                        '1985',
                                        '1984',
                                        '1983',
                                        '1982',
                                        '1981',
                                        '1980'
                                    ]}
                                    leftArrow
                                    selectButtonStyle={{
                                        borderBottomColor: colors.whiteTwo,
                                        borderTopColor: colors.whiteTwo,
                                        borderRightColor: colors.whiteTwo,
                                        borderLeftColor: colors.whiteTwo,
                                        backgroundColor: colors.whiteTwo
                                    }}
                                    selectButtonTitleStyle={{
                                        color: colors.darkGreyBlue
                                    }}
                                    selectListStyle={{
                                        borderBottomColor: colors.veryLightPinkLighter,
                                        borderTopColor: colors.whiteTwo,
                                        borderRightColor: colors.veryLightPinkLighter,
                                        borderLeftColor: colors.veryLightPinkLighter,
                                        maxHeight: responsiveWidth(60),
                                        overflow: 'scroll'
                                    }}
                                    selectItemStyle={{
                                        backgroundColor: colors.veryLightPinkLighter
                                    }}
                                    withOutCircle
                                />
                                <FormSelect
                                    width={responsiveWidth(48.5)}
                                    placeholder="חודש"
                                    name="month"
                                    array={[
                                        '1',
                                        '2',
                                        '3',
                                        '4',
                                        '5',
                                        '6',
                                        '7',
                                        '8',
                                        '9',
                                        '10',
                                        '11',
                                        '12'
                                    ]}
                                    leftArrow
                                    selectButtonStyle={{
                                        borderBottomColor: colors.whiteTwo,
                                        borderTopColor: colors.whiteTwo,
                                        borderRightColor: colors.whiteTwo,
                                        borderLeftColor: colors.whiteTwo,
                                        backgroundColor: colors.whiteTwo
                                    }}
                                    selectButtonTitleStyle={{
                                        color: colors.darkGreyBlue
                                    }}
                                    selectListStyle={{
                                        borderBottomColor: colors.veryLightPinkLighter,
                                        borderTopColor: colors.whiteTwo,
                                        borderRightColor: colors.veryLightPinkLighter,
                                        borderLeftColor: colors.veryLightPinkLighter,
                                        maxHeight: responsiveWidth(60),
                                        overflow: 'scroll'
                                    }}
                                    selectItemStyle={{
                                        backgroundColor: colors.veryLightPinkLighter
                                    }}
                                    withOutCircle
                                />
                                <FormSelect
                                    width={responsiveWidth(48.5)}
                                    placeholder="יום"
                                    name="day"
                                    array={[
                                        '1',
                                        '2',
                                        '3',
                                        '4',
                                        '5',
                                        '6',
                                        '7',
                                        '8',
                                        '9',
                                        '10',
                                        '11',
                                        '12',
                                        '13',
                                        '14',
                                        '15',
                                        '16',
                                        '17',
                                        '18',
                                        '19',
                                        '20',
                                        '21',
                                        '22',
                                        '23',
                                        '24',
                                        '25',
                                        '26',
                                        '27',
                                        '28',
                                        '29',
                                        '30',
                                        '31'
                                    ]}
                                    leftArrow
                                    selectButtonStyle={{
                                        borderBottomColor: colors.whiteTwo,
                                        borderTopColor: colors.whiteTwo,
                                        borderRightColor: colors.whiteTwo,
                                        borderLeftColor: colors.whiteTwo,
                                        backgroundColor: colors.whiteTwo
                                    }}
                                    selectButtonTitleStyle={{
                                        color: colors.darkGreyBlue
                                    }}
                                    selectListStyle={{
                                        borderBottomColor: colors.veryLightPinkLighter,
                                        borderTopColor: colors.whiteTwo,
                                        borderRightColor: colors.veryLightPinkLighter,
                                        borderLeftColor: colors.veryLightPinkLighter,
                                        maxHeight: responsiveWidth(60),
                                        overflow: 'scroll'
                                    }}
                                    selectItemStyle={{
                                        backgroundColor: colors.veryLightPinkLighter
                                    }}
                                    withOutCircle
                                />
                            </View>
                    }

                    <FormButton
                        title="שמירת תאריך הלידה שלי"
                        buttonHeight={responsiveWidth(26.5)}
                        buttonStyle={{
                            // TODO: Changing options for responsive page.
                            // marginTop: responsiveWidth(8),
                            marginTop:layout.height > 650 ? responsiveWidth(8) : responsiveWidth(2),
                            zIndex: -2
                        }}
                    />
                </FormContainer>
            </View>
            <Image
                source={icons.MyProfileComponent}
                style={{
                    width: "100%",
                    height: responsiveWidth(50),
                    // TODO: Changing options for responsive page.
                    // marginBottom: responsiveWidth(25),
                    marginTop: responsiveWidth(-7),
                    zIndex: -2
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    personalDataContainer: {
        backgroundColor: colors.veyLightPink,
        paddingHorizontal: responsiveWidth(18),
        paddingTop: responsiveWidth(18),
        alignItems: 'center'
    },
    formImagePickerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(63),
        height: responsiveWidth(63),
        borderRadius: responsiveWidth(7)
    },
    formImagePickerWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: responsiveWidth(62),
        height: responsiveWidth(62),
        borderRadius: responsiveWidth(7),
        backgroundColor: colors.whiteTwo,
    },
    formShieldContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: responsiveWidth(4)
    },
    formShield: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    formShieldTitle: {
        color: colors.darkSlateBlueTwo,
        fontSize: fonts.xsmall,
        fontWeight: weights.thin
    }
})

export default BirthdayDate