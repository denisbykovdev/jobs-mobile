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
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import HrFooter from "../components/HrFooter";
import Search from "../components/ListOfOpenOpportunities/search";
import ProfileBoxForChosen from "../components/ChosenContenders/ProfileBoxForChosen";


const ContendersOfOpportunities = ({navigation}) => {

const [isSearchOpen,setIsSearchOpen] = useState(false)
    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <ScrollView>

                <View style={styles.main}>

                    <View>
                        <Image source={images.groupPerson} style={styles.image}/>

                        <View style={[styles.buttonBoxMain]}>

                            <View style={[styles.buttonBox]}>

                                <Text style={styles.buttonBoxText}>מתמודדים שנבחרו</Text>

                                <Search num1={"מיון"}
                                        num2={"סינון"}
                                        width={102}
                                        setIsSearchOpen={setIsSearchOpen}
                                        isSearchOpen={isSearchOpen}
                                />

                                <View style={{marginVertical: 10}}>
                                    <Text>מתמודדות מוצגות: 15</Text>
                                </View>
                            </View>

                        </View>

                        <View style={{zIndex: 1}}>
                            {
                                [0, 1, 2].map(i => {
                                    return (
                                        <ProfileBoxForChosen key={i}/>
                                    )
                                })
                            }
                        </View>


                        <View style={styles.groupPersonLogo}>
                            <Text style={styles.mainText}>{"שם התקן"}</Text>
                            <Image source={icons.groupPersonLogo} style={styles.groupPersonLogoIcon}/>
                        </View>

                    </View>


                </View>


            </ScrollView>
            <HrFooter/>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 32,

    },

    image: {
        width: "100%",
        height: 120,
        marginTop: 33,
    },
    buttonBoxMain: {
        position: "relative",
        paddingHorizontal: 10,
        backgroundColor: "#FFF",
        paddingTop: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        borderWidth: 2,
        borderColor: "rgba(31, 30, 29, 0.2)",
        top: -30,
        paddingBottom: 10,
        zIndex:10
    },

    buttonBox: {
        alignItems: "center",
        paddingHorizontal: 5,
    },

    buttonBoxText: {
        fontSize: 18,
        color: "#172c60",
        fontWeight: "700",
        marginBottom: 10
    },

    mainText: {
        fontSize: 26,
        fontWeight: "700",
        color: "#fff",
    },

    groupPersonLogo: {
        top: 40,
        alignItems: "center",
        position: "absolute",
        width: "100%",
        zIndex: 20
    },

    groupPersonLogoIcon: {
        marginTop: 10,
        width: 70,
        height: 70
    }


})

export default ContendersOfOpportunities