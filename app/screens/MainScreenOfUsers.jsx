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

const MainScreenOfUsers = () => {
    useStatusBar('dark-content', colors.white)

    const route = useRoute()

    // console.log(
    //     `--- Main/route:`, route
    // )

    const navigation = useNavigation()

    const [page, setPage] = useState(1)

    const [chooseDateOrStars, setChooseDateOrStars] = useState("date")

    const { secure: secureToken } = useSecure(`token`)

    const jobsSelector = useSelector(state => state.jobs.jobs)

    const favoritesSelector = useSelector(state => state.profile?.favoriteJobs)

    // const loadingSelector = useSelector(state => state.jobs.posting)

    const [isFakeLoading, setFakeLoading] = useState(false)

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

        // console.log(
        //     `--- MainScreen/ScrollView/scrollEnd:`,
        //     event.nativeEvent.contentOffset.y
        // )

        setPage(page + 1)

        dispatch(watchGetJobs(
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

    return (
        <CommonFrame
            onScrollEndDrag={scrollEnd}
            withArrow
            commonFrameStyle={{
                position: 'relative'
            }}
        >
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
                            />
                        ))
                    )

            }

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
        </CommonFrame>
    )
}

export default MainScreenOfUsers
