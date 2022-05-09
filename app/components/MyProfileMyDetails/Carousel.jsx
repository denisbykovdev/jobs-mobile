import React, { useRef, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { icons } from "../../configs/imagesAndIconsUrl";
import { Pagination } from "react-native-snap-carousel";
import layout, { responsiveWidth } from "../../utils/layout";
import colors from "../../utils/colors";

export default function CustomCarousel({
    setActiveIndex
}) {
    const carouselRef = useRef()

    const [selected, setSelected] = useState(1)

    const carouselItems = [
        {
            source: icons.BirthdayDateOpen,
            title: "Item 3",
            text: "תאריך הלידה שלי",
        },
        {
            source: icons.AdditionInfo,
            title: "Item 2",
            text: "מידע נוסף",
        },
        {
            source: icons.MyDetails,
            title: "Item 1",
            text: "פרטים אישיים שלי",
        },

    ]

    const renderItem = ({ item, index }) => {
        return (
            <View
                style={{
                    alignItems: "center",
                    backgroundColor: "#33d0c9",
                    borderRadius: 18.5,
                    borderWidth: responsiveWidth(4.5),
                    borderColor: "#29b0b3",
                    height: responsiveWidth(78.5),
                    width: responsiveWidth(79.5),
                    padding: responsiveWidth(2),
                    // TODO: Changing options for responsive page. 
                    // marginTop: responsiveWidth(12)
                    marginTop: responsiveWidth(5)
                }}
            >
                <View
                    style={{
                        width: responsiveWidth(32.5),
                        height: responsiveWidth(32.5),
                        borderRadius: 65 / 2,
                        backgroundColor: "#2fc5c2",
                        position: "absolute",
                        marginTop: responsiveWidth(19)
                    }}
                />
                <Image 
                    source={ item.source } 
                    style={{ 
                        width: responsiveWidth(65), 
                        height: responsiveWidth(42)
                    }} 
                />
                <Text
                    style={{
                        fontSize: 13,
                        color: "#fff",
                        marginTop: 22
                    }}
                >
                    {item.text}
                </Text>
            </View>
        );
    };

    return (
        <LinearGradient
            colors={[
                colors.tealishFour,
                colors.tealishThree
            ]}
        >
                <Carousel
                    loop
                    itemWidth={responsiveWidth(78.5)}
                    itemHeight={responsiveWidth(79.5)}
                    sliderWidth={layout.width}
                    sliderHeight={responsiveWidth(109.5)}
                    firstItem={2}
                    layout={"default"}
                    ref={carouselRef}
                    data={carouselItems}
                    renderItem={renderItem}
                    onSnapToItem={(index) => setSelected(index), (index) => setActiveIndex(index)}
                />
                <Pagination
                    dotsLength={carouselItems.length}
                    activeDotIndex={selected}
                    dotStyle={{
                        width: responsiveWidth(4),
                        height: responsiveWidth(4),
                        borderRadius: responsiveWidth(10),
                        backgroundColor: colors.whiteTwo
                    }}
                    inactiveDotStyle={{
                        width: responsiveWidth(4),
                        height: responsiveWidth(4),
                        borderRadius: responsiveWidth(10),
                        borderWidth: responsiveWidth(1),
                        borderColor: colors.aquaMarine,
                        backgroundColor: colors.tealishThree
                    }}
                    inactiveDotOpacity={1}
                    inactiveDotScale={1}
                    // TODO: Changing options for responsive page. 
                    containerStyle={{
                        paddingTop: 10,
                        marginBottom: -18,
                    }}
                />
        </LinearGradient>
    )
}