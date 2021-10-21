import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    View
} from "react-native";

import React, {useState} from "react";
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import HrFooter from "../components/HrFooter";
import {LinearGradient} from "expo-linear-gradient";
import {textInput, checkButton, checkButton2} from "../configs/FakeData";
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import axios from "axios";

import CreatingPicker from "../components/CreatingTheOppertunitiesHR/CreatingPicker";
import * as ImagePicker from "expo-image-picker";


const CreatingTheOppertunitiesHR = ({navigation}) => {

    const [uploadedImage, setUploadedImage] = useState("");
    const [imageUploaded, setImageUploaded] = useState(false)

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

    const createOpportunity = async () => {
        const url = `${JobUrl}/api/opportunity/2/store`
        // const token = await getUserToken()
        const token = await AsyncStorage.getItem('token') ;
        console.log(token);
        axios.post(url,
            {
            title: 'test job',
            category_id: 3,
            subcategory_id: 4,
            organization_id: 6,
            route_id : [13,14,15],
            job_for: 'מיועד לבנים בלבד',
            description: 'This test job do not have any description',
            area_id: 1,
            city_id: 1,
            address: 'do not have address',
            place: 'home',
            nucleus: 'כן',
            count: 15,
            how_to_sort: 'מיונים מוקדמים',
            images: '',
            video_url: '',
            last_date_for_registration: '2021-01-15',
            other_hr_name: 'test',
            other_hr_phone: '+3745633221',
            },
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                },
            }).then(response => {
             console.log("createOpportunity", response);
        }).catch(error => console.log("createOpportunityError", error));

    }

    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <ScrollView>

                <View style={{paddingHorizontal: 32}}>

                    <View>
                        <LinearGradient colors={['#3CD0BD', '#219BA5']}
                                        style={styles.image}>

                        </LinearGradient>

                        <View style={[styles.buttonBoxMain]}>

                            <View style={[styles.buttonsBox]}>

                                <Text style={styles.topButtonUpText}>יצירת מדרשה</Text>

                                <View style={styles.topButton}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder={"שם המדרשה"}
                                        // onChangeText={text => setText(text)}
                                        // defaultValue={text}
                                    />
                                </View>

                                <TouchableOpacity style={styles.topButton}>
                                    <Image source={icons.arrowBottom} style={{top: 12}}/>
                                    <Text style={styles.topButtonText}>איזור בארץ</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.topButton}>
                                    <Image source={icons.arrowBottom} style={{top: 12}}/>
                                    <Text style={styles.topButtonText}>ישוב</Text>
                                </TouchableOpacity>

                                <View style={styles.topButton}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder={"כתובת"}
                                        // onChangeText={text => setText(text)}
                                        // defaultValue={text}
                                    />
                                </View>


                                <TouchableOpacity style={styles.topButton}>
                                    <Image source={icons.arrowBottom} style={{top: 12}}/>
                                    <Text style={styles.topButtonText}>תכנית</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.topButton}>
                                    <Image source={icons.arrowBottom} style={{top: 12}}/>
                                    <Text style={styles.topButtonText}>מגורים</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.topButton}>
                                    <Image source={icons.arrowBottom} style={{top: 12}}/>
                                    <Text style={styles.topButtonText}>מסלול</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.topButton}>
                                    <Image source={icons.arrowBottom} style={{top: 12}}/>
                                    <Text style={styles.topButtonText}>תיאור</Text>
                                </TouchableOpacity>

                                <View style={styles.topButton}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder={"כתובת"}
                                        // onChangeText={text => setText(text)}
                                        // defaultValue={text}
                                    />
                                </View>



                                <View style={styles.largeTextInpute}>
                                    <TextInput
                                        style={styles.topButtonText}
                                        placeholder={"תיאור התקן"}
                                        // onChangeText={text => setText(text)}
                                        // defaultValue={text}
                                    />
                                </View>


                            </View>





                            {/*<View style={styles.imageBottom}>*/}
                            {/*    <Image source={icons.CreatingTheOppertunitiesIcon} style={styles.CreatingTheOppertunitiesIcon}/>*/}
                            {/*    <Text style={styles.imageBottomText}>הוסף תמונה</Text>*/}
                            {/*</View>*/}


                            <TouchableOpacity onPress={openImagePickerAsync}>
                                <View style={{alignItems: "center"}}>
                                    {uploadedImage ?
                                        <View style={styles.imageBottom}>
                                            <Image source={{uri: uploadedImage}} style={styles.uploadedImage}/>
                                        </View>
                                        :
                                        <View style={styles.imageBottom}>
                                            <Image source={icons.CreatingTheOppertunitiesIcon}
                                                   style={styles.CreatingTheOppertunitiesIcon}/>
                                            <Text style={styles.imageBottomText}>הוסף תמונה</Text>
                                        </View>


                                    }
                                </View>
                            </TouchableOpacity>

                            <View style={styles.topButton}>
                                <TextInput
                                    style={styles.topButtonText}
                                    placeholder={"קישור לסרטון ביוטיוב"}
                                    // onChangeText={text => setText(text)}
                                    // defaultValue={text}
                                />
                            </View>

                            <View style={styles.topButton}>
                                <TextInput
                                    style={styles.topButtonText}
                                    placeholder={"שם איש קשר"}
                                    // onChangeText={text => setText(text)}
                                    // defaultValue={text}
                                />
                            </View>

                            <View style={styles.topButton}>
                                <TextInput
                                    style={styles.topButtonText}
                                    placeholder={"טלפון ליצירת קשר"}
                                    // onChangeText={text => setText(text)}
                                    // defaultValue={text}
                                />
                            </View>


                            <TouchableOpacity style={styles.downButton} onPress={()=>createOpportunity()}>
                                <Text style={styles.downButtonText}>פרסום מדרשה </Text>
                            </TouchableOpacity>

                            {/*<View style={{paddingHorizontal: 10}}>*/}

                            {/*</View>*/}

                        </View>


                        <View style={styles.groupPersonLogo}>
                            <View style={styles.circleLogoMidrashot}>
                                <Image source={icons.LogoMidrashot} style={styles.LogoMidrashot}/>
                            </View>
                        </View>

                    </View>


                </View>


            </ScrollView>
            <HrFooter chosenFooter={4} navigation={navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 80,
        marginTop: 33,
    },
    buttonBoxMain: {
        paddingHorizontal: 10,
        backgroundColor: "#FFF",
        paddingTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderWidth: 2,
        borderColor: "rgba(31, 30, 29, 0.2)",
        top: -30,
        paddingBottom: 10,
    },

    buttonBox: {
        flex: 1,
        flexDirection: "row",
        // alignItems:"center",
        height: "50%",
        marginBottom: 10
    },
    buttonsBox: {
        alignItems: "center",
        paddingHorizontal: 10,
    },

    topButtonUpText: {
        fontSize: 18,
        color: "#172c60",
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 20
    },

    topButton: {
        borderColor: "rgba(31, 30, 29, 0.2)",
        borderWidth: 2,
        width: "100%",
        height: 45,
        borderRadius: 4,
        paddingHorizontal: "5%",
        justifyContent: "center",
        marginBottom: 18
    },

    topButtonText: {
        color: "#39496d",
        fontSize: 14,
        fontWeight: "100",
        textAlign: "right",
    },

    buttonText: {
        color: "#39496d",
        fontSize: 14,
        //fontWeight: "100",
        //textAlign:"right",
    },

    largeTextInpute: {
        borderColor: "rgba(31, 30, 29, 0.2)",
        borderWidth: 2,
        width: "100%",
        height: 98,
        borderRadius: 4,
        paddingHorizontal: "5%",
        marginBottom: 18
    },

    boxDateMainUpText: {
        marginBottom: 15
    },

    boxDateMain: {
        flexDirection: "row",
        flex: 1,
        width: "100%"
    },

    boxDate: {

        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#39496d",
        marginHorizontal: 10,
        height: 40
    },

    boxDateText: {
        color: "#172c60"
    },

    imageBottom: {
        marginBottom: 20,
        alignItems: "center",
        width: "100%",
        height: 147,
        backgroundColor: "rgba(31, 30, 29, 0.12)",
        borderRadius: 10
    },

    CreatingTheOppertunitiesIcon: {
        width: 105,
        height: 95,
        marginTop: 10,
        marginBottom: 5
    },

    imageBottomText: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "bold"
    },

    downButton: {

        backgroundColor: "#30b8b2",
        width: "100%",
        height: 53,
        borderRadius: 4,
        paddingHorizontal: "5%",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 18
    },

    downButtonText: {
        color: "#fefeff",
        fontSize: 18,
        fontWeight: "bold",
    },


    groupPersonLogo: {
        top: 60,
        alignItems: "center",
        position: "absolute",
        width: "100%",

    },

    circleLogoMidrashot: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    },

    LogoMidrashot: {
        width: 36,
        height: 36
    },


})

export default CreatingTheOppertunitiesHR
