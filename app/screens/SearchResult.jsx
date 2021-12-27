import {
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image,
    Text,
    View,
    ImageBackground,
    ActivityIndicator
} from "react-native";
import React, {useState,useEffect} from "react";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import {mainScreenBlocks} from "../configs/FakeData";
import {icons, images} from "../configs/imagesAndIconsUrl";
import ChooseSearch from "../components/SearchResult/ChooseSearch";
import {getUserToken, JobUrl} from "../configs/ApiCallHelper";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import CommonFrame from "../commons/CommonFrame";
import FormContainer from "../commons/FormContainer";
import layout, { responsiveWidth } from "../utils/layout";
import { Constants } from "react-native-unimodules";
import IconLineWrapper from "../commons/IconLineWrapper";
import IconSearch from "../icons/IconSearch";
import { useSelector } from "react-redux";
import FormField from "../commons/FormField";
import SearchIconInField from "../icons/SearchIconInField";
import FormSelect from "../commons/FormSelect";
import SortBy from "../icons/SortBy";
import Filters from "../icons/Filters";
import colors from '../utils/colors'
import { getJobsSuccess, getSearchJobsSucess, watchGetJobs } from "../actions/jobsActions";
import authHeader from "../utils/authHeader";
import weights from "../utils/weights";
import fonts from "../utils/fonts";
import { useDispatch } from "react-redux";

const SearchResult = () => {

    const route = useRoute()

    // route?.params?.result

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const tokenSelector = useSelector(state => state.auth.token)

    const isMidrashotSelector = useSelector(state => state.auth.user?.is_midrashot)

    const jobsSelector = useSelector(state => state.jobs.jobs)

    const searchJobsSelector = useSelector(state => state.jobs.searchJobs)

    const [page, setPage] = useState(1)

    const [isFakeLoading, setFakeLoading] = useState(false)

    const [jobViewHeight, setJobViewHeight] = useState(0)

    const searchIntersepter = async (name, text) => {
        const searchUrl = `https://api.sherutbekalut.co.il/api/jobs/0/date?search=${text}`

        console.log(
            `--- SearchResult/searchIntersepter/text:`, 
            text
        )

        if(text.length > 1) {
            try {
                const result = await axios.post(
                    searchUrl,
                    {},
                    authHeader(
                        tokenSelector
                    )
                )
                if (result) {
                    console.log("--- SearchResult/searchIntersepter/result:", result)
                    // dispatch(getJobsSuccess(result.data.data))
                    dispatch(getSearchJobsSucess(result.data.data))
                }
            } catch (error) {
                console.log("--- SearchResult/searchIntersepter/error:", error)
            }
        }
    }

    const submitDateOrStars = (values) => {
        console.log(
            `--- SearchResult/submitDateOrStars/values:`, values
        )
        dispatch(
            watchGetJobs(
                tokenSelector,
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

    return (
        <CommonFrame
            onScrollEndDrag={scrollEnd}
            withArrow
            commonFrameStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                paddingTop: 0,
                height: '100%'
            }}
        >
                <FormContainer
                    initialValues={{
                        searchString: ''
                    }}
                >
                    <ImageBackground
                        source={images.myProfileBg}
                        style={[
                            {
                                height: responsiveWidth(200) + Constants.statusBarHeight
                            },
                            styles.backgroundImage
                        ]}
                    >
                        <Header
                            whiteHeader
                        />
                        <View style={styles.backgroundContent}>

                            <IconLineWrapper
                                iconLineStyle={{
                                    marginTop: responsiveWidth(38.5),
                                    marginBottom: responsiveWidth(12)
                                }}
                            >
                                <IconSearch />
                            </IconLineWrapper>                  
                                {
                                    isMidrashotSelector === false
                                        ? 
                                        <Text
                                            style={styles.backgroundTitle}
                                        >חיפוש בכל התקנים</Text>
                                        : 
                                        <Text
                                            style={styles.backgroundTitle}
                                        >חיפוש בכל המדרשות</Text>
                                }
                                <FormField
                                    name="searchString"
                                    placeholder="?מה לחפש לך"
                                    fieldContainerStyle={{
                                        marginVertical: responsiveWidth(12)
                                    }}
                                    fieldStyle={{
                                        flexDirection: 'row-reverse'
                                    }}
                                    interSepter={searchIntersepter}
                                >
                                    <SearchIconInField />
                                </FormField>            
                        </View>
                    </ImageBackground>
            </FormContainer>
           
            <View style={styles.filters}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: responsiveWidth(8)
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

                <View
                    style={{
                        position: 'relative',
                        zIndex: -1
                    }}
                >
                {
                    searchJobsSelector !== null
                    &&
                    searchJobsSelector.map((
                        job,
                        index
                    ) => (
                        <JobCard
                            key={index}
                            item={job}
                            getBackJobViewHeight={getBackJobViewHeight}
                        />
                    ))
                }
                </View>
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
        </CommonFrame>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        alignSelf: 'center',
        // flex: 1,
        width: layout.width,
        paddingHorizontal: responsiveWidth(17.5),
        paddingVertical: responsiveWidth(20)
    },
    backgroundContent: {
        alignItems: "center"
    },
    backgroundTitle: {
        color: colors.whiteTwo,
        textAlign: "center",
        fontWeight: weights.bold,
        fontSize: fonts.xlarge
    },
    filters: {
        paddingHorizontal: responsiveWidth(17.5)
    }
})

export default SearchResult
