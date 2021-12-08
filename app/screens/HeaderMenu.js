import React from "react";
import { useState,useEffect } from 'react';
import {Image, ScrollView, StyleSheet, Text, AsyncStorage, TouchableOpacity, TextInput, View} from "react-native";

import {icons, images} from "../configs/imagesAndIconsUrl";
import {LinearGradient} from "expo-linear-gradient";

const HeaderMenu = ({navigation}) => {
    let user;
    let [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        getUserInfo().then()
    }, [user])

    const getUserInfo = async () => {
        user = JSON.parse(await AsyncStorage.getItem("user"));
        setUserInfo(user);
    }
    console.log("userINFO",userInfo)
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <View style={styles.main}>
                    <LinearGradient colors={['#3CD0BD', '#219ba5']} style={styles.topBox}>

                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Image source={icons.Exit} style={styles.X}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.topBoxRight} onPress={() => navigation.navigate("MyProfileMyDetails")}>
                            <Image source={userInfo && userInfo.photoUrl ? { uri: userInfo && userInfo.photoUrl} : icons.ProfileMenu  } style={styles.noPhoto}/>
                            <View style={{flexDirection: "row", alignItems: "center", marginBottom: 22}}>
                                <Text style={{color: "#fff", fontSize: 18, fontWeight: "600"}}>{userInfo ? userInfo.name : "המשתמש"}</Text>
                                <Image source={icons.profileWhite} style={{width: 12, height: 16, marginLeft: 20}}/>

                            </View>

                        </TouchableOpacity>

                    </LinearGradient>

                    <View style={styles.bottomBox}>

                        <TouchableOpacity style={styles.bottomBoxItems} onPress={ () => navigation.navigate("BottomStack")}>
                            <Image source={icons.HomeG} style={{width: 18, height: 16, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>ראשי</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems} onPress={ () => navigation.navigate("Quiz")}>
                           <Image source={icons.Quiz} style={{width: 17, height: 15, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>שאלון התאמה</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems} onPress={ () => navigation.navigate("SearchWithFilter")}>
                            <Image source={icons.SearchG} style={{width: 18, height: 18, marginLeft: 17}}/>
                            <Text style={styles.bottomBoxItemsText}>חיפוש תקן</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems} onPress={ () => navigation.navigate("Favorites")}>
                            <Image source={icons.FavoritesG} style={{width: 20, height: 19, marginLeft: 17}}/>
                            <Text style={styles.bottomBoxItemsText}>תקנים מועדפים</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems} onPress={ () => navigation.navigate("MyProfileNoReq")}>
                        <Image source={icons.OpportunitiesG} style={{width: 24, height: 23, marginLeft: 13}}/>
                            <Text style={styles.bottomBoxItemsText}>התקנים שלי</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems} onPress={()=>navigation.navigate("Category")}>
                            <Image source={icons.CategoriesG} style={{width: 15, height: 15, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>קטלוג תחומים</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems} onPress={()=>navigation.navigate("Blog")}>
                            <Image source={icons.BlogG} style={{width: 18, height: 16, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>בלוג</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.FAQ} style={{width: 16, height: 17, marginLeft: 18}}/>
                            <Text style={styles.bottomBoxItemsText}>שאלות ותשובות</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems}>
                            <Image source={icons.myDetailsMessageIcon} style={{width: 18, height: 12, marginLeft: 17}}/>
                            <Text style={styles.bottomBoxItemsText}>צ׳אט</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems} onPress={()=>navigation.navigate("Notifications")}>
                            <Image source={icons.NotificationsG} style={{width: 17, height: 20, marginLeft: 17}}/>
                            <Text style={styles.bottomBoxItemsText}>התראות</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bottomBoxItems} onPress={ () => navigation.navigate("ContactUs")}>
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
        width: 25,
        height: 26,
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
        paddingHorizontal: 27,

    },

    bottomBoxItems: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(60,71,88,0.1)",
        width: "100%",
        flexDirection: "row-reverse",
        alignItems: "center",
    },

    bottomBoxItemsText: {
        color: "#39496d",
        fontSize: 18,
        fontWeight: "600"
    },
})

export default HeaderMenu