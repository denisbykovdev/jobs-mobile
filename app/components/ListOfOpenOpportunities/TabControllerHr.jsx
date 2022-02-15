import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import React, { useState } from "react";
import { icons, images } from "../../configs/imagesAndIconsUrl";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Tab4 from "../../icons/Tab4";
import Tab2 from "../../icons/Tab2";
import Tab3 from "../../icons/Tab3";
import Tab1 from "../../icons/Tab1";
import colors from "../../utils/colors";
import fonts from '../../utils/fonts';
import weights from '../../utils/weights';
import { responsiveWidth } from "../../utils/layout";

const TabControllerHr = (props) => {
    const [chosenTab, setChosenTab] = useState(props.chosenTab ? props.chosenTab : 4)

    const navigation = useNavigation()

    return (
        <View style={styles.tabControllerContainer}>
            <View style={[styles.tabController, props.tabControllerStyles]}>

                <TouchableOpacity 
                    style={[
                        styles.tabBlock, 
                        chosenTab === 1 && styles.tabActiveBorder
                    ]}
                    onPress={
                        () => setChosenTab(1), 
                        // () => navigation.navigate('PersonalDetailsEditHr')
                        () => navigation.navigate('PersonalDetails')
                    }
                >
                    <View
                        style={[styles.tabCircles, { backgroundColor: chosenTab === 1 ? "#172c60" : "#c5cad7" }]}>
                        {/* <Image source={icons.tab1} style={styles.userIcon} /> */}
                        <Tab4 />
                    </View>
                    <View style={styles.textArea}>
                        <Text style={[styles.tabTitle, { fontWeight: chosenTab === 1 ? "bold" : "400" }]}>
                            הפרטים
                            שלי
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.border} />

                {/* <TouchableOpacity 
                    style={[
                        styles.tabBlock, 
                        chosenTab === 2 && styles.tabActiveBorder
                    ]}
                    onPress={
                        () => setChosenTab(2), 
                        () => navigation.navigate('')
                    }
                >
                    <View
                        style={[styles.tabCircles, { backgroundColor: chosenTab === 2 ? "#172c60" : "#c5cad7" }]}>
                        <Tab2 />
                    </View>
                    <View style={styles.textArea}>
                        <Text style={[styles.tabTitle, { fontWeight: chosenTab === 2 ? "bold" : "400" }]}>
                            תוצאות
                            השאלון
                        </Text>
                    </View>
                </TouchableOpacity> */}

                {/* <View style={[styles.border]} /> */}

                {/* <TouchableOpacity 
                    style={[
                        styles.tabBlock, 
                        chosenTab === 3 && styles.tabActiveBorder
                    ]}
                    onPress={
                        () => setChosenTab(3), 
                        () => navigation.navigate('')
                    }
                >
                    <View
                        style={[styles.tabCircles, { backgroundColor: chosenTab === 3 ? "#172c60" : "#c5cad7" }]}>
                        <Tab3 />
                    </View>
                    <View style={styles.textArea}>
                        <Text style={[styles.tabTitle, { fontWeight: chosenTab === 3 ? "bold" : "400" }]}>
                            תקנים
                            ועדפים
                        </Text>
                    </View>
                </TouchableOpacity> */}

                {/* <View style={[styles.border]} /> */}

                <TouchableOpacity 
                    style={[
                        styles.tabBlock, 
                        chosenTab === 4 && styles.tabActiveBorder
                    ]}
                    onPress={
                        () => setChosenTab(4), 
                        () => navigation.navigate('ListOfOpenOpportunities')
                    }
                >
                    <View
                        style={[styles.tabCircles, { backgroundColor: chosenTab === 4 ? "#172c60" : "#c5cad7" }]}>
                        {/* <Image source={icons.tab4} style={styles.tabIcon} /> */}
                        <Tab1 />
                    </View>
                    <View style={styles.textArea}>
                        <Text style={[styles.tabTitle, { fontWeight: chosenTab === 4 ? "bold" : "400" }]}>
                            התקנים
                            שלי
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabControllerContainer: {
        height: responsiveWidth(51.5),
        width: '100%'
    },
    tabController: {
        height: '100%',
        flexDirection: "row",
        // justifyContent: "space-between",
        justifyContent: 'space-around',
        alignItems: "center"
    },
    tabCircles: {
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    tabActiveBorder: {
        borderBottomColor: colors.tealishTwo,
        borderBottomWidth: responsiveWidth(3),
        paddingTop: responsiveWidth(3)
    },
    tabBlock: {
        alignItems: "center",
        // justifyContent: "center"
    },
    textArea: {
        width: responsiveWidth(30)
    },
    tabTitle: {
        fontSize: fonts.xxsmall,
        fontWeight: weights.regular,
        textAlign: "center",
        color: colors.darkSlateBlue,
        paddingBottom: responsiveWidth(12),
        paddingTop: responsiveWidth(6)
    },
    border: {
        width: responsiveWidth(3),
        height: responsiveWidth(3),
        borderRadius: 50,
        backgroundColor: colors.tealishTwo
    }
})

export default TabControllerHr
