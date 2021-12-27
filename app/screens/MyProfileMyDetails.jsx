import {
    View
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import TabController from "../components/ListOfOpenOpportunities/TabController";
import CustomCarousel from "../components/MyProfileMyDetails/Carousel";
import AdditionInfo from "../components/MyProfileMyDetails/AdditionInfo";
import PersonalData from "../components/MyProfileMyDetails/PersonalData";
import BirthdayDate from "../components/MyProfileMyDetails/BirthdayDate";
import CommonFrame from "../commons/CommonFrame";
import { responsiveWidth } from "../utils/layout";

const MyProfileMyDetails = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <CommonFrame
            commonFrameStyle={{
                paddingHorizontal: 0
            }}
        >
            <View
                style={{
                    marginHorizontal: responsiveWidth(17.5)
                }}
            >
                <Header />
                <TabController chosenTab={1} />
            </View>

            <>
                <CustomCarousel setActiveIndex={setActiveIndex} />

                {activeIndex === 0 &&
                    <BirthdayDate />
                }
                {activeIndex === 1 &&
                    <AdditionInfo />
                }
                {activeIndex === 2 &&
                    <PersonalData />
                }

            </>

        </CommonFrame>
    )
}

export default MyProfileMyDetails