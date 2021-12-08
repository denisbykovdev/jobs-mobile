import {Image, Text, StyleSheet, View, TouchableOpacity, ImageBackground} from "react-native";
import React from "react";
import { url } from "../utils/api";
import { responsiveWidth } from "../utils/layout";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import weights from "../utils/weights";
import stringSlicer from "../helpers/stringSlicer";
import { useNavigation } from "@react-navigation/native";

const BlogItems = ({
    item
}) => {
    console.log(
       `--- BlogItems:image:${url}${item?.image}`
    )

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            style={styles.blogItemContainer}
            onPress={
                () => navigation.navigate(
                    'BlogPost',
                    {
                        post_id: item?.id
                    }
                )
            }
        >
            <View
                style={{
                    width: '100%',
                    height: responsiveWidth(93),
                    position: 'relative',
                    zIndex: 5
                }}
            >
                {
                    item && item.image
                    &&
                    <Image
                        source={{ uri:`${url}${item.image}` }}
                        style={[
                            styles.blogItemImage,
                            {
                                position: 'absolute',
                                zIndex: 6,
                                width: '100%'
                            }
                        ]}
                    />
                }
            </View>

            <Text 
                style={styles.blogItemTitle}
            >
                {item.title}
            </Text>

            {
                item.subtitle 
                && 
                <Text 
                    style={styles.blogItemSubtitle}
                >
                    {item.smallTitle}
                </Text> 
            }
            
            <View 
                style={styles.blogItemDateRow}
            >
                <View style={styles.blogItemDateLine} />
                <Text 
                    style={styles.blogItemDateTitle}
                >
                    {item.date}
                </Text>
            </View>

            <Text style={styles.blogItemText}>
                {stringSlicer(
                   `${item.description}`,
                   120
                )}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    blogItemContainer: {
        marginBottom: responsiveWidth(18),
        paddingBottom: responsiveWidth(18),
        width: '100%'
        // backgroundColor: colors.whiteTwo,
        // shadowColor: colors.BLACK_20,
        // shadowOffset: {
        //     width: 0,
        //     height: 9.5
        // },
        // shadowRadius: 10.5,
        // shadowOpacity: 1,
        // elevation: 5
        // flex: 1,
        // flexDirection: 'column',
    },
    blogItemImage: {
        resizeMode: "cover",
        height: responsiveWidth(93),
        marginBottom: responsiveWidth(12)
    },
    blogItemTitle: {
        color: colors.darkSlateBlue,
        fontSize: fonts.medium,
        fontWeight: weights.bold,
        textAlign: "right",
        marginBottom: responsiveWidth(6)
    },
    blogItemSubtitle: {
        color: colors.tealishTwo,
        fontSize: fonts.xsmall,
        fontWeight: weights.thin,
        textAlign: "right",
        marginBottom: responsiveWidth(6)
    },
    blogItemDateRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: responsiveWidth(8)
    },
    blogItemDateTitle: {
        color: colors.darkGreyBlue,
        textAlign: "right",
        fontSize: fonts.xxxsmall,
        fontWeight: weights.thin,
        opacity: 0.5
    },
    blogItemDateLine: {
        width: '75%',
        borderTopColor: colors.darkGreyBlue,
        borderTopWidth: responsiveWidth(1),
        height: responsiveWidth(1),
        opacity: 0.2
    },
    blogItemText: {
        color: colors.darkSlateBlue,
        textAlign: "right",
        fontSize: fonts.small,
        fontWeight: weights.thin
    }
});

export default BlogItems
