import {Image, ScrollView, Text, StyleSheet, View, ImageBackground, TouchableOpacity} from "react-native";
import {icons, images} from "../configs/imagesAndIconsUrl";
import React, {useState} from "react";
import Header from "../components/Header";
import {oppBtn, oppBtnCopy} from "../configs/FakeData";
import DropDownPicker from "react-native-dropdown-picker";
import Footer from "../components/Footer";
import HrFooter from "../components/HrFooter";
import {LinearGradient} from "expo-linear-gradient";

const OpportunitiesPageHrNew = ({navigation}) => {

    const [pickerOpen, setPickerOpen] = useState(false)

    return (
        <View style={{flex: 1}}>
            <Header navigation={navigation}/>
            <ScrollView style={{flex: 1}}>
                <View>
                    <View style={[styles.mainContainer]}>
                        <ImageBackground source={images.faqBg} style={styles.image}>
                            <Text style={styles.bgTitle}> שם התקן </Text>
                        </ImageBackground>
                        <View style={[styles.opportunitiesBlock, {shadowOpacity: 0.5}]}>
                            <View style={{alignItems: "center"}}>
                                <View style={[styles.circleIcon, shadowStyleMain]}>
                                    <Image source={icons.yellowIcon} style={{width: 45, height: 45}}/>
                                </View>
                                <View style={styles.pickerBlock}>
                                    <Text style={styles.workStatus}>סטטוס</Text>
                                    <DropDownPicker
                                        selectedLabelStyle={{color: pickerOpen ? "white" : "#30b8b2"}}
                                        style={[styles.picker, pickerOpen && styles.borderBottom]}
                                        items={[
                                            {label: 'פתוח להרשמה', value: '1'},
                                            {label: 'ההרשמה הסתיימה', value: '2'},
                                        ]}
                                        defaultIndex={0}
                                        defaultValue="1"
                                        labelStyle={styles.label_styles}
                                        arrowStyle={styles.arrow_style}
                                        arrowColor="#39496d"
                                        zIndex={16000}
                                        dropDownStyle={styles.dropDownStyle}
                                        containerStyle={styles.pickerBorderRadius}
                                        onChangeItem={item => console.log(item)}
                                        onOpen={() => setPickerOpen(true)}
                                        onClose={() => setPickerOpen(false)}
                                    />
                                </View>

                                <View style={styles.dateRow}>
                                    <Text style={styles.dateNumber}>01.12.20</Text>
                                    <Text style={styles.registrationOverText}> השלמת ההרשמה:</Text>
                                </View>
                            </View>

                            <View style={styles.infoBoxMain}>
                                <Text style={styles.infoBoxLineText}>:תקנים
                                    פתוחים</Text>

                                <View style={styles.infoBoxLine}>
                                    <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.infoBoxLineIn}/>
                                </View>

                                <View style={styles.infoBoxNumberMain}>
                                    <View style={styles.infoBoxNumber}>
                                        <Text style={styles.infoLineText1}>5 </Text>
                                    </View>
                                    <Text style={styles.infoLineText2}>מתוך</Text>
                                    <View style={styles.infoBoxNumber}>
                                        <Text style={styles.infoLineText3}> 3</Text>
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.checkIconBox}>
                                <Image source={icons.checkIcon} style={{width:17,height:13}}/>
                            </TouchableOpacity>


                            <View style={styles.btnsBlock}>
                                {oppBtnCopy.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index}>
                                            <View style={[styles.saveBtn, shadowStyle]}>
                                                <Image source={icons.leftIcon} style={styles.arrowIcon}/>
                                                <Text style={styles.saveBtnText}>{item.title}</Text>
                                                <Image source={item.icon} style={{width:item.width,height:item.height}}/>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                                }
                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>
            <HrFooter/>
        </View>
    )
}

const shadowStyleMain = {
    shadowOpacity: 0.5
}

const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    // elevation: 0.1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: "#EEEEEE"
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 32,
        justifyContent: "center",
        marginBottom: 20
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        height: 106,
        marginTop: 26,
        paddingTop: 21,
        zIndex: -100
    },

    bgTitle: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 26
    },

    opportunitiesBlock: {
        marginTop: -19,
        // zIndex: 2000,
        elevation: 5,
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop: 40,

    },

    circleIcon: {
        width: 62,
        height: 62,
        backgroundColor: "white",
        // zIndex: 30000,
        borderRadius: 50,
        marginTop: -70,
        elevation: 6,
        alignItems: "center",
        justifyContent: "center"
    },

    workStatus: {
        color: "#172c6066",
        fontSize: 11,
        fontWeight: "300",
        textAlign: "center",
        paddingTop: 12
    },

    pickerBlock: {
        width: 142,
        marginTop: 5,
    },

    picker: {
        borderColor: "#30b8b2",
        borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 29,
        backgroundColor: "white"

    },

    borderBottom: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: "#30b8b2"
    },

    pickerBorderRadius: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    label_styles: {
        fontSize: 13,
        color: '#39496d',
        fontWeight: "800",
        textAlign: "right",
    },

    dropDownStyle: {
        borderWidth: 2,
        borderColor: "#30b8b2"
    },

    arrow_style: {
        position: "absolute",
        right: 100,
    },

    dateRow: {
        flexDirection: "row",
        alignItems: "flex-end",
        zIndex: -1000
    },

    dateNumber: {
        color: "#172c6080",
        fontSize: 13,
        fontWeight: "bold"
    },

    registrationOverText: {
        color: "#172c6080",
        fontSize: 11
    },

    infoBoxMain: {
        marginHorizontal: 15,
        marginTop: 20,
        alignItems: "center",
        paddingHorizontal: 10,
        zIndex: -1000
    },

    infoBoxLine: {
        flexDirection: "row-reverse",
        height: 6,
        width: "100%",
        backgroundColor: "#e8eaef",
        borderRadius: 2,
        marginVertical: 10,
    },

    infoBoxNumberMain:{
        flexDirection: "row",
        justifyContent: "space-between",
        width:"100%",
        alignItems:"center"
    },
    infoBoxNumber: {
        borderWidth:2,
        borderColor:"#39496d",
        opacity:0.4,
        borderRadius:10,
        width:"35%",
        alignItems: "center",
        paddingVertical: 9,
    },

    checkIconBox:{
        backgroundColor:"#30b8b2",
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:11,
        marginHorizontal:25,
        marginVertical:17,
        borderRadius:5
    },


    infoBoxLineIn: {
        width: "60%",
        height: "100%",
        backgroundColor: "#219ba5"
    },

    infoBoxLineText: {
        fontSize: 15,
        color: "#172c60",
        fontWeight: "600"
    },

    saveBtn: {
        alignItems: "center",
        borderRadius: 4,
        marginVertical: 17,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },

    saveBtnText: {
        color: "#39496d",
        fontSize: 18,
        paddingVertical: 20
    },

    arrowIcon: {
        width: 5,
        height: 11,
    },

    btnsBlock: {
        marginHorizontal: 23
    },


});


export default OpportunitiesPageHrNew
