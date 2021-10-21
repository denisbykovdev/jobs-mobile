import {
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView
} from "react-native";

import React, {useState} from "react";
import {icons, images} from "../configs/imagesAndIconsUrl";
import Header from "../components/Header";
import HrFooter from "../components/HrFooter";
import TabController from "../components/ListOfOpenOpportunities/TabController";
import CustomCarousel from "../components/MyProfileMyDetails/Carousel";
import {LinearGradient} from "expo-linear-gradient";
import AdditionInfo from "../components/MyProfileMyDetails/AdditionInfo";
import PersonalData from "../components/MyProfileMyDetails/PersonalData";
import BirthdayDate from "../components/MyProfileMyDetails/BirthdayDate";
import Footer from "../components/Footer";


const MyProfileMyDetails = ({navigation}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <ScrollView>
                <TabController chosenTab={1} navigation={navigation}/>

                <View>
                    <CustomCarousel setActiveIndex={setActiveIndex}/>

                    {activeIndex === 0 &&
                    <BirthdayDate/>
                    }
                    {activeIndex === 1 &&
                    <AdditionInfo/>
                    }
                    {activeIndex === 2 &&
                    <PersonalData/>
                    }

                </View>

            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({})

export default MyProfileMyDetails