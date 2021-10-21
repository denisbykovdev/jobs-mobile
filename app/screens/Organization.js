import {Image, ScrollView, AsyncStorage, Text, StyleSheet, View, TextInput, TouchableOpacity} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Slideshow from "react-native-image-slider-show";
import YoutubePlayer from "react-native-youtube-iframe";
import {WebView} from 'react-native-webview';
import Footer from "../components/Footer";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";


const Organization = ({navigation}) => {

    const [id, setId] = useState((navigation && navigation.state && navigation.state.params && navigation.state.params.id) || 9);
    const [data, setData] = useState({});
    const [subCategory, setSubCategory] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            // const token = await getUserToken();
            const token = await AsyncStorage.getItem('token');
            const url = `${JobUrl}/api/libraries/categories/${id}`;
            axios.get(url,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`
                    },
                }).then(response => {

                console.log("categories", response.data);
                setData(response && response.data && response.data.data)


            }).catch(error => console.log("categories", error));
        }
        fetchData().then()
    }, [])


    const subcategoriesButtonChoose = async (chooseId) => {
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');
        const url = `${JobUrl}/api/libraries/subcategories/${chooseId}`;
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {

            console.log("categories", response.data);
            setData(response && response.data && response.data.data)
            setSubCategory(false)

        }).catch(error => console.log("categories", error));
    }



return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
        <ScrollView style={{flex: 1}}>
            <Header
                navigation={navigation}
                visibleBackArrow={subCategory && true}
            />
            <View style={styles.mainContainer}>
                <View style={styles.organizationBlock}>
                    {!subCategory &&
                    <View style={[styles.circleIcon, shadowStyleMain]}>
                        <Image source={icons.yellowIcon} style={{width: 45, height: 45}}/>
                    </View>
                    }
                    <Image source={icons.testUp} style={styles.imageBgUp}/>
                    <Text style={styles.blogTitle}>{data.name}</Text>
                    <Image source={icons.testDown} style={styles.imageBgDown}/>
                </View>
                <View style={styles.organisationMainBlock}>

                    {/*<Text style={styles.title}>*/}
                    {/*    סתם כותרת*/}
                    {/*</Text>*/}
                    {/*<Text style={styles.mainText}>*/}
                    {/*    ו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם*/}
                    {/*    ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. סחטירול, צוט ומעיוט -*/}
                    {/*    לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר*/}
                    {/*    אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור,*/}
                    {/*    קראס אגת לקטוס*/}
                    {/*</Text>*/}
                    {/*<Text style={styles.mainText}>*/}
                    {/*    ו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם*/}
                    {/*    ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. סחטירול, צוט ומעיוט -*/}
                    {/*    לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר*/}
                    {/*    אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור,*/}
                    {/*    קראס אגת לקטוס*/}
                    {/*</Text>*/}


                    {data && data.subcategories && data.subcategories.length !== 0 && <>
                        <View style={styles.galleryTitleRow}>
                            <View style={[styles.borderLeftRight, {marginRight: 60}]}/>
                            <Text style={styles.galleryTitle}>קטגוריות משנה</Text>
                            <View style={[styles.borderLeftRight, {marginLeft: 60}]}/>
                        </View>

                        <View>
                            {data.subcategories && data.subcategories.map((item, index) => {
                                return (
                                    <TouchableOpacity style={styles.subcategoriesButton} key={index} onPress={()=>subcategoriesButtonChoose(item.id)}>
                                        <View style={{
                                            backgroundColor: "#30b8b2",
                                            borderRadius: 10,
                                            height: "100%",
                                            width: 50,
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Image source={icons.enter} style={{width: 20, height: 13}}/>
                                        </View>
                                        <Text style={styles.subcategoriesButtonText}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </>
                    }


                    {data && data.images && data.images.length !== 0 && <>
                        <View style={styles.galleryTitleRow}>
                            <View style={[styles.borderLeftRight, {marginRight: 60}]}/>
                            <Text style={styles.galleryTitle}>גלריית תמונות</Text>
                            <View style={[styles.borderLeftRight, {marginLeft: 60}]}/>
                        </View>

                        <View style={{marginTop: -30}}>
                            <Slideshow
                                scrollEnabled={false}
                                arrowLeft={{color: "red", width: 100, height: 100}}
                                indicatorSize={6}
                                indicatorColor={"white"}
                                indicatorSelectedColor={"#30b8b2"}
                                dataSource={[
                                    {url: images.faqBg},
                                    {url: images.userTypeBg},
                                    {url: images.userTypeBg},
                                ]}/>
                        </View>
                    </>
                    }

                    {
                        data && data.video_url &&
                        <>
                            <View style={styles.galleryTitleRow}>
                                <View style={[styles.borderLeftRight, {marginRight: 70, height: 130}]}/>
                                <Text style={styles.galleryTitle}>וידיאו</Text>
                                <View style={[styles.borderLeftRight, {marginLeft: 70, height: 130}]}/>
                            </View>

                            <View style={{marginTop: -100, marginBottom: 50}}>
                                {/*<YoutubePlayer*/}
                                {/*    height={220}*/}
                                {/*    videoId={data.video_url}*/}
                                {/*/>*/}

                                <WebView
                                    allowsFullscreenVideo
                                    useWebKit
                                    allowsInlineMediaPlayback
                                    mediaPlaybackRequiresUserAction
                                    javaScriptEnabled
                                    scrollEnabled={false}
                                    source={{uri: data.video_url}}
                                    style={{height: 220}}
                                />
                            </View>
                        </>}


                </View>
            </View>
        </ScrollView>
        <Footer/>
    </View>
)
}

const shadowStyleMain = {
    shadowOpacity: 0.5
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 34
    },

    organizationBlock: {
        alignItems: "center",
    },

    blogTitle: {
        color: "#172c60",
        paddingTop: 100,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        width: 200
    },

    circleIcon: {
        width: 62,
        height: 62,
        backgroundColor: "white",
        // zIndex: 30000,
        borderRadius: 50,
        position: "absolute",
        top: 20,
        elevation: 6,
        alignItems: "center",
        justifyContent: "center"
    },

    imageBgUp: {
        width: 106,
        height: 86,
        // backgroundColor:"red",
        position: "absolute",
        left: 0,
        top: "50%"
    },

    imageBgDown: {
        width: 106,
        height: 86,
        // backgroundColor:"red",
        position: "absolute",
        right: 0,
        top: "60%"
    },

    organisationMainBlock: {
        marginTop: "20%"
    },

    title: {
        color: "#39496d",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },

    mainText: {
        textAlign: "right",
        fontWeight: "300",
        color: "#39496d",
        fontSize: 17,
        paddingTop: 24,
        lineHeight: 17
    },

    galleryTitleRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    galleryTitle: {
        color: "#172c60",
        fontSize: 15
    },

    borderLeftRight: {
        borderLeftColor: "#b0bbd9",
        height: 100,
        borderLeftWidth: 1,
        transform: [{rotate: '90deg'}],
    },

    subcategoriesButton: {
        marginBottom: 19,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 48,
        elevation: 4,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingRight: 23
    },

    subcategoriesButtonText: {
        color: "#172c60",
        fontSize: 18,
    },


});


export default Organization
