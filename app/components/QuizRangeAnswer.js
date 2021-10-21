import {Image, Text, StyleSheet, View, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {LinearGradient} from "expo-linear-gradient";


const QuizRangeAnswer = () => {
    const [value, setValue] = useState(1);
    const width = {
        1: 0,
        2: 58,
        3: 72,
        4: 85,
        5: 100
    }
    return (
        <View style={{marginTop: "20%"}}>
            <View style={[styles.mainContainer, shadowStyle]}>
                <View style={styles.rangeBlock}>
                    <View style={styles.linerGradientRadius}>
                        <LinearGradient
                            colors={['#3CD0BD', '#219BA5']}
                            style={[styles.rangeWidth, {width: `${width[value]}%`}]}/>
                        <View style={[styles.rangeValueBlock, {marginLeft: value === 2 ? "-16%" : "-12%"}]}>
                            <Text style={styles.rangeValue}>{value}</Text>
                        </View>
                    </View>

                    <View style={styles.touchableArea}>
                        <TouchableOpacity style={{height: 40, width: "20%"}}
                                          onPress={() => setValue(1)}></TouchableOpacity>
                        <TouchableOpacity style={{height: 40, width: "20%"}}
                                          onPress={() => setValue(2)}></TouchableOpacity>
                        <TouchableOpacity style={{height: 40, width: "20%"}}
                                          onPress={() => setValue(3)}></TouchableOpacity>
                        <TouchableOpacity style={{height: 40, width: "20%"}}
                                          onPress={() => setValue(4)}></TouchableOpacity>
                        <TouchableOpacity style={{height: 40, width: "20%"}}
                                          onPress={() => setValue(5)}></TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={[styles.rangeTextBlock, {paddingHorizontal: 40,}]}>
                <View>
                    <Text style={styles.rangeText}>1</Text>
                </View>
                <Text style={styles.rangeLine}>|</Text>
                <Text style={styles.rangeLine}>|</Text>
                <Text style={styles.rangeLine}>|</Text>
                <View>
                    <Text style={styles.rangeText}>5</Text>
                </View>
            </View>
            <View style={[styles.rangeTextBlock, {paddingHorizontal: "3%",}]}>
                <Text style={[styles.rangeTitle, {textAlign: "left"}]}>ממש לא נכון </Text>
                <Text style={styles.rangeTitle}>נכון מאוד</Text>

            </View>

        </View>
    )
}


const shadowStyle = {
    shadowOpacity: 0.6,
    shadowOffset: {width: 1, height: -2},
    shadowRadius: 2,
    elevation: 15,
    borderTopWidth: 1,
    borderWidth: 0.5,
    borderColor: "#EEEEEE",
    backgroundColor: "white"
}


const styles = StyleSheet.create({

    mainContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 50,
        justifyContent: "center"
    },

    rangeBlock: {
        // borderColor:"red",
        // borderWidth:2,
        borderRadius: 50,
        // justifyContent: "center",
    },

    linerGradientRadius: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0
    },

    rangeWidth: {
        height: 41,
        borderRadius: 20
    },

    rangeValueBlock: {
        width: 41,
        height: 41,
        backgroundColor: "#172c60",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    rangeValue: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24

    },

    touchableArea: {
        justifyContent: "space-around",
        flexDirection: "row",
    },

    rangeTextBlock: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 19
    },

    rangeText: {
        color: "#39496d",
        fontSize: 18,
    },

    rangeLine: {
        color: "#babec7"
    },

    rangeTitle: {
        color: "#CBCED6",
        fontSize: 16
    }
});


export default QuizRangeAnswer
