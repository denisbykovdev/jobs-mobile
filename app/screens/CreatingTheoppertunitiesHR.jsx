import {
    Image,
    StyleSheet,
    Text,
    View
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CommonFrame from "../commons/CommonFrame";
import CommonButton from "../commons/CommonButton";
import { responsiveWidth } from "../utils/layout";
import colors from '../utils/colors'
import { api, url } from "../utils/api";
import authHeader from "../utils/authHeader";
import fonts from "../utils/fonts";
import weights from "../utils/weights";
import FormContainer from "../commons/FormContainer";
import FormField from "../commons/FormField";
import FormSelect from "../commons/FormSelect";
import FormImagePicker from "../commons/FormImagePicker";
import FormButton from "../commons/FormButton";
import { watchCreateOpportunity, watchCreateOpportunityMidrasha } from "../actions/opportunitiesActions";
import { watchGetCityByArea, watchGetSubcategory, watchGetSubcategoryByCategory } from "../actions/categoriesActions";

const CreatingTheOppertunitiesHR = () => {
    const navigation = useNavigation()

    const dispatch = useDispatch()

    const [isMidrashot, setMidrashot] = useState(false)

    const [data, setData] = useState(null)

    const [org, setOrg] = useState(null)

    const [orgLogo, setOrgLogo] = useState('')

    const tokenSelector = useSelector(state => state.auth.token)

    const userSelector = useSelector(state => state.auth?.user)

    const subCategoriesSelector = useSelector(state => state.categories?.subcategoryByCategory)

    const citySelector = useSelector(state => state.categories?.cityByArea)

    const opportunityCreateMessageSelector = useSelector(state => state.opportunities?.opportunityCreateMessage)
    const opportunityCreateMidrashaMessageSelector = useSelector(state => state.opportunities?.opportunityCreateMidrashaMessage)

    useEffect(() => {
        if (isMidrashot === false) {
            (
                async () => {
                    const result = await axios.get(
                        `${api}/opportunity/2/open/getData`,
                        authHeader(
                            tokenSelector
                        )
                    )
                    // console.log(
                    //     `--- CreatingTheOppertunitiesHR/test:`,
                    //     result.data
                    // )

                    setData(result.data)
                }
            )()
        } else if (isMidrashot === true) {
            (
                async () => {
                    const result = await axios.get(
                        `${api}/opportunity/1/open/getData`,
                        authHeader(
                            tokenSelector
                        )
                    )

                    setData(result.data)
                }
            )()
        }
    }, [isMidrashot])

    useEffect(() => {
        if(
            opportunityCreateMessageSelector !== null 
            || opportunityCreateMidrashaMessageSelector !== null 
        ) navigation.navigate('SuccessfulCreatedOportunity')
    }, [
        opportunityCreateMidrashaMessageSelector,
        opportunityCreateMessageSelector
    ])

    const interSepterOrg = (name, e) => {
        setOrg(e)
    }

    const interSepterArea = (name, e) => {
        const area = data.areas.find(item => item.name === e)

        dispatch(
            watchGetCityByArea(
                tokenSelector,
                area.id
            )
        )
    }

    const interSepterCat = (name, e) => {
        const category = data.categories.find(item => item.name === e)
        
        // dispatch(
        //     watchGetSubcategory(
        //         tokenSelector,
        //         category.id
        //     )
        // )
        dispatch(
            watchGetSubcategoryByCategory(
                tokenSelector,
                category.id
            )
        )
    }

    useEffect(() => {
        if (org !== null) {
            const neededOrg = data.organizations.find(element => element.name === org)

            setOrgLogo(neededOrg.logo)
        }
    }, [org])

    const submitMidrasha = (values) => {
        console.log(
            `--- submitMidrasha/values:`, values
        )

        const area = data.areas.find(item => item.name === values.area_id)

        const city = citySelector.find(city => city.name === values.city_id)

        const placeKey = Object.keys(data.places).find(key => data.places[key] === values.place);

        dispatch(
            watchCreateOpportunityMidrasha(
                tokenSelector,
                values.title,
                area.id,
                city.id,
                values.address,
                values.program,
                // values.place,
                // 'home',
                placeKey,
                values.routes,
                values.target_audience,
                values.count,
                values.description,
                values.images,
                values.video_url,
                values.other_hr_name,
                values.other_hr_phone
            )
        )
    }

    const submitJob = (values) => {
        const category = data.categories.find(item => item.name === values.category_id)

        const subCategory = subCategoriesSelector.find(item => item.name === values.subcategory_id)

        const organization = data.organizations.find(item => item.name === values.organization_id)

        const route = data.routes.find(item => item.name === values.route_id)

        const area = data.areas.find(item => item.name === values.area_id)

        const city = citySelector.find(city => city.name === values.city_id)

        const placeKey = Object.keys(data.places).find(key => data.places[key] === values.place);

        console.log(
            `--- submitJob/values:`,
                category,
                subCategory,
                organization,
                route,
                area,
                city
        )

        dispatch(
            watchCreateOpportunity(
                tokenSelector,
                values.title,
                category.id,
                subCategory.id,
                organization.id,
                route.id,
                values.job_for,
                values.description,
                area.id,
                city.id,
                values.address,
                // values.place,
                placeKey,
                values.nucleus,
                Number(values.count),
                values.how_to_sort,
                values.images,
                values.video_url,
                `${values.day}.${values.month}.${values.year}`,
                values.other_hr_name,
                values.other_hr_phone
            )
        )
    }

    return (
        <CommonFrame>
            <Header hr />
            <View style={{ marginBottom: responsiveWidth(40) }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: responsiveWidth(12)
                    }}
                >
                    <CommonButton
                        title="יצירת תקן"
                        onPress={() => setMidrashot(false)}
                        buttonWidth={'45%'}
                        buttonHeight={responsiveWidth(26.5)}
                    />
                    <CommonButton
                        title="יצירת מדרשה"
                        onPress={() => setMidrashot(true)}
                        buttonWidth={'45%'}
                        buttonHeight={responsiveWidth(26.5)}
                    />
                </View>

                <LinearGradient
                    colors={[
                        colors.tealishFour,
                        colors.tealishThree
                    ]}
                    style={{
                        height: responsiveWidth(37.5),
                        paddingBottom: responsiveWidth(10)
                    }}
                />
                <View
                    style={[
                        {
                            marginTop: - responsiveWidth(10),
                            backgroundColor: colors.whiteTwo,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                            paddingTop: responsiveWidth(10)
                        },
                        shadowStyle
                    ]}
                >
                    <View style={styles.titleContainer}>
                        <View style={styles.titleLogo}>
                            <View
                                style={styles.circleLogoContainer}
                            >
                                <Image
                                    style={styles.circleLogo}
                                    source={{
                                        uri: `${url}${orgLogo}`
                                    }}
                                />
                            </View>
                        </View>

                        <Text
                            style={styles.title}
                        >
                            {
                                isMidrashot
                                    ? 'עריכת מדרשה'
                                    : 'עריכת תקן'
                            }
                        </Text>
                    </View>

                    <View style={{ paddingHorizontal: responsiveWidth(12) }}>
                        {
                            !isMidrashot
                                ?
                                <FormContainer
                                    initialValues={{
                                        title: '',
                                        category_id: '',
                                        subcategory_id: '',
                                        organization_id: '',
                                        route_id: '',
                                        job_for: '',
                                        description: '',
                                        area_id: '',
                                        city_id: '',
                                        address: '',
                                        place: '',
                                        nucleus: '',
                                        count: '',
                                        how_to_sort: '',
                                        images: '',
                                        video_url: '',
                                        // last_date_for_registration: '',
                                        day: '',
                                        month: '',
                                        year: '',
                                        other_hr_name: '',
                                        other_hr_phone: '',
                                    }}
                                    onSubmit={submitJob}
                                >
                                    <FormField
                                        name="title"
                                        placeholder="שם התקן"
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="category_id"
                                        placeholder="תחום שירות"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8)
                                        }}
                                        array={
                                            data
                                            && data !== null
                                            && data.categories
                                            && data?.categories.map(category => category.name)
                                        }
                                        interSepter={interSepterCat}
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="subcategory_id"
                                        placeholder="תת תחום שירות"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -1
                                        }}
                                        array={
                                            subCategoriesSelector
                                            && subCategoriesSelector !== null
                                            && subCategoriesSelector.map(sub => sub.name)
                                        }
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="organization_id"
                                        placeholder="עמותה"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -2
                                        }}
                                        array={
                                            data
                                            && data.organizations
                                            && data.organizations.map(item => item.name)
                                        }
                                        interSepter={interSepterOrg}
                                    />
                                    <FormSelect
                                        leftArrow
                                        // multi
                                        name="route_id"
                                        placeholder="מסלול"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -3
                                        }}
                                        array={
                                            data
                                            && data.routes
                                            && data.routes.map(item => item.name)
                                        }
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="job_for"
                                        placeholder="?למי מיועד"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -4
                                        }}
                                        array={data && data.job_for_list && data.job_for_list}
                                    />
                                    <FormField
                                        area
                                        name="description"
                                        placeholder="תיאור התקן"
                                        fieldContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -5
                                        }}
                                        height={responsiveWidth(80)}
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="area_id"
                                        placeholder="אזור בארץ"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -6
                                        }}
                                        array={
                                            data
                                            && data.areas
                                            && data.areas.map(item => item.name)
                                        }
                                        interSepter={interSepterArea}
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="city_id"
                                        placeholder="יישוב"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -7
                                        }}
                                        array={
                                            citySelector
                                            && citySelector !== null
                                            && citySelector.map(city => city.name)
                                        }
                                    />
                                    <FormField
                                        name="address"
                                        placeholder="כתובת"
                                        fieldContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -8
                                        }}
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="place"
                                        placeholder="מגורים"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -9
                                        }}
                                        array={
                                            data
                                            && data.places
                                            && Object.values(data.places)
                                        }
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="nucleus"
                                        placeholder="חלק מגרעין"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -10
                                        }}
                                        array={data && data.nucleus && data.nucleus}
                                    />
                                    <FormField
                                        name="count"
                                        placeholder="מס תקנים בתפקיד"
                                        fieldContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -11
                                        }}
                                        type="numeric"
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="how_to_sort"
                                        placeholder="אופן מיונים"
                                        selectContainerStyle={{
                                            marginVertical: responsiveWidth(8),
                                            zIndex: -12
                                        }}
                                        array={
                                            data
                                            && data.howToSort
                                            && data.howToSort
                                        }
                                    />
                                    <FormImagePicker
                                        name="images"
                                        job
                                    />
                                    <FormField
                                        name="video_url"
                                        placeholder="קישור לסרטון ביוטיוב"
                                        fieldContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -14
                                        }}
                                    />

                                    <View
                                        style={{
                                            alignItems: 'center',
                                            marginVertical: responsiveWidth(12),
                                            zIndex: -15
                                        }}
                                    >
                                        <Text
                                            style={styles.formInnerTitle}
                                        >תאריך אחרון להרשמה</Text>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '100%',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                marginVertical: responsiveWidth(6)
                                            }}
                                        >

                                            <FormField
                                                name="day"
                                                placeholder="30"
                                                width={responsiveWidth(41)}
                                            />

                                            <FormField
                                                name="month"
                                                placeholder="09"
                                                width={responsiveWidth(41)}
                                            />

                                            <FormField
                                                name="year"
                                                placeholder="2020"
                                                width={responsiveWidth(41)}
                                            />
                                        </View>
                                    </View>

                                    <View style={{
                                        alignItems: 'center',
                                        marginBottom: responsiveWidth(12),
                                        zIndex: -15
                                    }}>
                                        <Text
                                            style={styles.formInnerTitle}
                                        >פרטי הרכזת</Text>
                                        <View style={styles.hrDetailField}>
                                            <Text style={styles.hrDetailFieldText}>
                                                {userSelector?.first_name}
                                            </Text>
                                        </View>
                                        <View style={styles.hrDetailField}>
                                            <Text style={styles.hrDetailFieldText}>
                                                {userSelector?.phone}
                                            </Text>
                                        </View>
                                        <View style={styles.hrDetailField}>
                                            <Text style={styles.hrDetailFieldText}>
                                                {userSelector?.email}
                                            </Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            alignItems: 'center',
                                            marginBottom: responsiveWidth(12)
                                        }}
                                    >
                                        <Text
                                            style={styles.formInnerTitle}
                                        >רכזת פנימית של התקן </Text>

                                        <FormField
                                            name="other_hr_name"
                                            placeholder="שם רכזת פנימית"
                                            fieldContainerStyle={{
                                                marginTop: responsiveWidth(8)
                                            }}
                                        />
                                        <FormField
                                            name="other_hr_phone"
                                            placeholder="טלפון רכזת פנימית"
                                            fieldContainerStyle={{
                                                marginTop: responsiveWidth(8)
                                            }}
                                        />
                                    </View>

                                    <FormButton
                                        buttonHeight={responsiveWidth(26.5)}
                                        title="שמירה"
                                        buttonStyle={{
                                            marginBottom: responsiveWidth(12)
                                        }}
                                    />

                                </FormContainer>
                                :
                                <FormContainer
                                    initialValues={{
                                        title: '',
                                        area_id: '',
                                        city_id: '',
                                        address: '',
                                        program: '',
                                        place: '',
                                        routes: '',
                                        target_audience: '',
                                        count: '',
                                        description: '',
                                        images: '',
                                        video_url: '',
                                        other_hr_name: '',
                                        other_hr_phone: ''
                                    }}
                                    onSubmit={submitMidrasha}
                                >
                                    <FormField
                                        name="title"
                                        placeholder="שם המדרשה"
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="area_id"
                                        placeholder="איזור בארץ"
                                        array={
                                            data &&
                                            data.areas &&
                                            data.areas.map(area => area.name)
                                        }
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8)
                                        }}
                                        interSepter={interSepterArea}
                                    />
                                    <FormSelect
                                        leftArrow
                                        name="city_id"
                                        placeholder="ישוב"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -1
                                        }}
                                        array={
                                            citySelector
                                            && citySelector !== null
                                            && citySelector.map(city => city.name)
                                        }
                                    />
                                    <FormField
                                        placeholder="כתובת"
                                        name="address"
                                        fieldContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -2
                                        }}
                                    />
                                    <FormSelect
                                        placeholder="תכנית"
                                        leftArrow
                                        array={data && data.program && data.program}
                                        name="program"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -3
                                        }}
                                    />
                                    <FormSelect
                                        placeholder="מגורים"
                                        leftArrow
                                        array={
                                            data
                                            && data.places
                                            && Object.values(data.places)
                                        }
                                        name="place"
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -4
                                        }}
                                    />
                                    <FormSelect
                                        placeholder="מסלול"
                                        leftArrow
                                        name="routes"
                                        array={data && data.routes && data.routes}
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -5
                                        }}
                                    />
                                    <FormSelect
                                        placeholder="קהל יעד"
                                        leftArrow
                                        name="target_audience"
                                        array={data && data.target_audience && data.target_audience}
                                        selectContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -6
                                        }}
                                    />
                                    <FormField
                                        placeholder="תחומי לימוד עיקריים"
                                        name="count"
                                        fieldContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -7
                                        }}
                                    />
                                    <FormField
                                        area
                                        name="description"
                                        placeholder="תיאור התקן"
                                        fieldContainerStyle={{
                                            marginVertical: responsiveWidth(8),
                                            zIndex: -8
                                        }}
                                        height={responsiveWidth(80)}
                                    />
                                    <FormImagePicker
                                        name="images"
                                        job
                                    />
                                    <FormField
                                        placeholder="קישור לסרטון ביוטיוב"
                                        name="video_url"
                                        fieldContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -9
                                        }}
                                    />
                                    <FormField
                                        placeholder="שם איש קשר"
                                        name="other_hr_name"
                                        fieldContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -10
                                        }}
                                    />
                                    <FormField
                                        placeholder="טלפון ליצירת קשר"
                                        name="other_hr_phone"
                                        fieldContainerStyle={{
                                            marginTop: responsiveWidth(8),
                                            zIndex: -11
                                        }}
                                    />
                                    <FormButton
                                        buttonHeight={responsiveWidth(26.5)}
                                        title="פרסום מדרשה"
                                        buttonStyle={{
                                            marginVertical: responsiveWidth(12)
                                        }}
                                    />
                                </FormContainer>
                        }
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
    title: {
        fontSize: fonts.small,
        fontWeight: weights.bold,
        color: colors.darkSlateBlue,
        marginBottom: responsiveWidth(8)
    },
    formInnerTitle: {
        fontSize: fonts.xsmall,
        fontWeight: weights.regular,
        color: colors.darkGreyBlue
    },
    hrDetailField: {
        marginTop: responsiveWidth(8),
        width: '100%',
        height: responsiveWidth(20),
        backgroundColor: colors.whiteThree,
        paddingHorizontal: responsiveWidth(10),
        borderRadius: responsiveWidth(2.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    hrDetailFieldText: {
        fontSize: fonts.xsmall,
        color: colors.darkSlateBlue50
    }
})

export default CreatingTheOppertunitiesHR