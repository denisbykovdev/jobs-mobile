import {
    Image,
    Text,
    StyleSheet,
    View,
    ImageBackground
} from "react-native";
import { icons, images } from "../configs/imagesAndIconsUrl";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Stars from 'react-native-stars';
import CommonFrame from "../commons/CommonFrame";
import { useDispatch, useSelector } from "react-redux";
import { watchGetReviewsData, watchStoreReview } from "../actions/reviewsActions";
import colors from "../utils/colors";
import { responsiveWidth } from "../utils/layout";
import weights from "../utils/weights";
import fonts from "../utils/fonts";
import { url } from "../utils/api";
import FormContainer from "../commons/FormContainer";
import FormField from "../commons/FormField";
import FormSelect from "../commons/FormSelect";
import StarEmpty from "../icons/StarEmpty";
import StarFull from "../icons/StarFull";
import FormImagePicker from "../commons/FormImagePicker";
import FormButton from "../commons/FormButton";
import { useNavigation } from "@react-navigation/native";

const NewReview = () => { 
    const [starsCount, setStarsCount] = useState(0)

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const tokenSelector = useSelector(state => state.auth.token)

    const jobSelector = useSelector(state => state.jobs.job !== null && state.jobs?.job)

    const reviewsDataSelector = useSelector(state => state.reviews.reviewsData)

    useEffect(() => {
        dispatch(
            watchGetReviewsData(
                tokenSelector,
                jobSelector.id
            )
        )
    }, [])

    const submitNewReview = (values) => {
        // dispatch(
        //     watchStoreReview(
        //         jobSelector.id,
        //         tokenSelector,
        //         values.first_name,
        //         values.last_name,
        //         values.phone,
        //         values.show_info,
        //         values.description,
        //         starsCount,
        //         values.date,
        //         values.duration,
        //         values.avatar
        //     )
        // )

        navigation.navigate(
            'PageForApproveReview',
            {
                job_id: jobSelector.id,
                token: tokenSelector,
                first_name: values.first_name,
                last_name: values.last_name,
                phone: values.phone,
                show_info: values.show_info,
                description: values.description,
                stars: starsCount,
                date: values.date,
                duration: values.duration,
                avatar: values.avatar
            }
        )
    }

    return (
        <CommonFrame>
            <Header />
            <View style={styles.jobsOpportunityContainer}>
                <ImageBackground
                    source={images.tellMore}
                    style={styles.headerContainer}
                >
                    <Text
                        style={styles.headerContainerTitle}
                    >
                        {jobSelector?.title}
                    </Text>
                    <Text
                        style={styles.headerContainerSubTitle}
                    >
                        {jobSelector?.organization_name}
                    </Text>
                </ImageBackground>
                <View style={[styles.mainContainer, shadowStyle]}>
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
                    <View style={styles.reviewForm}>
                        <Text style={styles.reviewFormTitle}>נשמח לקבל את הביקורת שלך</Text>

                        <FormContainer
                            initialValues={{
                                first_name: '',
                                last_name: '',
                                phone: '',
                                show_info: '',
                                description: '',
                                date: '',
                                duration: '',
                                avatar: ''
                            }}
                            onSubmit={submitNewReview}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: '100%',
                                    justifyContent: "space-between",
                                    marginBottom: responsiveWidth(8)
                                }}
                            >
                                <FormField
                                    name="last_name"
                                    placeholder="שם משפחה*"
                                    width={responsiveWidth(66.5)}
                                />
                                <FormField
                                    name="first_name"
                                    placeholder="שם*"
                                    width={responsiveWidth(66.5)}
                                />
                            </View>

                            <FormField
                                name="phone"
                                placeholder="נייד*"
                                fieldContainerStyle={{
                                    marginBottom: responsiveWidth(8)
                                }}
                            />

                            <FormSelect
                                placeholder="פרסום חוות הדעת עם הפרטים שלי"
                                name="show_info"
                                array={
                                    reviewsDataSelector &&
                                    reviewsDataSelector !== null &&
                                    reviewsDataSelector.show_info &&
                                    [ 
                                        reviewsDataSelector.show_info[0],
                                        reviewsDataSelector.show_info[1]
                                    ]
                                }
                                leftArrow
                                selectContainerStyle={{
                                    marginBottom: responsiveWidth(8)
                                }}
                            />

                            <FormField
                                area
                                placeholder=":נשמח לשמוע כל מה שנראה לך חשוב. לדוגמא
                                ?מה עשית ביומיום ואיך היה
                                ?איך הרגשת עם צוות הארגון
                                ?מה קיבלת מהשירות
                                ?מה רמת הקושי של השירות בתקן"
                                name="description"
                                height={responsiveWidth(66.5)}
                                fieldContainerStyle={{
                                    marginBottom: responsiveWidth(4),
                                    zIndex: -1
                                }}
                            />

                            <Text
                                style={{
                                    fontSize: fonts.xxxsmall,
                                    color: colors.darkSlateBlue50,
                                    textAlign: "left",
                                }}
                            >שנותרו 70 תווים</Text>

                            <View
                                style={{
                                    alignItems: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        marginVertical: responsiveWidth(8),
                                        fontSize: fonts.small,
                                        color: colors.darkSlateBlue
                                    }}
                                >ואיך אפשר לסכם את זה בכוכבים?</Text>
                                <View
                                    style={{
                                        width: '100%',
                                        marginBottom: responsiveWidth(8),
                                        transform: [{ scaleX: -1 }]
                                    }}
                                >
                                    <Stars 
                                        half={false}
                                        count={5}
                                        update={
                                            (val) => { setStarsCount (val)}
                                        }
                                        spacing={responsiveWidth(16.5)}
                                        fullStar={<StarFull />}
                                        emptyStar={<StarEmpty />}

                                    />
                                </View>
                                <View
                                    style={{
                                        width: '100%',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: responsiveWidth(18)
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: fonts.xsmall,
                                            color: colors.darkSlateBlue50
                                        }}
                                    >מעולה</Text>
                                    <Text
                                        style={{
                                            fontSize: fonts.xsmall,
                                            color: colors.darkSlateBlue50
                                        }}
                                    >גרועה</Text>
                                </View>
                            </View>

                            <Text
                                style={{
                                    marginVertical: responsiveWidth(8),
                                    fontSize: fonts.small,
                                    color: colors.darkSlateBlue,
                                    alignSelf: "center"
                                }}
                            >מתי היית שם?</Text>

                            <FormSelect
                                name="date"
                                placeholder='שנת תש"פ'
                                array={
                                    reviewsDataSelector
                                    && reviewsDataSelector !== null
                                    && reviewsDataSelector.dates.map(element => element.toString())
                                }
                                selectContainerStyle={{
                                    marginBottom: responsiveWidth(8)
                                }}
                                leftArrow
                            />
                            <FormSelect
                                name="duration"
                                placeholder="שנה אחת"
                                array={
                                    [
                                        '1',
                                        '2'
                                    ]
                                }
                                selectContainerStyle={{
                                    marginBottom: responsiveWidth(8),
                                    zIndex: -1
                                }}
                                leftArrow
                            />

                            <Text
                                style={{
                                    marginVertical: responsiveWidth(12),
                                    fontSize: fonts.xsmall,
                                    color: colors.darkSlateBlue,
                                    alignSelf: "center",
                                    zIndex: -2
                                }}
                            >אם יש לך תמונות טובות מהשירות - נשמח
