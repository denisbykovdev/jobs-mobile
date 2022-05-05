import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView,
    TextInput
} from "react-native";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { icons, images } from "../configs/imagesAndIconsUrl";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { getSearchJobsSuccess, watchGetFilteredJobs } from '../actions/jobsActions';
import CommonFrame from "../commons/CommonFrame";
import layout, { responsiveHeight, responsiveWidth } from "../utils/layout";
import FormContainer from "../commons/FormContainer";
import FormSelect from "../commons/FormSelect";
import FormField from "../commons/FormField";
import FormButton from "../commons/FormButton";
import SearchIconInField from "../icons/SearchIconInField";
import IconSearch from "../icons/IconSearch";
import IconLineWrapper from "../commons/IconLineWrapper";
import fonts from '../utils/fonts'
import colors from '../utils/colors'
import weights from "../utils/weights";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "react-native-unimodules";
import SearchFormSelect from "../commons/SearchFormSelect";
import Calendar from "../icons/Calendar";
import Gear from "../icons/Gear";
import Domain from "../icons/Domain";
import Area from "../icons/Area";
import Flags from "../icons/Flags";
import Notebook from "../icons/Notebook";
import TargetPeople from "../icons/TargetPeople";
import House from "../icons/House";
import SearchFormRadioButton from "../commons/SearchFormRadioButton";
import SearchFormRadioSelect from "../commons/SearchFormRadioSelect";
import authHeader from "../utils/authHeader";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BigSadiconSearch from "../icons/BigSadiconSearch";
import { watchGetSubcategory, watchGetSubcategoryByCategory } from "../actions/categoriesActions";

