import {
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
//import { CheckBox } from 'react-native-elements';
import React, { useState } from "react";
import { icons, images } from "../configs/imagesAndIconsUrl";



const DropDownSelectSearch = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isCheck, setIsCheck] = useState('')
    const [reload, setReload] = useState(true)

    const setCheckedItems = async (item) => {
        setIsCheck(item.id);
    }

    props.func(props.choose, isCheck);
    console.log(props.choose, isOpen);

    return (
        <View style={styles.picker}>
            <View style={styles.mainToggle} >
                <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                    <ImageBackground source={isOpen ? images.greenBg : images.greenBgWithCurl}
                        style={{ width: 332, height: 72 }}>
                        {/* <View style={styles.toggleRowContext}>
                            <View style={styles.iconCircle}>
                                <Image source={props.icon} style={{ width: 25, height: 25 }} />
                            </View>
                            <View style={styles.toggleRowContext}>
                                <Text style={styles.toggleTitle}>{props.name}</Text>
                                <View style={isOpen ? styles.openToggleCircle : styles.arrowCircle}>
                                    <Image
                                        style={{ width: 10, height: 5 }}
                                        source={isOpen ? icons.arrowTopWhite : icons.arrowBottom} />
                                </View>
                            </View>
                        </View> */}
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            {
                isOpen &&
                <ScrollView nestedScrollEnabled={true} style={styles.pickerDown}>

                    {props.items.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.pickerDownButton} onPress={() => setCheckedItems(item).then(setReload(!reload))}>
                                {item.id == isCheck ?
                                    <View style={styles.circleBlue}>
                                        <Image source={icons.checkIcon} style={{ width: 14, height: 10 }} />
                                    </View>
                                    :
                                    <View style={styles.circle} />
                                }
                                <Text style={styles.pickerDownButtonText}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })}

                </ScrollView>
            }


        </View>
    )
}


const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    borderWidth: 0,
    borderColor: "white"
}

const styles = StyleSheet.create({


    pickerDown: {
        maxHeight: 120,
        flex: 1
    },
    mainToggle: {
        alignItems: "center",
        marginTop: 20
    },

    openToggleCircle: {
        width: 31,
        height: 31,
        borderWidth: 2,
        borderColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },

    arrowCircle: {
        width: 31,
        height: 31,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    toggleTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        paddingRight: 10
    },
    toggleRowContext: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: "4%",
        marginTop: "2%"
    },
    iconCircle: {
        width: 50,
        height: 50,
        backgroundColor: "#2f416d",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
    },


    pickerDownButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 20,
        paddingLeft: 15,
        height: 40,
        borderBottomEndRadius: 4,
        borderBottomWidth: 1,
        borderBottomColor: "#e1e1e1",
    },

    pickerDownButtonText: {
        width: "100%",
        textAlign: 'center',
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
    },


})

export default DropDownSelectSearch