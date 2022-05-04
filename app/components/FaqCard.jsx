import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import colors from '../utils/colors';
import { responsiveWidth } from '../utils/layout';
import DropDownOpen from '../icons/DropDownOpen';
import DropDown from '../icons/DropDown';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import stringSlicer from '../helpers/stringSlicer';
import fonts from '../utils/fonts';

export default function FaqCard({
    faq
}) {
    const [isQuestionOpen, setQuestionOpen] = useState(false)

    return (
        <View
            style={[
                shadowStyle,
                {
                    borderRadius: responsiveWidth(2.5),
                    width: '100%'
                }
            ]}
        >
            <LinearGradient
                colors={[
                    isQuestionOpen ? colors.tealishFour : colors.white,
                    isQuestionOpen ? colors.tealishThree : colors.white
                ]}
                style={[
                    {
                        // height: isQuestionOpen ? responsiveWidth(56) : responsiveWidth(36),  TODO: Changing options for responsive page.
                        paddingVertical: responsiveWidth(8),
                        paddingLeft: responsiveWidth(8),
                        paddingRight: responsiveWidth(12),
                        borderRadius: responsiveWidth(2.5),
                        paddingBottom: isQuestionOpen ? responsiveWidth(20) : responsiveWidth(8) // TODO: Changing options for responsive page.
                    },
                    shadowStyle
                ]}
            >
                <TouchableOpacity
                    onPress={() => setQuestionOpen(!isQuestionOpen)}
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        flexDirection: 'row',
                        // justifyContent: 'flex-end',
                    }}
                >
                    <View 
                        style={{ 
                            transform: [{ rotate: '180deg' }],
                            width: '20%',
                            flexDirection: 'row-reverse',
                            alignSelf: 'flex-start'
                        }}
                    >
                        {
                            isQuestionOpen
                                ? <DropDown />
                                : <DropDownOpen iconColor={colors.tealGreen} />
                        }
                    </View>

                    <Text
                        style={{
                            textAlign: 'right',
                            width: '80%',
                            color: isQuestionOpen ? colors.white : colors.darkGreyBlue,
                            fontSize: fonts.xsmall
                        }}
                    >
                        {stringSlicer(faq.question, 70)}
                    </Text>
                </TouchableOpacity>


            </LinearGradient>

            {
                isQuestionOpen
                &&
                <View
                    style={[
                        {
                            height: responsiveWidth(67.5),
                            marginTop: - responsiveWidth(20),
                            backgroundColor: colors.white,
                            borderBottomLeftRadius: responsiveWidth(2.5),
                            borderBottomRightRadius: responsiveWidth(2.5),
                            paddingVertical: responsiveWidth(8),
                            paddingLeft: responsiveWidth(8),
                            paddingRight: responsiveWidth(12),
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        },
                        shadowStyle
                    ]}
                >
                    <Text
                        style={{
                            textAlign: 'right',
                            width: '80%',
                            color: colors.darkSlateBlue50,
                            fontSize: fonts.xsmall
                        }}
                    >
                        {
                            faq.answers[0].answer
                        }
                    </Text>
                </View>
            }
        </View>
    )
}

const shadowStyle = {
    // borderWidth: 0,
    // borderColor: colors.white,
    shadowColor: colors.BLACK_20,
    shadowOffset: {
        width: 0,
        height: 0
    },
    shadowRadius: 4.5,
    shadowOpacity: 1,
    elevation: 5
}