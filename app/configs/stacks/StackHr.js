import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import PersonalWork from "../../screens/PersonalWork";
import FAQHr from "../../screens/FAQHr";
import HrTabController from "../../screens/HrTabController";
import PostHr from "../../screens/PostHr";
import OpportunitiesPageHr from "../../screens/OpportunitiesPageHr";
import NotificationsHr from "../../screens/NotificationsHr";
import ConversationPageHr from "../../screens/ConversationPageHr";
import CreatingTheOppertunitiesHR from "../../screens/CreatingTheoppertunitiesHR";
import JobOpportunityPopUp from "../../screens/JobsOpportunityPopUp";
import PersonalDetailsEditHr from "../../components/PersonalDetailsEditHr";
import SortBy from "../../screens/SortBy";
import ProfileOfContender from "../../screens/ProfileOfContender";
import WelcomePage from "../../screens/WelcomePage";
import PersonalWorkPopupSuccess from "../../screens/PesronalWorkPopupSuccess";
import ListOfOpenOpportunities from "../../screens/ListOfOpenOpportunities";
import ViewOfTheOpportunity from "../../screens/ViewOfTheOpportunity";
import ContendersOfOpportunities from "../../screens/ContendersOfOpportunities";
import PopupSuccess from "../../screens/PopupSuccess";


const StackHr = createStackNavigator ();

function HrStack () {
    return (
        <StackHr.Navigator>
            <StackHr.Screen name = "PersonalWork" component = {PersonalWork} options={{ headerShown: false }}/>
            <StackHr.Screen name = "FAQHr" component = {FAQHr} options={{ headerShown: false }}/>
            <StackHr.Screen name = "HrTabController" component = {HrTabController} options={{ headerShown: false }}/>
            <StackHr.Screen name = "PostHr" component = {PostHr} options={{ headerShown: false }}/>
            <StackHr.Screen name = "OpportunitiesPageHr" component = {OpportunitiesPageHr} options={{ headerShown: false }}/>
            <StackHr.Screen name = "NotificationsHr" component = {NotificationsHr} options={{ headerShown: false }}/>
            <StackHr.Screen name = "ConversationPageHr" component = {ConversationPageHr} options={{ headerShown: false }}/>
            <StackHr.Screen name = "CreatingTheOppertunitiesHR" component = {CreatingTheOppertunitiesHR} options={{ headerShown: false }}/>
            <StackHr.Screen name = "PersonalDetailsEditHr" component = {PersonalDetailsEditHr} options={{ headerShown: false }}/>
            <StackHr.Screen name = "SortBy" component = {SortBy} options={{ headerShown: false }}/>
            <StackHr.Screen name = "ProfileOfContender" component = {ProfileOfContender} options={{ headerShown: false }}/>
            <StackHr.Screen name = "WelcomePage" component = {WelcomePage} options={{ headerShown: false }}/>
            <StackHr.Screen name = "PersonalWorkPopupSuccess" component = {PersonalWorkPopupSuccess} options={{ headerShown: false }}/>
            <StackHr.Screen name = "ListOfOpenOpportunities" component = {ListOfOpenOpportunities} options={{ headerShown: false }}/>
            <StackHr.Screen name = "ViewOfTheOpportunity" component = {ViewOfTheOpportunity} options={{ headerShown: false }}/>
            <StackHr.Screen name = "ContendersOfOpportunities" component = {ContendersOfOpportunities} options={{ headerShown: false }}/>
            <StackHr.Screen name = "PopupSuccess" component = {PopupSuccess} options={{ headerShown: false }}/>
        </StackHr.Navigator>
    )
}

export default HrStack;