const SearchResult = () => {

    const dispatch = useDispatch()

    const navigation = useNavigation()

    const tokenSelector = useSelector(state => state.auth?.token)

    const isMidrashotSelector = useSelector(state => state.auth?.user?.is_midrashot)

    const quizSelector = useSelector(state => state.auth.user?.quiz)

    const filteredJobsSelector = useSelector(state => state.jobs.filteredJobs)

    const searchJobsSelector = useSelector(state => state.jobs.searchJobs)

    const subCategoriesSelector = useSelector(state => state.categories?.subcategoryByCategory)

    const interSepterCat = (name, e) => {
        const category = filteredJobsSelector.categories.find(item => item.name === e)
        
        dispatch(
            watchGetSubcategoryByCategory(
                tokenSelector,
                category.id
            )
        )
    }

    const submitSearch = async (values) => {
        const searchUrl = `https://api.sherutbekalut.co.il/api/jobs/0/date?search=${values.searchString ? values.searchString : ''}`

        // navigation.navigate("SearchResult")

        console.log(
            `--- SearchWithFilter/submit/values:`, 
            values,
            searchJobsSelector
        )

        try {
            const result = await axios.post(
                searchUrl,
                {
                    years: values.years ? values.years : '',
                    categories: values.categories.length > 0 ? [values.categories] : '',
                    subcategories: values.subcategories.length > 0 ? values.subcategories : '',
                    areas: values.areas ? values.areas : '',
                    organizations: values.organizations.length > 0 ? values.organizations : '',
                    nucleus: values.nucleus ? values.nucleus : 'לא',

                    type: values.type ? values.type : '',
                    program: values.program ? values.program : '',
                    audience: values.audience ? values.audience : '',
                    places: values.places ? values.places : '',
                },
                authHeader(
                    tokenSelector
                )
            )
            if (result) {
                console.log("--- SearchWithFilter/submitSearch/result:", result.data.data)
                // getJobsSuccess(result)
                dispatch(getSearchJobsSuccess(result.data.data))

                isMidrashotSelector && quizSelector.length > 0
                    &&
                    setOpenModal(true)
                    
            }
        } catch (error) {
            console.log("--- SearchWithFilter/submitSearch/error:", error)
        }
    }

    useEffect(() => {
        dispatch(watchGetFilteredJobs(tokenSelector))
    }, [])

    useEffect(
        () => {
            searchJobsSelector !== null && searchJobsSelector.length > 0 && navigation.navigate("SearchResult")
        }, 
        [searchJobsSelector]
    )

    return (
        <CommonFrame
            commonFrameStyle={{
                paddingHorizontal: 0,
                paddingVertical: 0,
                paddingTop: 0,
                height: '100%'
            }}
        >
            <View style={styles.mainContainer}>
                <FormContainer
                    initialValues={{
                        searchString: '',

                        years: '',
                        categories: '',
                        subcategories: '',
                        organizations: '',
                        areas: '',
                        nucleus: '',
                        job_for: '',

                        // years: '',
                        type: '',
                        program: '',
                        audience: '',
                        // areas: '',
                        places: '',
                    }}
                    onSubmit={submitSearch}
                >
                    {
                        searchJobsSelector === null 
                        || searchJobsSelector.length < 1
                        ?
                        <View
                        // TODO: Changing options for responsive page.
                        //  style={ {  marginBottom: responsiveWidth(32)}}
                            >
                            <View style={{
                                alignSelf: 'center',
                                // flex: 1,  // TODO: Changing options for responsive page.
                                width: layout.width,
                                paddingHorizontal: responsiveWidth(17.5),
                                // TODO: Changing options for responsive page.
                                // paddingTop: responsiveWidth(20)
                                paddingTop: responsiveWidth(7)
                            }}>
                                <Header/>
                            </View>
                            
                            <View 
                                style={{
                                    alignItems: "center"
                                }}
                            >
                                <Image 
                                    source={icons.fon} 
                                    style={{
                                        width: "100%",
                                        height: responsiveWidth(170),
                                        position: 'relative',
                                        marginTop: layout.height > 650 ? responsiveHeight(-8) : responsiveHeight(-11),
                                    }}
                                />
                                <View 
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: responsiveWidth(116),
                                        height: responsiveWidth(116),
                                        borderRadius: responsiveWidth(100),
                                        // TODO: Changing options for responsive page.
                                        // marginTop: 120,
                                        marginTop: layout.height > 650 ? 120 : responsiveWidth(45),
                                        backgroundColor: colors.darkSlateBlueTwo,
                                        zIndex: 3,
                                        position: 'absolute'
                                }}>
                                    <Image 
                                        source={icons.lineTop} 
                                        style={{
                                            position: 'absolute',
                                            zIndex: 4,
                                            width: responsiveWidth(29.5),
                                            height: responsiveWidth(36.5),
                                            left: responsiveWidth(90),
                                            bottom: responsiveWidth(77.5)
                                        }}
                                    />
                                    <BigSadiconSearch />
                                </View>

                            <View style={{
                                alignItems: "center",
                                width: '100%'
                            }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: "row",
                                    // TODO: Changing options for responsive page.
                                    // paddingVertical: responsiveWidth(12) 
                                    paddingVertical: layout.height > 650 ?  responsiveWidth(12) : responsiveWidth(3),
                                    paddingHorizontal: responsiveWidth(17.5),
                                    alignItems: 'center',
                                    justifyContent: "center"
                                }}>
                                    <Image 
                                        source={icons.testUp} 
                                        style={{
                                            width: responsiveWidth(53),
                                            height: responsiveWidth(42.5),
                                            position: 'absolute',
                                            left: responsiveWidth(17.5),
                                            // TODO: Changing options for responsive page.
                                            // top:  responsiveWidth(12)
                                            top: layout.height > 650 ?  responsiveWidth(12) :  responsiveWidth(6)
                                        }}
                                    />
                                  
                                    <IconLineWrapper>
                                        <IconSearch />
                                    </IconLineWrapper> 

                                    <Image 
                                        source={icons.testUpRight} 
                                        style={{
                                            width: responsiveWidth(53),
                                            height: responsiveWidth(42.5),
                                            position: 'absolute',
                                            // TODO: Changing options for responsive page.
                                            // top: responsiveWidth(12),
                                            top: layout.height > 650 ?  responsiveWidth(12) :  responsiveWidth(6),
                                            right: responsiveWidth(17.5),
                                        }}
                                    />
                                </View>

                                <Text 
                                    style={{
                                        // TODO: Changing options for responsive page.
                                        // marginBottom: responsiveWidth(12),
                                        marginBottom: layout.height > 650 ?  responsiveWidth(12) : 0,
                                        marginTop: layout.height > 650 ? responsiveHeight(-7) : responsiveHeight(-13),
                                        color: colors.darkGreyBlue,
                                        fontSize: fonts.xlarge,
                                        fontWeight: weights.bold,
                                        marginHorizontal: responsiveWidth(50),
                                        textAlign: 'center'
                                    }}
                                >לא נמצאו תוצאות
