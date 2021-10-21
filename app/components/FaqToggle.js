import {Image, TouchableOpacity, StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import React, {useState} from "react";
import {icons} from "../configs/imagesAndIconsUrl";

const FaqToggle = ({item}) => {
    const [visibleToggle, setVisibleToggle] = useState(false)
    return (
        <View>
            <View style={shadowStyle}>
                <LinearGradient elevation={5} colors={visibleToggle ? ['#3CD0BD', '#219BA5'] : ["white", "white"]}
                                style={[styles.linerGradient, visibleToggle]}>
                    <TouchableOpacity onPress={() => setVisibleToggle(!visibleToggle)}>
                        <View style={[styles.mainToggle]}>
                            <View style={[styles.arrowCircle, !visibleToggle && styles.arrowBorder]}>
                                <Image source={visibleToggle ? icons.arrowBottom : icons.arrowTop}
                                       style={styles.arrowIcon}/>
                            </View>
                            <View style={{width: 200}}>
                                <Text style={[styles.toggleText, {color: visibleToggle ? "white" : "#172c60"}]}>
                                    {item.question}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            {visibleToggle && item.answers &&
            <View style={[styles.openedToggle, toggleShadowStyle]} elevation={1.5}>
                <Text style={styles.mainText}>
                    {item.answers.map((i, index) => {
                        return(
                            <Text key={index} >
                                {i.answer+"\n"}
                            </Text>
                        )

                    })}
                </Text>
            </View>
            }
        </View>
    )
}

const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2}
}

const toggleShadowStyle = {
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    elevation: 1,
    borderTopWidth: 0,
    borderWidth: 0.2,
    borderColor: "#EEEEEE"
}

const styles = StyleSheet.create({


    linerGradient: {
        marginTop: 20,
        borderRadius: 4,
        marginHorizontal: 20
    },

    linerGradientBorder: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },

    mainToggle: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 17,
    },

    arrowIcon: {
        width: 12,
        height: 8
    },

    arrowCircle: {
        width: 30,
        height: 30,
        backgroundColor: "white",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"

    },

    arrowBorder: {
        borderColor: "#268b93",
        borderWidth: 2
    },

    toggleText: {
        textAlign: "right",
        color: "white",
    },

    mainText: {
        color: "#172c6099",
        textAlign: "right",
        paddingLeft: 61,
        paddingRight: 21,
        paddingVertical: 10,
        opacity: 0.6
    },

    openedToggle: {
        marginHorizontal: 20,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    }

})


export default FaqToggle
