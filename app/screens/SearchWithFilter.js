import {
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
    View,
    ImageBackground,
    AsyncStorage
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { searchToggles } from "../configs/FakeData";
import { icons, images } from "../configs/imagesAndIconsUrl";
import ToggleSearch from "../components/SearchToggle";
import Footer from "../components/Footer";
import { LinearGradient } from "expo-linear-gradient";
import { getUserToken, JobUrl } from "../configs/ApiCallHelper";
import axios from "axios";
import CheckBox from "react-native-web/dist/exports/CheckBox";
import CheckBoxBtn from "../components/SearchResult/CheckBoxBtn";
import DropDownMultiSelectSearch from "../components/DropDownMultiSelectSearch";
import DropDownSelectSearch from "../components/DropDownSelectSearch";
import { useDispatch, useSelector } from 'react-redux';
import { watchGetFilteredJobs } from '../actions/jobsActions';
import { watchGetSubcategoryByCategory, watchGetCategory } from '../actions/categoriesActions';

const SearchResult = ({ navigation }) => {

    const [checkBox, setCheckBox] = useState(false);
    const [dataItem, setDataItem] = useState([]);
    const [places, setPlaces] = useState([])
    const [dataCategories, setDataCategories] = useState([])
    const [dataSubCategories, setDataSubCategories] = useState([])
    const [chosen, setChosen] = useState({})
    const [searchItem, setSearchItem] = useState(" ")

    const [areas, setAreas] = useState();
    const [checkedAreas, setCheckedAreas] = useState([]);
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token);


    useEffect(() => {
        const fetchData = async() => {
            dispatch(watchGetFilteredJobs(token)); 
        }
        
        // const fetchData = async () => {
        //     const url = `${JobUrl}/api/jobs/filter/getData`;
        //     // const token = await getUserToken();
        //     const token = await AsyncStorage.getItem('token');
        //     axios.get(url,
        //         {
        //             headers: {
        //                 Authorization: `Bearer ${JSON.parse(token)}`
        //             },
        //         }).then(response => {
        //             console.log("response11", response.data);
        //             setDataItem(response.data && response.data)
        //             setPlaces(response.data && response.data.places)

        //             //                const values = dataItem && dataItem.places && Object.values(dataItem.places)
        //             // const places = [values];
        //             //                console.log(values)

        //         }).catch(error => console.log("useEffect111", error));
        // }
        getSubCategories(3);
        fetchData().then()
    }, [])

    const categoriesSelector = useSelector(state => state.categories.subcategoryByCategory)
    const getCategories = async(category_id) => {
        dispatch(watchGetCategory(token, category_id)); 
    }
    // const chooseCategoriesold = async (id) => {
    //     const url = `${JobUrl}/api/libraries/category/${id}`
    //     // const token = await getUserToken();
    //     const token = await AsyncStorage.getItem('token');
    //     axios.get(url,
    //         {
    //             headers: {
    //                 "Content": "application/json",
    //                 "Authorization": `Bearer ${token}`,
    //                 token,
    //             }
    //         }).then(response => {
    //             // console.log("chooseCategories", response);
    //             setDataCategories(response.data && response.data)
    //             // setDataItem(response.data && response.data)
    //         }).catch(error => console.log("useEffect111", error));
    // }

    const subCategoriesSelector = useSelector(state => state.categories.subcategoryByCategory)
    const getSubCategories = async(category_id) => {
        dispatch(watchGetSubcategoryByCategory(token, category_id)); 
    }


    // const getSubCategoriesold = async (id) => {
    //     //        console.log(id)
    //     const url = `${JobUrl}/api/libraries/category/3`
    //     const token = await AsyncStorage.getItem('token');
    //     axios.get(url,
    //         {
    //             headers: {
    //                 "Content": "application/json",
    //                 "Authorization": `Bearer ${token}`,
    //                 token,
    //             }
    //         }).then(response => {
    //             //             console.log("chooseCategories", response);
    //             setDataSubCategories(response.data && response.data)
    //             // setDataItem(response.data && response.data)
    //         }).catch(error => console.log("subcategories", error));
    // }

    const putChosen = (key, id) => {
        chosen[key] = id
        //        console.log("chosen", chosen)

    }

    const putCheckBox = () => {
        setCheckBox(!checkBox)
        if (checkBox) {
            putChosen("nucleus", "כן")
        } else {
            putChosen("nucleus", "לא")
        }
    }

    const onBet = async () => {
        console.log("onBet", chosen)
        const url = `https://api.sherutbekalut.co.il/api/jobs/0/date?search=${searchItem}`
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');
        axios.post(url,
            {
                //                    years: chosen.years ? chosen.years : '',
                categories: chosen.categories.length > 0 ? chosen.categories : '',
                subcategories: chosen.subcategories.length > 0 ? chosen.subcategories : '',
                organizations: chosen.organizations.length > 0 ? chosen.organizations : '',
                area: chosen.area ? chosen.area : '',
                nucleus: chosen.nucleus ? chosen.nucleus : 'לא',
                is_home: chosen.is_home ? chosen.is_home : '',
                is_out: chosen.is_out ? chosen.is_out : '',
                is_dormitory: chosen.is_dormitory ? chosen.is_dormitory : '',
            },
            {
                headers: {
                    "Content": "application/json",
                    "Authorization": `Bearer ${token}`,
                    token,
                },
            }).then(response => {
                const data = response.data && response.data.data;
                console.log("onBet response", data);
                navigation.navigate("MyProfileQuizResults", { dataBet: data })

            }).catch(error => console.log("onBet", error));
    }



    return (
        <View style={styles.flex}>
            <ScrollView style={styles.flex}>
                <View style={[styles.mainContainer]}>
                    <ImageBackground source={images.myProfileBg} style={styles.image}>
                        <Header whiteHeader={true} navigation={navigation} />
                        <View style={styles.bgMainContent}>
                            <Image source={icons.search2} style={{ width: 180, height: 55 }} />
                            <Text style={styles.bgTitle}>חיפוש בכל המדרשות</Text>
                            <View style={styles.textInput}>
                                <TouchableOpacity onPress={() => onBet()}>
                                    <Image source={icons.searchBlue} style={{ width: 19, height: 19 }} />
                                </TouchableOpacity>
                                <TextInput
                                    style={{ textAlign: "right", }}
                                    placeholder="מה לחפש לך?"
                                    placeholderTextColor="#e1e1e1"
                                    onChangeText={text => setSearchItem(text)}
                                    value={searchItem}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.mainBlock}>
                        <DropDownSelectSearch
                            key={"years"}
                            items={dataItem.years}
                            name={'לאיזו שנה?'}
                            func={putChosen}
                            icon={icons.calendar}
                            choose={"years"}
                        />
                        <DropDownMultiSelectSearch
                            key={"categories"}
                            items={categoriesSelector}
                            name={'תחום'}
                            func={putChosen}
                            icon={icons.setting}
                            choose={"categories"}
                            getMore={getSubCategories}
                        />
                        <DropDownMultiSelectSearch
                            key={"subcategories"}
                            items={subCategoriesSelector}
                            name={'תת תחום'}
                            func={putChosen}
                            icon={icons.domain}
                            choose={"subcategories"}
                        />
                        <DropDownSelectSearch
                            key={"areas"}
                            items={dataItem.areas}
                            name={'אזור בארץ'}
                            func={putChosen}
                            icon={icons.location}
                            choose={"areas"}
                        />
                        <DropDownMultiSelectSearch
                            key={'organizations'}
                            items={dataItem.organizations}
                            name={'עמותה'}
                            func={putChosen}
                            icon={icons.flags}
                            choose={"organizations"}
                        />
                        <TouchableOpacity onPress={() => putCheckBox()} style={styles.checkBoxBtn}>
                            <View
                                style={[styles.checkBox, { backgroundColor: checkBox ? "#30b8b2" : "white" }]}>
                                {checkBox &&
                                    <Image
                                        source={icons.checkIcon}
                                        style={styles.checkBox_image}
                                    />
                                }
                            </View>
                            <Text style={styles.checkBoxText}>גרעין</Text>
                        </TouchableOpacity>
                        <View style={styles.jobFor}>
                            {
                                places.map((item, index) => {
                                    console.log(item);
                                    return (
                                        <CheckBoxBtn
                                            key={index}
                                            keyBtn={item.id}
                                            value={item.name}
                                            putChosen={putChosen}
                                        />
                                    )
                                })
                            }
                        </View>



                        <TouchableOpacity style={styles.btn} onPress={() => onBet()}>
                            <Text style={styles.btnText}>
                                קדימה, למצוא מדרשה בקלות!
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    borderWidth: 1,
    borderColor: "grey"
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: "white"
    },

    mainContainer: {
        justifyContent: "center",
        marginBottom: 24,
    },

    image: {
        flex: 1,
        height: 500,
        zIndex: -100
    },

    bgMainContent: {
        alignItems: "center",
        marginTop: 70
    },

    bgTitle: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 26,
        paddingTop: 28
    },

    textInput: {
        backgroundColor: "white",
        width: "80%",
        marginTop: 20,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 17,
        paddingVertical: 12,
        textAlign: "right",

    },

    jobFor: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    checkBox_image: {
        width: 15,
        height: 11,
        alignSelf: "center",
    },

    mainBlock: {
        backgroundColor: "white",
        marginTop: "-30%",
        borderTopLeftRadius: 50,
        paddingHorizontal: "11.5%"

    },

    checkBoxBtn: {
        backgroundColor: "#253866",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 16,
        borderRadius: 4,
        paddingVertical: "4%",
    },

    checkBox: {
        width: 30,
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        borderColor: "#30B8B2",
        borderWidth: 2,
        justifyContent: 'center',
    },

    checkBoxRow: {
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-between"
    },

    btn: {
        backgroundColor: "#30b8b2",
        borderRadius: 5,
        marginTop: 20
    },

    btnText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        paddingVertical: 18
    },

    checkBoxText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }

})


export default SearchResult
