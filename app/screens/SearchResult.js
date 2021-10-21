import {
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
    View,
    ImageBackground,
    TextInput,
    FlatList, AsyncStorage
} from "react-native";
import React, {useState,useEffect} from "react";
import Header from "../components/Header";
import SendRequest from "../components/SendRequest";
import {mainScreenBlocks} from "../configs/FakeData";
import {icons, images} from "../configs/imagesAndIconsUrl";
import ChooseSearch from "../components/SearchResult/ChooseSearch";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";

const SearchResult = ({navigation}, props) => {

    const [chosenBtn, setChosenBtn] = useState(1)
    const [dataBet, setDataBet] = useState(navigation.state && navigation.state.params.dataBet)
    const [page, setPage] = useState(0)
    const [chooseDateOrStars, setChooseDateOrStars] = useState("date")
    const [searchItem, setSearchItem] = useState(" ")


    // const fetchData = async () => {
    //     const url = `${JobUrl}/api/jobs/${page}/${chooseDateOrStars}?search=${searchItem}`
    //     const token = await getUserToken()
    //     axios.post(url, {
    //
    //         },
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${JSON.parse(token)}`,
    //                 "Content-Type": "application/x-www-form-urlencoded"
    //             },
    //         }).then(response => {
    //         // console.log("response22", response.data && response.data.data);
    //         const dateIn = response.data && response.data.data
    //         setDataBet(dataBet.concat(dateIn));
    //
    //     }).catch(error => console.log("useEffect222", error));
    // }

    const navigationTo = (text,id) => {
        if (text==="JobsOpportunity"){
            navigation.navigate("JobsOpportunity",{idJob:id})
        }else if (text==="SearchWithFilter"){
            navigation.navigate("SearchWithFilter")
        }

    }


    const FilterChoose = async (choose) => {
        setChooseDateOrStars(choose)
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');

        const url = `${JobUrl}/api/jobs/0/${choose}?search=${searchItem}`

        axios.post(url, {

            },
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }).then(response => {
            const dateIn = response.data && response.data.data
            console.log("FilterChoose",response)
            setDataBet(dateIn)
        }).catch(error => console.log("FilterChoose", error));

    }


    const FilterChooseRight = async () => {
        navigation.navigate("SearchWithFilter")
    }


    return (
        <ScrollView style={{flex: 1, backgroundColor: "white"}}>
            <View style={[styles.mainContainer]}>
                <ImageBackground source={images.myProfileBg} style={styles.image}>
                    <Header whiteHeader={true} navigation={navigation}/>
                    <View style={styles.bgMainContent}>
                        <Image source={icons.search2} style={{width: 180, height: 55}}/>
                        <Text style={styles.bgTitle}>חיפוש בכל המדרשות</Text>
                        <View style={styles.textInput}>
                            <Image source={icons.searchBlue} style={{width: 19, height: 19}}/>
                            <TextInput
                                style={styles.placeHolder_style}
                                placeholder={"מה לחפש לך?"}
                                placeholderTextColor={"#e1e1e1"}
                                placeholderStyle={styles.placeHolder_style}
                                onChangeText={text => setSearchItem(text)}
                                value={searchItem}
                            />
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.mainBlock}>

                    <ChooseSearch
                        FilterChoose={FilterChoose}
                        FilterChooseRight={FilterChooseRight}
                    />

                    <ScrollView>
                        {dataBet.map((item, index) => {
                            return (
                                <SendRequest
                                    key={index}
                                    item={item}
                                    navigationTo={navigationTo}
                                />
                            )
                        })
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}


const shadowStyle = {
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1},
    borderWidth: 0,
    borderColor: "white"
}

const styles = StyleSheet.create({
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

    mainBlock: {
        backgroundColor: "white",
        marginTop: "-30%",
        borderTopLeftRadius: 50
    },

    btnRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 34,
        marginTop: "10%"
    },

    btn: {
        backgroundColor: "#30b8b2",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 7,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    btnText: {
        color: "white"
    },

    activeBtn: {
        backgroundColor: "white",
        borderColor: "#8b95af",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 35,
        borderRadius: 7
    },


    placeHolder_style: {
        textAlign: "right",
        fontWeight: '500',
    },


})


export default SearchResult
