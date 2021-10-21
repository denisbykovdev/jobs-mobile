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
import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import {searchToggles, searchTogglesMidrashot} from "../configs/FakeData";
import {icons, images} from "../configs/imagesAndIconsUrl";
import ToggleSearch from "../components/SearchToggle";
import Footer from "../components/Footer";
import {LinearGradient} from "expo-linear-gradient";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";
import CheckBox from "react-native-web/dist/exports/CheckBox";
import CheckBoxBtn from "../components/SearchResult/CheckBoxBtn";

const SearchWithFilterMidrashot = ({navigation}) => {

    const [checkBox, setCheckBox] = useState(false);
    const [dataItem, setDataItem] = useState([])
    const [dataCategories, setDataCategories] = useState([])
    const [chosen, setChosen] = useState({})
    const [searchItem, setSearchItem] = useState(" ")



    useEffect(() => {
        const fetchData = async () => {
            const url = `${JobUrl}/api/jobs/filter/getData`
            // const token = await getUserToken()
            const token = await AsyncStorage.getItem('token');

            axios.get(url,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(token)}`
                    },
                }).then(response => {
                // console.log("response11", response.data && response.data);
                setDataItem(response.data && response.data)

                const values = dataItem && dataItem.places && Object.values(dataItem.places)
                // const places = [values];
                // console.log(values)

            }).catch(error => console.log("useEffect111", error));
        }
        fetchData().then()
    }, [])


    const chooseCategories = async (id) => {
        const url = `${JobUrl}/api/libraries/category/${id}`
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');


        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`
                },
            }).then(response => {
            // console.log("chooseCategories", response);
            setDataCategories(response.data && response.data)
            // setDataItem(response.data && response.data)
        }).catch(error => console.log("useEffect111", error));
    }

    const putChosen = (key, id,index) => {
        if (id===undefined){
            chosen[key] = index
        }else {
            chosen[key] = id
        }
        console.log("chosen", chosen)

    }

    const onBet = async () => {
        // console.log("onBet",chosen)
        const url = `https://api.sherutbekalut.co.il/api/jobs/0/date?search=${searchItem}`
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');

        axios.post(url,
                chosen
            ,
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }).then(response => {
                const data=response.data && response.data.data;
            console.log("onBet response", data);
            navigation.navigate("MyProfileQuizResults", {dataBet: data})

        }).catch(error => console.log("onBet", error));
    }



    return (
        <View style={styles.flex}>
            <ScrollView style={styles.flex}>
                <View style={[styles.mainContainer]}>
                    <ImageBackground source={images.myProfileBg} style={styles.image}>
                        <Header whiteHeader={true} navigation={navigation}/>
                        <View style={styles.bgMainContent}>
                            <Image source={icons.search2} style={{width: 180, height: 55}}/>
                            <Text style={styles.bgTitle}>חיפוש בכל המדרשות</Text>
                            <View style={styles.textInput}>
                                <Image source={icons.searchBlue} style={{width: 19, height: 19}}/>
                                <TextInput
                                    style={{textAlign:"right",}}
                                    placeholder={"מה לחפש לך?"}
                                    placeholderTextColor={"#e1e1e1"}
                                    placeholderStyle={styles.placeHolder_styles}
                                    onChangeText={text => setSearchItem(text)}
                                    value={searchItem}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.mainBlock}>
                        {searchTogglesMidrashot.map((item, index) => {
                            return (
                                <ToggleSearch
                                    key={index}
                                    item={item}
                                    dataItem={dataItem}
                                    dataItemKey={item.key}
                                    chooseCategories={chooseCategories}
                                    dataCategories={dataCategories}
                                    putChosen={putChosen}
                                />
                            )
                        })}


                        <TouchableOpacity style={styles.btn} onPress={() => onBet()}>
                            <Text style={styles.btnText}>
                                !קדימה, למצוא מדרשה בקלות
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Footer chosenFooter={3} navigation={navigation}/>
        </View>
    )
}


const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1},
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
        flexWrap: "wrap",
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


export default SearchWithFilterMidrashot
