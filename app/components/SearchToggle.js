import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, ScrollView, View} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React, {useState} from "react";


const ToggleSearch = ({item, index, dataItem, dataItemKey, chooseCategories, dataCategories, putChosen}) => {
    const [toggle, setToggle] = useState(false)
    const [checkBox, setCheckBox] = useState("");

    let array;
    if (dataItemKey === "subcategory") {
        // console.log("baavv",dataCategories)
        const values = dataCategories && Object.values(dataCategories)
        array = [values]
    } else {
        const values = dataItem[dataItemKey] && Object.values(dataItem[dataItemKey])
         // console.log("values",values)
        array = [values]
    }

    const chooseCheckBox = (index, id) => {
        setCheckBox(index);
        if (dataItemKey === "categories") {
            chooseCategories(id)
        }
        putChosen(dataItemKey, id,index)

    }

    const isArray= dataItemKey==="how_to_sort" || dataItemKey==="job_for"|| dataItemKey==="program"|| dataItemKey==="places"

    return (
        <View>
            <View style={styles.mainToggle} key={index}>
                <TouchableOpacity onPress={() => setToggle(!toggle)}>
                    <ImageBackground source={toggle ? images.greenBg : images.greenBgWithCurl}
                                     style={{width: 332, height: 72}}>
                        <View style={styles.toggleRowContext}>
                            <View style={styles.iconCircle}>
                                <Image source={item.icon} style={{width: 25, height: 25}}/>
                            </View>
                            <View style={styles.toggleRowContext}>
                                <Text style={styles.toggleTitle}>{item.title}</Text>
                                <View style={toggle ? styles.openToggleCircle : styles.arrowCircle}>
                                    <Image
                                        source={toggle ? icons.arrowTopWhite : icons.arrowBottom}/>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

            {toggle &&
                <View style={[styles.toggleMain, shadowStyle]}>

                    {toggle && array[0].map((field, index) => {
                        // console.log("aaaddd", field,dataItemKey,index)
                        return (
                            <View style={styles.openedToggle} key={index}>
                                <TouchableOpacity style={styles.checkBox_container}
                                                  onPress={() => chooseCheckBox(index, field.id)}
                                >
                                    <View
                                        style={[styles.checkBox, {backgroundColor: checkBox === index ? "#172C60" : "white"}]}>
                                        {checkBox === index &&
                                        <Image
                                            source={icons.checkIcon}
                                            style={styles.checkBox_image}
                                        />
                                        }
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.fieldRowText}>{isArray ? field :field.name}</Text>
                                <View style={styles.semiCircle}/>
                            </View>
                        )
                    })
                    }

                </View>
            }


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

    mainToggle: {
        alignItems: "center",
        marginTop: 20
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

    toggleTextRow: {
        flexDirection: "row"
    },

    toggleTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        paddingRight: 10
    },

    arrowCircle: {
        width: 31,
        height: 31,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },

    openToggleCircle: {
        width: 31,
        height: 31,
        borderColor: "white",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },


    toggleMain: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        borderRadius: 5
    },

    openedToggle: {
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 14,
        flexDirection: "row",
        paddingLeft: "5%",
        borderBottomColor: "grey",
        borderBottomWidth: 0.2
    },

    fieldRowText: {
        color: "#172c60",
        fontSize: 16,
    },

    checkBox_container: {
        // position: "absolute",
        // left: "21%"
    },


    checkBox: {
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: "center",
        borderColor: "#30B8B2",
        borderWidth: 2,
        justifyContent: 'center',
    },

    checkBox_image: {
        width: 15,
        height: 11,
        alignSelf: "center",
    },

    checkBoxBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 23,
        marginBottom: 31,
        borderColor: "#30B8B2",
        borderRadius: 4,
        borderWidth: 2,
        paddingVertical: 15
    },
    semiCircle: {
        overflow: 'hidden',
        width: 12,
        height: 24,
        right: 0,
        backgroundColor: "#30b8b2",
        borderTopLeftRadius: 150,
        borderBottomLeftRadius: 150,
    }


})

export default ToggleSearch
