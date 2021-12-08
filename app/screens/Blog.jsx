import { Image, Text, View } from "react-native";
import { icons } from "../configs/imagesAndIconsUrl";
import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import BlogItems from "../components/BlogItems";
import { useDispatch, useSelector } from 'react-redux';
import { watchGetBlogs } from '../actions/blogsActions';
import useSecure from "../hooks/useSecure";
import CommonFrame from "../commons/CommonFrame";
import AvoidingView from "../commons/AvoidingView";
import FormContainer from "../commons/FormContainer";
import FormField from "../commons/FormField";
import FormSelect from "../commons/FormSelect";
import { responsiveWidth } from "../utils/layout";
import { watchGetMainCategories } from "../actions/categoriesActions";
import SearchIconInField from "../icons/SearchIconInField";
import useStatusBar from "../hooks/useStatusBar";
import colors from '../utils/colors'

const Blog = () => {
    useStatusBar('dark-content', colors.white)

    const blogsSelector = useSelector(state => state.blogs.blogs)

    const mainCategoriesSelector = useSelector((state) => state.categories.mainCategories)

    const mainArray = mainCategoriesSelector !== null && mainCategoriesSelector.map(category => category.name)

    const { secure: secureToken } = useSecure(`token`)

    const dispatch = useDispatch()

    const submitSearch = (values) => {
        console.log(
            `--- Blog/submit/values:`,
            mainCategoriesSelector.find(category => category.name === values.categoryName && category.id)?.id,
            values.searchString
        )
        dispatch(
            watchGetBlogs(
                secureToken,
                mainCategoriesSelector.find(category => category.name === values.categoryName && category.id)?.id,
                values.searchString
            )
        )
    }

    useEffect(() => {
        secureToken !== null && dispatch(
            watchGetBlogs(
                secureToken
            )
        );
        secureToken !== null && dispatch(
            watchGetMainCategories(
                secureToken
            )
        );
    }, [secureToken])

    return (
        <AvoidingView>
            <CommonFrame
                withArrow
            >
                <Header />
                <View
                    style={{ alignItems: "center" }}
                >
                    <Image
                        source={icons.testUp}
                        style={{
                            width: 106,
                            height: 86,
                            position: "absolute",
                            left: 0,
                            top: "50%"
                        }} />
                    <Text
                        style={{
                            color: "#172c60",
                            paddingTop: 73,
                            fontSize: 30,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}>הבלוג שלנו</Text>
                    <Image
                        source={icons.testDown}
                        style={{
                            width: 106,
                            height: 86,
                            position: "absolute",
                            right: 0,
                            top: "50%"
                        }}
                    />
                </View>
                <FormContainer
                    initialValues={{
                        categoryName: '',
                        searchString: ''
                    }}
                    onSubmit={submitSearch}
                >
                    <FormField
                        name="searchString"
                        fieldContainerStyle={{
                            marginBottom: responsiveWidth(8),
                            marginTop: responsiveWidth(22)
                        }}
                    >
                        <SearchIconInField />
                    </FormField>

                    <FormSelect
                        leftArrow
                        submitting
                        name="categoryName"
                        array={mainArray}
                        placeholder="?איזה נושא מעניין אותך"
                        selectContainerStyle={{
                            marginBottom: responsiveWidth(16)
                        }}
                    />
                </FormContainer>
                {
                    blogsSelector 
                    && blogsSelector.map((
                        item, 
                        index
                        ) => (
                            <BlogItems
                                key={index}
                                item={item}
                            />

                        )
                    )
                }
            </CommonFrame>
        </AvoidingView>
    )
}

export default Blog
