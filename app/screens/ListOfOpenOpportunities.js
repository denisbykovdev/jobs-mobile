import {
    AsyncStorage,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import React, {useState, useEffect} from "react";
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import HrFooter from "../components/HrFooter";
import {LinearGradient} from "expo-linear-gradient";
import Search from "../components/ListOfOpenOpportunities/search";
import TabControllerHr from "../components/ListOfOpenOpportunities/TabControllerHr";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";


const OpenOpportunities = ({navigation}) => {
    const [useEffectData, setUseEffectData] = useState([])
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [page, setPage] = useState(0)

//    console.log(useEffectData)


    useEffect(() => {
        const fetchData = async () => {

            const url = `${JobUrl}/api/jobs/0/date`

            const token = await AsyncStorage.getItem('token');
            axios.post(url, {},
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`,
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                }).then(response => {
                console.log("ListOfOpen", response.data.data);
                setUseEffectData(response.data && response.data.data)
            }).catch(error => console.log("ListOfOpen", error));
        }
        fetchData().then()
    }, [])


    return (
        <View style={{flex: 1, backgroundColor: "#FFF"}}>
            <Header navigation={navigation}/>
            <ScrollView>

                <TabControllerHr chosenTab={4} navigation={navigation}/>

                <View style={{paddingHorizontal: 32, marginTop: 38}}>

                    <Search num1={"מיון"} num2={"סינון"} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen}/>
                    {/*1*/}
                    {
                        useEffectData && useEffectData.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Image source={{uri: JobUrl + item.cover_image}} style={styles.image}/>
                                    <View style={styles.buttonBoxMain}>
                                        <View style={styles.buttonBox}>

                                            <View style={styles.infoBox}>
                                                <Text style={styles.infoBoxTextOne}>:שנת שירות</Text>
                                                <Text style={styles.infoBoxTextTwo}>תשפ״א</Text>
                                                {
                                                    !isSearchOpen &&
                                                    <Text style={styles.infoBoxTextThree}>{item.count_of_all_positions} שאלות שמחכות
                                                        :לתשובתך</Text>
                                                }
                                            </View>

                                            <View style={[styles.infoBox, {
                                                alignItems: "center",
                                                paddingRight: 0,
                                                flex: 2
                                            }]}>
                                                <Text style={styles.infoBoxMiddleText}>סטטוס</Text>

                                                <View style={styles.infoBoxMiddle}>
                                                    <Text style={styles.infoBoxMiddleBorderText}>פתוח להרשמה</Text>
                                                </View>
                                            </View>
                                            <View style={[styles.infoBox, {paddingRight: 1, flex: 1.14}]}>
                                                <Text style={styles.infoBoxTextOne}>:סגירת ההרשמה</Text>
                                                <Text
                                                    style={[styles.infoBoxTextOne, {marginLeft: "30%"}]}>{item.last_date_for_registration}</Text>
                                                {
                                                    !isSearchOpen &&
                                                    <Text style={styles.infoBoxTextOne}>{item.count_of_all_positions} :כמות צפיות</Text>
                                                }
                                            </View>
                                        </View>

                                        <View style={[styles.buttonBox2, isSearchOpen && {height: 220}]}>
                                            <Text style={styles.infoBoxLineText}>:תקנים
                                                פתוחים</Text>

                                            <View style={styles.infoBoxLine}>
                                                <LinearGradient colors={['#3CD0BD', '#219BA5']}
                                                                style={[styles.infoBoxLineIn, {width: `${100 / item.count_of_all_positions * item.count_of_taken_positions}%`}]}/>
                                            </View>

                                            <View style={{flexDirection: "row"}}>
                                                <Text style={styles.infoLineText1}>{item.count_of_all_positions} </Text>
                                                <Text style={styles.infoLineText2}>מתוך</Text>
                                                <Text style={styles.infoLineText3}> {item.count_of_taken_positions}</Text>
                                                <Image source={icons.EditPhoneBlue}
                                                       style={{marginLeft: 5, marginTop: 5, width: 13, height: 12}}/>
                                            </View>

                                            {isSearchOpen &&
                                            <View style={{
                                                flexDirection: "row",
                                                marginTop: 10,
                                                justifyContent: "space-between",
                                                width: "100%"
                                            }}>
                                                <View style={styles.infoLineMiniBox}>
                                                    <Text style={styles.infoLineMiniBoxText1}>{item.count_of_all_positions}</Text>
                                                    <Text style={styles.infoLineMiniBoxText2}>:שאלות שמחכות
                                                        לתשובתך</Text>
                                                </View>
                                                <View style={styles.infoLineMiniBox}>
                                                    <Text style={styles.infoLineMiniBoxText1}>{item.count_of_all_positions}</Text>
                                                    <Text style={styles.infoLineMiniBoxText2}>:כמות צפיות</Text>
                                                </View>
                                            </View>
                                            }

                                            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("ContendersOfOpportunities",{idJob:item.id, item:item})}>
                                                <View style={styles.circle}>
                                                    <Text style={styles.circleText}>{item.count_of_all_positions}</Text>
                                                </View>
                                                <Text style={[styles.buttonText, {color: "#172c60"}]}>צפיה
                                                    במתמודדים</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.buttonMain} onPress={()=>navigation.navigate("ViewOfTheOpportunity",{idJob:item.id})}>
                                                <Text style={[styles.buttonText, {color: "#fff"}]}>כניסה
                                                    לתקן </Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>

                                    <View style={styles.groupPersonLogo}>
                                        <Text style={styles.mainText}>{"שם התקן"}</Text>
                                        <Image source={icons.groupPersonLogo} style={styles.groupPersonLogoIcon}/>
                                    </View>

                                </View>
                            )
                        })
                    }


                    {/*2*/}
                    {/*<View style={{top: 0}}>*/}
                    {/*    <Image source={images.groupPerson} style={styles.image}/>*/}
                    {/*    <View style={[styles.buttonBoxMain, {height: 120}]}>*/}
                    {/*        <View style={[styles.buttonBox,]}>*/}

                    {/*            <View style={styles.infoBox}>*/}
                    {/*                <Text style={styles.infoBoxTextFour}>:שנת שירות</Text>*/}
                    {/*                <Text style={styles.infoBoxTextFive}>תשפ״א</Text>*/}
                    {/*            </View>*/}

                    {/*            <View style={[styles.infoBox, {alignItems: "center", paddingRight: 0, flex: 2}]}>*/}
                    {/*                <Text style={styles.infoBoxMiddleText}>סטטוס</Text>*/}

                    {/*                <View style={styles.infoBoxMiddleDisable}>*/}
                    {/*                    <Text style={styles.infoBoxMiddleBorderText}>סגור</Text>*/}
                    {/*                </View>*/}
                    {/*            </View>*/}
                    {/*            <View style={[styles.infoBox, {paddingRight: 1, flex: 1.14}]}>*/}
                    {/*                <Text style={styles.infoBoxTextFour}>:סגירת*/}
                    {/*                    ההרשמה</Text>*/}
                    {/*                <Text*/}
                    {/*                    style={styles.infoBoxTextSix}>01.12.20</Text>*/}
                    {/*            </View>*/}
                    {/*        </View>*/}
                    {/*        <View style={[styles.buttonBox2, {top: 30}]}>*/}
                    {/*            <TouchableOpacity style={styles.buttonMain}>*/}
                    {/*                <Text style={[styles.buttonText, {color: "#fff"}]}>כניסה*/}
                    {/*                    לתקן </Text>*/}
                    {/*            </TouchableOpacity>*/}

                    {/*        </View>*/}

                    {/*    </View>*/}

                    {/*    <View style={styles.groupPersonLogo}>*/}
                    {/*        <Text style={styles.mainText}>{"שם התקן"}</Text>*/}
                    {/*        <Image source={icons.groupPersonLogo} style={styles.groupPersonLogoIcon}/>*/}
                    {/*    </View>*/}

                    {/*</View>*/}


                    {/*3*/}
                    {/*<View>*/}
                    {/*    <Image source={images.groupPerson} style={styles.image}/>*/}
                    {/*    <View style={[styles.buttonBoxMain]}>*/}
                    {/*        <View style={styles.buttonBox}>*/}

                    {/*            <View style={styles.infoBox}>*/}
                    {/*                <Text style={styles.infoBoxTextOne}>:שנת שירות</Text>*/}
                    {/*                <Text style={styles.infoBoxTextTwo}>תשפ״א</Text>*/}
                    {/*                {!isSearchOpen && <Text style={styles.infoBoxTextThree}>שאלות שמחכות 0*/}
                    {/*                    :לתשובתך</Text>}*/}
                    {/*            </View>*/}

                    {/*            <View style={[styles.infoBox, {alignItems: "center", paddingRight: 0, flex: 2}]}>*/}
                    {/*                <Text style={styles.infoBoxMiddleText}>סטטוס</Text>*/}

                    {/*                <View style={styles.infoBoxMiddle}>*/}
                    {/*                    <Text style={styles.infoBoxMiddleBorderText}>פתוח להרשמה</Text>*/}
                    {/*                </View>*/}
                    {/*            </View>*/}
                    {/*            <View style={[styles.infoBox, {paddingRight: 1, flex: 1.14}]}>*/}
                    {/*                <Text style={styles.infoBoxTextOne}>:סגירת ההרשמה</Text>*/}
                    {/*                <Text*/}
                    {/*                    style={[styles.infoBoxTextOne, {marginLeft: "36%"}]}>01.12.20</Text>*/}
                    {/*                {!isSearchOpen && <Text style={styles.infoBoxTextOne}>0 :כמות צפיות</Text>}*/}
                    {/*            </View>*/}
                    {/*        </View>*/}
                    {/*        <View style={[styles.buttonBox2,isSearchOpen && {height: 220}]}>*/}
                    {/*            <Text style={styles.infoBoxLineText}>:תקנים*/}
                    {/*                פתוחים</Text>*/}

                    {/*            <View style={styles.infoBoxLine}>*/}
                    {/*                <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.infoBoxLineIn}/>*/}
                    {/*            </View>*/}

                    {/*            <View style={{flexDirection: "row"}}>*/}
                    {/*                <Text style={styles.infoLineText1}>0 </Text>*/}
                    {/*                <Text style={styles.infoLineText2}>מתוך</Text>*/}
                    {/*                <Text style={styles.infoLineText3}> 0</Text>*/}
                    {/*            </View>*/}

                    {/*            {isSearchOpen &&*/}
                    {/*            <View style={{*/}
                    {/*                flexDirection: "row",*/}
                    {/*                marginTop: 10,*/}
                    {/*                justifyContent: "space-between",*/}
                    {/*                width: "100%"*/}
                    {/*            }}>*/}
                    {/*                <View style={styles.infoLineMiniBox}>*/}
                    {/*                    <Text style={styles.infoLineMiniBoxText1}>0</Text>*/}
                    {/*                    <Text style={styles.infoLineMiniBoxText2}>:שאלות שמחכות לתשובתך</Text>*/}
                    {/*                </View>*/}
                    {/*                <View style={styles.infoLineMiniBox}>*/}
                    {/*                    <Text style={styles.infoLineMiniBoxText1}>0</Text>*/}
                    {/*                    <Text style={styles.infoLineMiniBoxText2}>:כמות צפיות</Text>*/}
                    {/*                </View>*/}
                    {/*            </View>*/}
                    {/*            }*/}

                    {/*            <View style={[styles.button, {opacity: 0.2}]}>*/}
                    {/*                <Text style={[styles.buttonText, {color: "#172c60"}]}>צפיה*/}
                    {/*                    במתמודדים</Text>*/}
                    {/*            </View>*/}

                    {/*            <TouchableOpacity style={styles.buttonMain}>*/}
                    {/*                <Text style={[styles.buttonText, {color: "#fff"}]}>כניסה*/}
                    {/*                    לתקן </Text>*/}
                    {/*            </TouchableOpacity>*/}

                    {/*        </View>*/}

                    {/*    </View>*/}

                    {/*    <View style={styles.groupPersonLogo}>*/}
                    {/*        <Text style={styles.mainText}>{"שם התקן"}</Text>*/}
                    {/*        <Image source={icons.groupPersonLogo} style={styles.groupPersonLogoIcon}/>*/}
                    {/*    </View>*/}

                    {/*</View>*/}


                </View>


            </ScrollView>

            <HrFooter chosenFooter={1} navigation={navigation}/>
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
        backgroundColor: "#fff",
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
        height: "50%",
        marginBottom: 10

    },
    buttonBox2: {
        height: 170,
        alignItems: "center",
        paddingHorizontal: 10,
    },

    mainText: {
        fontSize: 26,
        fontWeight: "700",
        color: "#fff",
    },

    infoBox: {
        flex: 1,
        paddingRight: 10,
        height: 75,
        width: "33.3%",
    },

    infoBoxTextOne: {
        fontSize: 11,
        color: "#172c60"
    },

    infoBoxTextTwo: {
        fontSize: 13,
        color: "#172c60"
    },

    infoBoxTextThree: {
        fontSize: 10,
        color: "rgba(23, 44, 96, 0.5)"
    },

    infoBoxTextFour: {
        fontSize: 11,
        color: "rgba(23, 44, 96, 0.5)"
    },

    infoBoxTextFive: {
        fontSize: 13,
        color: "rgba(23, 44, 96, 0.5)"
    },

    infoBoxTextSix: {
        fontSize: 12,
        color: "rgba(23, 44, 96, 0.5)",
        marginLeft: "36%"
    },

    infoBoxMiddleText: {
        fontSize: 11,
        color: "rgba(23, 44, 96, 0.4)"
    },

    infoBoxMiddle: {
        borderWidth: 1,
        borderColor: "#30b8b2",
        borderRadius: 20,
        paddingHorizontal: 10
    },

    infoBoxMiddleBorderText: {
        fontSize: 13,
        color: "#30b8b2"
    },

    infoBoxMiddleDisable: {
        borderWidth: 1,
        borderColor: "rgba(46, 38, 15, 0.16)",
        borderRadius: 20,
        paddingHorizontal: 10,
        width: 100,
        alignItems: "center"
    },

    infoBoxLineText: {
        fontSize: 15,
        color: "#172c60",
        fontWeight: "600"
    },

    infoBoxLine: {
        flexDirection: "row-reverse",
        height: 6,
        width: "100%",
        backgroundColor: "#e8eaef",
        borderRadius: 2,
        marginVertical: 10,
    },

    infoLineText1: {
        fontSize: 18,
        color: "rgba(31, 30, 29, 0.2)"
    },

    infoLineText2: {
        fontSize: 14,
        color: "#172c60"
    },
    infoLineText3: {
        fontSize: 18,
        color: "#30b8b2"
    },
    infoLineMiniBox: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "rgba(23, 44, 96, 0.5)",
        borderRadius: 20,
        width: "49.5%",
    },

    infoLineMiniBoxText1: {
        fontSize: 15,
        fontWeight: "700",
        color: "#39496d"
    },

    infoLineMiniBoxText2: {
        fontSize: 8,
        fontWeight: "600",
        color: "rgba(23, 44, 96, 0.5)"
    },


    infoBoxLineIn: {
        height: "100%",
        backgroundColor: "#219ba5"
    },

    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: 25,
        height: 25,
        borderRadius: 30 / 2,
        marginRight: 10,
        borderWidth: 2,
        borderColor: "#495c7c"
    },

    circleText: {
        fontSize: 12,
        color: "#172c60",
        fontWeight: "600"
    },

    button: {
        flexDirection: "row",
        borderWidth: 2,
        borderRadius: 3.2,
        borderColor: "#30b8b2",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        marginTop: 20,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "700",
    },
    buttonMain: {
        borderWidth: 2,
        borderRadius: 3.2,
        borderColor: "#30b8b2",
        backgroundColor: "#30b8b2",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        marginTop: 20,
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

export default OpenOpportunities
