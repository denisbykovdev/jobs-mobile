import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React, {useState, useEffect} from "react";
import { icons } from "../../configs/imagesAndIconsUrl";
import colors from '../../utils/colors'
import { responsiveWidth } from "../../utils/layout";
import FormContainer from "../../commons/FormContainer";
import FormImagePicker from "../../commons/FormImagePicker";
import FormField from "../../commons/FormField";
import FormSelect from "../../commons/FormSelect";
import FormButton from "../../commons/FormButton";
import EditButton from "../../icons/EditButton";
import { useDispatch, useSelector } from "react-redux";
import Name from "../../icons/Name";
import SurName from "../../icons/SurName";
import City23 from "../../icons/CIty23";
import { watchCreateNewCity, watchGetInfoForProfile, watchStoreDetails } from "../../actions/profileActions";
import fonts from "../../utils/fonts";
import weights from "../../utils/weights";

const PersonalData = () => {
    const userSelector = useSelector(state => state.auth.user)

    const tokenSelector = useSelector(state => state.auth?.token)

    const profileInfoSelector = useSelector(state => state.profile.profileInfo)

    const [areFieldsOpen, setFieldsOpen] = useState(false)

    const [isFieldOpen, setFieldOpen] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            watchGetInfoForProfile(
                tokenSelector
            )
        )
    }, [])

    const submitPersonalData = (values) => {
        if(values.newCityName.length > 0) {
            dispatch(
                watchCreateNewCity(
                    tokenSelector,
                    values.first_name,
                    values.last_name,
                    values.newCityName
                )
            )
        }else{
            const city = profileInfoSelector.cities.find(city => city.name === values.city_id && city.id)

            dispatch(
                watchStoreDetails(
                    tokenSelector,
                    values.first_name,
                    values.last_name,
                    city.id
                )
            )
        }

        setFieldsOpen(false)
        setFieldOpen(false)
    }

    const newCityHandler = () => {
        setFieldOpen(!isFieldOpen)
    }

    return (
        <View style={styles.userProfileContainer}>
            <View style={styles.personalDataContainer}>
                <FormContainer
                    initialValues={{
                        avatar: '',
                        first_name: '',
                        last_name: '',
                        city_id: '',
                        newCityName: ''
                    }}
                    onSubmit={submitPersonalData}
                >
                    <View style={styles.formImagePickerContainer}>
                        {
                            userSelector?.avatar 
                            && userSelector?.avatar !== null
                            ?
                            <Image 
                                source={{uri: `${url}/${userSelector.avatar}`}}
                                style={styles.formImagePickerContainer}
                            />
                            :
                            <View style={styles.formImagePickerWrapper}>
                                <FormImagePicker
                                    name="avatar" 
                                />
                            </View> 
                        }
                    </View>

                    <View style={styles.formShieldContainer}>
                        {
                            areFieldsOpen
                            ?
                            <View style={styles.formShield}>
                                <FormField
                                    name="first_name"
                                    placeholder="שם פרטי"
                                    fieldStyle={{
                                        borderColor: colors.whiteTwo
                                    }}
                                />
                            </View>
                            : 
                            <View style={styles.formShield}>
                                <TouchableOpacity 
                                    style={styles.formShieldButton}
                                    onPress={
                                        () => setFieldsOpen(!areFieldsOpen)
                                    }
                                >
                                    <EditButton />
                                </TouchableOpacity>
                                <Text style={styles.formShieldTitle}>
                                    {userSelector?.first_name || 'שם פרטי'}
                                </Text>
                            </View>
                        }

                        <Name />
                    </View>
                    
                    <View style={styles.formShieldContainer}>
                        {
                            areFieldsOpen
                            ?
                            <View style={styles.formShield}>
                                <FormField 
                                    name="last_name"
                                    placeholder="שם משפחה"
                                    fieldStyle={{
                                        borderColor: colors.whiteTwo
                                    }}
                                />
                            </View>
                            : 
                            <View style={styles.formShield}>
                                <TouchableOpacity 
                                    style={styles.formShieldButton}
                                    onPress={
                                        () => setFieldsOpen(!areFieldsOpen)
                                    }
                                >
                                    <EditButton />
                                </TouchableOpacity>
                                <Text style={styles.formShieldTitle}>
                                    {userSelector?.last_name || 'שם משפחה'}
                                </Text>
                            </View>
                        }

                        <SurName />
                    </View>

                    <View style={styles.formShieldContainer}>
                        {
                            areFieldsOpen
                            ?
                            <View style={styles.formShield}>
                                <FormSelect 
                                    name="city_id"
                                    array={
                                        profileInfoSelector && profileInfoSelector.cities.map(city => city.name)
                                    }
                                    withDownListButton
                                    downListButtonTitle="הוספת יישוב +"
                                    placeholder={userSelector?.city || 'יישוב'}
                                    leftArrow
                                    downListButtonFunction={
                                        newCityHandler
                                    }
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
                            : 
                            <View style={styles.formShield}>
                                <TouchableOpacity 
                                    style={styles.formShieldButton}
                                    onPress={
                                        () => setFieldsOpen(!areFieldsOpen)
                                    }
                                >
                                    <EditButton />
                                </TouchableOpacity>
                                <Text style={styles.formShieldTitle}>
                                    {userSelector?.city || 'יישוב'}
                                </Text>
                            </View>
                        }

                        <City23 />
                    </View>
                    {
                        isFieldOpen
                        &&
                        // !areFieldsOpen
                        // &&
                        <View style={{ zIndex: -1, width: '100%' }}>
                            {/* <FormContainer
                                initialValues={{
                                    newCityName: ''
                                }}
                                onSubmit={submitNewCity}
                            > */}
                                <FormField 
                                    name="newCityName"
                                    placeholder="שם היישוב שלך"
                                    fieldStyle={{
                                        borderColor: colors.whiteTwo,
                                        marginTop: responsiveWidth(4)
                                    }}
                                />
                                {/* <FormButton 
                                    title="הוספת יישוב +"
                                    buttonHeight={responsiveWidth(26.5)}
                                    buttonStyle={{
                                        marginTop: responsiveWidth(8)
                                    }}
                                />
                            </FormContainer> */}
                        </View>
                    }
                    {
                        areFieldsOpen
                        ?
                        <FormButton 
                            title="שמירת הפרטים האישיים שלי"
                            buttonHeight={responsiveWidth(26.5)}
                            buttonStyle={{
                                marginTop: responsiveWidth(8),
                                zIndex: -1
                            }}
                        />
                        :
                        <FormButton 
                            buttonColor={colors.lightPeriwinckle}
                            title="שמירת הפרטים האישיים שלי"
                            buttonHeight={responsiveWidth(26.5)}
                            disabled={areFieldsOpen}
                            buttonStyle={{
                                marginTop: responsiveWidth(8),
                                zIndex: -1
                            }}
                        />
                    }
                </FormContainer>
            </View>
            <Image 
                source={icons.MyProfileComponent}
                style={{
                    width: "100%", 
                    height: responsiveWidth(50),
                    marginBottom: responsiveWidth(25),
                    zIndex: -1
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

export default PersonalData