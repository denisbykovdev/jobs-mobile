import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    AsyncStorage,
    SafeAreaView
} from "react-native";

import React, {useState, useEffect} from "react";
import {icons, images} from "../../configs/imagesAndIconsUrl";
import {LinearGradient} from "expo-linear-gradient";
import * as ImagePicker from "expo-image-picker";
import {getUserToken, JobUrl, Token} from "../../configs/ApiCallHelper";
import axios from "axios";


const PersonalData = () => {

    const [isEditNumberTrue, setIsEditNumberTrue] = useState(false);

    const [changeName, setName] = useState();
    const [changeLastname, setLastname] = useState();
    const [changeCity, setCity] = useState();

    const [editName, setEditName] = useState(false);
    const [editLastname, setEditLastname] = useState(false);
    const [editCity, setEditCity] = useState(false);
    const [addCity, setAddCity] = useState(false);

    const [uploadedImage, setUploadedImage] = useState("");
    const [imageUploaded, setImageUploaded] = useState(false)
    const [userData, setUserData] = useState({});

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult.uri);
        setUploadedImage(pickerResult.uri)
        setImageUploaded(true)
    }


    const changeIsEditNumberTrue = () => {
        setIsEditNumberTrue(!isEditNumberTrue)
    }

    const getAdditionalInfo = async () => {
        const url = `${JobUrl}/api/user`
        const token = await AsyncStorage.getItem('token') ;
        axios.get(url,
            {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {
                setUserData(response.data && response.data.data);
                console.log("personalDataInfo", response.data.data);
                setName(userData.first_name);
                setLastname(userData.last_name);
                setCity(userData.city);
            }).catch(error => console.log("additionalInfoError", error));
    }

    const postPersonalInfo = async () => {
        const url = `${JobUrl}/api/profile/details/store`
            // const token = await getUserToken()
            const token = await AsyncStorage.getItem('token') ;
            axios.post(url,
                {
                    first_name : 'VladTest',
                    last_name : 'Tester',
                    city_id : 3,
                },
                {
                    headers: {
                        'Authorization': `Bearer ${JSON.parse(token)}`,
                    },
                }).then(response => {
                 console.log("PersonalInfo", response);

            }).catch(error => console.log("PersonalInfoError", error));
    }

    useEffect(() => {
        getAdditionalInfo().then()
    }, [])

    return (<>
            <View>
                <View style={styles.boxUpMain}>

                    <TouchableOpacity onPress={openImagePickerAsync}>
                        <View style={{alignItems: "center", marginBottom: 20}}>
                            {uploadedImage ?
                                <Image source={{uri: uploadedImage}} style={styles.uploadedImage}/> :
                                <Image source={icons.AddPhotoWhite} style={styles.addImage}/>
                            }
                        </View>
                    </TouchableOpacity>

                    <View>

                        <View style={styles.boxUp}>
                            {!editName &&
                            <TouchableOpacity onPress={() => setEditName(!editName)}>
                                <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.circle}>
                                    <Image source={icons.editNumber}
                                           style={{width: 17, height: 17}}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            }

                            {editName &&
                            <TextInput
                                multiline={false}
                                placeholder={`שם פרטי`}
                                secureTextEntry={false}
                                placeholderTextColor={"rgba(23, 44, 96, 0.5)"}
                                style={styles.InputText}

                                onEndEditing={() => setEditName(false)}
                            />
                            }

                            <View style={styles.boxUpLeftText}>
                                {
                                    !editName && <Text style={styles.boxUpText}>{changeName ? changeName : "שם פרטי"}</Text>
                                }
                                <Image source={icons.personalData1icon}
                                       style={{width: 16, height: 21, marginLeft: 14}}/>
                            </View>
                        </View>

                        <View style={styles.boxUp}>

                            {!editLastname &&
                            <TouchableOpacity onPress={() => setEditLastname(!editLastname)}>
                                <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.circle}>
                                    <Image source={icons.editNumber}
                                           style={{width: 17, height: 17}}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            }

                            {editLastname &&
                            <TextInput
                                multiline={false}
                                placeholder={`שם משפחה`}
                                secureTextEntry={false}
                                placeholderTextColor={"rgba(23, 44, 96, 0.5)"}
                                style={styles.InputText}
                                onEndEditing={() => setEditLastname(false)}
                            />
                            }

                            <View style={styles.boxUpLeftText}>
                                {
                                    !editLastname && <Text style={styles.boxUpText}>{userData.last_name ? userData.last_name : "שם משפחה"}</Text>
                                }
                                <Image source={icons.personalData2icon}
                                       style={{width: 16, height: 21, marginLeft: 14}}/>
                            </View>

                        </View>

                        <View style={styles.boxUp}>
                            {!editCity &&
                            <TouchableOpacity onPress={() => setEditCity(!editCity)}>
                                <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.circle}>
                                    <Image source={icons.editNumber}
                                           style={{width: 17, height: 17}}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            }
                            {editCity &&
                            <TextInput
                                multiline={false}
                                placeholder={`יישוב`}
                                secureTextEntry={false}
                                placeholderTextColor={"rgba(23, 44, 96, 0.5)"}
                                style={styles.InputText}
                                onEndEditing={() => setEditCity(false)}
                            />
                            }
                            <View style={styles.boxUpLeftText}>
                                {
                                    !editCity && <Text style={styles.boxUpText}>{userData.city ? userData.city : "יישוב"}</Text>
                                }
                                <Image source={icons.personalData3icon}
                                       style={{width: 20, height: 20, marginLeft: 14}}/>
                            </View>
                        </View>

                        {addCity &&
                        <TextInput
                            multiline={false}
                            placeholder={`שם היישוב שלך`}
                            secureTextEntry={false}
                            placeholderTextColor={"rgba(23, 44, 96, 0.5)"}
                            style={styles.InputTextButton}
                            onEndEditing={() => setEditCity(false)}
                        />
                        }

                    </View>
                    <View style={{alignItems: "center", marginVertical: 15}}>
                        <TouchableOpacity style={isEditNumberTrue ? styles.bottomMainActive : styles.bottomMain } onPress={() => postPersonalInfo()}>
                            <Text style={styles.bottomMainText}>שמירת הנתונים שלי</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{backgroundColor: "#fff", top: -2}}>
                    <Image source={icons.MyProfileComponent}
                           style={{width: "100%", height: 100}}/>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    uploadedImage: {
        width: 147,
        borderRadius: 4,
        height: 147
    },

    addImage: {
        width: 147,
        height: 147
    },

    boxUpMain: {
        backgroundColor: "#efefef",
        paddingHorizontal: 30,
        paddingTop: 30
    },

    boxUp: {
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    boxUpLeftText: {
        flexDirection: "row",
        alignItems: 'center',
    },

    InputText: {
        width: "90%",
        height: 40,
        textAlign: "right",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 5
    },

    InputTextButton:{
        width: "100%",
        height: 40,
        textAlign: "right",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 5
    },

    boxUpText: {
        fontSize: 16,
        color: "#253866"
    },

    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: 47,
        height: 47,
        borderRadius: 47 / 2,
        backgroundColor: '#172c60'
    },
    formText: {
        width: "100%",
        textAlign: "right",
    },
    bottomMain: {
        width: "100%",
        paddingVertical: 19,
        alignItems: "center",
        backgroundColor: 'rgba(186, 190, 199, 0.5)',
    },
    bottomMainActive: {
        width: "100%",
        paddingVertical: 19,
        alignItems: "center",
        backgroundColor: '#30b8b2',
    },

    bottomMainText: {
        fontSize: 18,
        fontWeight: "700",
        opacity: 1,
        color: "rgba(255, 255, 255, 0.8)",
    },

})

export default PersonalData