import {ScrollView, TouchableOpacity, StyleSheet, Image, Text, AsyncStorage,FlatList, View} from "react-native";
import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import TabController from "../components/ListOfOpenOpportunities/TabController";
import {mainScreenBlocks} from "../configs/FakeData";
import {icons} from "../configs/imagesAndIconsUrl";
import {getUserToken, JobUrl, Token} from "../configs/ApiCallHelper";
import axios from "axios";
import ChooseSearch from "../components/SearchResult/ChooseSearch";
import { useDispatch, useSelector } from 'react-redux';
import { watchGetFavoriteJobs } from '../actions/profileActions';

const Favorites = ({navigation}) => {
    const [date, setDate] = useState([])
    const [page, setPage] = useState(0)
    const [chooseDateOrStars, setChooseDateOrStars] = useState("date")

    const favoriteSelector = useSelector(state => state.profile.favoriteJobs) 
    const tokenSelector = useSelector(state => state.auth.token);

    const dispatch = useDispatch()

    const getFavoriteJobs = async() => {
        dispatch(watchGetFavoriteJobs(
            tokenSelector
        ));
    }

    useEffect(() => {
        getFavoriteJobs();
    }, [])




    // useEffect(() => {
    //     fetchData().then()
    // }, [])

    // const fetchData = async () => {
    //     const url = `${JobUrl}/api/profile/favorite/list`
    //     // const token = await getUserToken()
    //     const token = await AsyncStorage.getItem('token') ;
    //     axios.get(url,
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${JSON.parse(token)}`
    //             },
    //         }).then(response => {
    //         // console.log("response22", response.data && response.data.data);
    //         const dateIn = response.data && response.data.data
    //         setDate(date.concat(dateIn));

    //     }).catch(error => console.log("useEffect222", error));
    // }


    const FilterChoose = async (choose) => {
        setChooseDateOrStars(choose)
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');
        const url = `${JobUrl}/api/jobs/0/${choose}`

        axios.post(url, {},
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }).then(response => {
            const dateIn = response.data && response.data.data
            console.log("FilterChoose",response)
            setDate(dateIn)
        }).catch(error => console.log("FilterChoose", error));

    }

    const FilterChooseRight = async () => {
        if (navigation.state.params.isMidrashot){
            navigation.navigate("SearchWithFilterMidrashot")
        }else {
            navigation.navigate("SearchWithFilter")
        }

    }

    const navigationTo = (text,id) => {
        if (text === "JobsOpportunity") {
            navigation.navigate("JobsOpportunity",{idJob:id})
        } else if (text === "SearchWithFilter") {
            navigation.navigate("SearchWithFilter",{idJob:id}) 
        }

    }

    // const navigationTo = (text, id) => {
    //     if (text === "JobsOpportunity") {
    //         navigation.navigate("JobsOpportunity", { idJob: id })
    //     } else if (text === "SearchWithFilter") {
    //         navigation.navigate("SearchWithFilter", { idJob: id, isMidrashot: isMidrashot })
    //     }
    // }

    const fetchMoreUsers = () => {
        if (date && date.length >= page + 20) {
            setPage(page + 20)
            getFavoriteJobs();
            //fetchData().then();
        }
    };

    return (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
            <Header visibleBackArrow={false} navigation={navigation}/>
            <TabController chosenTab={3} navigation={navigation}/>
{console.log("favoriteSelector", favoriteSelector)}
            <FlatList
                data={favoriteSelector}
                keyExtractor={user => user.id.toString()}
                // keyExtractor = {item => {
                //     return item.id.toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString() }}
                onEndReached={() => fetchMoreUsers()}
                onEndReachedThreshold={0.5}
                renderItem={({item}) => (
                    <JobCard
                        item={item}
                        navigationTo={navigationTo}
                        fetchData = {getFavoriteJobs}
                    />
                )}
                extraData={favoriteSelector}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    filterRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 34,
        marginTop: 30,
        marginBottom: 15,
    },

    filterBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "#8b95af",
        borderWidth: 2,
        width: 155,
        paddingVertical: 11,
        paddingHorizontal: 15,
        borderRadius: 5,
    },

    filterText: {
        color: "#39496d",
        fontSize: 18
    }

});


export default Favorites
