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
import {checkbox, textInputPicker} from "../../configs/FakeData";
import CreatingPickerInButton from "./CreatingPickerInButtom";



const PickerForNewReview= ({name="name",checkButton=[],ChooseDate=null,setShowInfoId=null,setDuration=null}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [isCheck, setIsCheck] = useState("")
    const [nameMain, setNameMain] = useState(name)


    const IsCheck = (index,item) => {
        setIsCheck(index);
        setIsOpen(false);
        setNameMain(item)
        if (ChooseDate!==null)
        {
            ChooseDate(item)
        }
        if (setShowInfoId!==null)
        {
            setShowInfoId(index)
        }
        if (setDuration!==null)
        {
            setDuration(index)
        }
    }

    return (
        <View style={styles.picker}>
            <TouchableOpacity style={[styles.pickerUp,!isOpen && {backgroundColor: "#fff",}]} onPress={() => setIsOpen(!isOpen)}>
                {
                    isOpen ?
                        <Image source={icons.arrowTopWhite} style={styles.arrowBottomWhite}/>
                        :
                        <Image source={icons.arrowBottom} style={styles.arrowBottomWhite}/>

                }

                <Text style={[styles.pickerUpText,!isOpen && {color: "rgba(31, 30, 29, 0.2)", }]}>{nameMain}</Text>
            </TouchableOpacity>
            {
                isOpen &&
                <View style={styles.pickerDown}>

                    {checkButton && checkButton.map((item,index)=>{
                        // return <CreatingPickerInButton
                        // item={item}
                        // key={index}
                        // isCheck={isCheck}
                        // setIsCheck={setIsCheck}
                        // />
                        return<TouchableOpacity style={styles.pickerDownButton} onPress={()=>IsCheck(index,item)} key={index}>
                            {isCheck===index ?
                                <View style={styles.circleBlue}>
                                    <Image source={icons.checkIcon} style={{width: 14, height: 10}}/>
                                </View>
                                :
                                <View style={styles.circle}/>
                            }
                            <Text style={styles.pickerDownButtonText}>{item}</Text>
                        </TouchableOpacity>
                    })}

                </View>
            }


        </View>
    )
}


const styles = StyleSheet.create({
    picker: {
        textAlign:"right",
        borderWidth: 2,
        width:'100%',
        borderRadius: 6,
        borderColor: "rgba(57, 73, 109, 0.3)",
    },

    pickerUp: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#30b8b2",
        textAlign:"right",

        paddingTop:13,
        paddingBottom:16,
        paddingHorizontal: 15,
        width:'100%',
        borderRadius: 4,
        borderColor: "rgba(57, 73, 109, 0.3)",
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

export default PickerForNewReview