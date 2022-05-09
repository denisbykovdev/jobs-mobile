import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {icons, images} from "../../configs/imagesAndIconsUrl";
import { watchCreateNewSchool, watchStoreAdditionalInfo } from "../../actions/profileActions";
import { useState } from "react";
import FormContainer from "../../commons/FormContainer";
import FormField from "../../commons/FormField";
import colors from "../../utils/colors";
import EditButton from "../../icons/EditButton";
import FormSelect from "../../commons/FormSelect";
import layout, { responsiveWidth } from "../../utils/layout";
import fonts from "../../utils/fonts";
import weights from "../../utils/weights";
import FormButton from "../../commons/FormButton";
import Email from "../../icons/Email";
import Planshet from "../../icons/Planshet";
import Status23_4 from "../../icons/Status23_4";

const AdditionInfo = () => {
    const userSelector = useSelector(state => state.auth.user)

    const tokenSelector = useSelector(state => state.auth?.token)

    const profileInfoSelector = useSelector(state => state.profile.profileInfo)

    const [areFieldsOpen, setFieldsOpen] = useState(false)

    const [isFieldOpen, setFieldOpen] = useState(false)

    const dispatch = useDispatch()

    const submitAdditionalInfo = (values) => {
        const type = profileInfoSelector.types.find(type => type.name === values.type)

        const school = profileInfoSelector.schools.find(school => city.name === values.city_id && city.id)

        if(values.newSchool.length > 0) {
            dispatch(
                watchCreateNewSchool(
                    tokenSelector,
                    values.newSchool,
                    values.email,
                    type.id
                )
            )
        }else{
            dispatch(
                watchStoreAdditionalInfo(
                    tokenSelector,
                    values.email,
                    school.id,
                    type.id
                )
            )
        }
        
        setFieldsOpen(false)
        setFieldOpen(false)
    }

    return (
        <View style={styles.userProfileContainer}>
            <View style={styles.personalDataContainer}>
                <FormContainer
                    initialValues={{
                        email: '',
                        school: '',
                        type: '',
                        newSchoolName: ''
                    }}
                    onSubmit={submitAdditionalInfo}
                >

                    <View style={styles.formShieldContainer}>
                        {
                            areFieldsOpen
                            ?
                            <View style={styles.formShield}>
                                <FormField
                                    name="email"
                                    placeholder="מייל"
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
                                    {userSelector?.email || 'מייל'}
                                </Text>
                            </View>
                        }

                        <Email />
                    </View>

                    <View style={styles.formShieldContainer}>
                        {
                            areFieldsOpen
                            ?
                            <View style={styles.formShield}>
                                <FormSelect 
                                    name="school"
                                    array={
                                        profileInfoSelector && 
                                        profileInfoSelector?.schools && profileInfoSelector.schools.map(school => school.name)
                                    }
                                    withDownListButton
                                    downListButtonTitle="הוספת יישוב +"
                                    placeholder={userSelector?.school || 'מוס'}
                                    leftArrow
                                    downListButtonFunction={
                                        () => setFieldOpen(!isFieldOpen)
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
                                    {userSelector?.school || 'מוס'}
                                </Text>
                            </View>
                        }

                        <Planshet />
                    </View>
                    {
                        isFieldOpen
                        &&
                      
                        <View style={{ zIndex: -1, width: '100%' }}>
                           
                                <FormField 
                                    name="newSchoolName"
                                    placeholder="שם היישוב שלך"
                                    fieldStyle={{
                                        borderColor: colors.whiteTwo,
                                        marginTop: responsiveWidth(4),
                                        marginBottom: responsiveWidth(4)
                                    }}
                                />
                            
                        </View>
                    }
                    
                    <View style={[styles.formShieldContainer, {  zIndex: -1 }]}>
                        {
                            areFieldsOpen
                            ?
                            <View style={styles.formShield}>
                                <FormSelect 
                                    name="type"
                                    array={
                                        profileInfoSelector && 
                                        profileInfoSelector?.types && profileInfoSelector.types.map(type => type.name)
                                    }
                                    // withDownListButton
                                    // downListButtonTitle="הוספת יישוב +"
                                    placeholder={userSelector?.role_id.name || 'הסטטוס שלי'}
                                    leftArrow
                                    // downListButtonFunction={
                                    //     () => setFieldOpen(!isFieldOpen)
                                    // }
                                    selectButtonStyle={{
                                        borderBottomColor: colors.whiteTwo,
                                        borderTopColor: colors.whiteTwo,
                                        borderRightColor: colors.whiteTwo,
                                        borderLeftColor: colors.whiteTwo,
                                        backgroundColor: colors.whiteTwo,
                                        // width: '100%'
                                    }}
                                    selectButtonTitleStyle={{
                                        color: colors.darkGreyBlue,
                                        // width: '100%'
                                    }}
                                    selectListStyle={{
                                        borderBottomColor: colors.veryLightPinkLighter,
                                        borderTopColor: colors.whiteTwo,
                                        borderRightColor: colors.veryLightPinkLighter,
                                        borderLeftColor: colors.veryLightPinkLighter,
                                        maxHeight: responsiveWidth(60),
                                        overflow: 'scroll',
                                        // width: '100%'
                                    }}
                                    selectItemStyle={{
                                        backgroundColor: colors.veryLightPinkLighter,
                                        // width: '100%'
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
                                    {userSelector?.role_id?.name || 'הסטטוס שלי'}
                                </Text>
                            </View>
                        }

                        <Status23_4 />
                    </View>

                    
                    {
                        areFieldsOpen
                        ?
                        <FormButton 
                            title="שמירת הפרטים האישיים שלי"
                            buttonHeight={responsiveWidth(26.5)}
                            buttonStyle={{
                                marginTop: responsiveWidth(8),
                                zIndex: -2
                            }}
                        />
                        :
                        <FormButton
                            buttonColor={colors.lightPeriwinckle}
                            title="שמירת הפרטים האישיים שלי"
                            buttonHeight={responsiveWidth(26.5)}
                            disabled={areFieldsOpen}
                            buttonStyle={{
                                // TODO: Changing options for responsive page.
                                // marginTop: responsiveWidth(8),
                                marginTop: layout.height > 650 ? responsiveWidth(8) : responsiveWidth(2),
                                zIndex: -2
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
                    // TODO: Changing options for responsive page.
                    // marginBottom: responsiveWidth(25),
                    marginTop: layout.height > 650 ? 0 : layout.responsiveHeight(-10),
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
        // TODO: Changing options for responsive page.
        // paddingTop: responsiveWidth(18),
        paddingTop: responsiveWidth(2),
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
        // TODO: Changing options for responsive page.
        // marginVertical: responsiveWidth(4) 
        marginVertical: layout.height > 660 ? responsiveWidth(4) : responsiveWidth(1),
    },
    formShield: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // width: '100%'
    },
    formShieldTitle: {
        color: colors.darkSlateBlueTwo,
        fontSize: fonts.xsmall,
        fontWeight: weights.thin
    }
})

export default AdditionInfo