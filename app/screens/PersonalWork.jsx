import {
    Image,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import * as ImagePicker from 'expo-image-picker';
import PersonalWorkPopupSuccess from "./PesronalWorkPopupSuccess";
import AvoidingView from "../commons/AvoidingView";
import CommonFrame from "../commons/CommonFrame";
import LogoHorizontal from "../icons/LogoHorizontal";
import { useDispatch, useSelector } from "react-redux";
import { watchGetAreas } from "../actions/categoriesActions";
import useStatusBar from "../hooks/useStatusBar";
import useSecure from "../hooks/useSecure";
import { watchStoreHrAccount } from "../actions/hrActions";
import colors from '../utils/colors';
import { responsiveWidth } from "../utils/layout";
import AddPhoto from "../icons/AddPhoto";
import FormContainer from "../commons/FormContainer";
import weights from "../utils/weights";
import fonts from '../utils/fonts'
import FormField from "../commons/FormField";
import FormSelect from "../commons/FormSelect";
import FormButton from "../commons/FormButton";

const PersonalWork = ({ navigation }) => {
    const formikRef = useRef()

    useStatusBar('dark-content', colors.white)

    const { secure: secureToken } = useSecure(`token`)
    const { secure: secureUser } = useSecure(`user`)

    const [uploadedImage, setUploadedImage] = useState(null)

    const [modal, setModal] = useState(false)

    const dispatch = useDispatch()

    const idSelector = useSelector(state => state.user?.id)
    const tokenSelector = useSelector(state => state.auth?.token)
    const areasSelector = useSelector(state => state.categories?.areas)

    // const areasArray = areasSelector !== null && areasSelector !== undefined && areasSelector.map(item => item.name)

    const areasArray = [
        'test1',
        'test2'
    ]

    useEffect(() => {
        dispatch(
            watchGetAreas(
                secureToken || tokenSelector
            )
        )
    }, []);

    const openImagePickerAsync = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (status === 'granted') {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                    base64: true
                });

                if (result) {
                    console.log(
                        `--- PersonalWork/picker result:`, result
                    )
                    setUploadedImage(result.base64)
                    formikRef.current.setFieldTouched('avatar')
                    formikRef.current.setFieldValue('avatar', result.base64)
                }
            }
        }
    };

    const submitHrProfile = async (values) => {
        dispatch(
            watchStoreHrAccount(
                secureToken && secureToken || tokenSelector !== null &&tokenSelector,
                secureUser && secureUser.id || idSelector !== null && idSelector,
                values.first_name,
                values.last_name,
                values.phone,
                values.organization_name,
                // areasSelector.filter(area => area.name === values.areas),
                values.areas,
                values.email,
                values.about,
                values.avatar
            )
        )

        setModal(true)
    }

    return (
        <AvoidingView>
            <CommonFrame>
                <View style={styles.mainContainer}>
                    <LogoHorizontal />

                    <TouchableOpacity
                        onPress={() => openImagePickerAsync()}
                    >
                        <View
                            style={{
                                alignItems: "center",
                                marginTop: responsiveWidth(33)
                            }}
                        >
                            {
                                uploadedImage
                                    ?
                                    <Image
                                        source={{
                                            uri: `data:image/png;base64,${uploadedImage}` 
                                        }}
                                        style={styles.uploadedImage}
                                    />
                                    :
                                    <AddPhoto />
                            }
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.infoText}>הפרטים שלי</Text>

                    <FormContainer
                        initialValues={{
                            last_name: '',
                            first_name: '',
                            phone: '',
                            organization_name: '',
                            areas: '',
                            email: '',
                            about: '',
                            avatar: ''
                        }}
                        innerRef={formikRef}
                        onSubmit={submitHrProfile}
                    >
                        <View 
                            style={{
                                marginTop: responsiveWidth(13),
                                width: '100%'
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    paddingTop: responsiveWidth(13),
                                    justifyContent: 'space-between'
                                }}
                            >
                                <FormField
                                    name="last_name"
                                    placeholder="שם משפחה" 
                                    fieldContainerStyle={{
                                        width: '48%'
                                    }}
                                  
                                />
                                <FormField
                                    name="first_name"
                                    placeholder="שם" 
                                    fieldContainerStyle={{
                                        width: '48%'
                                    }}
                                   
                                />
                            </View>

                            <FormField
                                fieldContainerStyle={{
                                    paddingTop: responsiveWidth(13)
                                }}
                                name="phone"
                                placeholder="054-54545454" 
                            />
                            <FormField
                                fieldContainerStyle={{
                                    paddingVertical: responsiveWidth(13)
                                }}
                                name="organization_name"
                                placeholder="שם העמותה" 
                            />

                            <FormSelect 
                                name="areas"
                                placeholder="איזור בארץ"
                                array={areasArray}
                                multi
                                interSepter
                            />

                            <FormField
                                fieldContainerStyle={{
                                    paddingTop: responsiveWidth(13),
                                    zIndex: -1
                                }}
                                name="email"
                                placeholder="אימייל" 
                                fieldStyle={{
                                    padding: responsiveWidth(2.5)
                                }}
                            />
                            <FormField
                                fieldContainerStyle={{
                                    paddingVertical: responsiveWidth(13),
                                    zIndex: -1
                                }}
                                name="about"
                                placeholder="ספרי על עצמך" 
                                height={responsiveWidth(72)}
                                area={true}
                            />
                            <FormButton 
                                title="כניסה ומעבר לתקנים שלי"
                                buttonHeight={responsiveWidth(26.5)}
                            />
                        </View>
                    </FormContainer>

                    {/* {error &&
                        <Text style={styles.errorMessage}>?נראה שהמייל לא נכון. אולי טעות בהקלדה</Text>
                    } */}
         
                    {modal &&
                        <View 
                            style={{ 
                                position: "absolute",
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <PersonalWorkPopupSuccess 
                                navigation={navigation} 
                                modal={modal}
                                setModal={setModal}
                            />
                        </View>
                    }
                </View>
            </CommonFrame>
        </AvoidingView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: responsiveWidth(40),
        alignItems: 'center'
    },
    infoText: {
        marginTop: responsiveWidth(21.5),
        color: colors.darkSlateBlue,
        fontSize: fonts.small,
        fontWeight: weights.bold,
        textAlign: "center",
        alignSelf: 'center'
    },

    text_input: {
        borderColor: "#e1e1e1",
        borderWidth: 3,
        borderRadius: 7,
        textAlign: "right",
        paddingRight: 20,
        paddingVertical: 16,
        width: "100%",
        marginVertical: 16,
    },

    nameInput: {
        width: "48%",
        alignItems: "center",
        borderColor: "#e1e1e1",
        borderWidth: 3,
        borderRadius: 7,
        textAlign: "right",
        paddingHorizontal: 20,
        paddingVertical: 14,
        marginVertical: 16,
    },

    nameRow: {
        flexDirection: "row",
        width:"100%",
        justifyContent: 'space-between'
    },

    pencil: {
        width: 17,
        height: 16
    },

    placeHolder_styles: {
        fontWeight: '500',
        color: 'white',
        fontSize: 13
    },

    paddingVertical: {
        paddingTop: 12,
        paddingBottom: 52
    },

    picker: {
        borderColor: "#CED2DB",
        borderWidth: 3,
        paddingVertical: 15,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        // width: "100%",
        marginVertical: 22,
    },

    label_styles: {
        fontSize: 16,
        color: '#39496d',
        fontWeight: "300",
        textAlign: "right"
    },

    arrow_style: {
        position: "absolute",
        right: 250,
    },

    editNumber: {
        width: 43,
        height: 40,
        backgroundColor: "#30b8b2",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center"
    },

    numberBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    number: {
        backgroundColor: "#f4f4f4",
        width: "80%",
        borderRadius: 4,
        // paddingLeft:100
    },

    numberText: {
        paddingVertical: 12,
        textAlign: "right",
        color: "#39496d",
        paddingRight: 19
    },

    saveBtn: {
        alignItems: "center",
        backgroundColor: "#30b8b2",
        borderRadius: 4
    },

    saveBtnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        paddingVertical: 15
    },

    uploadedImage: {
        width: 147,
        borderRadius: 4,
        height: 147
    },

    addImage: {
        width: 147,
        height: 147
    },

    openedToggle: {
        borderLeftColor: "#e1e1e1",
        borderLeftWidth: 2,
        borderBottomLeftRadius: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#e1e1e1",
        borderBottomRightRadius: 5,
        borderRightWidth: 2,
        borderRightColor: "#e1e1e1",

    },

    toggle: {
        backgroundColor: "#30b8b2",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 5
    },

    toggleArrow: {
        width: 13,
        height: 7
    },

    toggleText: {
        color: "white",
        fontSize: 16,
    },

    toggleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        paddingVertical: 15
    },

    checkBox_container: {
        flexDirection: "row",
        justifyContent: "center"
    },

    checkBox: {
        width: 23,
        height: 24,
        borderColor: "#268b93",
        borderWidth: 3,
        borderRadius: 50,
        justifyContent: "center",
        flexDirection: "row"
    },

    checkedItemBox: {
        width: 23,
        height: 24,
        borderRadius: 50,
        backgroundColor: "#172c60",
        justifyContent: "center",
        flexDirection: "row"
    },

    checkBox_image: {
        width: 14,
        height: 10,
        alignSelf: "center",
    },

    toggleRowText: {
        color: "#39496d",
        fontSize: 16
    },

    errorMessage: {
        textAlign: "right",
        color: "#f50068",

    },

    errorStyle: {
        borderColor: "#f50068",
        borderWidth: 2
    }
});

export default PersonalWork
