import {Image, Text, StyleSheet, View} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React, {useState} from "react";
import Stars from 'react-native-stars';

const Reviews = ({item}) => {
    return (
        <View>
            <View style={styles.userInfoBlock}>
                <View style={{paddingRight: 18}}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.dateText}>{"נכתב בתאריך "+item.created_at.slice(8,10)+"."+item.created_at.slice(5,7)+"."+item.created_at.slice(0,4)} </Text>
                </View>
                <View>
                    <Image source={icons.noPhoto} style={styles.userImage}/>
                </View>
            </View>
            <View style={styles.starReviewsRow}>
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
                <Text style={styles.reviewText}>{item.description}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    starReviewsRow: {
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingBottom: 24,
    },

    rotate:{
        transform: [{ rotate: '180deg'}]
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
        color: "rgba(23, 44, 96, 0.5)",
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
    }

});


export default Reviews
