import {Image, ScrollView, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React from "react";
import Header from "../components/Header";
import {LinearGradient} from "expo-linear-gradient";
import {candidatesFields} from "../configs/FakeData"
import HrFooter from "../components/HrFooter";
import { responsiveHeight} from "../utils/layout";

const ProfileOfContender = ({navigation}) => {

    return (
        <View style={{flex: 1,backgroundColor:"#ffffff"}}>
            {/* TODO: Changing options for responsive page. */}
            <View 
                 style={{
                    marginHorizontal: responsiveHeight(17.5),
                    marginTop: responsiveHeight(5)
                }}>
                <Header navigation={navigation}/>
            </View>
            <ScrollView style={{flex: 1}}>
                <View style={styles.mainContainer}>
                    <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.gradientBg}/>
                    <View style={styles.candidatesIcon}>
                        <Image source={images.candidatesImg} style={styles.candidatesImg}/>
                    </View>
                    <View style={[styles.profileBlock,shadowStyle]}>
                        <View style={{alignItems: "center"}}>
                        <Text style={styles.title}>שם מועמד</Text>
                        <Text style={styles.date}>תאריך הגשה: 01.12.2020 </Text>
                        <View style={styles.infoRow}>
                            <Text style={styles.rowFirstItem}>מתמודדים</Text>
                            <View style={styles.dots}/>
                            <Text style={styles.rowSecondItem}>שם תקן</Text>
                            <View style={styles.dots}/>
                            <Image source={icons.homeGreen} style={styles.homeGreen}/>
                        </View>
                        </View>
                        <View style={styles.fieldsBlock}>
                            {candidatesFields.map((item, index) => {
                                return (
                                    <View style={styles.fieldRow} key={index}>
                                        <Text
                                            style={[styles.fields, {color: item.pink ? "#F50068" : "#172C60"}]}>{item.field}</Text>
                                        <Text style={styles.fields}>{item.fieldValue}</Text>
                                    </View>
                                )
                            })
                            }
                        </View>
                        <TouchableOpacity>

                        </TouchableOpacity>
                        <View style={styles.selectionBtn}>
                            <TouchableOpacity onPress={ ()=>navigation.navigate("SortBy")}>
                                <Text style={styles.selectionBtnText}>בחירת המתמודדת</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contactItemsRow}>
                            <TouchableOpacity>
                                <View style={styles.lightGreenCircle}>
                                    <View style={styles.greenCircle}>
                                        <Image source={icons.chat}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.lightGreenCircle}>
                                    <View style={styles.greenCircle}>
                                        <Text style={styles.smsField}>
                                            SMS
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.lightGreenCircle}>
                                    <View style={styles.greenCircle}>
                                        <Image source={icons.whatsApp}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.lightGreenCircle}>
                                    <View style={styles.greenCircle}>
                                        <Image source={icons.phone}/>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <HrFooter/>
        </View>
    )
}


const shadowStyle = {
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    shadowOffset: {width: 0, height: 8},
    // elevation: 0.1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    elevation:10
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 32,
        justifyContent: "center"
    },

    gradientBg: {
        flex: 1,
        resizeMode: "cover",
        height: 88,
        marginTop: 26,
        paddingTop: 21,
        zIndex: -100,
        backgroundColor: "red"
    },

    bgTitle: {
        color: "white",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 26
    },

    candidatesIcon: {
        width: 81,
        height: 81,
        backgroundColor: "white",
        position: "absolute",
        zIndex: 30000,
        left: "50%",
        top: "5%",
        borderRadius: 5,
        elevation:17
    },

    candidatesImg: {
        borderRadius: 5,
        width: 81,
        height: 81,
        position: "absolute",
        top: 0
    },

    profileBlock: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
        marginTop: -21,
        zIndex: 10000,
        backgroundColor: "white",
        paddingTop: "20%",
        // elevation:1,
        paddingHorizontal: 10,
        padding:10,
        marginBottom:10
    },

    title: {
        color: "#172C60",
        fontSize: 24
    },

    date: {
        color: "#172C60"
    },

    infoRow: {
        width: "60%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 20
    },

    homeGreen: {
        width: 17,
        height: 14
    },

    rowFirstItem: {
        color: "#39496D"
    },

    rowSecondItem: {
        color: "#30B8B2"
    },

    dots: {
        width: 5,
        height: 5,
        backgroundColor: "#707070",
        borderRadius: 50
    },
    fieldsBlock: {
        width: "100%",
        marginTop: 30
    },

    fieldRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 0.2,
        borderBottomColor: "#707070",
        paddingVertical: 25,
        borderRadius: 5
    },

    fields: {
        color: "#172C60",
        fontSize: 16
    },

    btnRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems:"center"
        marginTop: 30
    },

    cancelBtn: {
        backgroundColor: "#A7ABBA",
        width: "45%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        height: 53
    },
    waitingListBtn: {
        borderColor: "#30B8B2",
        borderWidth: 2,
        borderRadius: 5,
        width: "45%",
        alignItems: "center",
        justifyContent: "center",
    },

    cancelBtnText: {
        color: "white",
        fontSize: 13
    },

    waitingListBtnText: {
        color: "#172C60",
        width: 100,
        textAlign: "center"
    },

    selectionBtn: {
        backgroundColor: "#30B8B2",
        paddingVertical: 15,
        marginTop: 20,
        alignItems: "center",
        borderRadius: 5,
    },

    selectionBtnText: {
        color: "white",
        fontSize: 18
    },

    contactItemsRow: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 0.2,
        borderTopColor: "#707070",
        paddingTop: 20,
        borderRadius: 5
    },

    lightGreenCircle: {
        width: 51,
        height: 51,
        backgroundColor: "#BFE9E7",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },

    greenCircle: {
        width: 41,
        height: 41,
        backgroundColor: "#30B8B2",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },

    contactIcons: {
        width: 51,
        height: 51
    },

    smsField: {
        color: "white",
        fontWeight: "bold"
    }


});


export default ProfileOfContender
