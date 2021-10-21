import {Image,ImageBackground, AsyncStorage, ScrollView, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState, useEffect} from "react";
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import TabController from "../components/ListOfOpenOpportunities/TabController";
import Footer from "../components/Footer";
import RequestsItems from "../components/RequestsItems";
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import axios from "axios";

const MyProfileNoReq = ({navigation}) => {

    const [requests, setRequest] = useState([])

    useEffect(() => {
        getRequests().then();
    }, [])

    const navigationTo = (text,id) => {
        if (text === "JobsOpportunity") {
            navigation.navigate("JobsOpportunity",{idJob:id})
        } else if (text === "SearchWithFilter") {
            navigation.navigate("SearchWithFilter",{idJob:id})
        }

    }

    const getRequests = async () => {
        const url = `${JobUrl}/api/profile/requests/list`;
        const token = await AsyncStorage.getItem('token') ;
            axios.get(url,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`,
                    },
                }).then(response => {
            console.log("requests", response.data.data);
            setRequest(response.data && response.data.data);

            }).catch(error => console.log("useEffect222", error));
    }

    return (


        <View style={{flex: 1,}}>
            <Header navigation={navigation}/>
            <ScrollView>
                <TabController chosenTab={4} navigation={navigation}/>
                {requests ?
                    <FlatList
                        data={requests}
                        keyExtractor={user => user.id.toString()}
                        renderItem={({item}) => (
                            <RequestsItems
                                item={item}
                                navigationTo={navigationTo}
                            />
                        )}
                    />
                    :
                    <>
                    <ImageBackground  source={images.fonProf} style={styles.main}>
                        <View style={styles.up}>
                            <View style={styles.circle}>
                                <Image source={images.myProfNoReq} style={styles.openOpportunitiesIcon}/>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.mainText}>
                        <Image source={icons.testUp} style={styles.testUp}/>
                        <View style={{width: 130, alignItems: "center"}}>
                            <Text style={styles.largeText}>
                                נראה שריק פה. עדיין לא .שלחת הודעות לרכזות </Text>
                        </View>
                        <Image source={icons.testDown} style={styles.testDown}/>
                    </View>

                    <Text style={styles.btnTopText}>?רוצה למצוא תקנים מעניינים</Text>
                    <View style={{alignItems: "center", marginTop: 15}}>
                        <TouchableOpacity style={styles.buttonMain}>
                            <Text style={styles.buttonMainText}>קחו אותי לעמוד החיפוש</Text>
                        </TouchableOpacity>
                    </View>
                    </>
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 245,
        zIndex:-2
    },

    up: {
        alignItems: "center",
    },

    fon: {
        bottom: 130,
        zIndex: -2,
        height: 370,

    },

    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: 232,
        height: 232,
        marginTop: 120,
        zIndex: 3,
        position: 'absolute',
    },


    lineTop: {
        width: 59,
        zIndex: 5,
        height: 73,
        marginLeft: 170,
        top: 40
    },

    openOpportunitiesIcon: {
        width: 232,
        zIndex: 3,
        height: 232,
        marginLeft: 10,
        bottom: 100
    },

    mainText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        top:30

    },

    testUp: {
        width: 106,
        height: 85,
        marginBottom: 130
    },

    testDown: {
        width: 106,
        height: 85,
        marginTop: 30
    },


    buttonMain: {
        width: "80%",
        height: 53,
        backgroundColor: "#30b8b2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },

    buttonMainText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },


    largeText: {
        fontSize: 30,
        width: 350,
        textAlign: "center",
        color: "#172c60",
        fontWeight: "bold",
        bottom:30
    },

    smallText: {
        marginTop: 16,
        fontSize: 22,
        width: 350,
        textAlign: "center",
        color: "#afb9d2",
        fontWeight: "bold",
        marginBottom: 34
    },

    btnTopText:{
        color:"#172c60",
        fontSize:16,
        textAlign:"center"
    }
})

export default MyProfileNoReq
