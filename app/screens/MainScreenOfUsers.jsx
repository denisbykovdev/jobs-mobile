import { StyleSheet, FlatList, ActivityIndicator, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SendRequest from "../components/SendRequest";
import { JobUrl } from "../configs/ApiCallHelper";
import axios from "axios";
import ChooseSearch from "../components/SearchResult/ChooseSearch";
import { useDispatch, useSelector } from 'react-redux';
import { watchGetFilteredJobs, watchGetJobs } from '../actions/jobsActions';
import useSecure from "../hooks/useSecure";
import CommonFrame from "../commons/CommonFrame";
import colors from '../utils/colors';
import layout, { responsiveWidth } from "../utils/layout";
import FormContainer from "../commons/FormContainer";
import FormSelect from "../commons/FormSelect";
import SortBy from "../icons/SortBy";
import Filters from "../icons/Filters";
import useStatusBar from "../hooks/useStatusBar";

const MainScreenOfUsers = ({ navigation }) => {
    useStatusBar('dark-content', colors.white)

    const [page, setPage] = useState(1)

    const [chooseDateOrStars, setChooseDateOrStars] = useState("date")

    const { secure: secureToken } = useSecure(`token`)

    const jobsSelector = useSelector(state => state.jobs.jobs)

    const loadingSelector = useSelector(state => state.jobs.posting)

    const [isFakeLoading, setFakeLoading] = useState(false)

    const dispatch = useDispatch()

    const getJobs = () => {
        dispatch(watchGetJobs(
            secureToken,
            page,
            chooseDateOrStars
        ))
    }

    useEffect(() => {
        secureToken !== null && getJobs()
    }, [secureToken])

    const FilterChoose = (choose) => {
        setChooseDateOrStars(choose)

        dispatch(
            watchGetJobs(
                secureToken,
                page,
                chooseDateOrStars
            )
        )
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

    const getMoreJobs = () => {
        console.log(
            `--- MainScreen/getMoreJobs`
        )
        if (loadingSelector === true) {
            setPage(page + 1);
        }
    };

    const renderFooter = () => {
        return (
            <>
                {
                    loadingSelector
                    &&
                    <ActivityIndicator
                        size="large"
                        color={colors.silver}
                        style={{
                            marginVertical: responsiveWidth(40),
                            alignSelf: 'center'
                        }}
                    />
                }   
                
            </>
        )
    }

    const submitDateOrStars = (values) => {
        console.log(
            `--- MainScreen/submitDateOrStars/values:`, values
        )
        dispatch(
            watchGetJobs(
                secureToken,
                page,
                values.dateOrStars
            )
        )
    }

    const submitFilter = (values) => {
        console.log(
            `--- MainScreen/submitFilter/values:`, values
        )
        dispatch(
            watchGetFilteredJobs(
                secureToken
            )
        )
    }

    // setFakeLoading(true)

    const scrollEnd = (event) => {
        setFakeLoading(true)

        console.log(
             `--- MainScreen/ScrollView/scrollEnd:`, 
             event.nativeEvent.contentOffset.y
        )

        setPage(page + 1)

        dispatch(watchGetJobs(
            secureToken,
            page + 1,
            chooseDateOrStars
        ))

        loadingSelector === false && setFakeLoading(false)

        // setTimeout(
        //     () => {
        //         setFakeLoading(false)
        //     },
        //     1000
        // )
    }

    return (
        <CommonFrame
            onScrollEndDrag={scrollEnd}
            withArrow
        >
            <Header
            />
            {/* <ChooseSearch
                FilterChoose={FilterChoose}
                FilterChooseRight={FilterChooseRight}
            /> */}
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: responsiveWidth(12)
                }}
            >
                <FormContainer
                    initialValues={{
                        dateOrStars: ''
                    }}
                    onSubmit={submitDateOrStars}
                >
                    <FormSelect
                        name="dateOrStars"
                        array={[
                            "date",
                            "stars"
                        ]}
                        placeholder="מיון"
                        submitting
                        leftArrow 
                        width={responsiveWidth(77.5)}
                    >
                        <SortBy />
                    </FormSelect>
                </FormContainer>
                <FormContainer
                    initialValues={{
                        filter: ''
                    }}
                    onSubmit={submitFilter}
                >
                    <FormSelect
                        name="filter"
                        array={[
                            'a-z',
                            'z-a',
                            'new'
                        ]}
                        placeholder="סינון"
                        submitting
                        leftArrow 
                        width={responsiveWidth(77.5)}
                    >
                        <Filters />
                    </FormSelect>
                </FormContainer>
            </View>
            {/* <FlatList
                data={jobsSelector !== null && jobsSelector}
                keyExtractor={item =>
                    item.id.toString()
                }
                onEndReached={getMoreJobs}
                onEndReachedThreshold={0.1}
                renderItem={({ item }) => (
                    <SendRequest
                        item={item}
                        navigationTo={navigationTo}
                        fetchData={getJobs}
                    />
                )}
                ListFooterComponent={renderFooter}
            /> */}
            {/* <ScrollView
                onScrollEndDrag={() => console.log(`--- MainScreen/ScrollView/endDrag`)}
                onScroll={scrollCatcher}
                style={{flex:1}}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
            > */}
                {
                    jobsSelector !== null 
                    && jobsSelector.map((
                        job, 
                        index
                        ) => (
                            <SendRequest 
                                key={index}
                                item={job}
                                fetchData={getJobs}
                            />
                        ))
                }
            {/* </ScrollView> */}

            {
                    isFakeLoading === true 
                    &&
                    <ActivityIndicator
                        size="large"
                        color={colors.silver}
                        style={{
                            marginVertical: responsiveWidth(40),
                            paddingBottom: responsiveWidth(40),
                            alignSelf: 'center'
                        }}
                    />
            } 
        </CommonFrame>
    )
}

export default MainScreenOfUsers
