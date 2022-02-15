import React, { useCallback, useEffect, useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import FormContainer from "../commons/FormContainer"
import Search from "../icons/Search"
import SearchIconInField from "../icons/SearchIconInField"
import colors from "../utils/colors"
import fonts from "../utils/fonts"
import { responsiveWidth } from "../utils/layout"
import weights from "../utils/weights"

export default function useSearch({
    array,
    arrayOfObjects
}) {
    const [searchArray, setUpdateSearchArray] = useState()

    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        if (searchText.length > 0 && array !== undefined) {
            const filteredArray = array.filter(item => item.toString().toLowerCase().includes(searchText.toLowerCase()))

            setUpdateSearchArray(filteredArray)
        }
        if (searchText.length > 0 && arrayOfObjects !== undefined) {
            const filteredArrayOfObjects = arrayOfObjects && arrayOfObjects.filter(item => Object.values(item).some(itemValue => itemValue !== null && itemValue.toString().toLowerCase().includes(searchText.toLowerCase())))

            setUpdateSearchArray(filteredArrayOfObjects)
        }
        if (searchText.length === 0) {
            setUpdateSearchArray(
                array !== undefined && array || arrayOfObjects !== undefined && arrayOfObjects
            )
        }
    }, [searchText])

    const onChangeSearchInput = (text) => {
        setSearchText(text)
    }

    const RenderSearch = useCallback(({ 
        searchInputContainerStyles,  
        serachInputStyles
    }) => {
        return (
            <View
                style={[
                    styles.searchInputContainer,
                    searchInputContainerStyles
                ]}
            >
                <SearchIconInField />
                <TextInput
                    onChangeText={onChangeSearchInput}
                    style={[
                        styles.searchInput,
                        serachInputStyles
                    ]}
                    placeholder="חיפוש..."
                />
            </View>
        )
    }, [])

    return [
        searchArray,
        RenderSearch
    ]
}

const styles = StyleSheet.create({
    searchInputContainer: {
        alignItems: "center",
        backgroundColor: colors.whiteTwo,
        justifyContent: "flex-end",
        flexDirection: "row",
        borderStyle: "solid",
        borderWidth: responsiveWidth(1),
        paddingRight: responsiveWidth(5),
        borderRadius: responsiveWidth(2.5),
        borderColor: colors.border,
        height: responsiveWidth(20),
        width: '100%'
    },
    searchInput: {
        height: "100%",
        width: "90%",
        textAlign: "right",
        fontSize: fonts.xsmall,
        fontWeight: weights.regular,
        color: colors.darkSlateBlue
    }
})