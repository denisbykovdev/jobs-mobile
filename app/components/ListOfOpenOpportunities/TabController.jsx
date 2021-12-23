import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { responsiveWidth } from "../../utils/layout";
import colors from "../../utils/colors";
import fonts from '../../utils/fonts';
import weights from '../../utils/weights';
import Tab4 from "../../icons/Tab4";
import Tab1 from "../../icons/Tab1";
import Tab339 from "../../icons/Tab339";
import Tab239 from "../../icons/Tab239";

const TabController = (props) => {
    const [chosenTab, setChosenTab] = useState(props.chosenTab)

    const navigation = useNavigation()

    return (
        <View style={styles.tabControllerContainer}>
            <View style={[styles.tabController, props.tabControllerStyles]}>

                <TouchableOpacity
                    style={[styles.tabBlock, chosenTab === 1 && styles.tabActiveBorder]}
                    // onPress={() => setChosenTab(1), () => navigation.navigate('MyProfileMyDetails')}
                >
                    <View
                        style={[styles.tabCircles, { backgroundColor: chosenTab === 1 ? "#172c60" : "#39caba" }]}
                    >

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

                <TouchableOpacity
                    style={[styles.tabBlock, chosenTab === 2 && styles.tabActiveBorder]}
                    onPress={
                        () => setChosenTab(2), 
                        () => navigation.navigate(
                            'ResultOfQuiz',
                            {
                                userTabController: true
                            }
                        )
                    }
                >
                    <View
                        style={[styles.tabCircles, { backgroundColor: chosenTab === 2 ? "#172c60" : "#39caba" }]}
                    >

                        <Tab339 />

                    </View>
                    <View style={styles.textArea}>
                        <Text style={[styles.tabTitle, { fontWeight: chosenTab === 2 ? "bold" : "400" }]}>
                            תוצאות
                            השאלון
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={[styles.border]} />

                <TouchableOpacity
                    style={[styles.tabBlock, chosenTab === 3 && styles.tabActiveBorder]}
                    onPress={() => setChosenTab(3), () => navigation.navigate('Favorites')}
                >
                    <View
                        style={[styles.tabCircles, { backgroundColor: chosenTab === 3 ? "#172c60" : "#39caba" }]}
                    >

                        <Tab239 />

                    </View>
                    <View style={styles.textArea}>
                        <Text style={[styles.tabTitle, { fontWeight: chosenTab === 3 ? "bold" : "400" }]}>
                            תקנים מועדפים
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={[styles.border]} />

                <TouchableOpacity
                    style={[styles.tabBlock, chosenTab === 4 && styles.tabActiveBorder]}
                    // onPress={() => setChosenTab(4), () => navigation.navigate('MyProfileNoReq')}
                >
                    <View
                        style={[styles.tabCircles, { backgroundColor: chosenTab === 4 ? "#172c60" : "#39caba" }]}
                    >

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
    // tabControllerContainer: {},
    tabController: {
        paddingVertical: responsiveWidth(12),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: responsiveWidth(12)
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
        justifyContent: "center"
    },
    textArea: {
        width: responsiveWidth(24)
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

export default TabController
