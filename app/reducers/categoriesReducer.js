import { GET_AREAS_FAILURE, GET_AREAS_START, GET_AREAS_SUCCESS, GET_CATEGORY_FAILURE, GET_CATEGORY_START, GET_CATEGORY_SUCCESS, GET_CITY_BY_AREA_FAILURE, GET_CITY_BY_AREA_START, GET_CITY_BY_AREA_SUCCESS, GET_DURATION_BY_YEAR_FAILURE, GET_DURATION_BY_YEAR_START, GET_DURATION_BY_YEAR_SUCCESS, GET_MAIN_CATEGORIES_FAILURE, GET_MAIN_CATEGORIES_START, GET_MAIN_CATEGORIES_SUCCESS, GET_SUBCATEGORY_BY_CATEGORY_FAILURE, GET_SUBCATEGORY_BY_CATEGORY_START, GET_SUBCATEGORY_BY_CATEGORY_SUCCESS, GET_SUBCATEGORY_FAILURE, GET_SUBCATEGORY_START, GET_SUBCATEGORY_SUCCESS } from "../types/categoriesTypes";

const categoriesInitial = {
    subcategoryByCategory: null,
    duration: null,
    mainCategories: null,
    category: null,
    cityByArea: null,
    subcategory: null,
    areas: null
}

export const categoriesReducer = (
    state = categoriesInitial,
    action
) => {
    switch (action.type) {
        case GET_SUBCATEGORY_BY_CATEGORY_START:
            return {
                ...state,
                getting: true
            }
        case GET_SUBCATEGORY_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                getting: false,
                subcategoryByCategory: action.payload.subcategoryByCategory
            }
        case GET_SUBCATEGORY_BY_CATEGORY_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_DURATION_BY_YEAR_START:
            return {
                ...state,
                getting: true
            }
        case GET_DURATION_BY_YEAR_SUCCESS:
            return {
                ...state,
                getting: false,
                duration: action.payload.duration
            }
        case GET_DURATION_BY_YEAR_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_MAIN_CATEGORIES_START:
            return {
                ...state,
                getting: true
            }
        case GET_MAIN_CATEGORIES_SUCCESS:
            return {
                ...state,
                getting: false,
                mainCategories: action.payload.mainCategories
            }
        case GET_MAIN_CATEGORIES_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_CATEGORY_START:
            return {
                ...state,
                getting: true
            }
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                getting: false,
                category: action.payload.category
            }
        case GET_CATEGORY_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_CITY_BY_AREA_START:
            return {
                ...state,
                getting: true
            }
        case GET_CITY_BY_AREA_SUCCESS:
            return {
                ...state,
                getting: false,
                cityByArea: action.payload.cityByArea
            }
        case GET_CITY_BY_AREA_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_SUBCATEGORY_START:
            return {
                ...state,
                getting: true
            }
        case GET_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                getting: false,
                subcategory: action.payload.subcategory
            }
        case GET_SUBCATEGORY_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }
        case GET_AREAS_START:
            return {
                ...state,
                getting: true
            }
        case GET_AREAS_SUCCESS:
            return {
                ...state,
                getting: false,
                areas: action.payload.areas
            }
        case GET_AREAS_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            }

        default:
            return state;
    }
}