import {Image, ScrollView, Text, StyleSheet, View, ImageBackground, TouchableOpacity} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React ,{useState}from "react";
import Header from "../components/Header";
import Stars from 'react-native-stars';
import ReviewsRow from "../components/ReviewsRow";
import {reviews} from "../configs/FakeData"
import Footer from "../components/Footer";
import {LinearGradient} from "expo-linear-gradient";

const PageForApproveReview = ({navigation}) => {
    const [id, setId] = useState((navigation && navigation.state && navigation.state.params && navigation.state.params.idJob) || 2);


    return (
        <View style={{flex: 1,}}>
            <ScrollView>
                <ImageBackground
                    source={images.PageForApproveReviewFon} style={styles.bgImage}>
                    <Header
                        navigation={navigation}
                        whiteHeader={true}
                    />
                    <TouchableOpacity style={{marginTop: 145, alignItems: "center"}}>
                        <Image source={icons.PageForApproveReviewButton}/>
                    </TouchableOpacity>
                </ImageBackground>
                <View style={styles.successBlock}>
                    <Image source={icons.testDownLeft} style={styles.imageBgUp}/>
                    <View style={{alignItems: "center", marginTop: "5%"}}>
                        <Text style={styles.successBlockText}>.חוות הדעת שלך תפורסם באפליקציה
                            אנו רוצים לוודא שהיא מדוייקת
                            .לפני שנוציא אותה לקהל הרחב</Text>
                    </View>
                    <Image source={icons.testDown} style={styles.imageBgDown}/>
                </View>
                <View style={{marginTop:70,alignItems:"center",paddingHorizontal:32}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("NewReview")}>
                        <Text style={{color:"#30b8b2",fontSize:15,fontWeight:"bold"}}>תראו לי את מה שכתבתי</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                                      onPress={() => navigation.navigate("PopupSuccess",{idJob:id})}>
                        <Text style={styles.btnText}>אישור הפרטים שכתבתי ושליחה</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    bgImage: {
        resizeMode: "cover",
        top: -2,
        height: 550,
    },

    bgTitle: {
        color: "white",
        fontSize: 34,
        fontWeight: "bold"
    },


    dotsRow: {
        justifyContent: "space-around",
        flexDirection: "row",
    },


    linerGradientBlock: {
        width: 95,
        height: 95,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        position: "absolute",
        left: "40%",
        bottom: -50
    },

    sucsessIcon: {
        width: 56,
        height: 56,
    },

    imageBgUp: {
        width: "40%",
        height: 86,
        // backgroundColor: "red",
        position: "absolute",
        left: 0,
        marginTop: 70
    },

    imageBgDown: {
        width: "40%",
        height: 86,
        // backgroundColor: "red",
        position: "absolute",
        right: 0,
        marginTop: 70
    },

    successBlock: {
        marginHorizontal: 37,
        marginTop: 25
    },

    successBlockText: {
        color: "#163066",
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
    },


    btn: {
        width: "100%",
        backgroundColor:"#30b8b2",
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 20,
        borderRadius: 5
    },

    btnText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }

});


export default PageForApproveReview
