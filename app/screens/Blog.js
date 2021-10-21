import {Image, ScrollView, AsyncStorage, Text, StyleSheet, View, TextInput, TouchableOpacity} from "react-native";
import {icons} from "../configs/imagesAndIconsUrl";
import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DropDownPicker from "react-native-dropdown-picker";
import {Dimensions} from 'react-native';
import BlogItems from "../components/BlogItems";
//import {blogItems} from "../configs/FakeData"
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { watchGetBlogs } from '../actions/blogsActions';

const windowWidth = Dimensions.get('window').width;

const Blog = ({navigation}) => {

    const [blogs, setBlogs] = useState([]);
    const blogItems = useSelector(state => state.blogs.blogs) 
    const tokenSelector = useSelector(state => state.auth.token);

    const dispatch = useDispatch() 

    useEffect(() => {
        getBlogs().then()
    }, [])

    const getBlogs = async() => {
        dispatch(watchGetBlogs(
            tokenSelector
        ));
    }

    // const getBlogso = async () => {
    //     const url = `${JobUrl}/api/blogs/`
    //     // const token = await getUserToken();
    //     const token = await AsyncStorage.getItem('token');
    //     axios.get(url,
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${JSON.parse(token)}`
    //             },
    //         }).then(response => {
    //          console.log("blogs", response);
    //         setBlogs(response.data && response.data)
    //     }).catch(error => console.log("useEffect111", error));
    // }


    const getBlogsold = async () => {
        const url = `${JobUrl}/api/blogs/`
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {
             console.log("blogs", response);
            setBlogs(response.data && response.data)
        }).catch(error => console.log("useEffect111", error));
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <Header navigation={navigation}/>
                <View style={styles.mainContainer}>
                    <View style={styles.blogBlock}>
                        <Image source={icons.testUp} style={styles.imageBgUp}/>
                        <Text style={styles.blogTitle}>הבלוג שלנו</Text>
                        <Image source={icons.testDown} style={styles.imageBgDown}/>
                    </View>

                    <View style={{marginTop: 28, zIndex: 6000}}>
                        <View style={styles.inputBlock}>
                            <Image source={icons.searchBlue} style={styles.searchIcon}/>
                            <TextInput
                                style={styles.text_input}
                                multiline={false}
                                placeholder={" חיפוש... "}
                                secureTextEntry={false}
                                placeholderTextColor={"#e1e1e1"}
                                placeholderStyle={styles.placeHolder_styles}
                            />
                        </View>
                        <DropDownPicker
                            selectedLabelStyle={{color: '#61646d'}}
                            style={styles.picker}
                            items={[
                                {label: 'בחר נושא בבלוג', value: '1'},
                                {label: 'בחר נושא בבלוג', value: '2'},
                                {label: 'בחר נושא בבלוג', value: '3'},
                            ]}
                            defaultIndex={0}
                            defaultValue="1"
                            labelStyle={styles.label_styles}
                            arrowStyle={styles.arrow_style}
                            arrowColor="#39496d"
                            dropDownStyle={{backgroundColor: "white"}}
                            containerStyle={{borderRadius: 100}}
                            onChangeItem={item => console.log(item.label, item.value)}
                        />
                    </View>
                    {console.log("blogItems", blogItems)}
                    {blogItems && blogItems.map((item, index) => {
                        return (
                            <BlogItems
                                key={index}
                                item={item}
                            />

                        )
                    })
                    }
                </View>
            </ScrollView>
            <Footer navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 34
    },

    blogBlock: {
        alignItems: "center",
    },

    blogTitle: {
        color: "#172c60",
        paddingTop: 73,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },

    inputBlock: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 26,
        borderColor: "#CED2DB",
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 15,
    },

    text_input: {
        borderRadius: 4,
        textAlign: "right",
        paddingRight: 20,
        paddingVertical: 15
    },

    searchIcon: {
        width: 19,
        height: 19
    },

    imageBgUp: {
        width: 106,
        height: 86,
        // backgroundColor:"red",
        position: "absolute",
        left: 0,
        top: "50%"
    },

    imageBgDown: {
        width: 106,
        height: 86,
        // backgroundColor:"red",
        position: "absolute",
        right: 0,
        top: "50%"
    },

    picker: {
        borderColor: "#CED2DB",
        borderWidth: 3,
        paddingVertical: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: "100%",
        marginVertical: 22,
    },

    label_styles: {
        fontSize: 16,
        color: '#39496d',
        fontWeight: "300",
        textAlign: "right"
    },

    arrow_style: {
        position: "absolute",
        right: 270,
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        height: 186,
        marginTop: 22,
    },

    blogItemTitle: {
        color: "#39496d",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "right",
        paddingTop: 12
    },

    blogItemSmallText: {
        color: "#30b8b2",
        fontSize: 16,
        fontWeight: "300",
        textAlign: "right"
    },

    dateRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingLeft: 134
    },

    dateText: {
        color: "grey",
        textAlign: "right",
        fontSize: 12,
        fontWeight: "300",
        paddingTop: 12,
    },

    borderLeftRight: {
        borderLeftColor: "#39496d",
        height: 1,
        borderLeftWidth: windowWidth / 1.46,
    },

    blogItemText: {
        color: "#172c60",
        textAlign: "right",
        fontSize: 18,
        fontWeight: "300",
        paddingTop: 18
    },

    saveBtn: {
        alignItems: "center",
        backgroundColor: "#30b8b2",
        borderRadius: 4,
        marginTop: 27,
        marginBottom: 33,
        flexDirection: "row",
        justifyContent: "center"
    },

    saveBtnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        paddingVertical: 20
    }


});


export default Blog
