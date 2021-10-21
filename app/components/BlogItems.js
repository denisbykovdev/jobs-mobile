import {Image, Text, StyleSheet, View, TouchableOpacity, ImageBackground} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React from "react";
import {Dimensions} from 'react-native';
import { url } from "../utils/api";

const windowWidth = Dimensions.get('window').width;

const BlogItems = ({item}) => {
    return (
        <View>
            <ImageBackground source={url + item.image} style={styles.image}/>
            <Text style={styles.blogItemTitle}>{item.title}</Text>
            <Text style={styles.blogItemSmallText}>{item.smallTitle}</Text>
            <View style={styles.dateRow}>
                <View style={[styles.borderLeftRight, {marginRight: 10}]}/>
                <Text style={styles.dateText}>{item.date}</Text>
            </View>
            <Text style={styles.blogItemText}>
                ו בלוקריה שיצמה ברורק. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג -
                ולתיעם גדדיש ולתיעם גדדיש.
            </Text>

            <TouchableOpacity>
                <View style={styles.saveBtn}>
                    <Image source={icons.arrowLeft} style={styles.arrowIcon}/>
                    <Text style={{paddingHorizontal: 7}}/>
                    <Text style={styles.saveBtnText}>כניסה לכתבה</Text>
                </View>
            </TouchableOpacity>
            {item.seeMoreBtn &&
            <TouchableOpacity>
                <View style={styles.seeAllBtn}>
                    <Text style={styles.seeAllBtnText}>הצג פוסטים נוספים</Text>
                </View>
            </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        height: 186,
        marginTop: 22,
    },

    blogItemTitle: {
        color: "#39496d",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "right",
        paddingTop: 12
    },

    blogItemSmallText: {
        color: "#30b8b2",
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right"
    },

    dateRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingLeft: 134
    },

    dateText: {
        color: "grey",
        textAlign: "right",
        fontSize: 12,
        fontWeight: "300",
        paddingTop: 12,
    },

    borderLeftRight: {
        borderLeftColor: "#39496d",
        height: 1,
        borderLeftWidth: windowWidth / 1.46,
    },

    blogItemText: {
        color: "#172c60",
        textAlign: "right",
        fontSize: 18,
        fontWeight: "300",
        paddingTop: 18
    },

    saveBtn: {
        alignItems: "center",
        backgroundColor: "#30b8b2",
        borderRadius: 4,
        marginTop: 27,
        marginBottom: 33,
        flexDirection: "row",
        justifyContent: "center"

    },

    saveBtnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "800",
        paddingVertical: 20
    },

    seeAllBtn: {
        alignItems: "center",
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "center",
        borderColor: "#30b8b2",
        borderWidth: 2
    },

    seeAllBtnText: {
        color: "#39496d",
        fontSize: 18,
        fontWeight: "800",
        paddingVertical: 20
    }

});


export default BlogItems
