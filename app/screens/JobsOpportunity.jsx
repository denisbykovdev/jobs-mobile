import {
    Image,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { icons, images } from "../configs/imagesAndIconsUrl";
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Stars from "react-native-stars";
import { useDispatch, useSelector } from 'react-redux';
import { watchViewJob, watchApplyJob, watchGetFavoriteJob } from '../actions/jobsActions';
import CommonFrame from "../commons/CommonFrame";
import { useNavigation, useRoute } from "@react-navigation/native";
import colors from '../utils/colors'
import layout, { responsiveWidth } from "../utils/layout";
import weights from "../utils/weights";
import fonts from "../utils/fonts";
import { url } from "../utils/api";
import HomeBreadCrumps from "../icons/HomeBreadCrumps";
import stringSlicer from "../helpers/stringSlicer";
import VideoPlayer from '../commons/VideoPlayer';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';
import Persons from "../icons/Persons";
import CommonButton from "../commons/CommonButton";
import QuestionsFromWomen from "../icons/QuestionsFromWomen";
import Status from "../icons/Status";
import LikeButton from "../commons/LikeButton";
import ShareButton from "../commons/ShareButton";
import FormContainer from "../commons/FormContainer";
import FormField from "../commons/FormField";
import FormButton from "../commons/FormButton"
import { watchAddQuestion } from "../actions/faqActions";
import { watchOpenConversation } from "../actions/chatActions";
import Tick from "../icons/Tick";

const JobsOpportunity = () => {
    const carouselRef = useRef()

    const navigation = useNavigation()

    const route = useRoute()

    const jobId = route.params && route.params?.job.id

    const is_favorite = route.params && route.params?.job.is_favorite

    const dispatch = useDispatch()

    const tokenSelector = useSelector(state => state.auth.token);

    const jobSelector = useSelector(state => state.jobs.job !== null && state.jobs?.job)

    const [selected, setSelected] = useState(0)

    const applyJobSelector = useSelector(state => state.jobs.applyJob)

    const openConversationSelector = useSelector(state => state.chats?.openConversationMessages)

    const pagination = () => (
        <Pagination
            dotsLength={'80%'}
            activeDotIndex={selected}
            containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
            dotStyle={{
                width: responsiveWidth(9.5),
                height: responsiveWidth(1.5),
                borderRadius: 5,
                marginHorizontal: responsiveWidth(3.5),
                backgroundColor: colors.whiteTwo
            }}
            inactiveDotStyle={{
                backgroundColor: colors.tealishTwo
            }}
            inactiveDotOpacity={0.9}
            inactiveDotScale={0.9}
        />
    )

    useEffect(() => {
        tokenSelector && dispatch(watchViewJob(
            tokenSelector,
            jobId
        ));
    }, [tokenSelector])

    // useEffect(() => {

    //     console.log(
    //         `--- JobsOpportunity/effect/jobSelector`, jobSelector
    //     )
    // }, [jobSelector])

    const applyJob = async () => {
        dispatch(watchApplyJob(
            tokenSelector,
            jobId
        ))
    }

    useEffect(() => {
        console.log(
            `--- JobsOpportunity/effect/typeof apply:`, 
            typeof applyJobSelector, 
            applyJobSelector
        )
        applyJobSelector !== null
        &&
        typeof applyJobSelector === 'string'
        &&
        navigation.navigate('JobOpportunityPopUp')
    }, [applyJobSelector])

    const submitFaqQuestion = (values) => {
        dispatch(
            watchAddQuestion(
                tokenSelector,
                jobId,
                values.question
            )
            // watchOpenConversation(
            //     tokenSelector,
            //     jobId
            // )
        )
    }

    const addToFavorite = jobId => {
        dispatch(watchGetFavoriteJob(tokenSelector, jobId));
    }

    return (
        <CommonFrame>
        {/* <ScrollView> */}
            <Header />
            <View style={styles.jobsOpportunityContainer}>

                <ImageBackground
                    source={images.tellMore}
                    style={styles.headerContainer}
                >
                    <Text
                        style={styles.headerContainerTitle}
                    >
                        {jobSelector?.category_name}
                    </Text>

                </ImageBackground>

                <View style={[styles.mainContainer, shadowStyle]}>

                    <View style={styles.titleContainer}>
                        <View style={styles.titleLogo}>
                            <View
                                style={styles.circleLogoContainer}
                            >
                                <Image
                                    style={styles.circleLogo}
                                    source={{
                                        uri: `${url}${jobSelector?.logo}`
                                    }}
                                />
                            </View>
                        </View>

                        <View style={styles.titleBreadcrumbs}>
                            <TouchableOpacity>
                                <HomeBreadCrumps />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text
                                    style={styles.titleBreadcrumbsCategory}
                                >
                                    {
                                        stringSlicer(
                                            jobSelector?.category_name || 'test',
                                            10
                                        )
                                    }
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text
                                    style={styles.titleBreadcrumbsTitle}
                                >
                                    {
                                        stringSlicer(
                                            jobSelector?.title,
                                            10
                                        )
                                    }
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.mainInfoContainer}>
                        <View style={[styles.mainInfoSilver, styles.mainInfo]}>
                            <Text style={styles.definition}>תחומי שירות</Text>
                            <Text style={styles.description}>
                                {jobSelector.category_name}
                            </Text>
                        </View>
                        <View style={[styles.mainInfoWhite, styles.mainInfo]}>
                            <Text style={styles.definition}>תת תחום</Text>
                            <Text style={styles.description}>
                                {jobSelector.subcategory_name}
                            </Text>
                        </View>
                        <View style={[styles.mainInfoSilver, styles.mainInfo]}>
                            <Text style={styles.definition}>איזור בארץ</Text>
                            <Text style={styles.description}>
                                {jobSelector.area_name}
                            </Text>
                        </View>
                        <View style={[styles.mainInfoWhite, styles.mainInfo]}>
                            <Text style={styles.definition}>עיר בארץ</Text>
                            <Text style={styles.description}>
                                {jobSelector.city_name}
                            </Text>
                        </View>
                        <View style={[styles.mainInfoSilver, styles.mainInfo]}>
                            <Text style={styles.definition}>דיור</Text>
                            <Text style={styles.description}>
                                {jobSelector.where_we_live?.dormitory}
                            </Text>
                        </View>
                        <View style={[styles.mainInfoWhite, styles.mainInfo]}>
                            <Text style={styles.definition}>עמותה</Text>
                            <Text style={styles.description}>
                                {jobSelector.organization_name}
                            </Text>
                        </View>
                        <View style={[styles.mainInfoSilver, styles.mainInfo]}>
                            <Text style={styles.definition}>?חלק מגרעין</Text>
                            <Text style={styles.description}>
                                {jobSelector.nucleus}
                            </Text>
                        </View>
                        <View style={[styles.mainInfoWhite, styles.mainInfo]}>
                            <Text style={styles.definition}>אופן המיון</Text>
                            <Text style={styles.description}>
                                {jobSelector.how_to_sort}
                            </Text>
                        </View>
                        <View style={[styles.mainInfoSilver, styles.mainInfo]}>
                            <Text style={styles.definition}>שם הרכזת</Text>
                            <Text style={styles.description}>
                                {jobSelector.hr_name}
                            </Text>
                        </View>
                        <View style={[styles.mainInfoWhite, styles.mainInfo]}>
                            <Text style={styles.definition}>מס' טלפון הרכזת</Text>
                            <Text style={styles.description}>
                                {jobSelector.hr_phone}
                            </Text>
                        </View>
                        <View style={[styles.mainInfoSilver, styles.mainInfo]}>
                            <Text style={styles.definition}>מייל רכזת </Text>
                            <Text style={styles.description}>
                                {jobSelector.hr_email}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.additionalInfoContainer}>

                        <Carousel
                            loop
                            ref={carouselRef}
                            layout='default'
                            data={jobSelector ? jobSelector.images : []}
                            sliderWidth={layout.width - responsiveWidth(35)}
                            itemWidth={layout.width - responsiveWidth(35)}
                            itemHeight={responsiveWidth(93)}
                            sliderHeight={responsiveWidth(93)}
                            firstItem={jobSelector?.images?.length - 1}
                            onSnapToItem={(index) => {
                                setSelected(index + 1)
                            }}
                            containerCustomStyle={{
                                marginBottom: responsiveWidth(12)
                            }}
                            renderItem={({ item, index }) => (
                                <>
                                    <TouchableOpacity
                                        style={{
                                            position: 'absolute',
                                            top: '45%',
                                            right: - responsiveWidth(7),
                                            width: responsiveWidth(18),
                                            height: responsiveWidth(18),
                                            backgroundColor: colors.whiteTwo,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 1,
                                            borderRadius: responsiveWidth(50)
                                        }}
                                        onPress={() => carouselRef.current.snapToNext()}
                                    >
                                        <MaterialIcons
                                            name="keyboard-arrow-right"
                                            size={responsiveWidth(10)}
                                            color={colors.tealishTwo}
                                        />
                                    </TouchableOpacity>
                                    <View
                                        key={index}
                                        style={{
                                            borderRadius: responsiveWidth(10),
                                            overflow: 'hidden',
                                            height: responsiveWidth(111),
                                            width: layout.width - responsiveWidth(35),
                                            position: 'relative'
                                        }}
                                    >
                                        <ImageBackground
                                            source={{ uri: `${url}${item}` }}
                                            resizeMode="cover"
                                            style={{
                                                height: responsiveWidth(111),
                                                width: '100%'
                                            }}
                                        >
                                            {pagination}
                                        </ImageBackground>
                                    </View>
                                    <TouchableOpacity
                                        style={{
                                            position: 'absolute',
                                            top: '45%',
                                            left: - responsiveWidth(7),
                                            width: responsiveWidth(18),
                                            height: responsiveWidth(18),
                                            backgroundColor: colors.whiteTwo,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 1,
                                            borderRadius: responsiveWidth(50)
                                        }}
                                        onPress={() => carouselRef.current.snapToPrev()}
                                    >
                                        <MaterialIcons
                                            name="keyboard-arrow-left"
                                            size={responsiveWidth(10)}
                                            color={colors.tealishTwo}
                                        />
                                    </TouchableOpacity>
                                </>
                            )}
                        />

                        <View style={styles.additionalInfoVideo}>
                            <View style={styles.additionalInfoLineTitle}>
                                <View style={styles.additionalInfoLine}></View>
                                <Text style={styles.additionalInfoLineTitleText}>וידיאו</Text>
                                <View style={styles.additionalInfoLine}></View>
                            </View>

                            <VideoPlayer />
                        </View>

                        <View style={styles.additionalInfoReviews}>
                            <View style={styles.additionalInfoLineTitle}>
                                <View style={styles.additionalInfoLine}></View>
                                <Text style={styles.additionalInfoLineTitleText}>ביקורות</Text>
                                <View style={styles.additionalInfoLine}></View>
                            </View>

                            <View style={styles.additionalInfoStars}>
                                <Text style={styles.additionalInfoStarsTitle}>
                                    {`0.${jobSelector?.stars}`}
                                </Text>

                                <Stars
                                    half={true}
                                    default={jobSelector?.stars}
                                    display={jobSelector?.stars}
                                    spacing={5}
                                    starSize={responsiveWidth(6)}
                                    count={5}
                                    fullStar={icons.starFilled}
                                    emptyStar={icons.starEmpty}
                                />

                                <View style={styles.additionalInfoStarsPositions}>
                                    <Text style={styles.additionalInfoStarsPositionsTitle}>
                                        {jobSelector?.count_of_all_positions}
                                    </Text>

                                    <Persons />
                                </View>
                            </View>

                            <CommonButton
                                title="הצגת הביקורות"
                                buttonHeight={responsiveWidth(26.5)}
                                buttonColor={colors.whiteTwo}
                                titleColor={colors.darkGreyBlue}
                                borderColor={colors.tealGreen}
                                onPress={
                                    () => navigation.navigate(
                                        // 'FaqForJobs',
                                        'Reviews',
                                        {
                                            jobId
                                        }
                                    )
                                }
                            />

                            <View style={styles.additionalInfoDetails}>
                                <TouchableOpacity 
                                    onPress={
                                        () => navigation.navigate(
                                            'FaqForJobs',
                                            {
                                                jobId
                                            }
                                        )
                                    }
                                    style={styles.additionalInfoDetail}
                                >
                                    <View style={styles.additionalInfoDetailInner}>
                                        <Text style={styles.additionalInfoDetailTitle}>בנות שירות שואלות</Text>
                                        <Text style={styles.additionalInfoDetailQuestion}>שאלות ותשובות</Text>
                                    </View>
                                    <QuestionsFromWomen />
                                </TouchableOpacity>
                                <View style={styles.additionalInfoDetail}>
                                    <View style={styles.additionalInfoDetailInner}>
                                        <Text style={styles.additionalInfoDetailTitle}>סטטוס</Text>
                                        <Text style={styles.additionalInfoDetailStatus}>לא שלחת עדיין</Text>
                                    </View>
                                    <Status />
                                </View>
                            </View>

                            <View style={styles.positionsLineContainer}>
                                <Text style={styles.reviewsSectorTitle}>תקנים פתוחים:</Text>
                                <View style={styles.positionsLineWrapper}>
                                    <View
                                        style={[
                                            styles.positionsLine, 
                                            { 
                                                width: `${100 / jobSelector.count_of_all_positions * jobSelector.count_of_taken_positions}%` 
                                            }
                                        ]} 
                                    />
                                </View>
                                <View style={styles.positionsCountContainer}>
                                    <Text style={[styles.positionsCountRange, { color: "#aaaeb7" }]}> 
                                        {jobSelector.count_of_all_positions} 
                                    </Text>
                                    <Text 
                                        style={{
                                            color: colors.darkSlateBlue,
                                            fontSize: fonts.xxsmall
                                        }}
                                    > מתוך </Text>
                                    <Text style={styles.positionsCountRange}>
                                        {jobSelector.count_of_taken_positions}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.additionalInfoDate}>
                                <Text 
                                    style={styles.additionalInfoDateTitle}
                                >
                                    { jobSelector?.last_date_for_registration }
                                </Text>
                                <Text style={styles.additionalInfoDateDescription}>תאריך אחרון להרשמה:</Text>
                            </View>

                            <View style={styles.additionalInfoButtons}>
                                
                                <LikeButton 
                                    oneTime
                                    onPress={
                                        !is_favorite
                                            ? () => addToFavorite(jobSelector?.id)
                                            : () => { }
                                    }
                                    liked={jobSelector.is_favorite}
                                />
                                <ShareButton />
                            </View>

                            <CommonButton 
                                disabled={jobSelector?.is_requested === true }
                                title={
                                    jobSelector?.is_requested === false
                                    ? "שליחת בקשה להרשמה לסיירת"
                                    : "נשלחה הודעה"
                                }
                                buttonHeight={responsiveWidth(26.5)}
                                buttonStyle={{
                                    marginVertical: responsiveWidth(6)
                                }}
                                onPress={applyJob}
                                buttonColor={
                                    jobSelector?.is_requested === true 
                                    && colors.silver
                                }
                            >
                                {
                                    jobSelector?.is_requested === true
                                    &&
                                    <Tick />
                                }
                            </CommonButton>

                            <View style={styles.additionalInfoFaqForm}>
                                <FormContainer
                                    initialValues={{
                                        title: '',
                                        question: ''
                                    }}
                                    onSubmit={submitFaqQuestion}
                                >
                                    <Text 
                                        style={styles.additionalInfoFaqFormTitle}
                                    >שליחת הודעה לרכזת</Text>
                                    <FormField 
                                        name="title"
                                        placeholder="כותרת"
                                        fieldContainerStyle={{
                                            marginBottom: responsiveWidth(8)
                                        }}
                                    />
                                    <FormField 
                                        name="question"
                                        placeholder="ההודעה שלך"
                                        area
                                        height={responsiveWidth(55)}
                                        fieldContainerStyle={{
                                            marginBottom: responsiveWidth(8)
                                        }}
                                    />
                                    <FormButton 
                                        title="שליחת הודעה פרטית לרכזת"
                                        buttonHeight={responsiveWidth(26.5)}
                                        borderColor={colors.tealGreen}
                                        buttonColor={colors.whiteTwo}
                                        titleColor={colors.darkGreyBlue}
                                    />
                                </FormContainer>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
       {/* </ScrollView>  */}
       </CommonFrame>
    )
}

