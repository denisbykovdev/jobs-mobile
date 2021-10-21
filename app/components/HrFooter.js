import {Image, StyleSheet, View, TouchableOpacity} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React, {useState} from "react";


const HrFooter = (props) => {

    const [chosenFooter, setChosenFooter] = useState(props.chosenFooter);

    return (
        <View style={styles.footerBlock}>
                <TouchableOpacity onPress={() => setChosenFooter(1), () => props.navigation.navigate('ListOfOpenOpportunities')}>
                    {chosenFooter === 1 ?
                        <Image source={icons.homeBlue} style={styles.home}/>
                        :
                        <Image source={icons.home} style={styles.home}/>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setChosenFooter(2), () => props.navigation.navigate('FAQHr')}>
                    {chosenFooter === 2 ?
                        <Image source={icons.FAQ} style={styles.faqIcon}/>
                        :
                        <Image source={icons.faqIcon} style={styles.faqIcon}/>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setChosenFooter(3), () => props.navigation.navigate('AllMessages')}>
                    {chosenFooter === 3 ?
                        <Image source={icons.messagesWhiteBlue} style={styles.messagesWhiteBlue}/>
                        :
                        <Image source={icons.messagesWhiteBlue} style={styles.messagesWhiteBlue}/>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setChosenFooter(4), () => props.navigation.navigate('CreatingTheOppertunitiesHR')}>
                    {chosenFooter === 4 ?
                        <Image source={icons.AddOpportunityActive} style={styles.addOpportunities}/>
                        :
                        <Image source={icons.addOpportunities} style={styles.addOpportunities}/>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setChosenFooter(5), () => props.navigation.navigate('NotificationsHr')}>
                    {chosenFooter === 5 ?
                        <Image source={icons.notificationsActive} style={styles.notifications}/>
                        :
                        <Image source={icons.notifications} style={styles.notifications}/>
                    }
                </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    footerBlock: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 34,
        paddingBottom: 30,
        paddingTop: 22
    },

    home: {
        width: 31,
        height: 25
    },

    faqIcon: {
        width: 28,
        height: 28
    },

    messagesWhiteBlue: {
        width: 28,
        height: 21
    },

    addOpportunities: {
        width: 21,
        height: 27
    },

    notifications: {
        width: 24,
        height: 25
    },


});


export default HrFooter
