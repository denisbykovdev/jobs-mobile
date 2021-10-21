import {Image, ScrollView, Text, StyleSheet, View, ImageBackground, TouchableOpacity, AsyncStorage} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React,{useEffect,useState} from "react";
import Header from "../components/Header";
import Stars from 'react-native-stars';
import ReviewsRow from "../components/ReviewsRow";
import {reviews} from "../configs/FakeData"
import Footer from "../components/Footer";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";

const Reviews = ({navigation}) => {
    const [id, setId] = useState(navigation && navigation.state && navigation.state.params && navigation.state.params.idJob)
    const [respData, setRespData] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        const fetchData = async () => {
            console.log(id);
            const token = await AsyncStorage.getItem('token');
            const url = `${JobUrl}/api/jobs/${id}/reviews`;
            axios.get(url,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`
                    },
                }).then(response => {
//                 console.log("response", response.data);
                setRespData(response && response.data);
                setImageUrl(JobUrl + response.data.cover_image);
            }).catch(error => console.log(useEffect, error));
        }
        fetchData().then()
    }, [])


    return (
        <View style={{flex: 1,backgroundColor:"#fff"}}>
            <Header visibleBackArrow={true} navigation={navigation}/>
            {respData &&
            <ScrollView>
                <View>
                    <View style={[styles.mainContainer]}>
                        <ImageBackground source={{uri: imageUrl}} style={styles.image}>
                            <Text style={styles.bgTitle}>{respData.title}</Text>
                            <Text style={styles.smallTitle}>שם הארגון</Text>
                        </ImageBackground>
                        <View style={[styles.reviewsBlock, {shadowOpacity: 0.5}]}>
                            <View style={{alignItems: "center"}}>
                                <View style={[styles.circleIcon, shadowStyleMain]}>
                                    {respData.logo &&
                                    <Image source={icons.yellowIcon} style={{width: 45, height: 45}}/>}
                                </View>
                            </View>
                            <View style={styles.reviewTitleBlock}>
                                <Text style={styles.opinionTitle}>{respData.count} חוות דעת</Text>
                                <View style={styles.starReviews}>
                                    <Stars
                                        half={true}
                                        default={respData.stars}
                                        // update={(val)=>{this.setState({stars: val})}}
                                        spacing={5}
                                        starSize={10}
                                        count={5}
                                        fullStar={icons.starFilled}
                                        emptyStar={icons.starEmpty}
                                    />
                                </View>
                            </View>
                            <View style={{paddingRight: 30,}}>
                                {respData.data.map((item, index) => {
                                    return (

                                        <ReviewsRow
                                            key={index}
                                            item={item}
                                        />

                                    )
                                })
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            }
            <Footer navigation={navigation}/>
            <View style={styles.btn}>
                <TouchableOpacity onPress={()=>navigation.navigate("NewReview",{idJob:id})}>
                    <Text style={styles.btnText}>גם לי יש מה להגיד</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom:120

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

    workStatus: {
        color: "#172c6066",
        fontSize: 11,
        fontWeight: "300",
        textAlign: "center",
        paddingTop: 12
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

    starReviewsRow: {
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingBottom: 24
    },

    userInfoBlock: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingTop: 29
    },

    title: {
        color: "#172c60",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "right"
    },

    dateText: {
        color: "#39496d",
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right",
    },

    userImage: {
        width: 50,
        height: 50
    },

    reviewText: {
        textAlign: "right",
        color: "#172c60",
        fontSize: 18,
        paddingLeft: 36,
        paddingTop: 18
    },

    btn: {
        position: "absolute",
        bottom: "11%",
        left: "28%",
        backgroundColor: "#30b8b2",
        width: "44%"
    },

    btnText: {
        color: "white",
        textAlign: "center",
        paddingVertical: 19,
        paddingHorizontal: 15,
        fontSize: 18,
        fontWeight: "bold"
    }


});


export default Reviews
