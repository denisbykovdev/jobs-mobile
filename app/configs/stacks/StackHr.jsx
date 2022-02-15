import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PersonalWork from "../../screens/PersonalWork";
import FAQHr from "../../screens/FAQHr";
import OpportunitiesPageHr from "../../screens/OpportunitiesPageHr";
import CreatingTheOppertunitiesHR from "../../screens/CreatingTheoppertunitiesHR";
import ProfileOfContender from "../../screens/ProfileOfContender";
import PersonalWorkPopupSuccess from "../../screens/PesronalWorkPopupSuccess";
import ListOfOpenOpportunities from "../../screens/ListOfOpenOpportunities";
import ViewOfTheOpportunity from "../../screens/ViewOfTheOpportunity";
import ContendersOfOpportunities from "../../screens/ContendersOfOpportunities";
import colors from '../../utils/colors';
import { responsiveWidth } from '../../utils/layout';
import Profile from '../../icons/Profile';
import NotificationsTab from '../../icons/Notifications';
import Notifications from '../../screens/Notifications';
import FaqIcon from '../../icons/FaqIcon';
import AllMessages from '../../screens/AllMessages';
import MessageIcon from '../../icons/MessageIcon';
import AddOpportunityIcon from '../../icons/AddOpportunityIcon';
import SuccessfulCreatedOportunity from '../../screens/SuccessfulCreatedOportunity';
import HeaderMenuHR from '../../screens/HeaderMenuHR';
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConversationPage from '../../screens/ConversationPage';
import HeaderMenu from '../../screens/HeaderMenu';

const StackHr = createStackNavigator();

// const BottomTabHr = createMaterialBottomTabNavigator();
const BottomTabHr = createBottomTabNavigator()

export function BottomStackHr({route}){
    const conversationsSelector = useSelector(state => state.chats?.conversations)

    const unreadMessages = conversationsSelector.filter(conversation => conversation.new_message > 0)

    const notificationsSelector = useSelector(state => state.notifications?.notifications)

    const unreadNotifications = notificationsSelector.filter(notification => notification.read === false)

    return(
        <BottomTabHr.Navigator 
            labeled = {false} 
            barStyle={{ 
                backgroundColor: colors.white,
                // height: responsiveWidth(45.5),
                justifyContent: 'flex-end'
            }} 
            initialRouteName={
                route.params !== undefined 
                ? route.params.Screen 
                : "ListOfOpenOpportunities"}
        >
            <BottomTabHr.Screen
                name = "ListOfOpenOpportunities"
                component = {ListOfOpenOpportunities}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        <Profile
                            iconColor={focused ? colors.dusk : colors.silver}
                        />
                     ),
                     tabBarShowLabel: false,
                     headerShown: false
                }}
            />
            <BottomTabHr.Screen
                name = "FAQHr"
                component = {FAQHr}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        <FaqIcon
                            iconColor={focused ? colors.dusk : colors.silver}
                        />
                     ),
                     tabBarShowLabel: false,
                     headerShown: false
                }}
            />
            <BottomTabHr.Screen
                name = "AllMessages"
                component = {AllMessages}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        <MessageIcon
                            iconColor={focused ? colors.dusk : colors.silver}
                        />
                     ),
                     tabBarShowLabel: false,
                     headerShown: false,
                     tabBarBadge: unreadMessages.length,
                     tabBarBadgeStyle: {
                         color: colors.whiteTwo,
                         fontSize: fonts.xxsmall
                     },
                }}
            />
            <BottomTabHr.Screen
                name = "AddOpportunity"
                component = {CreatingTheOppertunitiesHR}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        <AddOpportunityIcon
                            iconColor={focused ? colors.dusk : colors.silver}
                        />
                     ),
                     tabBarShowLabel: false,
                     headerShown: false
                }}
            />
            <BottomTabHr.Screen 
                name = "Notifications"
                component = {Notifications}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        <NotificationsTab
                            iconColor={focused ? colors.dusk : colors.silver} 
                        />
                     ),
                     tabBarShowLabel: false,
                     headerShown: false,
                     tabBarBadge: unreadNotifications.length,
                     tabBarBadgeStyle: {
                         color: colors.whiteTwo,
                         fontSize: fonts.xxsmall
                     },
                }}
            />
            
        </BottomTabHr.Navigator>
    )
}

function HrStack ({route}) {
    return (
        <StackHr.Navigator
            initialRouteName={BottomStackHr}
        >
            
            <StackHr.Screen 
                name = "BottomStackHr" 
                component = {BottomStackHr} 
                options={{ headerShown: false }}
            />
            <StackHr.Screen 
                name = "PersonalWork" 
                component = {PersonalWork} 
                options={{ headerShown: false }}
            />
            <StackHr.Screen 
                name = "PersonalDetails" 
                component = {PersonalWork} 
                options={{ headerShown: false }}
            />
            <StackHr.Screen 
                name = "PersonalWorkPopupSuccess" 
                component = {PersonalWorkPopupSuccess} 
                options={{ headerShown: false }}
            />
            <StackHr.Screen
                name = "AllMessages"
                component = {AllMessages}
                options={{ headerShown: false }}
            />
            <StackHr.Screen 
                name = "CreatingTheOppertunitiesHR" 
                component = {CreatingTheOppertunitiesHR} 
                options={{ headerShown: false }}
            />
            <StackHr.Screen 
                name="SuccessfulCreatedOportunity"
                component={SuccessfulCreatedOportunity}
                options={{ headerShown: false }}
            />
            <StackHr.Screen 
                name="HeaderMenuHR"
                component={HeaderMenuHR}
                options={{ headerShown: false }}
            />
            <StackHr.Screen 
                name = "FAQHr" 
                component = {FAQHr} 
                options={{ headerShown: false }}
            />
            <StackHr.Screen 
                name = "ListOfOpenOpportunities" 
                component = {ListOfOpenOpportunities} 
                options={{ headerShown: false }}
            />
            <StackHr.Screen 
                name = "ConversationPage" 
                component = {ConversationPage} 
                options={{ headerShown: false }}
            />

            <StackHr.Screen name = "OpportunitiesPageHr" component = {OpportunitiesPageHr} options={{ headerShown: false }}/>

            <StackHr.Screen name = "ViewOfTheOpportunity" component = {ViewOfTheOpportunity} options={{ headerShown: false }}/>

            <StackHr.Screen name = "ContendersOfOpportunities" component = {ContendersOfOpportunities} options={{ headerShown: false }}/>
            
            <StackHr.Screen name = "ProfileOfContender" component = {ProfileOfContender} options={{ headerShown: false }}/>
        </StackHr.Navigator>
    )
}

export default HrStack;