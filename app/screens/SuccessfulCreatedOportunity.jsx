import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, TextInput, View, ImageBackground } from "react-native";
import Header from "../components/Header";
import { icons, images } from "../configs/imagesAndIconsUrl";
import DropDownPicker from "react-native-dropdown-picker";
import { blogItems } from "../configs/FakeData";
import BlogItems from "../components/BlogItems";
import HrFooter from "../components/HrFooter";
import React from "react";
import CommonFrame from "../commons/CommonFrame";
import layout, { responsiveWidth, responsiveHeight } from "../utils/layout";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import IconHr from "../icons/IconHr";
import ThanksIcon from "../icons/ThanksIcon";
import CommonButton from "../commons/CommonButton";
import { LinearGradient } from "expo-linear-gradient";

const SuccessfulCreatedOportunity = ({ navigation }) => {
    return (
        <CommonFrame
            commonFrameStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                paddingTop: 0
            }}
        >
            <ImageBackground
                source={images.girls}
                style={{
                    alignSelf: 'center',
                    // TODO: Changing options for responsive page.
                    // flex: 1,
                    // height: responsiveWidth(270),
                    height: responsiveHeight(285),
                    width: layout.width,
                    paddingHorizontal: responsiveWidth(17.5),
                    paddingVertical: responsiveWidth(20),
                    position: 'relative'
                }}
            >
                <Header
                    whiteHeader
                    hr
                />
                <View style={{
                    width: responsiveWidth(120),
                    // TODO: Changing options for responsive page.
                    // marginTop: responsiveWidth(110),
                    marginTop:  responsiveHeight(102),
                    alignSelf: 'center'
                }}>
                    <Text style={{
                        color: colors.whiteTwo,
                        fontSize: fonts.xlarge,
                        textAlign: "center",
                    }}>התקן נוצר בהצלחה 
                    ועבר לאישור מערכת</Text>
                </View>

                <View
                    style={{
                        position: "absolute",
                        bottom: - responsiveWidth(14),
                        // paddingRight: responsiveWidth(2),
                        alignSelf: 'center'
                    }}
                >
                    <LinearGradient
                        colors={[
                            colors.tealishFour,
                            colors.tealishThree
                        ]}
                        style={{
                            width: responsiveWidth(47.5),
                            height: responsiveWidth(47.5),
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: responsiveWidth(47.5 / 2)
                        }}
                    >
                        <ThanksIcon />
                    </LinearGradient>
                    
                </View>

            </ImageBackground>

            <View
                style={{
                    alignItems: "center",
                    justifyContent: 'center',
                    marginHorizontal: responsiveWidth(17.5),
                    // TODO: Changing options for responsive page.
                    // height: '20%',
                    height: responsiveHeight(88),
                    position: 'relative',
                    marginTop: responsiveWidth(12)
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
                    
                        <IconHr />
                    
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
                title="חזרה לתקנים שלי"
                buttonHeight={responsiveWidth(26.5)}
                buttonStyle={{
                    // TODO: Changing options for responsive page.
                    // marginVertical: responsiveWidth(12),
                    marginTop: responsiveHeight(8),
                    alignSelf: 'center'
                }}
                buttonWidth={responsiveWidth(167)}
                buttonColor={colors.whiteTwo}
                titleColor={colors.lightNavy}
                borderColor={colors.tealGreen}
                onPress={() => navigation.navigate('ListOfOpenOpportunities')}
            />

        </CommonFrame>

        // <View style={{flex: 1}}>
        //     <ScrollView style={{flex: 1}}>
        //         <Image
        //             source={images.girls}
        //             style={styles.girls}
        //         />

        //         <Header whiteHeader={true} navigation={navigation}/>
        //         <View style={styles.mainTextBox}>
        //             <Text style={styles.mainBoxText}>התקן נוצר בהצלחה
        //                 ועבר לאישור מערכת</Text>
        //         </View>
        //         <View style={{alignItems: "center"}}>
        //             <Image
        //                 source={icons.girls}
        //                 style={styles.girls2}
        //             />
        //         </View>
        //         <View style={styles.ImageIcon}>
        //             <Image
        //                 source={icons.testUp}
        //                 style={styles.testUp}
        //             />
        //             <Image
        //                 source={icons.SuccessfulIcon}
        //                 style={styles.successfulIcon}
        //             />
        //             <Image
        //                 source={icons.testDown}
        //                 style={styles.testDown}
        //             />
        //         </View>

        //         <TouchableOpacity>
        //             <View style={styles.buttonBox}>
        //                 <View style={styles.button}>
        //                     <Text style={styles.buttonText}>חזרה לתקנים שלי</Text>
        //                 </View>
        //             </View>
        //         </TouchableOpacity>

        //     </ScrollView>
        // </View>
    )
}

export default SuccessfulCreatedOportunity