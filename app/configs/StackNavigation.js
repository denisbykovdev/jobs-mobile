import * as React from 'react';

//Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//Screens
import AuthStack from "./stacks/StackAuth";
import UserStack from "./stacks/StackUser";
import HrStack from "./stacks/StackHr";

import FAQHr from "../screens/FAQHr";

import HrTabController from "../screens/HrTabController";

import PostHr from "../screens/PostHr";

import OpportunitiesPageHr from "../screens/OpportunitiesPageHr";

import NotificationsHr from "../screens/NotificationsHr";
import ConversationPageHr from "../screens/ConversationPageHr";
import CreatingTheOppertunitiesHR from "../screens/CreatingTheoppertunitiesHR";

import JobOpportunityPopUp from "../screens/JobsOpportunityPopUp";
import PersonalDetailsEditHr from "../components/PersonalDetailsEditHr";

import SortBy from "../screens/SortBy";
import ProfileOfContender from "../screens/ProfileOfContender";


import WelcomePage from "../screens/WelcomePage";
import PersonalWorkPopupSuccess from "../screens/PesronalWorkPopupSuccess";
import ListOfOpenOpportunities from "../screens/ListOfOpenOpportunities";





import ViewOfTheOpportunity from "../screens/ViewOfTheOpportunity";
import ContendersOfOpportunities from "../screens/ContendersOfOpportunities";
import PopupSuccess from "../screens/PopupSuccess";
import { StyleSheet, Text } from 'react-native';


const StackNavigation = createStackNavigator();

const typography = () => {
    const oldTextRender = Text.render
    Text.render = function (...args) {
        const origin = oldTextRender.call(this, ...args)
        return React.cloneElement(origin, {
            style: [styles.defaultText, origin.props.style],
        })
    }
}

function MainStack() {
    typography()

    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
                <StackNavigation.Screen name="User" component={UserStack} options={{ headerShown: false }} />
                <StackNavigation.Screen name="Hr" component={HrStack} options={{ headerShown: false }} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    defaultText: {
        fontFamily: 'Roboto_400Regular'
    }
});


export default MainStack;
