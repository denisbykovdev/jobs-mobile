import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    AsyncStorage,
    TouchableOpacity,
    View
} from "react-native";

import React, {useState, useEffect} from "react";
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import HrFooter from "../components/HrFooter";
import {LinearGradient} from "expo-linear-gradient";
import Search from "../components/ListOfOpenOpportunities/search";
import ProfileBox from "../components/ContendersOfOpportunities/ProfileBox";
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import axios from "axios";
import colors from "../utils/colors";
import { responsiveHeight} from "../utils/layout";


const ContendersOfOpportunities = ({navigation}) => {

    const [id, setId] = useState(navigation && navigation.state && navigation.state.params && navigation.state.params.idJob)
    const [item, setItem] = useState(navigation && navigation.state && navigation.state.params && navigation.state.params.item)

    const [isSearchOpen,setIsSearchOpen] = useState(false)
    const [contenders,setContenders] = useState([])

    const getContenders = async(id) => {
        const token = await AsyncStorage.getItem('token');
        const url = `${JobUrl}/api/job/${id}/contenders`
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {

//            console.log("contenders", response.data.contenders);
            setContenders(response.data.contenders);
        }).catch(error => console.log("subcategories", error));
    }

    useEffect(() => {
        getContenders(id).then();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: colors.whiteTwo }}>   {/* TODO: Changing options for responsive page. */}
        {/* TODO: Changing options for responsive page. */}
            <View
                style={{
                    marginHorizontal: responsiveHeight(17.5),
                    marginTop: responsiveHeight(5)
                }}>
                <Header navigation={navigation}
                />
            </View>
            <ScrollView>

                <View style={{paddingHorizontal: 32}}>

                    <View>
                    {item.cover_image ?
                        <Image source={{uri: JobUrl + item.cover_image}} style={styles.image}/>
                        :
                        <Image source={images.groupPerson} style={styles.image}/>
                    }

                        <View style={[styles.buttonBoxMain]}>

                            <View style={[styles.buttonBox]}>

                                <View style={styles.infoBox}>
                                    <Text style={styles.infoBoxTextOne}>:שנת שירות</Text>
                                    <Text style={styles.infoBoxTextTwo}>תשפ״א</Text>
                                    <Text style={styles.infoBoxTextThree}>שאלות שמחכות 5
                                        :לתשובתך</Text>
                                </View>

                                <View style={[styles.infoBox, {alignItems: "center", paddingRight: 0, flex: 2}]}>
                                    <Text style={styles.infoBoxMiddleText}>סטטוס</Text>

                                    <View style={styles.infoBoxMiddle}>
                                        <Text style={styles.infoBoxMiddleBorderText}>פתוח להרשמה</Text>
                                    </View>
                                </View>
                                <View style={[styles.infoBox, {paddingRight: 1, flex: 1.14}]}>
                                    <Text style={styles.infoBoxTextOne}>:סגירת ההרשמה</Text>
                                    <Text
                                        style={[styles.infoBoxTextOne, {marginLeft: "30%"}]}>{item.last_date_for_registration}</Text>
                                    <Text style={styles.infoBoxTextOne}>5 :כמות צפיות</Text>
                                </View>
                            </View>


                            <View style={[styles.buttonBox2]}>
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

                                <Text style={styles.infoLineTextBottom}>רשימת מתמודדות
                                    לתקן</Text>



                                <View style={{marginVertical: 10}}>
                                    <Text>מתמודדות מוצגות: 15</Text>
                                </View>
                            </View>


                        </View>

                        <View style={{zIndex: -1}}>
                            {
                                contenders.map((i, index) => {
                                        return (
                                            <ProfileBox navigation={navigation} contender={i} jobId = {id}/>
                                        )
                                    }
                                )
                            }
                        </View>

                        <View style={styles.groupPersonLogo}>
                            <Text style={styles.mainText}>{"שם התקן"}</Text>
                            <Image source={icons.groupPersonLogo} style={styles.groupPersonLogoIcon}/>
                        </View>

                    </View>


                </View>


            </ScrollView>
            <HrFooter navigation={navigation}/>
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
        position: "relative",
        zIndex: 5,
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

    infoBoxTextThree: {
        fontSize: 10,
        color: "rgba(23, 44, 96, 0.5)"
    },

    infoBoxLine: {
        flexDirection: "row-reverse",
        height: 6,
        width: "100%",
        backgroundColor: "#e8eaef",
        borderRadius: 2,
        marginVertical: 10,
    },

    infoBoxLineIn: {
        width: "60%",
        height: "100%",
        backgroundColor: "#219ba5"
    },

    infoBoxLineText: {
        fontSize: 15,
        color: "#172c60",
        fontWeight: "600"
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

    infoLineTextBottom: {
        fontSize: 15,
        color: "#172c60",
        marginBottom: 10
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

export default ContendersOfOpportunities
