import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveWidth } from '../../utils/layout';
import colors from '../../utils/colors';

import MainScreenOfUsers from "../../screens/MainScreenOfUsers";
import Blog from "../../screens/Blog";
import JobsOpportunity from "../../screens/JobsOpportunity";
import SearchResult from "../../screens/SearchResult";
import MyProfileNoReq from "../../screens/MyProfileNoReq";
import ResultOfQuiz from "../../screens/ResultOfQuiz";
import Notifications from "../../screens/Notifications";
import SearchWithFilter from "../../screens/SearchWithFilter";
import MyProfileMyDetails from "../../screens/MyProfileMyDetails";
import AllMessages from "../../screens/AllMessages";
import HeaderMenu from "../../screens/HeaderMenu";
import ContactUs from "../../screens/ContactUs";
import Category from "../../screens/Category";
import Organization from "../../screens/Organization";
import FaqForJobs from "../../screens/FaqForJobs";
import Reviews from "../../screens/Reviews";
import NewReview from "../../screens/NewReview";
import PageForApproveReview from "../../screens/PageForApproveReview";
import BlogPost from '../../screens/BlogPost';
import Home from '../../icons/Home';
import Favourites from '../../icons/Favourites';
import Search from '../../icons/Search';
import NotificationsTab from '../../icons/Notifications';
import Profile from '../../icons/Profile';
import JobOpportunityPopUp from '../../screens/JobsOpportunityPopUp';
import { useSelector } from 'react-redux';
import fonts from '../../utils/fonts';
import ConversationPage from '../../screens/ConversationPage';

const StackUser = createStackNavigator ();

// const BottomTab = createMaterialBottomTabNavigator();
const BottomTab = createBottomTabNavigator()

export function BottomStack ({navigation, route}) {
    const notificationsSelector = useSelector(state => state.notifications?.notifications)

    const unreadNotifications = notificationsSelector.filter(notification => notification.read === false)

    return (
        <BottomTab.Navigator 
            // labeled = {false} 
            barStyle={{ 
                backgroundColor: colors.white,
                // height: responsiveWidth(45.5),
                justifyContent: 'flex-end'
            }} 
            initialRouteName={
                route.params !== undefined 
                ? route.params.Screen 
                : "MainScreenOfUsers"}
        >
            <BottomTab.Screen 
                name="MainScreenOfUsers"
                component={MainScreenOfUsers}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        <Home 
                            iconColor={focused ? colors.dusk : colors.silver} 
                        />
                     ),
                     tabBarShowLabel: false,
                     headerShown: false
                }}
            />
            <BottomTab.Screen 
                name = "Favorites"
                component={MainScreenOfUsers}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        <Favourites 
                            iconColor={focused ? colors.dusk : colors.silver} 
                        />
                     ),
                     tabBarShowLabel: false,
                     headerShown: false
                }}
            />
            <BottomTab.Screen 
                name = "SearchWithFilter"
                component = {SearchWithFilter}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        <Search 
                            iconColor={focused ? colors.dusk : colors.silver} 
                        />
                     ),
                     tabBarShowLabel: false,
                     headerShown: false
                }}
            />
            <BottomTab.Screen 
                name = "Notifications"
                component = {Notifications}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        <NotificationsTab
                            iconColor={focused ? colors.dusk : colors.silver} 
                        />
                     ),
                     tabBarBadge: unreadNotifications.length,
                     tabBarBadgeStyle: {
                         color: colors.whiteTwo,
                         fontSize: fonts.xxsmall
                     },
                     tabBarShowLabel: false,
                     headerShown: false
                }}
            />
            <BottomTab.Screen
                name = "MyProfileNoReq"
                component = {MyProfileNoReq}
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

        </BottomTab.Navigator>
    );
}


function UserStack ({ route }) {
    return (
        <StackUser.Navigator 
            initialRouteName = {
                route.params.isBlog 
                ? 
                "Blog"
                : 
                "BottomStack"
            }
        >
            
            <StackUser.Screen 
                name = "BottomStack" 
                component = {BottomStack} 
                options={{ headerShown: false }}
            />
            <StackUser.Screen 
                name = "Blog" 
                component = {Blog} 
                options={{ headerShown: false }}
            />
            <StackUser.Screen
                name="BlogPost"
                component={BlogPost}
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "HeaderMenu" 
                component = {HeaderMenu} 
                options={{ headerShown: false }}
            />
            <StackUser.Screen 
                name = "JobsOpportunity" 
                component = {JobsOpportunity} 
                options={{ headerShown: false }}
            />
            <StackUser.Screen 
                name = "JobOpportunityPopUp" 
                component = {JobOpportunityPopUp} 
                options={{ headerShown: false }}
            />
            <StackUser.Screen 
                name = "FaqForJobs" 
                component = {FaqForJobs}
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "MyProfileNoReq" 
                component = {MyProfileNoReq} 
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "MyProfileMyDetails" 
                component = {MyProfileMyDetails} 
                options={{ headerShown: false }}
            />      
            
            <StackUser.Screen 
                name = "SearchResult" 
                component = {SearchResult} 
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "ResultOfQuiz" 
                component = {ResultOfQuiz} 
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "SearchWithFilter" 
                component = {SearchWithFilter} 
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "Favorites" 
                component = {MainScreenOfUsers} 
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "Notifications" 
                component = {Notifications} 
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "AllMessages" 
                component = {AllMessages} 
                options={{ headerShown: false }}
            />
            
            <StackUser.Screen 
                name = "ContactUs" 
                component = {ContactUs} 
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "Category" 
                component = {Category} 
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "Organization" 
                component = {Organization} 
                options={{ headerShown: false }}
            />
            
            <StackUser.Screen 
                name = "Reviews" 
                component = {Reviews} 
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "NewReview" 
                component = {NewReview} 
                options={{ headerShown: false }}
            />

            <StackUser.Screen
                name="PageForApproveReview"
                component={PageForApproveReview}
                options={{ headerShown: false }}
            />

            <StackUser.Screen 
                name = "ConversationPage" 
                component = {ConversationPage} 
                options={{ headerShown: false }}
            />
        </StackUser.Navigator>
    )
}

export default UserStack;