import React, { useState } from "react"
import { useFormikContext } from "formik";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import AddPhoto from "../icons/AddPhoto";
import { responsiveWidth } from "../utils/layout";
import { useEffect } from "react";
import Edit from "../icons/Edit";
import colors from '../utils/colors'
import NoPhotoOrganization from "../icons/NoPhotoOrganization";
import weights from "../utils/weights";
import fonts from "../utils/fonts";

const FormImagePicker = ({
    name,
    job = false
}) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        console.log(
            `--- FormImagePicker/image:`, image
        )
    }, [image])

    const {
        setFieldValue,
        setFieldTouched,
        values
    } = useFormikContext();

    const pickImage = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (status === 'granted') {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                    base64: true
                });

                if (result) {
                    setImage(result.base64);
                    setFieldTouched(name)
                    setFieldValue(name, result.base64)
                }
            }
        }

    };

    return (
        <>
            {
                !job
                    ?
                    <TouchableOpacity
                        onPress={pickImage}
                    >
                        {
                            image !== null
                                ?
                                <View
                                    style={{
                                        width: responsiveWidth(63),
                                        height: responsiveWidth(63),
                                        borderRadius: responsiveWidth(7),
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Image
                                        source={{ uri: `data:image/*;base64,${image}` }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                    <View
                                        style={{
                                            position: 'absolute',
                                            bottom: - responsiveWidth(3),
                                            right: - responsiveWidth(3),
                                            height: responsiveWidth(25),
                                            width: responsiveWidth(25),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: responsiveWidth(50),
                                            backgroundColor: colors.darkSlateBlue50
                                        }}
                                    >
                                        <Edit iconColor={colors.whiteTwo} />
                                    </View>
                                </View>

                                :
                                <AddPhoto />
                        }
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={pickImage}
                        style={{zIndex: -13}}
                    >
                        {
                            image !== null && image.length > 0
                                ?
                                <View
                                    style={{
                                        width: '100%',
                                        height: responsiveWidth(73.5),
                                        borderRadius: responsiveWidth(5),
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Image
                                        source={{ uri: `data:image/*;base64,${image}` }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                    {/* <View
                                        style={{
                                            position: 'absolute',
                                            bottom: - responsiveWidth(3),
                                            right: - responsiveWidth(3),
                                            height: responsiveWidth(25),
                                            width: responsiveWidth(25),
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: responsiveWidth(50),
                                            backgroundColor: colors.darkSlateBlue50
                                        }}
                                    >
                                        <Edit iconColor={colors.whiteTwo} />
                                    </View> */}
                                </View>

                                :
                                <View
                                    style={{
                                        width: '100%',
                                        height: responsiveWidth(73.5),
                                        borderRadius: responsiveWidth(5),
                                        overflow: 'hidden',
                                        backgroundColor: colors.veryLightBlue,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <NoPhotoOrganization />
                                    <Text
                                        style={{
                                            color: colors.white,
                                            fontWeight: weights.bold,
                                            fontSize: fonts.regular,
                                            marginTop: responsiveWidth(4)
                                        }}
                                    >
                                    הוספת תמונה
                                    </Text>
                                </View>
                                
                        }
                    </TouchableOpacity>
            }
        </>
    )
}

export default FormImagePicker;