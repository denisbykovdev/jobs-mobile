import React from "react";
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, View} from "react-native";

import {icons, images} from "../configs/imagesAndIconsUrl";
import {LinearGradient} from "expo-linear-gradient";

const HeaderMenu = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <View style={styles.main}>
                    <LinearGradient colors={['#3CD0BD', '#219ba5']} style={styles.topBox}>

                        <Text style={styles.X}>x</Text>
                        <View style={styles.topBoxRight}>
                            <Image source={images.candidatesImg} style={styles.noPhoto}/>
                            <View style={{flexDirection: "row", alignItems: "center", marginBottom: 22}}>
                                <Text style={{color: "#fff", fontSize: 18, fontWeight: "600"}}>שם המשתמש</Text>
                                <Image source={icons.profileWhite} style={{width: 12, height: 16, marginLeft: 20}}/>

                            </View>

                        </View>

                    </LinearGradient>

                    <View style={styles.bottomBox}>

                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.HomeG} style={{width: 18, height: 16, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>ראשי</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.OpportunitiesG} style={{width: 24, height: 23, marginLeft: 13}}/>
                            <Text style={styles.bottomBoxItemsText}>התקנים שלי</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.CreateOpportunity} style={{width: 18, height: 23, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>יצירת תקן חדש</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.CallToOperator} style={{width: 18, height: 18, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>בנות שירות</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.DocumentG} style={{width: 18, height: 18, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>רשימות המתנה</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.myDetailsMessageIcon} style={{width: 18, height: 12, marginLeft: 17}}/>
                            <Text style={styles.bottomBoxItemsText}>צ׳אט</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.NotificationsG} style={{width: 17, height: 20, marginLeft: 17}}/>
                            <Text style={styles.bottomBoxItemsText}>התראות</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.BlogG} style={{width: 18, height: 16, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>בלוג</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.FAQ} style={{width: 16, height: 17, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>שאלות ותשובות</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.ContactUs} style={{width: 15, height: 17, marginLeft: 17}}/>
                            <Text style={styles.bottomBoxItemsText}>יצירת קשר</Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center",
    },

    topBox: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10
    },

    X: {
        color: "#FFF",
        width: "50%",
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 30
    },

    topBoxRight: {
        alignItems: "flex-end",
        marginRight: 30,
        marginTop: 40
    },

    noPhoto: {
        marginBottom: 18,
        width: 58,
        height: 58
    },

    bottomBox: {
        width: "100%",
        paddingHorizontal:27,

    },

    bottomBoxItems: {
        paddingVertical:20,
        borderBottomWidth: 1,
        borderBottomColor:"rgba(60,71,88,0.1)",
        width: "100%",
        flexDirection: "row-reverse",
        alignItems:"center",
    },

    bottomBoxItemsText:{
        color: "#39496d",
        fontSize: 18,
        fontWeight:"600"
    },
})

export default HeaderMenu