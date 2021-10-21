import {Image, ScrollView, StyleSheet, Text, TextInput,TouchableOpacity, View} from "react-native";
import Header from "../components/Header";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React from "react";

const WelcomePage = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1, algorithm: "center",backgroundColor: "#fff"}}>
                <Image
                    source={images.girls}
                    style={styles.girls}
                />

                <Header whiteHeader={true} navigation={navigation}/>
                <View style={styles.mainTextBox}>
                    <Text style={styles.mainBoxTextLarge}>!ברוכה הבאה</Text>
                    <Text style={styles.mainBoxTextSmall}>{"אנחנו שמחים שהגעת\n" +
                    "זה הזמן להשלים קצת פרטים \n" +
                    "ולבדוק את התקנים שלך"}</Text>
                </View>
                <View style={{ alignItems: "center"}}>
                    <Image
                        source={icons.girls}
                        style={styles.girlsIcon}
                    />
                </View>
                <View style={{alignItems: "center"}}>
                    <View style={styles.ImageIcon}>
                        <Image
                            source={icons.testUp}
                            style={styles.testUp}
                        />
                        <Image
                            source={icons.userType5}
                            style={styles.userType5}
                        />
                        <Image
                            source={icons.testDown}
                            style={styles.testDown}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={ () => navigation.navigate("PersonalWork")}>
                    <View style={{alignItems: "center", marginBottom: 49}}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>השלמת פרטים אישיים</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    ImageIcon: {
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        paddingTop: 50,
        paddingHorizontal: 40,
        flexDirection: "row",
        marginBottom: 28
    },

    testUp:{
        width: 106,
        height: 85,
        marginBottom: 100
    },

    userType5:{
        width: 130,
        height: 100,
        marginTop: 50
    },

    testDown:{
        width: 106,
        height: 85,
        marginTop: 100
    },

    girls: {
        width: "110%",
        height: 490,
        position: "absolute",
        top: 0,
        left: -15,
    },

    girlsIcon: {
        left: "-1%",
        top: 50,
        height: 95,
        width: 95,
    },

    mainTextBox: {
        marginTop: 156,
        alignItems: "center",
    },
    mainBoxTextLarge: {
        fontSize: 36,
        color: "#fff",
        fontWeight: "700",
        marginBottom: 5
    },
    mainBoxTextSmall: {
        color: "rgba(255, 255, 255, 0.7)",
        textAlign:"center",
        fontSize:20
    },

    button: {
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#268b93",
        borderRadius: 4,
        backgroundColor: "#fff",
        paddingTop: 18,
        paddingBottom: 21,
        width: "90%"
    },

    buttonText: {
        color: "#163066",
        fontSize: 18,
        fontWeight: "bold"
    },

})

export default WelcomePage
