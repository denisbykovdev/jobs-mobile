import {Image, ScrollView, Text, StyleSheet, View, AsyncStorage, TouchableOpacity, TextInput} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React, {useState, useEffect} from "react";
import TabControllerHr from "../components/ListOfOpenOpportunities/TabControllerHr";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from 'expo-image-picker';
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import axios from "axios";

const PersonalDetailsEditHr = ({navigation}) => {
    const [uploadedImage, setUploadedImage] = useState("")
    const [imageUploaded, setImageUploaded] = useState(false)
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [association, setAssociation] = useState("")
    const [miles, setMiles] = useState("")
    const [about, setAbout] = useState("")

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
    const getAdditionalInfo = async () => {
            const url = `${JobUrl}/api/user`
            const token = await AsyncStorage.getItem('token') ;
            axios.get(url,
                {
                    headers: {
                        'Authorization': `Bearer ${JSON.parse(token)}`
                    },
                }).then(response => {
                    console.log("additionalInfo", response.data.data);
                }).catch(error => console.log("additionalInfoError", error));
        }
    useEffect(() => {
            getAdditionalInfo().then()
    }, [])

    return (
        <ScrollView style={{flex: 1}}>
            <TabControllerHr chosenTab = {1} navigation={navigation}/>
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={openImagePickerAsync}>
                    <View style={{alignItems: "center", marginTop: 20, marginBottom: 90}}>
                        <Image source={icons.logoHorizontal} style={styles.logo}/>
                    </View>

                    <View style={{alignItems: "center"}}>
                        {uploadedImage ?
                            <Image source={{uri: uploadedImage}} style={styles.uploadedImage}/> :
                            <Image source={icons.addImage} style={styles.addImage}/>

                        }
                    </View>
                </TouchableOpacity>

                <Text style={styles.infoText}>הפרטים שלי</Text>
                <View style={styles.nameRow}>
                    <View style={[styles.nameInput, {backgroundColor: lastName.length > 0 ? "#f4f4f4" : "white"}]}>
                        <Image source={icons.pencil} style={styles.pencil}/>
                        <TextInput
                            multiline={false}
                            placeholder={"שם משפחה"}
                            secureTextEntry={false}
                            placeholderTextColor={"#e1e1e1"}
                            placeholderStyle={styles.placeHolder_styles}
                            onChangeText={(value) => setLastName(value)}
                        />
                    </View>
                    <View style={[styles.nameInput, {backgroundColor: name.length > 0 ? "#f4f4f4" : "white"}]}>
                        <Image source={icons.pencil} style={styles.pencil}/>
                        <TextInput
                            multiline={false}
                            placeholder={"שם"}
                            secureTextEntry={false}
                            placeholderTextColor={"#e1e1e1"}
                            placeholderStyle={styles.placeHolder_styles}
                            onChangeText={(value) => setName(value)}

                        />
                    </View>
                </View>
                <View style={[styles.nameInput, {width:"100%",backgroundColor: phone.length > 0 ? "#f4f4f4" : "white"}]}>
                    <Image source={icons.pencil} style={styles.pencil}/>
                    <TextInput
                        multiline={false}
                        placeholder={"שם"}
                        secureTextEntry={false}
                        placeholderTextColor={"#e1e1e1"}
                        placeholderStyle={styles.placeHolder_styles}
                        onChangeText={(value) => setPhone(value)}
                        keyboardType={"numeric"}

                    />
                </View>
                <TextInput
                    style={[styles.text_input ,{backgroundColor: association.length > 0 && "#f4f4f4" }]}
                    multiline={false}
                    placeholder={"שם משפחה"}
                    secureTextEntry={false}
                    placeholderTextColor={"#e1e1e1"}
                    placeholderStyle={styles.placeHolder_styles}
                    onChangeText={(value) => setAssociation(value)}
                />

                <DropDownPicker
                    selectedLabelStyle={{color: '#61646d'}}
                    style={styles.picker}
                    items={[
                        {label: 'איזור בארץ', value: '1'},
                        {label: 'איזור בארץ', value: '2'},
                        {label: 'איזור בארץ', value: '3'},
                    ]}
                    defaultIndex={0}
                    defaultValue="1"
                    labelStyle={styles.label_styles}
                    arrowStyle={styles.arrow_style}
                    zIndex={6000}
                    arrowColor="#39496d"
                    dropDownStyle={{backgroundColor: "white"}}
                    containerStyle={{borderRadius: 100}}
                    onChangeItem={item => console.log(item.label, item.value)}
                />

                {/*<View style={styles.numberBlock}>*/}
                {/*    <TouchableOpacity>*/}
                {/*        <View style={styles.editNumber}>*/}
                {/*            <Image source={icons.editNumber} style={{width: 24, height: 23}}/>*/}
                {/*        </View>*/}
                {/*    </TouchableOpacity>*/}
                {/*    <View style={styles.number}>*/}
                {/*        <Text style={styles.numberText}>054-54545454</Text>*/}
                {/*    </View>*/}
                {/*</View>*/}
                <TextInput
                    style={[styles.text_input,{backgroundColor:miles.length> 0 && "#f4f4f4" }]}
                    multiline={false}
                    placeholder={"אימייל"}
                    secureTextEntry={false}
                    placeholderTextColor={"#e1e1e1"}
                    placeholderStyle={styles.placeHolder_styles}
                    onChangeText={(value) => setMiles(value)}

                />
                <TextInput
                    style={[styles.text_input, styles.paddingVertical,
                        {backgroundColor:about.length > 0 && "#f4f4f4"}
                    ]}
                    multiline={false}
                    placeholder={"ספרי על עצמך"}
                    secureTextEntry={false}
                    placeholderTextColor={"#e1e1e1"}
                    placeholderStyle={styles.placeHolder_styles}
                    onChangeText={(value) => setAbout(value)}
                />
                <TouchableOpacity onPress={()=>navigation.navigate("OpportunitiesPageHr")}>
                    <View style={styles.saveBtn}>
                        <Text style={styles.saveBtnText}>כניסה ומעבר לתקנים שלי</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const shadowStyle = {
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    elevation: 1,
    borderTopWidth: 0,
    borderWidth: 0.2,
    borderColor: "#EEEEEE",
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 32,
        justifyContent: "center",
        marginBottom: 30,
        marginTop: 47
    },

    infoText: {
        color: "#39496d",
        fontWeight: "600",
        paddingTop: 31,
        textAlign: "center"
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
        flexDirection: "row",
        justifyContent: "space-between",
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
        // width:"100%",
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
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
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
    }

});


export default PersonalDetailsEditHr
