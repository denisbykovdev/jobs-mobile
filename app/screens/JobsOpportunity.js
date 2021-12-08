import {
    Image,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Linking,
    AsyncStorage
} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {jobOpp} from "../configs/FakeData";
import Footer from "../components/Footer";
import YoutubePlayer from "react-native-youtube-iframe";
import Slideshow from "react-native-image-slider-show";
import Stars from "react-native-stars";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";
//import { useDispatch, useSelector } from 'react-redux';
import authHeader from "../utils/authHeader";
import { useDispatch, useSelector } from 'react-redux';
import { watchViewJob, watchApplyJob } from '../actions/jobsActions';


const JobsOpportunity = ({navigation, route}) => {
    const [pickerOpen, setPickerOpen] = useState(false)
    //const [jobData, setjobData] = useState({})
    const [id, setId] = useState(route.params.idJob)
    const [message, setMessage] = useState(" ")
    const [isOpenMessage, setIsOpenMessage] = useState(false)
    const [isAppleTrue, setIsAppleTrue] = useState(false)
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token);
    const jobData = useSelector(state => state.jobs.job.data)
    useEffect(() => {
        // const fetchDataold = async () => {

        //     const url = `${JobUrl}/api/jobs/${id}`
        //     axios.get(url, authHeader(tokenSelector)
        //         ).then(response => {
        //         console.log("responseJobsOpportunitie", response.data.data.area_name);
        //         setjobData(response.data && response.data.data)
        //     }).catch(error => console.log("useEffectJobsOpportunitie", error));
        // }
        // fetchData().then()
        fetchData();
    }, [])

      const fetchData = async() => {
        dispatch(watchViewJob(
            token,
            id
        ));
    }