להציג אותן למי שיקרא את חוות הדעת שלך</Text>

                            <FormImagePicker 
                                job 
                                name="avatar"
                            />

                            <FormButton
                                title="שליחת חוות דעת לצוות האתר"
                                buttonHeight={responsiveWidth(26.5)}
                                buttonStyle={{
                                    marginVertical: responsiveWidth(12),
                                    zIndex: -2
                                }}
                            />
                            
                        </FormContainer>
                    </View>
                </View>
            </View>
        </CommonFrame>
    )
}

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
        resizeMode: "cover",
        // height: responsiveWidth(88),
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: responsiveWidth(36),
        paddingTop: responsiveWidth(12)
    },
    headerContainerTitle: {
        color: colors.whiteTwo,
        textAlign: "center",
        fontWeight: weights.bold,
        fontSize: fonts.large,
        marginBottom: responsiveWidth(2.5)
    },
    headerContainerSubTitle: {
        color: colors.whiteTwo,
        textAlign: "center",
        fontWeight: weights.thin,
        fontSize: fonts.xsmall,
        marginBottom: responsiveWidth(2.5)
    },
    mainContainer: {
        marginTop: - responsiveWidth(20),
        backgroundColor: colors.whiteTwo,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center',
        paddingTop: responsiveWidth(20)
    },
    titleLogo: {
        position: 'absolute',
        zIndex: 1,
        top: - responsiveWidth(15)
    },
    circleLogoContainer: {
        width: responsiveWidth(31),
        height: responsiveWidth(31),
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
        width: responsiveWidth(22.5),
        height: responsiveWidth(22.5)
    },
    reviewForm: {
        marginTop: - responsiveWidth(10),
        backgroundColor: colors.whiteTwo,
        // height: '100%',
        width: '100%',
        paddingHorizontal: responsiveWidth(12)
    },
    reviewFormTitle: {
        marginVertical: responsiveWidth(12),
        fontSize: fonts.xsmall,
        color: colors.darkSlateBlue,
        fontWeight: weights.bold,
        textAlign: 'center'
    }
});

export default NewReview
