import React from "react";
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
    ImageBackground
} from 'react-native';
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import YoutubePlayer from "react-native-youtube-iframe";
import Slideshow from "react-native-image-slider-show";
import Footer from "../components/Footer";


const PostHr = ({hr,navigation}) => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <Header navigation={navigation}/>
                <View style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={[styles.circleIcon, shadowStyle]}>
                            <Image source={icons.yellowIcon} style={{width: 45, height: 45}}/>
                        </View>
                        <Image source={icons.testUp} style={styles.imageBgUp}/>
                        <Text style={styles.mainTitle}>שרה בליט</Text>
                        <Text style={styles.mainTitleSmall}>תחום, תת תחום</Text>
                        <Image source={icons.testDown} style={styles.imageBgDown}/>
                    </View>
                    <View style={styles.dateMainContainer}>
                        <View style={styles.imageContainer}>
                            <View style={[styles.borderLeftRight, {marginRight: 30}]}/>
                            <Text style={styles.dateText}>21.07.20</Text>
                            <View style={[styles.borderLeftRight, {marginLeft: 30}]}/>
                        </View>
                    </View>
                    <ImageBackground source={images.faqBg} style={styles.image}/>
                    <View style={styles.postTextBlock}>
                        <Text style={styles.postTittle}>סתם כותרת</Text>
                        <Text style={styles.postText}>
                            ו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם
                            ברשג
                            - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. סחטירול, צוט ומעיוט - לפתיעם
                            ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר אדיפיסינג
                            אלית.
                            סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס
                        </Text>
                        <Text style={styles.postText}>
                            ו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט
                            - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. סחטירול, צוט
                            ומעיוט -
                            לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר
                            אדיפיסינג
                            אלית.
                            סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס
                            ו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם
                            ברשג
                            - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. סחטירול, צוט ומעיוט - לפתיעם
                            ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר אדיפיסינג
                            אלית.
                            סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס
                        </Text>
                        <Text style={styles.postText}>
                            ו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם
                            ברשג
                            - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. סחטירול, צוט ומעיוט - לפתיעם
                            ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר אדיפיסינג
                            אלית.
                            סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוסו
                            בלוקריה
                            שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג -
                            ולתיעם
                            גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. סחטירול, צוט ומעיוט - לפתיעם ברשג -
                            ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר אדיפיסינג אלית. סת
                            אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס
                        </Text>
                        {hr &&
                        <Text style={styles.postText}>
                            ו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם
                            ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. סחטירול, צוט ומעיוט -
                            לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קונסקטורר
                            אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור,
                            קראס אגת לקטוסו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט
                            ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת.
                            סחטירול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן
                            מנת. קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם.
                            וסטיבולום אט דולור, קראס אגת לקטוס
                        </Text>
                        }
                    </View>
                    <View style={{marginTop: 30}}>
                        <YoutubePlayer
                            height={220}
                            videoId={"iee2TATGMyI"}
                        />
                    </View>
                    <View style={styles.feedbackBlock}>
                        <View style={styles.likeAndShareBlock}>
                            <TouchableOpacity>
                                <View style={[styles.likeAndShare, shadowStyle]}>
                                    <Image source={icons.like} style={styles.likeIcon}/>
                                </View>
                            </TouchableOpacity>
                            <View style={{marginHorizontal: 12}}/>
                            <TouchableOpacity>
                                <View style={[styles.likeAndShare, shadowStyle]}>
                                    <Image source={icons.share} style={styles.shareIcon}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.mainTitle, {paddingTop: 34}]}>מאמרים דומים</Text>
                        <View style={{marginTop: 20}}>
                            <Slideshow
                                indicatorSize={0}
                                scrollEnabled={false}
                                arrowLeft={{color: "red", width: 10, height: 10}}
                                dataSource={[
                                    {url: images.faqBg},
                                    {url: images.userTypeBg},
                                    {url: images.userTypeBg},
                                ]}/>
                            {/*<View style={{position: "absolute", left:"35%"}}>*/}
                            {/*    <View style={{alignItems:"center"}}>*/}
                            {/*        <View style={[styles.circleIconSlider, shadowStyle]}>*/}
                            {/*            <Image source={icons.yellowIcon} style={{width: 45, height: 45}}/>*/}
                            {/*        </View>*/}
                            {/*        <Text style={{paddingTop:20, fontSize:24, color:"white"}}>שם הכתבה</Text>*/}
                            {/*        <Text style={{paddingTop:10, color:"white", fontSize:16}}>תחום, תת תחום</Text>*/}
                            {/*        <Text style={{color:"#fefeff80", fontSize:16, paddingTop:18}}>21. 07. 20</Text>*/}
                            {/*    </View>*/}
                            {/*</View>*/}
                            <View style={styles.sliderBottom}>
                                <Text style={styles.sliderBottomText}>קרא עוד</Text>
                            </View>

                            <TouchableOpacity style={{backgroundColor:"red",paddingVertical: 20,paddingHorizontal:20}} onPress={()=>navigation.navigate("PersonalWork")}>
                                <Text>navigate</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Footer/>
        </View>
    );
}


