import {Image,ScrollView, Text, StyleSheet, AsyncStorage, View, TouchableOpacity} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React, {useState, useEffect} from "react";
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import axios from "axios";
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { watchQuizResult } from '../actions/quizActions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ResultOfQuiz = () => {
    const [education, setEducation] = useState(false)
    const [social, setSocial] = useState(false)
    const [agriculture, setagriculture] = useState(false)


    useEffect(() => {
        fetchData().then()
    }, []);

    const fetchData = async() => {
        const userId = await AsyncStorage.getItem('userId');
        const url = `${JobUrl}/api/quiz/get/result?user=${userId}`;
        axios.get(url,
            ).then(response => {
             console.log("responseQuizResult", response.data);
        }).catch(error => console.log("QuizError", error));
    }

    return (
        <ScrollView>
        <View style={styles.mainContainer}>
            <View >
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <View>
                        <Image source={icons.testUp} style={styles.dotsIconStyles}/>
                    </View>
                    <View>
                        <Image source={icons.testUpRight} style={styles.dotsIconStyles}/>
                    </View>
                </View>
                <View style={styles.mainTitlesBlock}>
                    <Text style={styles.mainTitleSmall}>התוצאות שלך</Text>
                    <Text style={styles.mainTitle}> התוצאות שלך</Text>
                </View>
                <View>
                    <Text style={styles.sloganText}>נקדים ונאמר שממש התרשמנו ובטוחים שמחכה </Text>
                    <Text style={styles.sloganText}>!לך תקן מעולה שמתאים בול בשבילך </Text>
                </View>
            </View>
            <View style={{alignItems: "center", paddingVertical: "15%"}}>
                <Text style={styles.sloganText}>התחומים ותתי התחומים אשר </Text>
                <Text style={styles.sloganText}>:נמצאו עבורך רלוונטי הם </Text>
            </View>

            <View style={{marginTop: "auto"}}>
                <TouchableOpacity onPress={() => setEducation(!education)}>
                    <View style={styles.btn}>
                        <View style={styles.arrowBlock}>
                            <Image source={education ? icons.arrowBottomWhite : icons.arrowBottomWhite}
                                   style={styles.arrowIcon}/>
                        </View>
                        <View style={styles.btnTextBlock}>
                            <Text style={[styles.btnText, {color: "#ffffff66"}]}>(2) </Text>
                            <Text style={[styles.btnText, {color: "white"}]}>חינוך</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSocial(!social)}>
                    <View style={[styles.btn, {opacity: 0.7}]}>
                        <View style={styles.arrowBlock}>
                            <Image source={social ? icons.arrowBottomWhite : icons.arrowBottomWhite}
                                   style={styles.arrowIcon}/>
                        </View>
                        <View style={styles.btnTextBlock}>
                            <Text style={[styles.btnText, {color: "#ffffff66"}]}>(4) </Text>
                            <Text style={[styles.btnText, {color: "white"}]}>סוציאלי</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setagriculture(!agriculture)}>
                    <View style={[styles.btn, {opacity: 0.4}]}>
                        <View style={styles.arrowBlock}>
                            <Image source={agriculture ? icons.arrowBottomWhite : icons.arrowBottomWhite}
                                   style={styles.arrowIcon}/>
                        </View>
                        <View style={styles.btnTextBlock}>
                            <Text style={[styles.btnText, {color: "#ffffff66"}]}>(3) </Text>
                            <Text style={[styles.btnText, {color: "white"}]}>חקלאות </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: 20,
        flex: 1,
        paddingHorizontal: 38,
    },

    dotsIconStyles: {
        width: 106,
        height: 86,
    },

    mainTitlesBlock: {
        alignItems: "center",
        marginTop: -60
    },

    mainTitleSmall: {
        color: "#172c60",
        fontSize: 14
    },

    mainTitle: {
        color: "#172c60",
        fontSize: 30,
        fontWeight: "bold"
    },

    sloganText: {
        color: "#172c60",
        fontSize: 18,
        textAlign: "center",
        paddingTop: 10
    },

    curlyImageStyle: {
        backgroundColor: "red",
        width: "100%",
    },

    picker: {
        backgroundColor: "#172c60",
        width: "60%",
        height: 56
    },

    label_styles: {
        fontSize: 13,
        color: '#39496d',
        fontWeight: "800",
        textAlign: "right",
    },

    dropDownStyle: {
        borderWidth: 2,
        borderColor: "#30b8b2"
    },

    btn: {
        backgroundColor: "#172c60",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "row",
        marginBottom: 13,
    },

    arrowBlock: {
        width: 35,
        height: 35,
        position: "absolute",
        left: 10,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 50,
    },

    arrowIcon: {
        width: 13,
        height: 6,
    },

    btnTextBlock: {
        flexDirection: "row",
        alignItems: "flex-end"
    },

    btnText: {
        paddingVertical: 20,
        fontSize: 17,
        fontWeight: "bold"
    }

});


export default ResultOfQuiz
