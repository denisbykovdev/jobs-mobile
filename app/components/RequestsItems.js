import {Image, Text, StyleSheet, View, ImageBackground, AsyncStorage, Share, TouchableOpacity} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import React, {useState} from "react";
import Stars from 'react-native-stars';
import axios from "axios";

const RequestsItems = ({item, navigationTo}) => {

    console.log(item)


    return (
        <View style={shadowStyle}>
            <Image style={styles.logo} source={icons.groupPersonLogo} />
            <TouchableOpacity onPress={()=>navigationTo("JobsOpportunity",item.id)} style={{zIndex:-1}}>
                <View style={[styles.mainContainer]}>
                    <ImageBackground source={images.tellMore} style={styles.image}>
                        <Text style={styles.bgTitle}>{item.title}</Text>
                        <Text style={styles.smallTitle}>{item.organization_name}</Text>
                    </ImageBackground>
                    <View style={[styles.reviewsBlock, {shadowOpacity: 0.5}]}>
                        <View style={styles.reviewTitleBlock}>
                            <Text style={styles.opinionTitle}>סטטוס: <Text style={styles.opinionTitle}>{item.status_text}</Text></Text>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>


        </View>

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
        paddingHorizontal: 32,
        justifyContent: "center",
        marginBottom: 24,
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        height: 100,
        marginTop: 26,
        paddingTop: 10,
        zIndex: -100
    },

    logo: {
        height: 70,
        width: 70,
        top: "30%",
        position:'absolute',
        zIndex: 999,
        marginLeft: 50,
    },

    bgTitle: {
        color: "white",
        textAlign: "right",
        fontWeight: "bold",
        fontSize: 26,
        marginRight: 20,
    },

    smallTitle: {
        color: "white",
        fontSize: 16,
        textAlign: "right",
        marginRight: 20,
    },

    reviewsBlock: {
        marginTop: -30,
        elevation: 5,
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    reviewTitleBlock: {
        margin: 40,
        alignItems: "flex-end",
        marginRight: 20,
    },

    opinionTitle : {
        textAlign: "right",
    },

    iconsColumn: {
        position: "absolute",
        left: "-18%",
        top: "18%"
    },

    descriptionText: {
        color: "#172c6099",
        fontSize: 14
    },


    openStandardBlock: {
        marginTop: 20,
        width: "100%",
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


export default RequestsItems
