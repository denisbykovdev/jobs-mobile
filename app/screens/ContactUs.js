import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    View,
    AsyncStorage
} from "react-native";
import Header from "../components/Header";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React, {useEffect} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";

const ContactUs = ({navigation}) => {


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const token = await getUserToken();
    //         // const token = await AsyncStorage.getItem('token');
    //         const url = `${JobUrl}/api/libraries/categories`;
    //         axios.get(url,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${JSON.parse(token)}`
    //                 },
    //             }).then(response => {
    //
    //             console.log("categories", response);
    //
    //         }).catch(error => console.log("categories", error));
    //     }
    //     fetchData().then()
    // }, [])
    //

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <ImageBackground source={images.contactUs} style={{width: "102%"}}>

                    <View style={styles.imgBox}>
                        <View style={styles.header}>
                            <Image source={icons.whiteHorizontalLogo}
                                   style={{width: 154, height: 36}}/>
                        </View>
                        <View style={{height: 80}}/>

                        <View style={styles.imgBoxIcon}>
                            <View style={styles.grinLine}/>
                            <Image source={icons.IconContacts} style={styles.IconContacts}/>
                            <View style={styles.grinLine}/>
                        </View>

                        <View style={{alignItems: "center"}}>
                            <Text style={{fontSize: 14, color: "#fff"}}>יצירת קשר</Text>
                            <Text style={{fontSize: 30, color: "#fff", fontWeight: "bold", marginTop: 5}}>אנחנו כאן לכל
                                שאלה</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.TextInputsBox}>
                    <TextInput
                        style={styles.textInputs}
                        multiline={false}
                        keyboardType={"email-address"}
                        placeholder={"כותרת הפנייה *"}
                        secureTextEntry={false}
                        placeholderTextColor={"#e1e1e1"}
                        placeholderStyle={styles.placeHolder_styles}
                    />
                    {/*<TextInput*/}
                    {/*    style={styles.textInputs}*/}
                    {/*    multiline={false}*/}
                    {/*    keyboardType={"numeric"}*/}
                    {/*    placeholder={" חיפוש... "}*/}
                    {/*    secureTextEntry={false}*/}
                    {/*    placeholderTextColor={"#e1e1e1"}*/}
                    {/*    placeholderStyle={styles.placeHolder_styles}*/}
                    {/*/>*/}
                    {/*<TextInput*/}
                    {/*    style={styles.textInputs}*/}
                    {/*    multiline={false}*/}
                    {/*    keyboardType={"numeric"}*/}
                    {/*    placeholder={" חיפוש... "}*/}
                    {/*    secureTextEntry={false}*/}
                    {/*    placeholderTextColor={"#e1e1e1"}*/}
                    {/*    placeholderStyle={styles.placeHolder_styles}*/}
                    {/*/>*/}
                </View>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 48,
    },

    imgBox: {
        height: 395,
        alignItems: 'center'
    },

    imgBoxIcon: {
        marginBottom: 25,
        width: 220,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },

    grinLine: {
        height: 2,
        backgroundColor: "#3cd0bd",
        width: 37,
        marginTop: 10

    },

    IconContacts: {
        width: 44,
        height: 40,
        marginHorizontal: 10
    },

    TextInputsBox: {
        marginTop: 20,
        paddingHorizontal: 32
    },

    textInputs: {
        borderWidth: 1,
        paddingHorizontal: 19,
        borderColor:"rgba(57, 73, 109, 0.3)",
        borderRadius:5,
        height: 40,
    }


})

export default ContactUs
