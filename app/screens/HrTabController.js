import {Image, Text, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React, {useState} from "react";
import Header from "../components/Header";
import PersonalDetailsEditHr from "../components/PersonalDetailsEditHr";
import OpenOpportunities from "./ListOfOpenOpportunities";


const HrTabController = ({navigation}) => {
    const [chosenTab, setChosenTab] = useState(4)
    return (
        <View style={{flex: 1}}>
            <KeyboardAvoidingView
                enabled behavior={Platform.OS === 'ios' ? 'padding' : null}
                                  style={{flexGrow: 1}}>
            <Header navigation={navigation}/>
            <View style={styles.tabController}>
                <View style={styles.border}/>
                <TouchableOpacity style={[styles.tabBlock, chosenTab === 1 && styles.tabActiveBorder]}
                                  onPress={() => setChosenTab(1)}>
                    <View style={[styles.tabCircles, {backgroundColor: chosenTab === 1 ? "#172c60" : "#c5cad7"}]}>
                        <Image source={icons.tab1} style={styles.userIcon}/>
                    </View>
                    <View style={styles.textArea}>
                        <Text style={[styles.tabTitle, {fontWeight: chosenTab === 1 ? "bold" : "400"}]}>
                            הפרטים
                            שלי
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabBlock, chosenTab === 2 && styles.tabActiveBorder]}
                                  onPress={() => setChosenTab(2)}>
                    <View style={[styles.tabCircles, {backgroundColor: chosenTab === 2 ? "#172c60" : "#c5cad7"}]}>
                        <Image source={icons.tab2hr} style={styles.tabIcon}/>
                    </View>
                    <View style={styles.textArea}>
                        <Text style={[styles.tabTitle, {fontWeight: chosenTab === 2 ? "bold" : "400"}]}>
                            תוצאות
                            השאלון
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.border, {left: "60%"}]}/>
                <TouchableOpacity style={[styles.tabBlock, chosenTab === 3 && styles.tabActiveBorder]}
                                  onPress={() => setChosenTab(3)}>
                    <View style={[styles.tabCircles, {backgroundColor: chosenTab === 3 ? "#172c60" : "#c5cad7"}]}>
                        <Image source={icons.tab3hr} style={styles.tabIcon}/>
                    </View>
                    <View style={styles.textArea}>
                        <Text style={[styles.tabTitle, {fontWeight: chosenTab === 3 ? "bold" : "400"}]}>
                            תקנים
                            ועדפים
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={[styles.border, {left: "90%"}]}/>
                <TouchableOpacity style={[styles.tabBlock, chosenTab === 4 && styles.tabActiveBorder]}
                                  onPress={() => setChosenTab(4)}>
                    <View style={[styles.tabCircles, {backgroundColor: chosenTab === 4 ? "#172c60" : "#c5cad7"}]}>
                        <Image source={icons.tab4} style={styles.tabIcon}/>
                    </View>
                    <View style={styles.textArea}>
                        <Text style={[styles.tabTitle, {fontWeight: chosenTab === 4 ? "bold" : "400"}]}>
                            התקנים
                            שלי
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {chosenTab === 1 && <PersonalDetailsEditHr/>}
            {chosenTab === 4 && <OpenOpportunities/>}
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    tabController: {
        paddingHorizontal: 34,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },

    tabCircles: {
        width: 31,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },

    tabActiveBorder: {
        borderBottomColor: "#1ABBBC",
        borderBottomWidth: 5,
    },

    tabBlock: {
        alignItems: "center",
        justifyContent: "center"
    },

    userIcon: {
        width: 12,
        height: 15
    },

    tabIcon: {
        width: 16,
        height: 16
    },

    textArea: {
        width: 54
    },
    tabTitle: {
        fontSize: 14,
        textAlign: "center",
        color: "#172c60",
        paddingBottom: 24,
        paddingTop: 11
    },

    border: {
        width: 6,
        height: 6,
        borderRadius: 50,
        backgroundColor: "#c5cad7",
        position: "absolute",
        top: 10,
        left: "30%",
    }

});


export default HrTabController