// const shadowStyleMain = {
//     shadowOpacity: 0.5
// }

const shadowStyle = {
    borderWidth: 0,
    borderColor: colors.white,
    shadowColor: colors.BLACK_20,
    shadowOffset: {
        width: 0,
        height: 0
    },
    shadowRadius: 4.5,
    shadowOpacity: 1,
    elevation: 5
}

const styles = StyleSheet.create({
    jobsOpportunityContainer: {
        marginBottom: responsiveWidth(40)
    },
    headerContainer: {
        flex: 1,
        resizeMode: "cover",
        height: responsiveWidth(59.5),
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: responsiveWidth(10)
    },
    headerContainerTitle: {
        color: colors.whiteTwo,
        textAlign: "center",
        fontWeight: weights.bold,
        fontSize: fonts.large
    },
    mainContainer: {
        marginTop: - responsiveWidth(15),
        backgroundColor: colors.whiteTwo,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingTop: responsiveWidth(15)
    },
    titleContainer: {
        position: 'relative',
        alignItems: 'center'
    },
    titleLogo: {
        position: 'absolute',
        top: - responsiveWidth(25)
    },
    circleLogoContainer: {
        width: responsiveWidth(23.5),
        height: responsiveWidth(23.5),
        borderRadius: responsiveWidth(50),
        borderColor: colors.whiteTwo,
        borderWidth: responsiveWidth(1),
        marginBottom: responsiveWidth(6),
        backgroundColor: colors.whiteTwo,
        shadowColor: colors.BLACK_20,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 4.5,
        shadowOpacity: 1,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circleLogo: {
        width: responsiveWidth(17),
        height: responsiveWidth(17)
    },
    titleBreadcrumbs: {
        width: '100%',
        marginVertical: responsiveWidth(6),
        paddingHorizontal: responsiveWidth(25),
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleBreadcrumbsCategory: {
        color: colors.tealishTwo,
        fontSize: fonts.small,
        fontWeight: weights.bold
    },
    titleBreadcrumbsTitle: {
        color: colors.darkSlateBlue,
        fontSize: fonts.xxsmall,
        fontWeight: weights.thin
    },
    mainInfoContainer: {
        marginVertical: responsiveWidth(12),
        width: '100%'
    },
    mainInfo: {
        padding: responsiveWidth(12),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
    },
    mainInfoSilver: {
        backgroundColor: colors.silverTwo
    },
    mainInfoWhite: {
        backgroundColor: colors.whiteTwo
    },
    definition: {
        color: colors.darkGreyBlue,
        fontSize: fonts.xsmall,
        fontWeight: weights.regular
    },
    description: {
        color: colors.darkSlateBlue,
        fontSize: fonts.xsmall,
        fontWeight: weights.regular
    },
    additionalInfoContainer: {
        padding: responsiveWidth(12),
        alignItems: "center",
        width: '100%'
    },
    additionalInfoVideo: {
        width: '100%'
    },
    additionalInfoLineTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    additionalInfoLine: {
        borderTopColor: colors.cloudyBlue,
        borderTopWidth: responsiveWidth(1),
        height: responsiveWidth(1.5),
        width: responsiveWidth(50)
    },
    additionalInfoLineTitleText: {
        fontSize: fonts.xsmall,
        fontWeight: weights.regular,
        color: colors.darkSlateBlue
    },
    additionalInfoReviews: {
        width: '100%'
    },
    additionalInfoStars: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: responsiveWidth(6),
        justifyContent: 'center'
    },
    additionalInfoStarsTitle: {
        marginHorizontal: responsiveWidth(6),
        color: colors.darkSlateBlue,
        fontSize: fonts.xxxsmall,
        fontWeight: weights.semiBold
    },
    additionalInfoStarsPositions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: responsiveWidth(6)
    },
    additionalInfoStarsPositionsTitle: {
        marginRight: responsiveWidth(2),
        color: colors.darkSlateBlue50,
        fontSize: fonts.xxxsmall,
        fontWeight: weights.semiBold
    },
    additionalInfoDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: responsiveWidth(12),
        borderBottomColor: colors.cloudyBlue,
        borderBottomWidth: responsiveWidth(1)
    },
    additionalInfoDetail: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    additionalInfoDetailInner: {
        alignItems: 'flex-end',
        marginRight: responsiveWidth(6)
    },
    additionalInfoDetailTitle: {
        fontSize: fonts.xxxsmall,
        fontWeight: weights.semiBold,
        color: colors.darkSlateBlue50
    },
    additionalInfoDetailQuestion: {
        fontSize: fonts.xsmall,
        fontWeight: weights.bold,
        color: colors.tealishTwo
    },
    additionalInfoDetailStatus: {
        fontSize: fonts.xsmall,
        fontWeight: weights.bold,
        color: colors.darkSlateBlue
    },
    positionsLineContainer: {
        width: "100%",
        marginVertical: responsiveWidth(12)
    },
    positionsLineWrapper: {
        height: responsiveWidth(3),
        backgroundColor: colors.veryLightBlue,
        borderRadius: 5,
        marginVertical: responsiveWidth(6),
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    positionsLine: {
        height: responsiveWidth(3),
        backgroundColor: colors.tealishTwo,
        borderRadius: 5,
    },
    positionsCountContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    positionsCountRange: {
        color: colors.tealishTwo,
        fontSize: fonts.small,
        fontWeight: weights.bold
    },
    reviewsSectorTitle: {
        color: colors.darkSlateBlue,
        fontSize: fonts.xsmall,
        fontWeight: weights.bold,
        textAlign: "center"
    },
    additionalInfoDate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: responsiveWidth(1),
        borderBottomColor: colors.cloudyBlue,
        paddingBottom: responsiveWidth(12)
    },
    additionalInfoDateTitle: {
        color: colors.darkSlateBlue,
        fontSize: fonts.xsmall,
        fontWeight: weights.bold
    },
    additionalInfoDateDescription: {
        color: colors.brownGrey,
        fontSize: fonts.xsmall,
        fontWeight: weights.bold
    },
    additionalInfoButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    additionalInfoFaqFormTitle: {
        marginVertical: responsiveWidth(8),
        fontSize: fonts.xsmall,
        fontWeight: weights.regular,
        color: colors.darkSlateBlue,
        textAlign: 'center'
    }
});


