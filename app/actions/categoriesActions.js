import { GET_AREAS_FAILURE, GET_AREAS_START, GET_AREAS_SUCCESS, GET_CATEGORY_FAILURE, GET_CATEGORY_START, GET_CATEGORY_SUCCESS, GET_CITY_BY_AREA_FAILURE, GET_CITY_BY_AREA_START, GET_CITY_BY_AREA_SUCCESS, GET_DURATION_BY_YEAR_FAILURE, GET_DURATION_BY_YEAR_START, GET_DURATION_BY_YEAR_SUCCESS, GET_MAIN_CATEGORIES_FAILURE, GET_MAIN_CATEGORIES_START, GET_MAIN_CATEGORIES_SUCCESS, GET_SUBCATEGORY_BY_CATEGORY_FAILURE, GET_SUBCATEGORY_BY_CATEGORY_START, GET_SUBCATEGORY_BY_CATEGORY_SUCCESS, GET_SUBCATEGORY_FAILURE, GET_SUBCATEGORY_START, GET_SUBCATEGORY_SUCCESS, WATCH_GET_AREAS, WATCH_GET_CATEGORY, WATCH_GET_CITY_BY_AREA, WATCH_GET_DURATION_BY_YEAR, WATCH_GET_MAIN_CATEGORIES, WATCH_GET_SUBCATEGORY_BY_CATEGORY } from "../types/categoriesTypes";

export const watchGetSubcategoryByCategory = (
    token,
    category_id
) => ({
    type: WATCH_GET_SUBCATEGORY_BY_CATEGORY,
    payload: {
        token,
        category_id
    }
})

export const getSubcategoryByCategoryStart = () => ({
    type: GET_SUBCATEGORY_BY_CATEGORY_START
})

export const getSubcategoryByCategorySuccess = (subcategoryByCategory) => ({
    type: GET_SUBCATEGORY_BY_CATEGORY_SUCCESS,
    payload: {
        subcategoryByCategory
    }
})

export const getSubcategoryByCategoryFailure = (error) => ({
    type: GET_SUBCATEGORY_BY_CATEGORY_FAILURE,
    payload: {
        error
    }
})

export const watchGetDurationByYear = (
    token,
    year
) => ({
    type: WATCH_GET_DURATION_BY_YEAR,
    payload: {
        token,
        year
    }
})

export const getDurationByYearStart = () => ({
    type: GET_DURATION_BY_YEAR_START
})

export const getDurationByYearSuccess = (
    duration
) => ({
    type: GET_DURATION_BY_YEAR_SUCCESS,
    payload: {
        duration
    }
})

export const getDurationByYearFailure = (error) => ({
    type: GET_DURATION_BY_YEAR_FAILURE,
    payload: {
        error
    }
})

export const watchGetMainCategories = (token) => ({
    type: WATCH_GET_MAIN_CATEGORIES,
    payload: {
        token
    }
})

export const getMainCategoriesStart = () => ({
    type: GET_MAIN_CATEGORIES_START
})

export const getMainCategoriesSuccess = (
    mainCategories
) => ({
    type: GET_MAIN_CATEGORIES_SUCCESS,
    payload: {
        mainCategories
    }
})

export const getMainCategoriesFailure = (error) => ({
    type: GET_MAIN_CATEGORIES_FAILURE,
    payload: {
        error
    }
})

export const watchGetCategory = (
    toekn,
    category_id
) => ({
    type: WATCH_GET_CATEGORY,
    payload: {
        toekn,
        category_id
    }
})

export const getCategoryStart = () => ({
    type: GET_CATEGORY_START
})

export const getCategorySuccess = (
    category
) => ({
    type: GET_CATEGORY_SUCCESS,
    payload: {
        category
    }
})

export const getCategoryFailure = (error) => ({
    type: GET_CATEGORY_FAILURE,
    payload: {
        error
    }
})

export const watchGetCityByArea = (
    token,
    area_id
) => ({
    type: WATCH_GET_CITY_BY_AREA,
    payload: {
        token,
        area_id
    }
})

export const getCityByAreaStart = () => ({
    type: GET_CITY_BY_AREA_START
})

export const getCityByAreaSuccess = (
    cityByArea
) => ({
    type: GET_CITY_BY_AREA_SUCCESS,
    payload: {
        cityByArea
    }
})

export const getCityByAreaFailure = (error) => ({
    type: GET_CITY_BY_AREA_FAILURE,
    payload: {
        error
    }
})

export const watchGetSubcategory = (
    token,
    category_id
) => ({
    type: WATCH_GET_CATEGORY,
    payload: {
        token,
        category_id
    }
})

export const getSubcategoryStart = () => ({
    type: GET_SUBCATEGORY_START
})

export const getSubcategorySuccess = (
    subcategory
) => ({
    type: GET_SUBCATEGORY_SUCCESS,
    payload: {
        subcategory
    }
})

export const getSubcategoryFailure = (error) => ({
    type: GET_SUBCATEGORY_FAILURE,
    payload: {
        error
    }
})

export const watchGetAreas = (token) => ({
    type: WATCH_GET_AREAS,
    payload: {
        token
    }
})

export const getAreasStart = () => ({
    type: GET_AREAS_START
})

export const getAreasSuccess = (
    areas
) => ({
    type: GET_AREAS_SUCCESS,
    payload: {
        areas
    }
})

export const getAreasFailure = (error) => ({
    type: GET_AREAS_FAILURE,
    payload: {
        error
    }
})