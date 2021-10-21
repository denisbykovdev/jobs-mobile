import { ScrollView, TouchableOpacity, StyleSheet, Image, Text, AsyncStorage, FlatList, ActivityIndicator, View } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SendRequest from "../components/SendRequest";
import { icons } from "../configs/imagesAndIconsUrl";
import { getUserToken, JobUrl, Token } from "../configs/ApiCallHelper";
import axios from "axios";
import ChooseSearch from "../components/SearchResult/ChooseSearch";
import { useDispatch, useSelector } from 'react-redux';
import { watchGetJobs } from '../actions/jobsActions';
import useSecure from "../hooks/useSecure";

const MainScreenOfUsers = ({ navigation }) => {
    // const [data, setData] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [chooseDateOrStars, setChooseDateOrStars] = useState("date")

    const { secure } = useSecure(`token`)

    console.log(
        `--- MainScreenOfUsers/useSecure:`, secure
    )

    // useEffect(() => {
    //     fetchData().then();
    // }, [page])

    const jobsSelector = useSelector(state => state.jobs.jobs)

    const tokenSelector = useSelector(state => state.auth.token)

    const loadingSelector = useSelector(state => state.jobs.posting)

    const token = tokenSelector !== null && tokenSelector

    const isLoading = loadingSelector

    const data = jobsSelector

    const dispatch = useDispatch()

    const getJobs = () => {
        AsyncStorage.setItem('token', JSON.stringify(token))

        dispatch(watchGetJobs(
            token,
            page,
            chooseDateOrStars
        ))
    }

    useEffect(() => {
        getJobs()
    }, [token])

    const fetchData = async () => {
        console.log("token");
        return;
        const url = `${JobUrl}/api/jobs/${page}/${chooseDateOrStars}`
        // const token = await getUserToken()
        const token = await AsyncStorage.getItem('token');
        setIsLoading(false);
        axios.post(url, {},
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }).then(response => {
                console.log("job Page", page);
                setIsLoading(true);
                const dataIn = response.data && response.data.data
                setData(data.concat(dataIn));
                //            console.log("response22", response.data.data);
                //            setData(dataIn);

            }).catch(error => console.log("useEffect222", error));
    }


    const FilterChoose = async (choose) => {
        setChooseDateOrStars(choose)
        // const token = await getUserToken();
        const token = await AsyncStorage.getItem('token');
        const url = `${JobUrl}/api/jobs/${page}/${choose}`

        axios.post(url, {},
            {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
            }).then(response => {
                const dataIn = response.data && response.data.data
                //            console.log("FilterChoose",response)
                setData(dataIn);

            }).catch(error => console.log("FilterChoose", error));

    }

    const FilterChooseRight = async () => {
        if (navigation.state.params.isMidrashot) {
            navigation.navigate("SearchWithFilterMidrashot", { isMidrashot: navigation.state.params.isMidrashot })
        } else {
            navigation.navigate("SearchWithFilter", { isMidrashot: navigation.state.params.isMidrashot })
        }

    }

    const navigationTo = (text, id) => {
        console.log(text)
        if (text === "JobsOpportunity") {
            navigation.navigate("JobsOpportunity", { idJob: id })
        } else if (text === "SearchWithFilter") {
            navigation.navigate("SearchWithFilter", { idJob: id, isMidrashot: isMidrashot })
        }
    }

    const fetchMoreUsers = () => {
        if (isLoading) {
            setPage(page + 20);
        }
    };

    const renderFooter = () => {
        return (
            <ActivityIndicator size="large" color="#0000ff" />
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header visibleBackArrow={false} navigation={navigation} />


            <ChooseSearch
                FilterChoose={FilterChoose}
                FilterChooseRight={FilterChooseRight}
            />
            <FlatList
                data={data}
                keyExtractor={item => {
                    return item.id.toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()
                }}
                onEndReached={() => fetchMoreUsers()}
                onEndReachedThreshold={0}
                renderItem={({ item }) => (
                    <SendRequest
                        item={item}
                        navigationTo={navigationTo}
                        fetchData={fetchData}
                    />
                )}
                ListFooterComponent={renderFooter}
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


export default MainScreenOfUsers