export default JobsOpportunity
{/* {
                jobData && jobData.title &&
                <View>
                    <View style={[styles.mainContainer]}>
                        <ImageBackground  source={{uri: JobUrl + jobData.cover_image}}  style={styles.image}>
                            <Text style={styles.bgTitle}>{jobData.title}</Text>
                        </ImageBackground>
                        <View style={[styles.opportunitiesBlock, {shadowOpacity: 0.5}]}>
                            <View style={{alignItems: "center"}}>
                                <View style={[styles.circleIcon, shadowStyleMain]}>
                                {jobData && jobData.logo &&
                                   <Image source={icons.yellowIcon} style={{width: 45, height: 45}}/>
                                }
                                </View>
                            </View>

                            <View style={styles.fieldsBlock}>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.category_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>תחומי שירות</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "white"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.subcategory_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>תת תחום</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.area_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>איזור בארץ</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "white"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.city_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>עיר בארץ</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{Object.values(jobData && jobData.where_we_live).join()}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>דיור</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "white"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.organization_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>עמותה</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.nucleus}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>חלק מגרעין?</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "white"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.how_to_sort}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>אופן המיון</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: 2 === 1 ? "#30b8b2" : "#172C60"}]}>{jobData.hr_name}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>שם הרכזת</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: "white"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text onPress={()=>{Linking.openURL(`tel: ${jobData.hr_phone}`);}}
                                            style={[styles.fields, {color: "#30b8b2"}]}>{jobData.hr_phone}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>מס' טלפון הרכזת</Text>
                                    </View>
                                </View>

                                <View style={{backgroundColor: "rgba(186, 190, 199, 0.3)"}}>
                                    <View style={[styles.fieldRow]}>
                                        <Text
                                            style={[styles.fields, {color: "#30b8b2"}]}>{jobData.hr_email}</Text>
                                        <Text
                                            style={[styles.fields, {fontWeight: "300"}]}>מייל רכזת</Text>
                                    </View>
                                </View>


                            </View>

                            <View style={{paddingHorizontal: 10}}>

                                {jobData.images && jobData.images.length > 1 &&
                                <View style={{marginTop: 20}}>
                                    <Slideshow
                                        indicatorSize={0}
                                        scrollEnabled={false}
                                        arrowLeft={{color: "red", width: 10, height: 10}}
                                        dataSource={jobData.images}
                                    />
                                </View>
                                }
                                {jobData.images && jobData.images.length == 1 &&
                                <View style={{marginTop: 20}}>
                                    <Image source={{uri: JobUrl + jobData.images[0]}} style = {{width: 310, height: 200}} />
                                </View>
                                }

                                {jobData.video_url &&
                                <View style={[styles.galleryTitleRow]}>
                                    <View style={[styles.borderLeft]}/>
                                    <Text style={styles.galleryTitle}>וידיאו</Text>
                                    <View style={[styles.borderRight]}/>
                                </View>
                                }

                                <View>
                                    {jobData.video_url &&
                                    <YoutubePlayer
                                        height={190}
                                        videoId={jobData.video_url}
                                    />
                                    }
                                    <View style={styles.galleryTitleRow}>
                                        <View style={[styles.borderLeft]}/>
                                        <Text style={styles.galleryTitle}>ביקורות</Text>
                                        <View style={[styles.borderRight]}/>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.reviewRow}>
                                <Text
                                    style={[styles.profileTextSmall, {color: "#172c60", fontWeight: "bold"}]}>3.0</Text>
                                <View style={styles.starReviews}>
                                    <Stars
                                        half={true}
                                        default={jobData.stars}
                                        // update={(val)=>{this.setState({stars: val})}}
                                        spacing={5}
                                        starSize={10}
                                        count={5}
                                        fullStar={icons.starFilled}
                                        emptyStar={icons.starEmpty}
                                    />
                                </View>
                                <View style={styles.reviewRow}>
                                    <Text style={styles.profileTextSmall}>48</Text>
                                    <Image source={icons.person} style={{width: 10, height: 12, marginLeft: 5}}/>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.reviewBtn}
                                              onPress={() => navigation.navigate("Reviews", {idJob: id})}>
                                <Text style={styles.reviewBtnText}>
                                    הצגת הביקורות
                                </Text>
                            </TouchableOpacity>

                            <View style={styles.reviewBlockRow}>
                                <View style={styles.reviewSmallBlock}>
                                    <View style={{paddingRight: 13}}>
                                        <Text style={styles.reviewSmallBlockTextGrey}>בנות שירות שואלות</Text>
                                        <TouchableOpacity
                                            onPress={() => toFaqForJobs()}>
                                            <Text style={styles.reviewSmallBlockTextGreen}>שאלות ותשובות</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Image source={icons.question} style={styles.reviewIcon}/>
                                </View>

                                <View style={styles.reviewSmallBlock}>
                                    <View style={{paddingRight: 13}}>
                                        <Text style={styles.reviewSmallBlockTextGrey}>סטטוס</Text>
                                        <Text style={[styles.reviewSmallBlockTextGreen, {color: "#172c60"}]}>לא שלחת עדיין
                                            </Text>
                                    </View>
                                    <Image source={icons.Profile2} style={styles.reviewIcon}/>
                                </View>
                            </View>

                            <View style={styles.openStandardBlock}>
                                <Text style={styles.opinionTitle}>תקנים פתוחים:</Text>
                                <View style={styles.openStandardLoader}>
                                    <View
                                        style={[styles.openStandardLoaderFill, {width: jobData.count_of_all_positions !== 0 ? `${jobData.count_of_taken_positions / jobData.count_of_all_positions * 100}%` : 0}]}/>
                                </View>
                                <View style={styles.rangeLine}>
                                    <Text
                                        style={[styles.range, {color: "#aaaeb7"}]}> {jobData.count_of_all_positions} </Text>
                                    <Text style={{color: "#172c60"}}> מתוך </Text>
                                    <Text style={styles.range}> {jobData.count_of_taken_positions} </Text>
                                </View>
                                {jobData.last_date_for_registration &&
                                <View style={styles.dateRow}>
                                    <Text style={styles.dateText}> {jobData.last_date_for_registration} </Text>
                                    <Text style={styles.reviewSmallBlockTextGrey}> תאריך אחרון להרשמה: </Text>
                                </View>
                                }


                            </View>

                            <View style={styles.iconsColumn}>
                                <TouchableOpacity>
                                    <View
                                        style={[styles.iconsCircle, shadowStyle]}>
                                        <Image source={icons.likeGreen}
                                               style={styles.like}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={[styles.iconsCircle, {marginLeft: 15}, shadowStyle]}>
                                        <Image source={icons.share}/>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {isOpenMessage && <>
                                {
                                    isAppleTrue &&
                                    <View style={styles.errorMessage}>
                                        <Text style={[styles.errorMessageText, {color: "#39496d"}]}>אתה קשור לעבודה זו
                                            בהצלחה</Text>
                                    </View>
                                }
                                {
                                    !isAppleTrue &&
                                    <View style={styles.errorMessage}>
                                        <Text style={styles.errorMessageText}>משהו השתבש...</Text>
                                    </View>
                                }
                            </>
                            }
                            <TouchableOpacity style={[styles.sendBtn, jobData.is_requested && {backgroundColor: "#afafafaf"}]} onPress={() => setApply()} disabled={jobData.is_requested}>
                                <Text style={styles.sendBtnText}>שליחת בקשה להרשמה לסיירת</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                } */}

                // image: {
                //     flex: 1,
                //     resizeMode: "cover",
                //     // height: 136,
                //     marginTop: 26,
                //     paddingTop: 21,
                //     zIndex: -100
                // },

                // bgTitle: {
                //     color: "white",
                //     textAlign: "center",
                //     fontWeight: "bold",
                //     fontSize: 26,
                //     marginBottom: 50
                // },

                // opportunitiesBlock: {
                //     marginTop: -19,
                //     elevation: 5,
                //     backgroundColor: "white",
                //     borderTopLeftRadius: 15,
                //     borderTopRightRadius: 15,
                //     paddingTop: 40,

                // },

                // circleIcon: {
                //     width: 62,
                //     height: 62,
                //     backgroundColor: "white",
                //     borderRadius: 50,
                //     marginTop: -70,
                //     elevation: 6,
                //     alignItems: "center",
                //     justifyContent: "center"
                // },

                // titleRow: {
                //     flexDirection: "row",
                //     alignItems: "center",
                //     justifyContent: "space-between",
                //     paddingHorizontal: 80
                // },

                // titleGrey: {
                //     color: "#39496d",
                //     fontSize: 13,
                //     fontWeight: "bold"
                // },

                // dots: {
                //     width: 5,
                //     height: 4,
                //     backgroundColor: "#000000",
                //     borderRadius: 50
                // },

                // titleGren: {
                //     color: "#30b8b2",
                //     fontSize: 18
                // },

                // fieldsBlock: {
                //     width: "100%",
                //     marginTop: 30,
                // },

                // fieldRow: {
                //     flexDirection: "row",
                //     justifyContent: "space-between",
                //     alignItems: "center",
                //     paddingVertical: 25,
                //     borderRadius: 5,
                //     paddingHorizontal: 24
                // },

                // fields: {
                //     color: "#172C60",
                //     fontSize: 16,
                //     fontWeight: "bold"
                // },

                // galleryTitleRow: {
                //     flexDirection: "row",
                //     justifyContent: "center",
                //     alignItems: "center",
                //     marginTop: 20,
                //     marginBottom: 10
                // },

                // galleryTitle: {
                //     color: "#172c60",
                //     fontSize: 15,
                //     textAlign: "center"
                // },

                // borderLeft: {
                //     borderLeftColor: "#b0bbd9",
                //     height: 110,
                //     left: 270,
                //     position: "absolute",
                //     borderLeftWidth: 1,
                //     transform: [{rotate: '90deg'}],
                // },

                // borderRight: {
                //     borderLeftColor: "#b0bbd9",
                //     height: 110,
                //     right: 270,
                //     position: "absolute",
                //     borderLeftWidth: 1,
                //     transform: [{rotate: '90deg'}],
                // },

                // reviewRow: {
                //     flexDirection: "row",
                //     justifyContent: "center",
                //     alignItems: "center"
                // },

                // starReviews: {
                //     paddingHorizontal: 10
                // },

                // profileTextSmall: {
                //     color: "#a7abba",
                //     fontSize: 12
                // },

                // reviewBtn: {
                //     borderColor: "#268b93",
                //     borderWidth: 2,
                //     borderRadius: 5,
                //     alignItems: "center",
                //     justifyContent: "center",
                //     marginHorizontal: 10,
                //     paddingVertical: 20,
                //     marginTop: 20
                // },

                // reviewBtnText: {
                //     color: "#172c60",
                //     fontSize: 16,
                //     fontWeight: "bold"
                // },

                // reviewBlockRow: {
                //     flexDirection: "row",
                //     justifyContent: "space-between",
                //     paddingHorizontal: 15,
                //     marginTop: 20,
                //     borderBottomColor: "#b0bbd9",
                //     borderBottomWidth: 2,
                //     paddingBottom: 20,
                //     marginHorizontal: 10
                // },

                // reviewSmallBlock: {
                //     flexDirection: "row",
                //     alignItems: "center",
                //     justifyContent: "space-between",
                // },

                // reviewIcon: {
                //     width: 30,
                //     height: 30,
                // },

                // reviewSmallBlockTextGrey: {
                //     color: "#a7abba",
                //     fontSize: 10,
                //     textAlign: "right"
                // },

                // reviewSmallBlockTextGreen: {
                //     color: "#30b8b2",
                //     fontSize: 14,
                //     textAlign: "right"
                // },

                // openStandardBlock: {
                //     marginTop: 20,
                //     width: "100%",
                //     marginBottom: 52
                // },

                // opinionTitle: {
                //     color: "#172c60",
                //     fontSize: 20,
                //     fontWeight: "800",
                //     textAlign: "center"
                // },

                // openStandardLoader: {
                //     height: 5,
                //     marginHorizontal: 10,
                //     backgroundColor: "#e8eaef",
                //     borderRadius: 5,
                //     marginVertical: 10,
                //     transform: [{rotate: '180deg'}]
                // },

                // openStandardLoaderFill: {
                //     height: 6,
                //     backgroundColor: "#30b8b2",
                //     borderRadius: 5,
                // },

                // rangeLine: {
                //     alignItems: "center",
                //     flexDirection: "row",
                //     justifyContent: "center"
                // },

                // range: {
                //     color: "#30b8b2",
                //     fontSize: 18,
                //     fontWeight: "bold"
                // },

                // iconsColumn: {
                //     flexDirection: "row",
                //     alignItems: "center",
                //     justifyContent: "center",
                // },

                // dateRow: {
                //     paddingTop: 20,
                //     flexDirection: "row",
                //     alignItems: "center",
                //     justifyContent: "center",
                //     borderBottomColor: "#b0bbd9",
                //     borderBottomWidth: 1,
                //     paddingBottom: 20,
                //     marginHorizontal: 10
                // },

                // dateText: {
                //     color: "#172c60",
                //     fontSize: 15,
                //     fontWeight: "bold"
                // },

                // iconsCircle: {
                //     width: 45,
                //     height: 45,
                //     borderRadius: 50,
                //     alignItems: "center",
                //     justifyContent: "center",
                //     marginTop: 13,
                //     elevation: 5,
                //     backgroundColor: "white"

                // },

                // like: {
                //     width: 23,
                //     height: 21
                // },

                // sendBtn: {
                //     backgroundColor: "#30b8b2",
                //     alignItems: "center",
                //     paddingVertical: 20,
                //     marginHorizontal: 10,
                //     borderRadius: 5,
                //     marginVertical: 20
                // },

                // sendBtnText: {
                //     color: "white",
                //     fontWeight: "bold",
                //     fontSize: 16
                // },

                // placeHolder_styles: {
                //     fontWeight: '500',
                //     color: 'white',
                //     fontSize: 13,
                // },

                // input: {
                //     borderColor: "#f1f2f4",
                //     borderWidth: 2,
                //     marginHorizontal: 10,
                //     paddingVertical: 10,
                //     paddingRight: 10,
                //     textAlign: "right",
                //     borderRadius: 5,
                //     marginTop: 20

                // },


                // errorMessage: {
                //     alignItems: "center",
                //     marginTop: 20,

                // },

                // errorMessageText: {
                //     fontSize: 17,
                //     textAlign: "center",
                //     color: "red",
                // }