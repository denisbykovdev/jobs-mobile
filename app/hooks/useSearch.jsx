import React, { useCallback, useEffect, useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
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

    const RenderSearch = useCallback(({ searchInputWidth }) => {
        return (
            <View
                style={{
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    alignItems: 'center',
                    borderColor: colors.border,
                    borderWidth: responsiveWidth(1),
                    borderRadius: 10,
                    height: responsiveWidth(20),
                    paddingHorizontal: responsiveWidth(5),
                    marginBottom: responsiveWidth(8),
                    marginTop: responsiveWidth(22)
                }}
            >
                <TextInput
                    onChangeText={onChangeSearchInput}
                    style={[styles.searchInput,
                    {
                        width: searchInputWidth || responsiveWidth(239),
                        writingDirection: 'rtl',
                    }]}
                    placeholder="?איזו כתבה לחפש לך"
                />
                <SearchIconInField />
            </View>

        )
    }, [])

    return [
        searchArray,
        RenderSearch
    ]
}

const styles = StyleSheet.create({
    searchInput: {
        alignSelf: 'flex-end',
        fontSize: fonts.xsmall,
        fontWeight: weights.thin,
        color: colors.darkGreyBlueTwo,
        textAlign: 'right',
        height: "100%",
        width: "100%",
        marginRight: responsiveWidth(8)
    }
})