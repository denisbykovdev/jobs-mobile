import { Image, TouchableOpacity, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Modal } from "react-native";

import React from "react";
import { images } from "../configs/imagesAndIconsUrl";
import colors from "../utils/colors";
import { BlurView } from 'expo-blur';

const PersonalWorkPopupSuccess = ({ navigation, setModal, modal }) => {
    const hrSubmitHandler = () => {
        navigation.navigate("ListOfOpenOpportunities")
        setModal(false)
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
        >
            <BlurView 
                style={styles.main}
                intensity={70}
                tint="light"
            >
                <TouchableWithoutFeedback onPress={() => setModal(false)}>
                    <View style={styles.popup}>
                        <Image
                            source={images.PersonalWorkPopupSuccess2}
                            style={styles.personalWorkPopupSuccess}
                        />

                        <Text style={styles.text}>
                            {"על מנת שהבנות יכירו\n" +
                                "אותך, נשמח שתמלאי\n" +
                                "..את הפרטים הבאים  "}
                        </Text>
                        <TouchableOpacity 
                            style={styles.btn} 
                            onPress={
                                () => hrSubmitHandler()
                            }
                        >
                            <Text style={styles.btnText}>
                                בסדר
                            </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>

            </BlurView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        justifyContent: "center",
        // height: '100%',
        // opacity: 0.5,
        // backgroundColor: colors.white,
        // zIndex: -1
    },
    popup: {
        marginTop: 100,
        // padding: -500,
        alignItems: "center",
        // zIndex: 1,
        // position: 'absolute',
        // opacity: 1
    },

    personalWorkPopupSuccess: {
        top: 0,
        width: 350,
        height: 550
    },
    text: {
        position: "absolute",
        top: 300,
        left: 110
    },

    btn: {
        backgroundColor: "#30b8b2",
        bottom: 130,
        width: 240,
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 5
    },

    btnText: {
        paddingVertical: 10,
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default PersonalWorkPopupSuccess
