import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

import React, {useState} from "react";
import {icons} from "../../configs/imagesAndIconsUrl";



const CreatingPicker = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isCheck, setIsCheck] = useState(false)



    return (
        <View style={styles.picker}>
            <TouchableOpacity style={[styles.pickerUp,!isOpen && styles.pickerUpClose]} onPress={() => setIsOpen(!isOpen)}>
                {
                    isOpen ?
                        <Image source={icons.arrowTopWhite} style={styles.arrowBottomWhite}/>
                        :
                        <Image source={icons.arrowBottom} style={styles.arrowBottomWhite}/>

                }

                <Text style={[styles.pickerUpText,!isOpen && {color: "rgba(31, 30, 29, 0.2)", }]}>{props.name}</Text>
            </TouchableOpacity>
            {
                isOpen &&
                <View style={styles.pickerDown}>

                    {props.checkButton.map((item,index)=>{
                        return(
                            <TouchableOpacity style={styles.pickerDownButton} onPress={() => setIsCheck(!isCheck)}>
                                {item.isCheck ?
                                    <View style={styles.circleBlue}>
                                        <Image source={icons.checkIcon} style={{width: 14, height: 10}}/>
                                    </View>
                                    :
                                    <View style={styles.circle}/>
                                }
                                <Text style={styles.pickerDownButtonText}>{item.textRight}</Text>
                            </TouchableOpacity>
                        )
                    })}

                </View>
            }


        </View>
    )
}


const styles = StyleSheet.create({
    picker: {
        width: "100%",
        borderWidth: 2,
        borderColor: "rgba(31, 30, 29, 0.2)",
        borderRadius: 4
    },

    pickerUp: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        borderRadius: 2,
        width: "100%",
        backgroundColor: "#30b8b2",
        height: 40
    },

    pickerUpClose: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        borderRadius: 2,
        width: "100%",
        backgroundColor: "#fff",
        height: 40
    },

    pickerUpText: {
        color: "#fff",
        fontSize: 15,
    },

    arrowBottomWhite: {
        width: 13,
        height: 6
    },

    pickerDown: {
        flex: 1,
    },

    pickerDownButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 20,
        paddingLeft: 15,
        height: 40,
        borderBottomEndRadius: 4
    },

    pickerDownButtonText: {
        fontSize: 14,
        color: "#172c60"
    },

    circle: {
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
        borderWidth: 3,
        borderColor: "#268b93"
    },
    circleBlue: {
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
        borderWidth: 3,
        borderColor: "#172c60",
        backgroundColor: "#172c60"
    }


})

export default CreatingPicker