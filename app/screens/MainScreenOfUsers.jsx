import { StyleSheet, FlatList, ActivityIndicator, View, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteJobStart, watchGetFavoriteJob, watchGetJobs } from '../actions/jobsActions';
import useSecure from "../hooks/useSecure";
import CommonFrame from "../commons/CommonFrame";
import colors from '../utils/colors';
import { responsiveWidth } from "../utils/layout";
import FormContainer from "../commons/FormContainer";
import FormSelect from "../commons/FormSelect";
import SortBy from "../icons/SortBy";
import Filters from "../icons/Filters";
import useStatusBar from "../hooks/useStatusBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { watchGetFavoriteJobs } from "../actions/profileActions";
import TabController from "../components/ListOfOpenOpportunities/TabController";
import Constants from 'expo-constants'

const MainScreenOfUsers = () => {
    useStatusBar('dark-content', colors.white)

    const route = useRoute()

    const navigation = useNavigation()

    const [page, setPage] = useState(1)

    const [chooseDateOrStars, setChooseDateOrStars] = useState("date")

    const { secure: secureToken } = useSecure(`token`)

    const jobsSelector = useSelector(state => state.jobs.jobs)

    const favoritesSelector = useSelector(state => state.profile?.favoriteJobs)

    // const loadingSelector = useSelector(state => state.jobs.posting)

    const [isFakeLoading, setFakeLoading] = useState(false)

    const [jobViewHeight, setJobViewHeight] = useState(0)

    const dispatch = useDispatch()

    const getJobs = () => {
        dispatch(watchGetJobs(
            secureToken,
            page,
            chooseDateOrStars
        ))
    }

    const getFavorites = () => {
        dispatch(
            watchGetFavoriteJobs(
                secureToken
            )
        )
    }

    useEffect(() => {
        if(secureToken !== null) {
            if(route.name !== 'Favorites'){
                getJobs()
            }else{
                getFavorites()
            }
        }

        console.log(
            `--- MainScreen/effect:render`,
        )
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

    const scrollEnd = (event) => {
        setFakeLoading(true)

        let heigthHigher = Constants.statusBarHeight + responsiveWidth(20) + responsiveWidth(24) + responsiveWidth(40) + (responsiveWidth(10) * (jobsSelector.length)) + responsiveWidth(20)

        console.log(
            `--- MainScreen/ScrollView/scrollEnd:`,
            event.nativeEvent.contentOffset.y + heigthHigher, 
            // jobViewHeight,
            // jobsSelector.length, 
            jobViewHeight * (jobsSelector.length)
        )
        
        setPage(page + 1)

        event.nativeEvent.contentOffset.y + heigthHigher > jobViewHeight * jobsSelector.length && dispatch(watchGetJobs(
            secureToken,
            page + 1,
            chooseDateOrStars
        ))

        // loadingSelector === false && setFakeLoading(false)

        setTimeout(
            () => {
                setFakeLoading(false)
            },
            1500
        )
    }

    const getBackJobViewHeight = (height) => setJobViewHeight(height) 

    // console.log(
    //     `--- Main/route:`, route, jobsSelector, favoritesSelector
    // )

    return (
        <CommonFrame
            onScrollEndDrag={scrollEnd}
            withArrow
            commonFrameStyle={{
                paddingHorizontal: 0
            }}
        >
            <View style={{ paddingHorizontal: responsiveWidth(17.5) }}>
            <Header />
            {
                route.name !== 'Favorites'
                ?
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

                    <TouchableOpacity
                        onPress={
                            () => navigation.navigate(
                                'SearchWithFilter'
                            )
                        }
                        style={{
                            borderColor: colors.border,
                            borderWidth: responsiveWidth(1),
                            borderRadius: 5,
                            width: responsiveWidth(77.5),
                            paddingHorizontal: responsiveWidth(9),
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Filters />
                        <Text>
                            סינון
                        </Text>
                    </TouchableOpacity>
                </View>
                :
                <TabController chosenTab={3} />
            }

            <View
                style={{
                    position: 'relative',
                    zIndex: -1,
                    // paddingHorizontal: responsiveWidth(17.5)
                }}
            >

            {
                route.name !== 'Favorites'
                    ?
                    (
                        jobsSelector !== null
                        &&
                        jobsSelector.map((
                            job,
                            index
                        ) => (
                            <JobCard
                                key={index}
                                item={job}
                                getBackJobViewHeight={getBackJobViewHeight}
                            />
                        ))
                    )
                    :
                    (
                        favoritesSelector !== undefined &&
                        favoritesSelector !== null &&
                        favoritesSelector.map((
                            job,
                            index
                        ) => (
                            <JobCard
                                key={index}
                                item={job}
                                favorite={true}
                                getBackJobViewHeight={getBackJobViewHeight}
                            />
                        ))
                    )

            } 

            </View>

            <View>
            {
                isFakeLoading === true
                // loadingSelector
                &&
                <ActivityIndicator
                    size="large"
                    color={colors.silver}
                    style={{
                        marginVertical: responsiveWidth(20),
                        // paddingBottom: responsiveWidth(20),
                        alignSelf: 'center'
                    }}
                />
            }
            </View>
            </View>
        </CommonFrame>
    )
}

export default MainScreenOfUsers
