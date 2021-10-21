import React, {Component} from "react";
import {Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from "react-native";

import Carousel from "react-native-snap-carousel";
import {LinearGradient} from "expo-linear-gradient";
import {icons} from "../../configs/imagesAndIconsUrl";
import {Pagination} from "react-native-snap-carousel";
import { Dimensions } from 'react-native';


class CustomCarousel extends Component {

    componentDidMount() {
       const windowWidth = Dimensions.get('window').width;
        this.setState({ windowWidth:windowWidth})
    }

    windowWidth = Dimensions.get('window').width;
    ref = React.createRef();
    state = {
        windowWidth:390,
        activeIndex: 2,
        carouselItems: [
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

        ],
    };

    renderItem = ({item, index}) => {
        return (
            <View style={styles.carouselItem}>
                <View style={styles.circleButton}/>
                <Image source={item.source} style={{width: 130, height: 85}}/>
                <Text style={styles.textButton}>{item.text}</Text>
            </View>
        );
    };

    get pagination () {
        const { carouselItems, activeIndex,windowWidth } = this.state;
        const {setActiveIndex}=this.props
        setActiveIndex(activeIndex)
        return (
            <Pagination
                sliderWidth={windowWidth}
                itemWidth={50}
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                containerStyle={{width:65,height:10,}}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10/2,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }


    render() {

        return (
            <LinearGradient colors={['#3CD0BD', '#219BA5']}>
                <SafeAreaView style={{flex: 1, paddingTop: 25}}>
                    <View style={{flex: 1,alignItems: "center"}}>
                        <Carousel
                            firstItem = {2}
                            layout={"default"}
                            ref={this.ref}
                            data={this.state.carouselItems}
                            sliderWidth={this.state.windowWidth}
                            sliderHeight={219}
                            itemWidth={this.state.windowWidth/1.65}
                            renderItem={this.renderItem}
                            onSnapToItem={(index) => this.setState({activeIndex: index})}
                        />
                        { this.pagination }
                    </View>
                </SafeAreaView>
            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({

    carouselItem: {
        zIndex: -25,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#33d0c9",
        borderRadius: 18.5,
        borderWidth: 9,
        borderColor: "#29b0b3",
        height: 159,
        width: 157,
        padding: 5,
        marginLeft: 50,
        marginRight: 20,
    },
    circleButton: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        backgroundColor: "#2fc5c2",
        position: "absolute",
        marginTop: 45
    },

    textButton:{
        fontSize: 13,
        color: "#fff",
        marginTop: 22
    }

})


export default CustomCarousel;