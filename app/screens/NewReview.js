import {
    Image,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Stars from 'react-native-stars';
import Footer from "../components/Footer";

import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";
import PickerForNewReview from "../components/NewReview/PickerForNewReview";
import * as ImagePicker from "expo-image-picker";


const NewReview = ({navigation}) => {
    const [id, setId] = useState((navigation && navigation.state && navigation.state.params && navigation.state.params.idJob) || 2);

    const [userInfo, setUserInfo] = useState({});
    const [showInfo, setShowInfo] = useState({});
    const [dates, setDates] = useState({});
    const [chooseDateResp, setChooseDateResp] = useState({});

    const [uploadedImage, setUploadedImage] = useState("");
    const [imageUploaded, setImageUploaded] = useState(false);
    const [photo, setPhoto] = useState();



    const [name, setName] = useState(userInfo && userInfo.first_name);
    const [lastName, setLastName] = useState(userInfo && userInfo.last_name);
    const [phone, setPhone] = useState(userInfo && userInfo.phone);
    const [showInfoId, setShowInfoId] = useState("");
    const [description, onDescription] = React.useState("");
    const [stars, setStars] = React.useState("");
    const [chooseDate, setChooseDate] = useState("");
    const [duration, setDuration] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            // const token = await getUserToken();
            const token = await AsyncStorage.getItem('token');
            const url = `${JobUrl}/api/jobs/${id}/reviews/getData`;
            axios.get(url,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`
                    },
                }).then(response => {

                // console.log("useEffect", response);

                const userInfo = response.data && response.data.user_info;
                const showInfo = response.data && response.data.show_info;
                const dates = response.data && response.data.dates;

                setUserInfo(userInfo)
                setShowInfo(showInfo)
                setDates(dates)

            }).catch(error => console.log("useEffect", error));
        }
        fetchData().then()
    }, [])


    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        // console.log(pickerResult.fileName);
        setPhoto(pickerResult)
        setUploadedImage(pickerResult.uri)
        setImageUploaded(true)
    }


    const createFormData = (photo, body) => {
        if (!!photo===false){
            return null
        }
        console.log(photo)
        const data = new FormData();

        data.append("photo", {
            name: photo.type ,
            type: photo.type,
            uri: photo.uri
        });

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });
        console.log("info",data)
        return data;
    };


    const ChooseDate = async (chooseDate) => {
        setChooseDate(chooseDate)
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');
        const url = `${JobUrl}/api/libraries/duration/${chooseDate}`;
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {

            // console.log("ChooseDate", response.data);
            setChooseDateResp(response.data)


        }).catch(error => console.log("ChooseDate", error));
    }


    const storeReview = async () => {
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');
        const url = `${JobUrl}/api/jobs/${id}/reviews/store`;
        axios.post(url, {
                first_name: name,
                last_name: lastName,
                phone: phone,
                show_info: showInfoId,
                description:description,
                stars:stars,
                date:chooseDate,
                duration:duration,


                // first_name: "Mush",
                // last_name: "Harutyunyan",
                // phone: "+37494545454",
                // show_info: "1",
                // description: "Test description",
                // stars: "5",
                // date: "2020",
                // duration: "1",

                // avatar: createFormData(photo, { userId: id }),
            },
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {
            // console.log("storeReview", response.data && response.data.message);
            const message=response.data && response.data.message
            if (message==="success"){
                navigation.navigate("PageForApproveReview",{idJob:id})
            }

        }).catch(error => console.log("storeReview", error));
    }


    return (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
            <Header
                navigation={navigation}
                visibleBackArrow={true}
            />
            {userInfo && showInfo && dates &&
            <ScrollView>
                <View>
                    <View style={[styles.mainContainer]}>
                        <ImageBackground source={images.faqBg} style={styles.image}>
                            <Text style={styles.bgTitle}> מדרשת מעיין שדרות </Text>
                            <Text style={styles.smallTitle}>שם הארגון</Text>
                        </ImageBackground>
                        <View style={[styles.reviewsBlock, {shadowOpacity: 0.5}]}>
                            <View style={{alignItems: "center"}}>
                                <View style={[styles.circleIcon, shadowStyleMain]}>
                                    {userInfo.logo &&
                                    <Image source={icons.yellowIcon} style={{width: 45, height: 45}}/>}
                                </View>
                            </View>
                            <View style={styles.reviewTitleBlock}>
                                <Text style={styles.opinionTitle}>נשמח לקבל את הביקורת שלך</Text>

                                <View style={styles.mainNameBox}>
                                    <TextInput
                                        style={styles.mainNameInput}
                                        placeholder={"שם משפחה*"}
                                        placeholderTextColor={"#e1e1e1"}
                                        // placeholderStyle={styles.placeHolder_styles}
                                        onChangeText={text => setLastName(text)}
                                        value={lastName}
                                    />
                                    <TextInput
                                        style={styles.mainNameInput}
                                        placeholder={"שם*"}
                                        placeholderTextColor={"#e1e1e1"}
                                        // placeholderStyle={styles.placeHolder_styles}
                                        onChangeText={text => setName(text)}
                                        value={name}
                                    />
                                </View>
                                <TextInput
                                    style={styles.mobileInput}
                                    placeholder={"נייד"}
                                    placeholderTextColor={"#e1e1e1"}
                                    // placeholderStyle={styles.placeHolder_styles}
                                    onChangeText={text => setPhone(text)}
                                    value={phone}
                                />

                                <PickerForNewReview
                                    name={"פרסום חוות הדעת עם הפרטים שלי"}
                                    checkButton={Object.values(showInfo)}
                                    setShowInfoId={setShowInfoId}
                                />

                                <View>
                                    <TextInput
                                        style={styles.infoBox}
                                        editable
                                        multiline
                                        placeholder={"נשמח לשמוע כל מה שנראה לך חשוב. לדוגמא:\n" +
                                        "מה עשית ביומיום ואיך היה?\n" +
                                        "איך הרגשת עם צוות הארגון?\n" +
                                        "מה קיבלת מהשירות?\n" +
                                        "מה רמת הקושי של השירות בתקן?"}
                                        numberOfLines={4}
                                        onChangeText={text => onDescription(text)}
                                        value={description}
                                    />
                                    <Text style={{textAlign: "left", color: "rgba(43, 62, 110, 0.5)"}}>שנותרו 70
                                        תווים</Text>
                                </View>


                                <View style={styles.starsBox}>
                                    <Text style={styles.starsBoxText}>ואיך אפשר לסכם את זה בכוכבים?</Text>
                                    <View style={styles.starReviews}>
                                        <Stars
                                            half={false}
                                            default={0}
                                            update={(val) => {
                                                setStars(val)
                                            }}
                                            spacing={30}
                                            starSize={20}
                                            count={5}
                                            fullStar={icons.starFilled}
                                            emptyStar={icons.starEmpty}
                                        />
                                    </View>
                                    <View style={{flexDirection: "row", justifyContent: "space-between", width: "80%"}}>
                                        <Text style={{color: "rgba(43, 62, 110, 0.5)"}}>מעולה</Text>
                                        <Text style={{color: "rgba(43, 62, 110, 0.5)"}}>גרועה</Text>
                                    </View>
                                </View>

                                <View style={styles.starsBox}>
                                    <Text style={styles.starsBoxText}>מתי היית שם?</Text>
                                    <View style={{marginBottom: 22}}/>

                                    <PickerForNewReview
                                        name={'שנת תש"פ'}
                                        checkButton={dates}
                                        ChooseDate={()=>ChooseDate}
                                    />
                                    <View style={{marginBottom: 22}}/>

                                    <PickerForNewReview
                                        name={"שנה אחת"}
                                        checkButton={chooseDateResp && Object.values(chooseDateResp)}
                                        setDuration={setDuration}
                                    />

                                    <View style={{marginBottom: 41}}/>
                                </View>

                                <View style={styles.avatar}>
                                    <Text style={styles.starsBoxText}>אם יש לך תמונות טובות מהשירות - נשמח
                                        להציג אותן למי שיקרא את חוות הדעת שלך</Text>
                                    <View style={{marginBottom: 22}}/>

                                    <TouchableOpacity onPress={openImagePickerAsync}>
                                        <View style={{alignItems: "center"}}>
                                            {uploadedImage ?
                                                <Image source={{uri: uploadedImage}} style={styles.uploadedImage}/> :
                                                <Image source={icons.addImage} style={styles.addImage}/>
                                            }
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.mainButton} onPress={storeReview}>
                                        <Text style={styles.mainButtonText}>שליחת חוות דעת לצוות האתר</Text>
                                    </TouchableOpacity>


                                </View>


                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>
            }
            <Footer navigation={navigation}/>

        </View>
    )
}

const shadowStyleMain = {
    shadowOpacity: 0.5
}

const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1},
    // shadowRadius: 2,
    // elevation: 1,
    // borderTopWidth: 0,
    borderWidth: 0.5,
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
        height: 136,
        marginTop: 26,
        paddingTop: 21,
        zIndex: -100
    },

    bgTitle: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 26
    },

    reviewsBlock: {
        marginTop: -19,
        // zIndex: 2000,
        elevation: 5,
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingTop: 40,
    },

    smallTitle: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },

    circleIcon: {
        width: 62,
        height: 62,
        backgroundColor: "white",
        // zIndex: 30000,
        borderRadius: 50,
        marginTop: -70,
        elevation: 6,
        alignItems: "center",
        justifyContent: "center"
    },


    reviewTitleBlock: {
        alignItems: "center",
        borderBottomColor: "#e1e1e1",
        borderBottomWidth: 2,
        marginHorizontal: 32
    },

    opinionTitle: {
        color: "#172c60",
        fontSize: 20,
        fontWeight: "800",
        textAlign: "center"
    },

    starReviews: {
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 24,
    },


    title: {
        color: "#172c60",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "right"
    },

    mainNameBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 26,
    },

    mainNameInput: {
        textAlign: "right",
        borderWidth: 2,
        paddingTop: 13,
        paddingBottom: 16,
        paddingHorizontal: 15,
        width: '45%',
        borderRadius: 6,
        borderColor: "rgba(57, 73, 109, 0.3)",
    },

    mobileInput: {
        marginVertical: 21,
        textAlign: "right",
        borderWidth: 2,
        paddingTop: 13,
        paddingBottom: 16,
        paddingHorizontal: 15,
        width: '100%',
        borderRadius: 6,
        borderColor: "rgba(57, 73, 109, 0.3)",
    },

    infoBox: {
        marginTop: 21,
        textAlign: "right",
        borderWidth: 2,
        paddingTop: 13,
        paddingBottom: 16,
        paddingHorizontal: 15,
        borderRadius: 6,
        borderColor: "rgba(57, 73, 109, 0.3)",
    },

    starsBox: {
        width: "100%",
        marginTop: 36,
        alignItems: "center",
    },

    starsBoxText: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color: "#172c60"
    },

    mainButton: {
        alignItems: "center",
        justifyContent: 'center',
        height: 53,
        backgroundColor: "#30b8b2",
        borderRadius: 5,
        marginVertical: 35

    },

    mainButtonText: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
    },

    uploadedImage: {
        width: 147,
        borderRadius: 4,
        height: 147
    },

    addImage: {
        width: 147,
        height: 147
    },


});


export default NewReview
