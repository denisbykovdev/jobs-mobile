import {
    Image,
    TouchableOpacity,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    TextInput,
    AsyncStorage
} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import {LinearGradient} from "expo-linear-gradient";
import FaqToggle from "../components/FaqToggle";
import {toggleText} from "../configs/FakeData"
import HrFooter from "../components/HrFooter";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";

const FAQHr = ({navigation}) => {


    const [question, setQuestion] = useState("");
    const [id, setId] = useState(navigation && navigation.state && navigation.state.params && navigation.state.params.jobId);
    const [imageUrl, setImageUrl] = useState(navigation && navigation.state && navigation.state.params && navigation.state.params.imageUrl);
    const [array, setArray] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        fetchData().then()
    }, [])


    const fetchData = async () => {
//        console.log(id)
        const hrId = await AsyncStorage.getItem('hrId');
        const url = `${JobUrl}/api/hr/jobs/questions?hr_id=${hrId}`
        // const token = await getUserToken()
        const token = await AsyncStorage.getItem('token');

        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {
             console.log("responseJobs", response.data.faqs);
            const data = response && response.data && response.data.faqs
            setArray(data);
        }).catch(error => console.log("FaqError", error));
    }

    const addQuestion = async () => {
        const url = `${JobUrl}/api/jobs/${id}/faq/store`
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');

        axios.post(url, {
                job_id: id,
                question: question
            },
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,

                },
            }).then(response => {
            console.log("addQuestion", response)
//            navigation.navigate("JobsOpportunitie")

        }).catch(error => console.log("addQuestionError", error));

    }

    const searchChange = (text) => {
        if (text.length>2 || text.length===0){
            fetchData(text).then()
        }
        setSearch(text)
    }

    return (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
            <Header navigation={navigation}/>
            <ScrollView style={{flex: 1}}>
                <View style={styles.mainContainer}>
                    <ImageBackground source={{uri: imageUrl}} style={styles.image}>
                        <Text style={styles.bgTitle}> מדרשת מעיין שדרות </Text>
                        <Text style={styles.bgSmallTitle}>שם הארגון</Text>
                        <Text style={[styles.bgSmallTitle, {color: "#b6c1df"}]}>עִיר</Text>
                    </ImageBackground>
                    <View style={styles.circleIcon}>
                        <Image source={icons.yellowIcon} style={{width: 45, height: 45}}/>
                    </View>
                    <View style={styles.faqBlock}>
                        <LinearGradient colors={['#3CD0BD', '#219BA5']}>
                            <View style={styles.textInput}>
                                <Image source={icons.searchBlue} style={{width: 19, height: 19}}/>
                                <TextInput
                                    placeholder={"מה לחפש לך?"}
                                    placeholderTextColor={"#e1e1e1"}
                                    placeholderStyle={styles.placeHolder_styles}
                                    style={{textAlign: "right"}}
                                    onChangeText={text => searchChange(text)}
                                    value={search}
                                />
                            </View>
                        </LinearGradient>
                    </View>
                </View>

            </ScrollView>
            <View style={styles.inputBlock}>
                <TouchableOpacity onPress={() => addQuestion()}>
                    <Image source={icons.send} style={styles.sendIcon}/>
                </TouchableOpacity>
                <TextInput
                    style={styles.text_input}
                    multiline={false}
                    keyboardType={"email-address"}
                    placeholder={"?יש לך שאלה לגבי התקן"}
                    secureTextEntry={false}
                    placeholderTextColor={"#e1e1e1"}
                    placeholderStyle={styles.placeHolder_styles}
                    onChangeText={text => setQuestion(text)}
                    value={question}
                />
            </View>
            <HrFooter navigation={navigation}/>
        </View>
    )
}

const shadowStyle = {
    shadowOpacity: 0.2
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 32,
        justifyContent: "center"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        height: 146,
        marginTop: 26,
        paddingTop: 21,
        zIndex: -100
    },

    bgTitle: {
        color: "white",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 26
    },

    bgSmallTitle: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },

    faqBlock: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden',
        marginTop: -11,
        zIndex: 10000
    },

    text_input: {
        textAlign: "right",
        paddingVertical: 10,
    },

    placeHolder_styles: {
        fontWeight: '500',
        color: 'white',
    },

    inputBlock: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "white",
        borderColor: "#e1e1e1",
        borderWidth: 3,
        marginTop: 20,
        marginHorizontal: "10%",
        borderRadius: 10,
        paddingHorizontal: 15,
    },

    sendIcon: {
        width: 27,
        height: 18
    },

    circleIcon: {
        width: 62,
        height: 62,
        backgroundColor: "white",
        position: "absolute",
        zIndex: 30000,
        borderRadius: 50,
        left: "50%",
        top: "42%",
        alignItems: "center",
        justifyContent: "center"
    },

    toggleBlock: {
        backgroundColor: "white",
        marginHorizontal: 32,
        marginBottom: 20,
        elevation: 5
    },

    toggleTitle: {
        color: "#172c60",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 19
    },

    textInput: {
        marginVertical: 50,
        backgroundColor: "white",
        width: "80%",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 17,
        paddingVertical: 12,
        textAlign: "right",
        marginLeft: "10%",
    },


});


export default FAQHr
