import React from 'react';
import {StyleSheet, ScrollView, TextInput, TouchableOpacity, Text, View, Image} from 'react-native';
import {icons} from "../configs/imagesAndIconsUrl";
import KeyAndDoor from "../components/KeyAndDoor";


const SMSCode = () => {

    return (
            <View style={styles.container}>
                <KeyAndDoor/>
                <View style={styles.mainContainer}>
                    <Image source={icons.testUp} style={styles.imageBgUp}/>
                    <Text style={styles.title}>כניסה </Text>
                    <Text style={styles.mainTitle}>?מה הקוד שקיבלת</Text>
                    <View style={styles.codeInput}>
                        <TextInput
                            style={styles.text_input}
                            multiline={false}
                            keyboardType={"numeric"}
                            placeholder={"קוד עם 6 ספרות"}
                            secureTextEntry={false}
                            placeholderTextColor={"#e1e1e1"}
                            placeholderStyle={styles.placeHolder_styles}
                        />
                        <Text style={styles.codeInputText}> לשליחה נוספת </Text>
                        <Image source={icons.testDown} style={styles.imageBgDown}/>
                    </View>
                </View>
                <TouchableOpacity style={styles.submitBtn}>
                    <View>
                        <Text style={styles.btnText}>ממשיכים</Text>
                    </View>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:"100%",
        // flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 34,
    },

    mainContainer: {
        marginTop: 25,
        justifyContent: "flex-end"
    },

    title: {
        color: "#39496D",
        textAlign: "center"
    },

    mainTitle: {
        color: "#39496D",
        fontSize: 30,
        paddingTop: "12%",
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: "8%"
    },

    inputTitle: {
        color: "#39496D",
        fontSize: 15,
        paddingTop: 72,
        textAlign: "center"
    },

    codeInput: {
        marginTop: 21,
    },

    text_input: {
        borderColor: "#e1e1e1",
        borderWidth: 3,
        borderRadius: 4,
        textAlign: "right",
        paddingRight: 20,
        height: 49,
    },

    codeInputText: {
        color: "#30B8B2",
        textAlign: "center",
        paddingTop: "5%",
        fontWeight: "600",
        fontSize: 18
    },

    placeHolder_styles: {
        fontWeight: '500',
        color: 'white',
    },

    submitBtn: {
        marginTop: "auto",
        alignItems: "center",
        backgroundColor: "#30B8B2",
        paddingVertical: 14,
        borderRadius: 4,
        marginBottom: 40
    },

    btnText: {
        color: "#fefefe",
        fontSize: 17,
        fontWeight: "800"
    },

    imageBgUp: {
        width: 106,
        height: 86,
        // backgroundColor:"red",
        position: "absolute",
        left: 0,
        top: 0
    },

    imageBgDown: {
        width: 106,
        height: 86,
        // backgroundColor:"red",
        position: "absolute",
        right: 0,
        top: "70%"
    }

});

export default SMSCode