const shadowStyle = {
    shadowOpacity: 0.4
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 34,
        marginBottom: 20
    },

    mainContainer: {
        marginTop: 24,
    },

    title: {
        color: "#39496D",
        textAlign: "center"
    },

    circleIcon: {
        width: 62,
        height: 62,
        backgroundColor: "white",
        position: "absolute",
        zIndex: 30000,
        borderRadius: 50,
        left: "40%",
        top: "10%",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5
    },

    circleIconSlider: {
        width: 62,
        height: 62,
        backgroundColor: "white",
        borderRadius: 50,
        top: "10%",
        alignItems: "center",
        justifyContent: "center",
    },

    imageBgUp: {
        width: 106,
        height: 86,
        // backgroundColor:"red",
        position: "absolute",
        left: 0,
        top: "10%"
    },

    imageBgDown: {
        width: 106,
        height: 86,
        // backgroundColor:"blue",
        position: "absolute",
        right: 0,
        top: "45%"
    },

    mainTitle: {
        color: "#39496D",
        fontSize: 30,
        paddingTop: 74,
        fontWeight: "800",
        textAlign: "center",
        marginTop: 10
    },

    mainTitleSmall: {
        color: "#30b8b2",
        fontSize: 16,
        fontWeight: "300",
        textAlign: "center",
        paddingTop: 13
    },

    dateMainContainer: {
        marginTop: 23,
        alignItems: "center"
    },

    keyDoorStyle: {
        width: 57,
        height: 50,
    },

    borderLeftRight: {
        borderLeftColor: "#39496d",
        height: 40,
        borderLeftWidth: 2,
        transform: [{rotate: '90deg'}],
    },

    imageContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    dateText: {
        color: "#39496d"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        height: 186,
        marginTop: 22,
    },

    postTextBlock: {
        marginTop: 28
    },

    postTittle: {
        textAlign: "right",
        color: "#39496d",
        fontWeight: "bold",
        fontSize: 18
    },

    postText: {
        color: "#172c60",
        textAlign: "right",
        fontSize: 18,
        paddingTop: 18,
        fontWeight: "300"
    },

    likeAndShareBlock: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    feedbackBlock: {
        justifyContent: "center",
        borderBottomColor: "#172c60",
        borderBottomWidth: 1,
        paddingBottom: 26
    },

    likeAndShare: {
        width: 45,
        height: 45,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        elevation: 5
    },

    likeIcon: {
        width: 25,
        height: 23
    },

    shareIcon: {
        width: 20,
        height: 24
    },

    sliderContainerStyle: {
        borderBottomEndRadius: 10,
        // borderRightRadius:10,
        // borderBottomRightRadius:10,
        marginTop: 10
    },

    arrowLeft: {
        color: "red"
    },

    sliderBottom: {
        backgroundColor: "#30b8b2",
        // height:20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    sliderBottomText: {
        color: "white",
        fontSize: 16,
        fontWeight: "800",
        paddingVertical: 20,
    }

});

export default PostHr
