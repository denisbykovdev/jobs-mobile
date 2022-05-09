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
import React, { useState, useEffect, useCallback } from "react";
import { icons, images } from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import HrFooter from "../components/HrFooter";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../components/ListOfOpenOpportunities/search";
import TabControllerHr from "../components/ListOfOpenOpportunities/TabControllerHr";
import { getUserToken, JobUrl } from "../configs/ApiCallHelper";
import axios from "axios";

import CommonFrame from "../commons/CommonFrame";
import layout, { responsiveWidth, responsiveHeight } from "../utils/layout";
import { useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";
import useSecure from "../hooks/useSecure";
import { useDispatch, useSelector } from "react-redux";
import Constants from 'expo-constants'
import { watchGetListOpportunities } from "../actions/opportunitiesActions";
import colors from "../utils/colors";
import weights from "../utils/weights";
import fonts from '../utils/fonts';
import CommonButton from "../commons/CommonButton";
import NoOpportunities from "../icons/NoOpportunities";

const OpenOpportunities = () => {
    const navigation = useNavigation()

    const isFocused = useIsFocused()

    const [page, setPage] = useState(1)

    const tokenSelector = useSelector(state => state.auth.token)

    const [isFakeLoading, setFakeLoading] = useState(false)

    const [jobViewHeight, setJobViewHeight] = useState(0)

    const dispatch = useDispatch()

    const opportunitiesListSelector = useSelector(state => state.opportunities?.opportunitiesList)

    useEffect(() => {
        isFocused
            && dispatch(
                watchGetListOpportunities(
                    tokenSelector,
                    page
                )
            )
    }, [isFocused])

    const scrollEnd = (event) => {
        setFakeLoading(true)

        let heigthHigher = Constants.statusBarHeight + responsiveWidth(20) + responsiveWidth(24) + responsiveWidth(40) + (responsiveWidth(10) * (opportunitiesListSelector.length)) + responsiveWidth(20)

        console.log(
            `--- OpenOpportunities/ScrollView/scrollEnd:`,
            event.nativeEvent.contentOffset.y + heigthHigher,
            jobViewHeight * (opportunitiesListSelector.length)
        )

        setPage(page + 1)

        event.nativeEvent.contentOffset.y + heigthHigher > jobViewHeight * opportunitiesListSelector.length && dispatch(
            watchGetListOpportunities(
                tokenSelector,
                page + 1
            )
        )

        setTimeout(
            () => {
                setFakeLoading(false)
            },
            1500
        )
    }

    const getBackJobViewHeight = (height) => setJobViewHeight(height)

    return (
        <CommonFrame
            onScrollEndDrag={scrollEnd}
            withArrow
            commonFrameStyle={{
                paddingHorizontal: 0,
                marginTop: "-5%"   // TODO: Changing options for responsive page.
            }}
        >
            <View style={{ paddingHorizontal: responsiveWidth(17.5) }}>
                <Header hr />
                <TabControllerHr />
            </View>
            {
                opportunitiesListSelector === null
                || opportunitiesListSelector.length < 1
                &&
                <View style={{ marginBottom: responsiveWidth(40) }}>
                    <View
                        style={{
                            alignItems: "center"
                        }}
                    >
                        <Image
                            source={icons.fon}
                            style={{
                                width: "100%",
                                // TODO: Changing options for responsive page.
                                // height: responsiveWidth(170),
                                height: responsiveWidth(165),
                                position: 'relative',
                                // top: -responsiveWidth(6)
                                top: -responsiveWidth(3.7)
                            }}
                        />
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                width: responsiveWidth(116),
                                height: responsiveWidth(116),
                                borderRadius: responsiveWidth(100),
                                // TODO: Changing options for responsive page.
                                // marginTop: 120,
                                marginTop:  layout.height > 650 ?  responsiveHeight(56) : responsiveHeight(48),
                                backgroundColor: colors.darkSlateBlueTwo,
                                zIndex: 3,
                                position: 'absolute'
                            }}>
                            <Image
                                source={icons.lineTop}
                                style={{
                                    position: 'absolute',
                                    zIndex: 4,
                                    width: responsiveWidth(29.5),
                                    height: responsiveWidth(36.5),
                                    left: responsiveWidth(90),
                                    bottom: responsiveWidth(77.5)
                                }}
                            />
                            {/* <BigSadiconSearch /> */}
                            {/* <BigICON16 /> */}
                            <NoOpportunities />

                        </View>

                        <View style={{
                            alignItems: "center",
                            width: '100%',
                            marginTop:  layout.height > 650 ? responsiveHeight(-15): responsiveHeight(-28) // TODO: Changing options for responsive page.
                        }}>
                            <View style={{
                                width: '100%',
                                flexDirection: "row",
                                paddingVertical: responsiveWidth(12),
                                paddingHorizontal: responsiveWidth(17.5),
                                alignItems: 'center',
                                justifyContent: "center",
                                // height: responsiveWidth(60)
                            }}>
                                <Image
                                    source={icons.testUp}
                                    style={{
                                        width: responsiveWidth(53),
                                        height: responsiveWidth(42.5),
                                        position: 'absolute',
                                        left: responsiveWidth(17.5),
                                        top: responsiveWidth(12)
                                    }}
                                />

                                <View style={{
                                    width: '90%',
                                    // TODO: Changing options for responsive page.
                                    // marginVertical: responsiveWidth(30),
                                    marginVertical: responsiveHeight(20)
                                }}>
                                    <Text
                                        style={{
                                            width: '90%',
                                            color: colors.darkGreyBlue,
                                            fontSize: fonts.xlarge,
                                            fontWeight: weights.bold,
                                            textAlign: 'center',
                                            // TODO: Changing options for responsive page.
                                            // marginVertical: responsiveWidth(30)
                                            marginTop: layout.height > 650 ? responsiveHeight(-10) : responsiveHeight(-19)
                                        }}
                                    >
                                        אופס!
                                    </Text>

                                    <Text
                                        style={{
                                            width: '90%',
                                            color: colors.cloudyBlue,
                                            fontSize: fonts.medium,
                                            fontWeight: weights.bold,
                                            textAlign: 'center',
                                            // marginVertical: responsiveWidth(30)
                                        }}
                                    >
                                        נראה שאין תקנים באחריותך,
                                        אבל אפשר להוסיף כאלו
                                    </Text>
                                </View>

                                <Image
                                    source={icons.testDown}
                                    style={{
                                        width: responsiveWidth(53),
                                        height: responsiveWidth(42.5),
                                        position: 'absolute',
                                        // TODO: Changing options for responsive page.
                                        // bottom: responsiveWidth(12),
                                        bottom: responsiveHeight(22),
                                        right: responsiveWidth(17.5)
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <CommonButton
                        title="יצירת תקן"
                        buttonHeight={responsiveWidth(26.5)}
                        onPress={() => navigation.navigate('AddOpportunity')}
                        buttonStyle={{
                            alignSelf: 'center',
                            // TODO: Changing options for responsive page.
                            // marginTop: responsiveWidth(12)
                            marginTop: layout.height > 650 ? responsiveHeight(-5) : responsiveHeight(-20)
                        }}
                        buttonWidth={
                            layout.width - responsiveWidth(33)
                        }
                    />
                </View>
            }
        </CommonFrame>
    )
}

export default OpenOpportunities

// {/* <View style={{ flex: 1, backgroundColor: "#FFF" }}>
// <Header navigation={navigation} />
// <ScrollView>
//     <TabControllerHr chosenTab={4} navigation={navigation} />
//     <View style={{ paddingHorizontal: 32, marginTop: 38 }}>
//         <Search num1={"מיון"} num2={"סינון"} isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
//         {/*1*/}
//         {
//             useEffectData && useEffectData.map((item, index) => {
//                 return (
//                     <View key={index}>
//                         <Image source={{ uri: JobUrl + item.cover_image }} style={styles.image} />
//                         <View style={styles.buttonBoxMain}>
//                             <View style={styles.buttonBox}>

//                                 <View style={styles.infoBox}>
//                                     <Text style={styles.infoBoxTextOne}>:שנת שירות</Text>
//                                     <Text style={styles.infoBoxTextTwo}>תשפ״א</Text>
//                                     {
//                                         !isSearchOpen &&
//                                         <Text style={styles.infoBoxTextThree}>{item.count_of_all_positions} שאלות שמחכות
//                                             :לתשובתך</Text>
//                                     }
//                                 </View>

//                                 <View style={[styles.infoBox, {
//                                     alignItems: "center",
//                                     paddingRight: 0,
//                                     flex: 2
//                                 }]}>
//                                     <Text style={styles.infoBoxMiddleText}>סטטוס</Text>

//                                     <View style={styles.infoBoxMiddle}>
//                                         <Text style={styles.infoBoxMiddleBorderText}>פתוח להרשמה</Text>
//                                     </View>
//                                 </View>
//                                 <View style={[styles.infoBox, { paddingRight: 1, flex: 1.14 }]}>
//                                     <Text style={styles.infoBoxTextOne}>:סגירת ההרשמה</Text>
//                                     <Text
//                                         style={[styles.infoBoxTextOne, { marginLeft: "30%" }]}>{item.last_date_for_registration}</Text>
//                                     {
//                                         !isSearchOpen &&
//                                         <Text style={styles.infoBoxTextOne}>{item.count_of_all_positions} :כמות צפיות</Text>
//                                     }
//                                 </View>
//                             </View>

//                             <View style={[styles.buttonBox2, isSearchOpen && { height: 220 }]}>
//                                 <Text style={styles.infoBoxLineText}>:תקנים
//                                     פתוחים</Text>

//                                 <View style={styles.infoBoxLine}>
//                                     <LinearGradient colors={['#3CD0BD', '#219BA5']}
//                                         style={[styles.infoBoxLineIn, { width: `${100 / item.count_of_all_positions * item.count_of_taken_positions}%` }]} />
//                                 </View>

//                                 <View style={{ flexDirection: "row" }}>
//                                     <Text style={styles.infoLineText1}>{item.count_of_all_positions} </Text>
//                                     <Text style={styles.infoLineText2}>מתוך</Text>
//                                     <Text style={styles.infoLineText3}> {item.count_of_taken_positions}</Text>
//                                     <Image source={icons.EditPhoneBlue}
//                                         style={{ marginLeft: 5, marginTop: 5, width: 13, height: 12 }} />
//                                 </View>
//                                 {isSearchOpen &&
//                                     <View style={{
//                                         flexDirection: "row",
//                                         marginTop: 10,
//                                         justifyContent: "space-between",
//                                         width: "100%"
//                                     }}>
//                                         <View style={styles.infoLineMiniBox}>
//                                             <Text style={styles.infoLineMiniBoxText1}>{item.count_of_all_positions}</Text>
//                                             <Text style={styles.infoLineMiniBoxText2}>:שאלות שמחכות
//                                                 לתשובתך</Text>
//                                         </View>
//                                         <View style={styles.infoLineMiniBox}>
//                                             <Text style={styles.infoLineMiniBoxText1}>{item.count_of_all_positions}</Text>
//                                             <Text style={styles.infoLineMiniBoxText2}>:כמות צפיות</Text>
//                                         </View>
//                                     </View>
//                                 }
//                                 <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ContendersOfOpportunities", { idJob: item.id, item: item })}>
//                                     <View style={styles.circle}>
//                                         <Text style={styles.circleText}>{item.count_of_all_positions}</Text>
//                                     </View>
//                                     <Text style={[styles.buttonText, { color: "#172c60" }]}>צפיה
//                                         במתמודדים</Text>
//                                 </TouchableOpacity>

//                                 <TouchableOpacity style={styles.buttonMain} onPress={() => navigation.navigate("ViewOfTheOpportunity", { idJob: item.id })}>
//                                     <Text style={[styles.buttonText, { color: "#fff" }]}>כניסה
//                                         לתקן </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                         <View style={styles.groupPersonLogo}>
//                             <Text style={styles.mainText}>{"שם התקן"}</Text>
//                             <Image source={icons.groupPersonLogo} style={styles.groupPersonLogoIcon} />
//                         </View>
//                     </View>
//                 )
//             })
//         }
//     </View>
// </ScrollView>
// </View> */}
