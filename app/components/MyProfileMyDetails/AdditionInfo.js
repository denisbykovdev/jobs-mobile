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

import React, {Component, useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {icons, images} from "../../configs/imagesAndIconsUrl";
import {LinearGradient} from "expo-linear-gradient";
import {getUserToken, JobUrl, Token} from "../../configs/ApiCallHelper";
import { verificationSuccess } from '../../actions/authActions';
import axios from "axios";


const AdditionInfo = () => {
    const userSelector = useSelector(state=>state.auth.user);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(verificationSuccess())
    }, [])

    const getAdditionalInfo = async () => {
        const url = `${JobUrl}/api/user`
        const token = await AsyncStorage.getItem('token') ;
        axios.get(url,
            {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {
//                console.log("additionalInfo", response.data.data);
            }).catch(error => console.log("additionalInfoError", error));
    }

    const postAdditionalInfo = async () => {
        const url = `${JobUrl}/api/profile/additionalInfo/store`
                // const token = await getUserToken()
                const token = await AsyncStorage.getItem('token') ;
                axios.post(url,
                    {
                        email : 'boyfromodessa@gmail.com',
                        type_id : 5,
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${JSON.parse(token)}`,
                        },
                    }).then(response => {
                     console.log("additionalInfo", response);
                     setIsSuccessfully(!isSuccessfully);

                }).catch(error => console.log("additionalInfoError", error));
    }
    useEffect(() => {
            getAdditionalInfo().then()
    }, [])
    const [isSuccessfully, setIsSuccessfully] = useState(false)
    const [isEditNumberTrue, setIsEditNumberTrue] = useState("0")
    const [testInput1,setTestInput1 ] = useState("")
    const [testInput2,setTestInput2 ] = useState("")
    const [testInput3,setTestInput3 ] = useState("")


    return (<>
            <View>
                <View style={styles.boxUpMain}>

                    <View>

                        <View style={styles.boxUp}>
                            {isEditNumberTrue !== "1" &&
                            <TouchableOpacity onPress={() => setIsEditNumberTrue("1")}>
                                <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.circle}>
                                    <Image source={icons.editNumber}
                                           style={{width: 17, height: 17}}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            }


                            {isEditNumberTrue === "1" &&
                            <TextInput
                                multiline={false}
                                placeholder={"מייל"}
                                secureTextEntry={false}
                                placeholderTextColor={"rgba(23, 44, 96, 0.5)"}
                                style={styles.InputText}
                                onEndEditing={() => setIsEditNumberTrue("0")}
                                onChangeText={text => setTestInput1(text)}
                                value={testInput1}
                            />
                            }
                            <View style={styles.boxUpLeftText}>
                                {isEditNumberTrue !== "1" && <Text style={styles.boxUpText}>{testInput1 || "מייל"}</Text>}
                                <Image source={icons.myDetailsMessageIcon}
                                       style={{width: 19, height: 12, marginLeft: 14}}/>
                            </View>
                        </View>


                        <View style={styles.boxUp}>
                            {isEditNumberTrue !== "2" &&
                            <TouchableOpacity onPress={() => setIsEditNumberTrue("2")}>
                                <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.circle}>
                                    <Image source={icons.editNumber}
                                           style={{width: 17, height: 17}}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            }

                            {isEditNumberTrue === "2" &&
                            <TextInput
                                multiline={false}
                                placeholder={`מוס`}
                                secureTextEntry={false}
                                placeholderTextColor={"rgba(23, 44, 96, 0.5)"}
                                style={styles.InputText}
                                onEndEditing={() => setIsEditNumberTrue("0")}
                                onChangeText={text => setTestInput2(text)}
                                value={testInput2}
                            />
                            }

                            <View style={styles.boxUpLeftText}>
                                {isEditNumberTrue !== "2" && <Text style={styles.boxUpText}>{testInput2 || "מוסד לימודים"}</Text>}
                                <Image source={icons.myDetailsProfileIcon}
                                       style={{width: 19, height: 21, marginLeft: 14}}/>
                            </View>
                        </View>


                        <View style={styles.boxUp}>

                            {isEditNumberTrue !== "3" &&
                            <TouchableOpacity onPress={() => setIsEditNumberTrue("3")}>
                                <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.circle}>
                                    <Image source={icons.editNumber}
                                           style={{width: 17, height: 17}}/>
                                </LinearGradient>
                            </TouchableOpacity>
                            }

                            {isEditNumberTrue === "3" &&
                            <TextInput
                                multiline={false}
                                placeholder={`הסטטוס שלי`}
                                secureTextEntry={false}
                                placeholderTextColor={"rgba(23, 44, 96, 0.5)"}
                                style={styles.InputText}
                                onEndEditing={() => setIsEditNumberTrue("0")}
                                onChangeText={text => setTestInput3(text)}
                                value={testInput3}
                            />
                            }

                            <View style={styles.boxUpLeftText}>
                                {isEditNumberTrue !== "3" && <Text style={styles.boxUpText}>{testInput3 || "הסטטוס שלי"}</Text> }
                                <Image source={icons.myDetailsShieldIcon}
                                       style={{width: 20, height: 25, marginLeft: 14}}/>
                            </View>
                        </View>


                    </View>
                    <View style={{alignItems: "center", marginVertical: 15}}>
                        <TouchableOpacity style={styles.bottomMain} onPress={() => postAdditionalInfo()}>
                            <Text style={styles.bottomMainText}>שמירת הפרופיל שלי</Text>
                        </TouchableOpacity>
                        {isSuccessfully &&
                        <Image source={images.SuccessfullyPreserved}
                               style={{width: 264, marginTop: 70, height: 66, position: "absolute", zIndex: 1}}/>
                        }

                    </View>

                </View>

                <View style={{backgroundColor: "#fff", top: -2, zIndex: -1}}>
                    <Image source={icons.MyProfileComponent}
                           style={{width: "100%", height: 100}}/>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
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

    bottomMain: {
        width: "100%",
        paddingVertical: 19,
        alignItems: "center",
        backgroundColor: 'rgba(186, 190, 199, 0.5)',
    },

    bottomMainText: {
        fontSize: 18,
        fontWeight: "700",
        opacity: 1,
        color: "rgba(255, 255, 255, 0.8)",
    },


    InputText: {
        width: "90%",
        height: 40,
        textAlign: "right",
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 5
    },


})

export default AdditionInfo