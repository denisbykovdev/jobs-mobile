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


const CreatingPickerInButton = (props) => {
    console.log(props.item,props.key)
    // const [isCheck, setIsCheck] = useState(false)

    const IsCheck = () => {
        props.setIsCheck(props.key)
    }

    return (

        <TouchableOpacity style={styles.pickerDownButton} onPress={IsCheck}>
            {props.isCheck===props.key ?
                <View style={styles.circleBlue}>
                    <Image source={icons.checkIcon} style={{width: 14, height: 10}}/>
                </View>
                :
                <View style={styles.circle}/>
            }
            <Text style={styles.pickerDownButtonText}>{props.item}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({


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

export default CreatingPickerInButton