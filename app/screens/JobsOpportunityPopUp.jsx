import {Image, Text, StyleSheet, View, ImageBackground, TouchableOpacity} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React from "react";
import Header from "../components/Header";
import CommonFrame from "../commons/CommonFrame";
import layout, { responsiveWidth } from "../utils/layout";
import fonts from "../utils/fonts";
import colors from "../utils/colors";
import BIGICON from "../icons/BIGICON";
import CommonButton from "../commons/CommonButton";
import { useNavigation } from "@react-navigation/native";
import ThanksIcon from "../icons/ThanksIcon";

const JobOpportunityPopUp = () => {
    const navigation = useNavigation()

    return (
        <CommonFrame
            commonFrameStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                paddingTop: 0
            }}
        >
            <ImageBackground
                source={images.jobOppBg} 
                style={{
                    alignSelf: 'center',
                    flex: 1,
                    height: responsiveWidth(270),
                    width: layout.width,
                    paddingHorizontal: responsiveWidth(17.5),
                    paddingVertical: responsiveWidth(20),
                    position: 'relative'
                }}
            >
                <Header
                    whiteHeader
                />
                    <View style={{
                        width: responsiveWidth(180),
                        marginTop: responsiveWidth(110),
                        alignSelf: 'center'
                    }}>
                        <Text style={{
                            color: colors.whiteTwo,
                            fontSize: fonts.medium,
                            textAlign: "center",
                        }}>ההודעה נשלחה לרכזת והיא תיצור
                            איתך קשר באופן אישי. בהצלחה!</Text>
                    </View>

                <View 
                    style={{
                        position: "absolute",
                        bottom: responsiveWidth(12),
                        paddingRight: responsiveWidth(2),
                        alignSelf: 'center'
                    }}
                >
                    <ThanksIcon />
                </View>

            </ImageBackground>

                <View
                    style={{ 
                        alignItems: "center",
                        justifyContent: 'center',
                        marginHorizontal: responsiveWidth(17.5),
                        height: '25%',
                        position: 'relative'
                    }}
                >
                    <Image
                        source={icons.testUp}
                        style={{
                            width: 106,
                            height: 86,
                            position: "absolute",
                            left: 0,
                            top: 0
                        }} />

                    <View
                        style={{
                            padding: 20
                        }}
                    >
                        <BIGICON />
                    </View>
                    
                    <Image
                        source={icons.testDown}
                        style={{
                            width: 106,
                            height: 86,
                            position: "absolute",
                            right: 0,
                            bottom: 0
                        }}
                    />
                </View>

                <CommonButton 
                    title="חזרה לעמוד התקנים"
                    buttonHeight={responsiveWidth(26.5)}
                    buttonStyle={{
                        marginVertical: responsiveWidth(12),
                        alignSelf: 'center'
                    }}
                    buttonWidth={responsiveWidth(167)}
                    buttonColor={colors.whiteTwo}
                    titleColor={colors.lightNavy}
                    borderColor={colors.tealGreen}
                    onPress={() => navigation.goBack()}
                />
  
        </CommonFrame>
    )
}

export default JobOpportunityPopUp
