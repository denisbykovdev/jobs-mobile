import {Image, ScrollView, StyleSheet, TouchableOpacity, Text, TextInput, View} from "react-native";

import React,{useState} from "react";
import {icons, images} from "../../configs/imagesAndIconsUrl";
import {LinearGradient} from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";

const Search = (props) => {
    const [isOpenLeft,setIsOpenLeft]=useState(false)
    const [isOpenRight,setIsOpenRight]=useState(false)

    return (
        <View style={{flex: 1}}>
            <View style={styles.search}>
                <TouchableOpacity onPress={()=>props.setIsSearchOpen(!props.isSearchOpen)}>
                    {!props.isSearchOpen &&
                    <LinearGradient colors={['#3CD0BD', '#219BA5']} style={styles.circle}>
                        <Image source={icons.searchIcon2} style={styles.searchIcon}/>
                    </LinearGradient>
                    }
                    {
                        props.isSearchOpen &&
                            <View style={styles.circle}>
                                <Image source={icons.searchIcon2} style={styles.searchIcon}/>
                            </View>
                    }

                </TouchableOpacity>
                {/*<TouchableOpacity >*/}
                {/*    <View style={[styles.searchBorder,props.width && props.width]}>*/}
                {/*        <Image source={icons.upDown} style={{top: 12}}/>*/}
                {/*        <Text style={{color: "#39496d", fontSize: 15, marginTop: 5}}>{props.num1}</Text>*/}
                {/*    </View>*/}
                {/*</TouchableOpacity>*/}

                <DropDownPicker
                    selectedLabelStyle={{color: '#61646d'}}
                    style={styles.searchBorder}
                    items={[
                        {label: props.num1, value: '1'},
                        {label: props.num1, value: '2'},
                        {label: props.num1, value: '3'},

                    ]}
                    defaultIndex={0}
                    defaultValue="1"
                    labelStyle={styles.label_styles}
                    arrowStyle={styles.arrow_style}
                    arrowColor="#39496d"
                    dropDownStyle={{backgroundColor: "#fff"}}
                    containerStyle={{borderRadius: 100}}
                    onChangeItem={item => console.log(item.label, item.value)}
                />

                {/*<TouchableOpacity>*/}
                {/*    <View style={[styles.searchBorder,props.width && props.width]}>*/}
                {/*        <Image source={icons.Menu_Header_S} style={{top: 12}}/>*/}
                {/*        <Text style={{color: "#39496d", fontSize: 15, marginTop: 5}}>{props.num2}</Text>*/}
                {/*    </View>*/}
                {/*</TouchableOpacity>*/}

                <DropDownPicker
                    selectedLabelStyle={{color: '#61646d'}}
                    style={styles.searchBorder}
                    items={[
                        {label: props.num1, value: '1'},
                        {label: props.num1, value: '2'},
                        {label: props.num1, value: '3'},

                    ]}
                    defaultIndex={0}
                    defaultValue="1"
                    labelStyle={styles.label_styles}
                    arrowStyle={styles.arrow_style}
                    arrowColor="#39496d"
                    dropDownStyle={{backgroundColor: "#fff"}}
                    containerStyle={{borderRadius: 100}}
                    onChangeItem={item => console.log(item.label, item.value)}
                />
            </View>

            {props.isSearchOpen &&
                <View style={styles.searchInput}>
                <View style={styles.searchBlue}>
                    <Image source={icons.searchBlue} style={{width: 19, height: 19}}/>
                </View>
                <TextInput
                    multiline={false}
                    placeholder={`... ?מה לחפש לך`}
                    secureTextEntry={false}
                    placeholderTextColor={"#e1e1e1"}
                    style={styles.searchInputText}
                />
            </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
       justifyContent:"space-between",
        width:"100%",
        flexWrap:"wrap",
        zIndex:10
    },

    searchBorder: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#39496d",
        width: 124,
        height: 40,

        marginTop: 5,
        paddingHorizontal: 13,
        justifyContent: "space-between",
        flexDirection: "row",
        opacity: 0.5

    },

    circle: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#172c60'
    },

    text_input: {
        borderRadius: 4,
        textAlign: "right",
        paddingRight: 20,
        paddingVertical: 15
    },

    label_styles: {
        fontSize: 15,
        color: '#39496d',
        fontWeight: "300",
        textAlign: "right"
    },


    arrow_style: {
       position: "absolute",
        right: 80,
    },

    searchInput: {
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#39496d",
        marginVertical:20,
        paddingHorizontal:20,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },


    searchBlue:{
        backgroundColor:"#fff",
        height:40,
        justifyContent:"center",
        paddingHorizontal:10
    },

    searchInputText: {
        paddingHorizontal:10,
        textAlign:"right",
        height: 40,
        backgroundColor: "#fff",
        width:"100%"
    }
})

export default Search