לחיפוש שלך</Text>
                                <Text 
                                    style={{
                                        // TODO: Changing options for responsive page.
                                        // marginBottom: responsiveWidth(12),
                                        marginBottom: layout.height > 650 ?  responsiveWidth(8) : responsiveHeight(2),
                                        color: colors.darkGreyBlue,
                                        fontSize: fonts.xxsmall,
                                        fontWeight: weights.thin
                                    }}
                                >אפשר לנסות שוב באמצעות עמוד הסינון החכם שלנו</Text>
                            </View>
                            </View>
                    
                            <LinearGradient 
                                colors={[
                                    colors.tealishFour,
                                    colors.tealishThree
                                ]} 
                                style={{
                                    // TODO: Changing options for responsive page.
                                    // height: responsiveWidth(49),
                                    height: layout.height > 650 ? responsiveWidth(49) : responsiveWidth(34),
                                    paddingHorizontal: responsiveWidth(17.5),
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                    // paddingVertical: responsiveWidth(12)
                                }}
                            >
                                <FormField
                                    name="searchString"
                                    placeholder="מה לחפש לך?"
                                    fieldContainerStyle={{
                                        // marginVertical: responsiveWidth(12)
                                    }}
                                    fieldStyle={{
                                        flexDirection: 'row-reverse'
                                    }}
                                >
                                    <SearchIconInField />
                                </FormField>

                            </LinearGradient>
                 
                        </View>
                        :
                        <ImageBackground
                            source={images.myProfileBg}
                            style={[
                                styles.backgroundImage,
                                {
                                    height: responsiveWidth(200) + Constants.statusBarHeight
                                }
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
                                >
                                    <SearchIconInField />
                                </FormField>
                            
                            </View>
                        </ImageBackground>
                    }
                    {/* Code was always displayed, which is wrong by design.  */}
                    {( searchJobsSelector !== null 
                        && searchJobsSelector.length > 0)
                         && 
                    <View 
                        style={[
                            styles.filters,
                            {
                                marginTop: - Constants.statusBarHeight + responsiveWidth(6)
                            }
                        ]}
                    >
                        {
                            !isMidrashotSelector
                                ?
                                <>
                                    <SearchFormSelect
                                        multi
                                        name="years"
                                        placeholder="לאיזו שנה?"
                                        array={
                                            filteredJobsSelector
                                            && filteredJobsSelector?.years
                                                .map(
                                                    element => element?.name
                                                )
                                        }
                                        selectContainerStyle={{
                                            zIndex: 0
                                        }}
                                    >
                                        <Calendar />
                                    </SearchFormSelect>
                                    <SearchFormSelect
                                        // multi
                                        name="categories"
                                        placeholder="תחום"
                                        array={
                                            filteredJobsSelector
                                            && filteredJobsSelector?.categories
                                                .map(
                                                    element => element?.name
                                                )
                                        }
                                        selectContainerStyle={[
                                            {
                                                zIndex: -1,
                                                marginTop: responsiveWidth(12)
                                            }
                                        ]}
                                        interSepter={interSepterCat}
                                    >
                                        <Gear />
                                    </SearchFormSelect>
                                    <SearchFormSelect
                                        multi
                                        name="subcategories"
                                        placeholder="תת תחום"
                                        array={
                                            subCategoriesSelector
                                            && subCategoriesSelector !== null
                                            && subCategoriesSelector.map(sub => sub.name)
                                        }
                                        selectContainerStyle={{
                                            zIndex: -2,
                                            marginTop: responsiveWidth(12)
                                        }}
                                    >
                                        <Domain />
                                    </SearchFormSelect>
                                    <SearchFormSelect
                                        multi
                                        name="areas"
                                        placeholder="אזור בארץ"
                                        array={
                                            filteredJobsSelector
                                            && filteredJobsSelector?.areas
                                                .map(
                                                    element => element?.name
                                                )
                                        }
                                        selectContainerStyle={{
                                            zIndex: -3,
                                            marginTop: responsiveWidth(12)
                                        }}
                                    >
                                        <Area />
                                    </SearchFormSelect>
                                    <SearchFormSelect
                                        multi
                                        name="organizations"
                                        placeholder="עמותה"
                                        array={
                                            filteredJobsSelector
                                            && filteredJobsSelector?.organizations
                                                .map(
                                                    element => element?.name
                                                )
                                        }
                                        selectContainerStyle={{
                                            zIndex: -4,
                                            marginTop: responsiveWidth(12)
                                        }}
                                    >
                                        <Flags />
                                    </SearchFormSelect>
                                    <SearchFormRadioButton  
                                        name="nucleus" 
                                        array={
                                            filteredJobsSelector
                                            && filteredJobsSelector?.nucleus
                                        }
                                        title="גרעין"
                                    />
                                    <SearchFormRadioSelect
                                        name="places"
                                        array={
                                            filteredJobsSelector
                                            && filteredJobsSelector?.places
                                                .filter(
                                                    (element, i) => i <= 1
                                                ).map(atom => atom?.name)
                                        }
                                    />
                                </>
                                :
                                <>
                                    <SearchFormSelect
                                        name="years"
                                        placeholder="לאיזו שנה?"
                                        array={
                                            filteredJobsSelector
                                            && filteredJobsSelector?.years
                                                .map(
                                                    element => element?.name
                                                )
                                        }
                                        selectContainerStyle={{
                                            zIndex: 0
                                        }}
                                    >
                                        <Calendar />
                                    </SearchFormSelect>
                                    <SearchFormSelect
                                        name="type"
                                        placeholder="מסלול"
                                        array={[]}
                                        selectContainerStyle={[
                                            {
                                                zIndex: -1,
                                                marginTop: responsiveWidth(12)
                                            }
                                        ]}
                                    >
                                        <Gear />
                                    </SearchFormSelect>
                                    <SearchFormSelect
                                        name="program"
                                        placeholder="תכנית"
                                        array={[]}
                                        selectContainerStyle={[
                                            {
                                                zIndex: -2,
                                                marginTop: responsiveWidth(12)
                                            }
                                        ]}
                                    >
                                        <Notebook />
                                    </SearchFormSelect>
                                    <SearchFormSelect
                                        name="job_for"
                                        placeholder="למי מתאים?"
                                        array={
                                            filteredJobsSelector
                                            && filteredJobsSelector?.job_for
                                        }
                                        selectContainerStyle={[
                                            {
                                                zIndex: -3,
                                                marginTop: responsiveWidth(12)
                                            }
                                        ]}
                                    >
                                        <TargetPeople />
                                    </SearchFormSelect>
                                    <SearchFormSelect
                                        name="areas"
                                        placeholder="אזור בארץ"
                                        array={
                                            filteredJobsSelector
                                            && filteredJobsSelector?.areas
                                                .map(
                                                    element => element?.name
                                                )
                                        }
                                        selectContainerStyle={[
                                            {
                                                zIndex: -4,
                                                marginTop: responsiveWidth(12)
                                            }
                                        ]}
                                    >
                                        <Area />
                                    </SearchFormSelect>
                                    <SearchFormSelect
                                        name="places"
                                        placeholder="מגורים"
                                        // array={
                                        //     filteredJobsSelector
                                        //     && filteredJobsSelector?.places
                                        //         .map(
                                        //             element => element?.name
                                        //         )
                                        // }
                                        array={[]}
                                        selectContainerStyle={[
                                            {
                                                zIndex: -5,
                                                marginTop: responsiveWidth(12)
                                            }
                                        ]}
                                    >
                                        <House />
                                    </SearchFormSelect>
                                </>
                        }
                        <FormButton
                            title="!קדימה, למצוא מדרשה בקלות"
                            buttonHeight={responsiveWidth(26.5)}
                            buttonStyle={{
                                marginVertical: responsiveWidth(12),
                                zIndex: -6
                            }}
                        />

                    </View>
                    }
                </FormContainer>
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

   