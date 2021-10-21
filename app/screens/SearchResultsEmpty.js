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

import React from "react";
import {icons} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {LinearGradient} from "expo-linear-gradient";


const SearchResultsEmpty = () => {

    return (
        <View style={{flex: 1}}>
            <Header/>
            <ScrollView>
                <View style={styles.main}>
                    <Image source={icons.fon} style={styles.fon}/>
                    <View style={styles.circle}>
                        <Image source={icons.lineTop} style={styles.lineTop}/>
                        <Image source={icons.cloud} style={styles.cloud}/>
                    </View>
                    <View style={styles.searchMain}>
                        <View style={styles.searchIcons}>
                            <Image source={icons.testUp} style={styles.testUp}/>
                            <Image source={icons.search2} style={styles.search2}/>
                            <Image source={icons.testUpRight} style={styles.testUp}/>
                        </View>
                        <View>
                            <Text style={styles.largeText}>לא נמצאו תוצאות
                                לחיפוש שלך
                            </Text>
                            <Text style={styles.smallText}>אפשר לנסות שוב באמצעות עמוד הסינון החכם שלנו </Text>
                        </View>
                    </View>
                </View>
                <View style={{width:"100%"}}>
                    <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.searchInput}>
                        <View style={styles.searchBlue}>
                            <Image source={icons.searchBlue} style={{width: 19, height: 19}}/>
                        </View>
                        <TextInput
                            multiline={false}
                            placeholder={ `... ?מה לחפש לך`}
                            secureTextEntry={false}
                            placeholderTextColor={"#e1e1e1"}
                            style={styles.searchInputText}
                        />

                    </LinearGradient>
                </View>


            </ScrollView>
            <Footer/>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        zIndex: 0,
        paddingBottom: 10
    },

    fon:{
        width: "100%",
        zIndex: 2,
        height: 350,
        marginLeft: 10
    },

    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: 232,
        height: 232,
        borderRadius: 232 / 2,
        marginTop: 120,
        backgroundColor: "#2b3e6e",
        zIndex: 3,
        position: 'absolute',
    },


    lineTop: {
        width: 59,
        zIndex: 5,
        height: 73,
        marginLeft: 180,
        top: 25
    },

    cloud: {
        width: 200,
        zIndex: 3,
        height: 200,
        marginLeft: 10,
        top: -30
    },

    searchMain: {
        alignItems: "center"
    },

    searchIcons: {
        flexDirection: "row",
        marginTop: 35
    },

    testUp: {
        width: 106,
        height: 85,
    },

    search2: {
        height: 50,
        marginLeft: 5
    },

    largeText: {
        marginLeft: 25,
        fontSize: 30,
        width: 300,
        textAlign: "center",
        color: "#39496d",
        fontWeight: "bold"
    },

    smallText: {
        marginTop: 16,
        fontSize: 14,
        width: 350,
        textAlign: "center",
        color: "#172c60",
        fontWeight: "300",
        marginBottom: 34
    },
    searchBlue:{
        backgroundColor:"#fff",
        height:40,
        justifyContent:"center",
        paddingHorizontal:10
    },

    searchInput: {
        paddingHorizontal:50,
        flexDirection: "row",
        width: "100%",
        height: 98,
        alignItems: "center",
        justifyContent: "center"
    },

    searchInputText: {
        paddingHorizontal:10,
        textAlign:"right",
        height: 40,
        backgroundColor: "#fff",
        width:"100%"
    }


})

export default SearchResultsEmpty
