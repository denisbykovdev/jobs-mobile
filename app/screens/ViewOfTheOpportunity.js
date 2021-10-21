import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import React, {useState} from "react";
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import HrFooter from "../components/HrFooter";
import {LinearGradient} from "expo-linear-gradient";
import YoutubePlayer from "react-native-youtube-iframe";
import {textBox} from "../configs/FakeData";


const ViewOfTheOpportunity = () => {

    return (
        <View style={{flex: 1}}>
            <Header/>
            <ScrollView>

                <View style={{paddingHorizontal: 32}}>

                    <View>
                        <LinearGradient colors={['#3CD0BD', '#219BA5']}
                                        style={styles.image}>

                        </LinearGradient>

                        <View style={[styles.buttonBoxMain]}>

                            <View style={[styles.buttonBox2]}>

                                <Text style={styles.topButtonUpText}>סטטוס</Text>

                                <TouchableOpacity>
                                    <View style={styles.topButton}>
                                        <Image source={icons.arrowBottom}
                                               style={styles.arrowBottom}/>
                                        <Text style={styles.topButtonText}>פתוח להרשמה</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={{paddingHorizontal: 10}}>

                                <View style={styles.textBox}>
                                    <Text style={styles.textBoxInLeft}>סוג התקן </Text>
                                    <Text style={styles.textBoxInRight}>שנת שירות</Text>
                                </View>
                                <View style={styles.textBox}>
                                    <Text style={styles.textBoxInLeft}>חינוך</Text>
                                    <Text style={styles.textBoxInRight}>תחום שירות \ מסלול</Text>
                                </View>
                                <View style={styles.textBox}>
                                    <Text style={styles.textBoxInLeft}>הוראה</Text>
                                    <Text style={styles.textBoxInRight}>תת תחום שירות \ תת מסלול</Text>
                                </View>
                                <View style={styles.textBox}>
                                    <Text style={styles.textBoxInLeft}>בית ספר שדה</Text>
                                    <Text style={styles.textBoxInRight}>שם התקן </Text>
                                </View>
                                <View style={[styles.textBox, {flexDirection: "column"}]}>
                                    <Text style={[styles.textBoxInRight, {marginBottom: 21}]}>תיאור התקן</Text>
                                    <Text style={[styles.textBoxInRight, {fontSize: 14}]}>לורם איפסום דולור סיט אמט,
                                        קונסקטורר אדיפיסינג אלית
                                        ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו
                                        סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.</Text>
                                </View>

                                <View style={[styles.textBox, {flexDirection: "column"}]}>
                                    <Text style={[styles.textBoxInRight, {paddingBottom: 12}]}>וידיאו</Text>

                                    <YoutubePlayer
                                        height={180}
                                        videoId={"iee2TATGMyI"}
                                    />
                                </View>

                                {
                                    textBox.map((item, index) => {
                                        return (
                                            <View style={styles.textBox} key={index}>
                                                <Text style={styles.textBoxInLeft}>{item.textLeft}</Text>
                                                <Text style={styles.textBoxInRight}>{item.textRight}</Text>
                                            </View>
                                        )
                                    })
                                }

                                <View style={[styles.textBox,]}>
                                    <View style={{flexDirection: "row"}}>
                                        <Text style={[styles.textBoxInLeft, {color: "#babec7"}]}>0545454545</Text>
                                        <Image source={icons.phone2}
                                               style={styles.phone2}/>
                                    </View>
                                    <Text style={styles.textBoxInRight}>טלפון רכזת פנימית</Text>
                                </View>


                                <View style={[styles.textBox,]}>
                                    <View style={{flexDirection: "row"}}>
                                        <Text style={[styles.textBoxInLeft, {color: "#30b8b2"}]}>0545454545</Text>
                                        <Image source={icons.phone2}
                                               style={styles.phone2}/>
                                    </View>
                                    <Text style={styles.textBoxInRight}>טלפון רכזת הפרויקט</Text>
                                </View>

                                <View style={[styles.textBox, {borderBottomWidth: 0}]}>
                                    <View style={{flexDirection: "row"}}>
                                        <Text style={[styles.textBoxInLeft, {color: "#30b8b2",fontSize: 14}]}>dana@gmail.com</Text>
                                    </View>
                                    <Text style={styles.textBoxInRight}>מייל רכזת </Text>
                                </View>


                                <TouchableOpacity>
                                    <View style={styles.downButton}>
                                        <Text style={styles.downButtonText}>צפייה במתמודדים</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <View style={[styles.downButton,{backgroundColor: "#babec7",borderWidth: 0}]}>
                                        <Text style={[styles.downButtonText,{color: "#fff"}]}>עריכת התקן </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>


                        <View style={styles.groupPersonLogo}>
                            <Text style={styles.mainText}>{"שם העמותה"}</Text>
                            <Image source={icons.groupPersonLogo} style={styles.groupPersonLogoIcon}/>
                        </View>

                    </View>


                </View>


            </ScrollView>
            <HrFooter/>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 120,
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
    buttonBox2: {
        alignItems: "center",
        paddingHorizontal: 10,
    },

    mainText: {
        fontSize: 26,
        fontWeight: "700",
        color: "#fff",
    },

    topButtonUpText:{
        fontSize: 11,
        color: "rgba(23, 44, 96, 0.4)",
        fontWeight: "600",
        marginBottom: 10
    },

    topButton: {
        borderColor: "#30b8b2",
        borderWidth: 1,
        width: 132,
        height: 22,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    arrowBottom: {
        width: 10,
        height: 5,
        marginRight: 5
    },

    topButtonText: {
        color: "#30b8b2",
        fontSize: 13,
        fontWeight: "bold"
    },
    textBox: {
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomWidth: 0.7,
        borderColor: "#babec7",
        paddingVertical: 24,
    },
    textBoxInLeft: {
        color: "#172c60",
        fontSize: 16,
        fontWeight: "bold"
    },

    phone2: {
        width: 14,
        height: 14,
        marginTop: 5,
        marginLeft: 7
    },

    textBoxInRight: {
        color: "#39496d",
        fontSize: 16
    },

    downButton: {
        paddingVertical: 15,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#268b93",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 23
    },

    downButtonText: {
        color: "#172c60",
        fontSize: 18,
        fontWeight: "bold"
    },

    groupPersonLogo: {
        top: 40,
        alignItems: "center",
        position: "absolute",
        width: "100%",
    },

    groupPersonLogoIcon: {
        marginTop: 10,
        width: 70,
        height: 70
    }

})

export default ViewOfTheOpportunity
