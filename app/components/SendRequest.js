import {Image, Text, StyleSheet, View, ImageBackground, AsyncStorage, Share, TouchableOpacity} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import React, {useState} from "react";
import Stars from 'react-native-stars';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { watchGetFavoriteJob } from '../actions/jobsActions';
import CommonFrame from "../commons/CommonFrame";

const SendRequest = ({item, fromMyProfile,navigationTo,fetchData}) => {



    const imageUrl = (JobUrl + item.cover_image);
//    console.log(item.id);

    const [addFavorite, setAddToFavorite] = useState(item.is_favorite)
    const [addFavoritePopUp, setAddToFavoritePopUp] = useState(false)
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token);

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'https://sherutbekalut.co.il',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    const addToFavorite = async(jobId) => {

        console.log("jobId", jobId)
        console.log("sdf", token)
        dispatch(watchGetFavoriteJob(token, jobId)); 
        setTimeout(() => {
            setAddToFavoritePopUp(true);
        // fetchData();
        }, 2000)
    }

//     const addToFavoriteold = async (id) => {
// //        console.log(id);
//         const url = `${JobUrl}/api/job/${id}/favorite`;
//         const token = await AsyncStorage.getItem('token') ;
//         axios.get(url,
//             {
//                 headers: {
//                     'Authorization': `Bearer ${JSON.parse(token)}`
//                 },
//             }).then(response => {
// //             console.log("responseReq",id, response.request.responseURL);
//              setAddToFavorite(!addFavorite);
//              setAddToFavoritePopUp(true);
//              setTimeout(() => {
//                  setAddToFavoritePopUp(false);
//                  fetchData();
//              }, 2000)

//         }).catch(error => console.log("useEffect222", error));
//     }

    return (
        // <CommonFrame>
        <View style={shadowStyle}>
            <TouchableOpacity onPress={()=>navigationTo("JobsOpportunity",item.id)} style={{zIndex:-1}}>
                <View style={[styles.mainContainer]}>
                    <ImageBackground source={item.cover_image ? {uri: imageUrl} : images.tellMore} style={styles.image}>
                        <Text style={styles.bgTitle}>{item.title}</Text>
                        <Text style={styles.smallTitle}>{item.organization}</Text>
                    </ImageBackground>
                    <View style={[styles.reviewsBlock, {shadowOpacity: 0.5}]}>
                        <View style={styles.reviewTitleBlock}>
                            <View style={styles.iconsColumn}>
                                {!fromMyProfile &&
                                <View style={{flexDirection: "row"}}>
                                    <TouchableOpacity onPress={() => addToFavorite(item.id)}>
                                        <View
                                            style={[styles.iconsCircle, {backgroundColor: addFavorite ? "#30b8b2" : "white"}, shadowStyle]}>
                                            <Image source={addFavorite ? icons.likeGreen : icons.like}
                                                   style={styles.like}/>
                                        </View>
                                    </TouchableOpacity>

                                </View>
                                }
                                <TouchableOpacity onPress={onShare}>
                                    <View style={[styles.iconsCircle, {backgroundColor: "white"}, shadowStyle]}>
                                        <Image source={icons.share}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.opinionTitle}>{item.title}</Text>
                            <View style={styles.starReviews}>
                                <Stars
                                    half={true}
                                    default={item.stars}
                                    // update={(val)=>{this.setState({stars: val})}}
                                    spacing={5}
                                    starSize={10}
                                    count={5}
                                    fullStar={icons.starFilled}
                                    emptyStar={icons.starEmpty}
                                />
                            </View>
                            {addFavoritePopUp && addFavorite &&
                            <View style={[styles.modal, shadowStyle]}>
                                <View style={styles.modalCheck}>
                                    <Image source={icons.checkIcon} style={styles.checkIcon}/>
                                </View>
                                <Text style={styles.modalText}>התקן נוסף למועדפים</Text>
                                <Image source={icons.smallDots} style={styles.dots}/>
                            </View>
                            }
                            <Text style={styles.descriptionText} numberOfLines = {3}>
                                {item.description.replace(/(<([^>]+)>)/gi, "")}
                            </Text>
                            <View style={styles.openStandardBlock}>
                                <Text style={styles.opinionTitle}>תקנים פתוחים:</Text>
                                <View style={styles.openStandardLoader}>
                                    <View
                                        style={[styles.openStandardLoaderFill, {width: `${100 / item.count_of_all_positions * item.count_of_taken_positions}%`}]}/>
                                </View>
                                <View style={styles.rangeLine}>
                                    <Text style={[styles.range, {color: "#aaaeb7"}]}> {item.count_of_all_positions} </Text>
                                    <Text style={{color: "#172c60"}}> מתוך </Text>
                                    <Text style={styles.range}>{item.count_of_taken_positions}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{marginBottom: 20}}>
                <TouchableOpacity style={[shadowStyle, styles.btn, {backgroundColor: item.send ? "#babec7" : "#30b8b2"}]} onPress={()=>navigationTo("JobsOpportunity",item.id)}>
                    <Text style={styles.btnText}>{item.send ? "הבקשה נשלחה" : "ספרו לי עוד"}</Text>
                    {item.send &&
                    <Image source={icons.checkIcon} style={styles.checkIcon}/>
                    }
                </TouchableOpacity>
            </View>
        </View>
        // </CommonFrame>
    )
}

const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1},
    borderWidth: 0,
    borderColor: "white"
}

const styles = StyleSheet.create({
    mainContainer: {
        // paddingHorizontal: 32,
        justifyContent: "center",
        marginBottom: 24,
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        height: 136,
        marginTop: 26,
        paddingTop: 10,
        zIndex: -100
    },

    bgTitle: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 26
    },

    smallTitle: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },

    reviewsBlock: {
        marginTop: -30,
        elevation: 5,
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop: 40,
    },

    reviewTitleBlock: {
        alignItems: "center",
        marginHorizontal: 32
    },

    iconsColumn: {
        position: "absolute",
        left: "-18%",
        top: "18%"
    },

    iconsCircle: {
        width: 45,
        height: 45,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 13,
        elevation: 5

    },

    like: {
        width: 23,
        height: 21
    },

    opinionTitle: {
        color: "#172c60",
        fontSize: 15,
        fontWeight: "800",
        textAlign: "center"
    },

    starReviews: {
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 24,
    },

    descriptionText: {
        color: "#172c6099",
        alignItems: 'center',
        fontSize: 14
    },


    openStandardBlock: {
        marginTop: 20,
        width: "100%",
        marginBottom: 52
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

    btn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-10%",
        width: "60%",
        marginLeft: "15%",
        borderRadius: 5,
        position: "absolute",
        zIndex:200
    },

    btnText: {
        color: "white",
        textAlign: "center",
        paddingVertical: 19,
        paddingHorizontal: 15,
        fontSize: 18,
        fontWeight: "bold"
    },

    checkIcon: {
        width: 15,
        height: 12
    },

    modal: {
        elevation: 4,
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 270,
        top: "20%",
        left: "5%",
        borderRadius: 5,
        zIndex: 10000,
        position: "absolute",
    },

    modalCheck: {
        width: 30,
        height: 30,
        backgroundColor: "#30b8b2",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },

    modalText: {
        color: "#30b8b2",
        fontSize: 17,
        fontWeight: "600"
    },

    dots: {
        width: 41,
        height: 35
    }


});


export default SendRequest