//    const fetchData = async () => {
//         dispatch(watchViewJobSaga(token, id)); 
//                 // console.log("responseJobsOpportunitie", response.data.data.area_name);
//                 // setjobData(response.data && response.data.data)
//     }

    const toFaqForJobs = () => {
        navigation.navigate("FaqForJobs", {jobId: jobData.id, imageUrl:JobUrl + jobData.cover_image})
    }


    const setApply = async() => {
        console.log("token", jobData.id)
        const id = jobData.id;
        console.log("444",token)
        dispatch(watchApplyJob( 
            token,
            id
        )).then(response => {
            console.log("setApply", response.data);
            setIsOpenMessage(true);
            setIsAppleTrue(true);
            setMessage(response && response.data && response.data.message)
            console.log(response.data && response.data.message)
        }).catch(error => {
            console.log("setApply", error)
            setIsOpenMessage(true)
            setIsAppleTrue(false)
        });;
    }

    // const setApply = async () => {
    //     const url = `${JobUrl}/api/jobs/${id}/apply`
    //     // const token = await getUserToken()
    //     const token = await AsyncStorage.getItem('token');

    //     axios.post(url, {},
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${JSON.parse(token)}`
    //             },
    //         }).then(response => {
    //         console.log("setApply", response.data);
    //         setIsOpenMessage(true);
    //         setIsAppleTrue(true);
    //         setMessage(response && response.data && response.data.message)
    //         console.log(response.data && response.data.message)
    //     }).catch(error => {
    //         console.log("setApply", error)
    //         setIsOpenMessage(true)
    //         setIsAppleTrue(false)
    //     });
    // }

    return (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
            <Header navigation={navigation}/>
            {console.log("jobdata", jobData)}
            <ScrollView style={{flex: 1}}>
                {jobData && jobData.title &&
                <View>
                    <View style={[styles.mainContainer]}>
                        <ImageBackground  source={{uri: JobUrl + jobData.cover_image}}  style={styles.image}>
                            <Text style={styles.bgTitle}>{jobData.title}</Text>
                        </ImageBackground>
                        <View style={[styles.opportunitiesBlock, {shadowOpacity: 0.5}]}>
                            <View style={{alignItems: "center"}}>
                                <View style={[styles.circleIcon, shadowStyleMain]}>
                                {jobData && jobData.logo &&
                                   <Image source={icons.yellowIcon} style={{width: 45, height: 45}}/>
                                }
                                </View>
                            </View>

                            <View style={styles.fieldsBlock}>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.category_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>תחומי שירות</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "white"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.subcategory_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>תת תחום</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.area_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>איזור בארץ</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "white"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.city_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>עיר בארץ</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{Object.values(jobData && jobData.where_we_live).join()}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>דיור</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "white"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.organization_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>עמותה</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.nucleus}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>חלק מגרעין?</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "white"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.how_to_sort}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>אופן המיון</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.hr_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>שם הרכזת</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "white"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text onPress={()=>{Linking.openURL(`tel: ${jobData.hr_phone}`);}}
                                            style={[styles.fields, {color: "#30b8b2"}]}>{jobData.hr_phone}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>מס' טלפון הרכזת</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: "#30b8b2"}]}>{jobData.hr_email}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>מייל רכזת</Text>
                                    </View>
                                </View>


                            </View>

                            <View style={{paddingHorizontal: 10}}>

                                {jobData.images && jobData.images.length > 1 &&
                                <View style={{marginTop: 20}}>
                                    <Slideshow
                                        indicatorSize={0}
                                        scrollEnabled={false}
                                        arrowLeft={{color: "red", width: 10, height: 10}}
                                        dataSource={jobData.images}
                                    />
                                </View>
                                }
                                {jobData.images && jobData.images.length == 1 &&
                                <View style={{marginTop: 20}}>
                                    <Image source={{uri: JobUrl + jobData.images[0]}} style = {{width: 310, height: 200}} />
                                </View>
                                }

                                {jobData.video_url &&
                                <View style={[styles.galleryTitleRow]}>
                                    <View style={[styles.borderLeft]}/>
                                    <Text style={styles.galleryTitle}>וידיאו</Text>
                                    <View style={[styles.borderRight]}/>
                                </View>
                                }

                                <View>
                                    {jobData.video_url &&
                                    <YoutubePlayer
                                        height={190}
                                        videoId={jobData.video_url}
                                    />
                                    }
                                    <View style={styles.galleryTitleRow}>
                                        <View style={[styles.borderLeft]}/>
                                        <Text style={styles.galleryTitle}>ביקורות</Text>
                                        <View style={[styles.borderRight]}/>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.reviewRow}>
                                <Text
                                    style={[styles.profileTextSmall, {color: "#172c60", fontWeight: "bold"}]}>3.0</Text>
                                <View style={styles.starReviews}>
                                    <Stars
                                        half={true}
                                        default={jobData.stars}
                                        // update={(val)=>{this.setState({stars: val})}}
                                        spacing={5}
                                        starSize={10}
                                        count={5}
                                        fullStar={icons.starFilled}
                                        emptyStar={icons.starEmpty}
                                    />
                                </View>
                                <View style={styles.reviewRow}>
                                    <Text style={styles.profileTextSmall}>48</Text>
                                    <Image source={icons.person} style={{width: 10, height: 12, marginLeft: 5}}/>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.reviewBtn}
                                              onPress={() => navigation.navigate("Reviews", {idJob: id})}>
                                <Text style={styles.reviewBtnText}>
                                    הצגת הביקורות
                                </Text>
                            </TouchableOpacity>

                            <View style={styles.reviewBlockRow}>
                                <View style={styles.reviewSmallBlock}>
                                    <View style={{paddingRight: 13}}>
                                        <Text style={styles.reviewSmallBlockTextGrey}>בנות שירות שואלות</Text>
                                        <TouchableOpacity
                                            onPress={() => toFaqForJobs()}>
                                            <Text style={styles.reviewSmallBlockTextGreen}>שאלות ותשובות</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Image source={icons.question} style={styles.reviewIcon}/>
                                </View>

                                <View style={styles.reviewSmallBlock}>
                                    <View style={{paddingRight: 13}}>
                                        <Text style={styles.reviewSmallBlockTextGrey}>סטטוס</Text>
                                        <Text style={[styles.reviewSmallBlockTextGreen, {color: "#172c60"}]}>לא שלחת עדיין
                                            </Text>
                                    </View>
                                    <Image source={icons.Profile2} style={styles.reviewIcon}/>
                                </View>
                            </View>

                            <View style={styles.openStandardBlock}>
                                <Text style={styles.opinionTitle}>תקנים פתוחים:</Text>
                                <View style={styles.openStandardLoader}>
                                    <View
                                        style={[styles.openStandardLoaderFill, {width: jobData.count_of_all_positions !== 0 ? `${jobData.count_of_taken_positions / jobData.count_of_all_positions * 100}%` : 0}]}/>
                                </View>
                                <View style={styles.rangeLine}>
                                    <Text
                                        style={[styles.range, {color: "#aaaeb7"}]}> {jobData.count_of_all_positions} </Text>
                                    <Text style={{color: "#172c60"}}> מתוך </Text>
                                    <Text style={styles.range}> {jobData.count_of_taken_positions} </Text>
                                </View>
                                {jobData.last_date_for_registration &&
                                <View style={styles.dateRow}>
                                    <Text style={styles.dateText}> {jobData.last_date_for_registration} </Text>
                                    <Text style={styles.reviewSmallBlockTextGrey}> תאריך אחרון להרשמה: </Text>
                                </View>
                                }


                            </View>

                            <View style={styles.iconsColumn}>
                                <TouchableOpacity>
                                    <View
                                        style={[styles.iconsCircle, shadowStyle]}>
                                        <Image source={icons.likeGreen}
                                               style={styles.like}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={[styles.iconsCircle, {marginLeft: 15}, shadowStyle]}>
                                        <Image source={icons.share}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/*{message && message.length > 1 &&*/}
                            {/*<View style={styles.errorMessage}>*/}
                            {/*    <Text style={styles.errorMessageText}>{message}</Text>*/}
                            {/*</View>*/}
                            {/*}*/}

                            {isOpenMessage && <>
                                {
                                    isAppleTrue &&
                                    <View style={styles.errorMessage}>
                                        <Text style={[styles.errorMessageText, {color: "#39496d"}]}>אתה קשור לעבודה זו
                                            בהצלחה</Text>
                                    </View>
                                }
                                {
                                    !isAppleTrue &&
                                    <View style={styles.errorMessage}>
                                        <Text style={styles.errorMessageText}>משהו השתבש...</Text>
                                    </View>
                                }
                            </>
                            }
                            <TouchableOpacity style={[styles.sendBtn, jobData.is_requested && {backgroundColor: "#afafafaf"}]} onPress={() => setApply()} disabled={jobData.is_requested}>
                                <Text style={styles.sendBtnText}>שליחת בקשה להרשמה לסיירת</Text>
                            </TouchableOpacity>

                            {/*<Text style={styles.galleryTitle}>שליחת הודעה לרכזת</Text>*/}

                            {/*<View style={{marginBottom: 40}}>*/}
                            {/*    <TextInput*/}
                            {/*        style={styles.input}*/}
                            {/*        multiline={false}*/}
                            {/*        placeholder={"כותרת"}*/}
                            {/*        secureTextEntry={false}*/}
                            {/*        placeholderTextColor={"#e1e1e1"}*/}
                            {/*        placeholderStyle={styles.placeHolder_styles}*/}
                            {/*        keyboardType={"numeric"}*/}

                            {/*    />*/}

                            {/*    <TextInput*/}
                            {/*        style={[styles.input, {paddingBottom: 100}]}*/}
                            {/*        multiline={false}*/}
                            {/*        placeholder={"ההודעה שלך"}*/}
                            {/*        secureTextEntry={false}*/}
                            {/*        placeholderTextColor={"#e1e1e1"}*/}
                            {/*        placeholderStyle={styles.placeHolder_styles}*/}
                            {/*        keyboardType={"numeric"}*/}

                            {/*    />*/}
                            {/*    <TouchableOpacity style={styles.reviewBtn}>*/}
                            {/*        <Text style={styles.reviewBtnText}>*/}
                            {/*            שליחת הודעה פרטית לרכזת*/}
                            {/*        </Text>*/}
                            {/*    </TouchableOpacity>*/}
                            {/*</View>*/}

                        </View>
                    </View>
                </View>
                }
            </ScrollView>
        </View>
    )
}

const shadowStyleMain = {
    shadowOpacity: 0.5
}

const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    // elevation: 0.1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: "#EEEEEE"
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 32,
        justifyContent: "center"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        // height: 136,
        marginTop: 26,
        paddingTop: 21,
        zIndex: -100
    },

    bgTitle: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 26,
        marginBottom: 50
    },

    opportunitiesBlock: {
        marginTop: -19,
        elevation: 5,
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop: 40,

    },

    circleIcon: {
        width: 62,
        height: 62,
        backgroundColor: "white",
        borderRadius: 50,
        marginTop: -70,
        elevation: 6,
        alignItems: "center",
        justifyContent: "center"
    },

    titleRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 80
    },

    titleGrey: {
        color: "#39496d",
        fontSize: 13,
        fontWeight: "bold"
    },

    dots: {
        width: 5,
        height: 4,
        backgroundColor: "#000000",
        borderRadius: 50
    },

    titleGren: {
        color: "#30b8b2",
        fontSize: 18
    },

    fieldsBlock: {
        width: "100%",
        marginTop: 30,
    },

    fieldRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 25,
        borderRadius: 5,
        paddingHorizontal: 24
    },

    fields: {
        color: "#172C60",
        fontSize: 16,
        fontWeight: "bold"
    },

    galleryTitleRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 10
    },

    galleryTitle: {
        color: "#172c60",
        fontSize: 15,
        textAlign: "center"
    },

    borderLeft: {
        borderLeftColor: "#b0bbd9",
        height: 110,
        left: 270,
        position: "absolute",
        borderLeftWidth: 1,
        transform: [{rotate: '90deg'}],
    },

    borderRight: {
        borderLeftColor: "#b0bbd9",
        height: 110,
        right: 270,
        position: "absolute",
        borderLeftWidth: 1,
        transform: [{rotate: '90deg'}],
    },

    reviewRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    starReviews: {
        paddingHorizontal: 10
    },

    profileTextSmall: {
        color: "#a7abba",
        fontSize: 12
    },

    reviewBtn: {
        borderColor: "#268b93",
        borderWidth: 2,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        paddingVertical: 20,
        marginTop: 20
    },

    reviewBtnText: {
        color: "#172c60",
        fontSize: 16,
        fontWeight: "bold"
    },

    reviewBlockRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 20,
        borderBottomColor: "#b0bbd9",
        borderBottomWidth: 2,
        paddingBottom: 20,
        marginHorizontal: 10
    },

    reviewSmallBlock: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    reviewIcon: {
        width: 30,
        height: 30,
    },

    reviewSmallBlockTextGrey: {
        color: "#a7abba",
        fontSize: 10,
        textAlign: "right"
    },

    reviewSmallBlockTextGreen: {
        color: "#30b8b2",
        fontSize: 14,
        textAlign: "right"
    },

    openStandardBlock: {
        marginTop: 20,
        width: "100%",
        marginBottom: 52
    },

    opinionTitle: {
        color: "#172c60",
        fontSize: 20,
        fontWeight: "800",
        textAlign: "center"
    },

    openStandardLoader: {
        height: 5,
        marginHorizontal: 10,
        backgroundColor: "#e8eaef",
        borderRadius: 5,
        marginVertical: 10,
        transform: [{rotate: '180deg'}]
    },

    openStandardLoaderFill: {
        height: 6,
        backgroundColor: "#30b8b2",
        borderRadius: 5,
    },

    rangeLine: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },

    range: {
        color: "#30b8b2",
        fontSize: 18,
        fontWeight: "bold"
    },

    iconsColumn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    dateRow: {
        paddingTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#b0bbd9",
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginHorizontal: 10
    },

    dateText: {
        color: "#172c60",
        fontSize: 15,
        fontWeight: "bold"
    },

    iconsCircle: {
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 13,
        elevation: 5,
        backgroundColor: "white"

    },

    like: {
        width: 23,
        height: 21
    },

    sendBtn: {
        backgroundColor: "#30b8b2",
        alignItems: "center",
        paddingVertical: 20,
        marginHorizontal: 10,
        borderRadius: 5,
        marginVertical: 20
    },

    sendBtnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },

    placeHolder_styles: {
        fontWeight: '500',
        color: 'white',
        fontSize: 13,
    },

    input: {
        borderColor: "#f1f2f4",
        borderWidth: 2,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingRight: 10,
        textAlign: "right",
        borderRadius: 5,
        marginTop: 20

    },


    errorMessage: {
        alignItems: "center",
        marginTop: 20,

    },

    errorMessageText: {
        fontSize: 17,
        textAlign: "center",
        color: "red",
    }


});


export default JobsOpportunity
