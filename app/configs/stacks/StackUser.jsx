import * as React from 'react';
import { Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { icons } from "../imagesAndIconsUrl";
import { responsiveWidth } from '../../utils/layout';
import colors from '../../utils/colors';

// Main Pages
import MainScreenOfUsers from "../../screens/MainScreenOfUsers";
import Blog from "../../screens/Blog";
import JobsOpportunity from "../../screens/JobsOpportunity";
import SearchResult from "../../screens/SearchResult";
//TopTab Pages
import MyProfileNoReq from "../../screens/MyProfileNoReq";
import ResultOfQuiz from "../../screens/ResultOfQuiz";
//My Profile Tabs
import AdditionInfo from "../../components/MyProfileMyDetails/AdditionInfo"
import BirthdayDate from "../../components/MyProfileMyDetails/BirthdayDate"
import PersonalData from "../../components/MyProfileMyDetails/PersonalData"
// Bottom Tab Pages
import UserTabController from "../../screens/UserTabController";
import Notifications from "../../screens/Notifications";
import Favorites from "../../screens/Favorites";
import SearchWithFilter from "../../screens/SearchWithFilter";
import SearchWithFilterMidrashot from "../../screens/SearchWithFilterMidrashot";
import MyProfileMyDetails from "../../screens/MyProfileMyDetails";
import AllMessages from "../../screens/AllMessages";

//Drawer Pages
import HeaderMenu from "../../screens/HeaderMenu";
import ContactUs from "../../screens/ContactUs";
import Category from "../../screens/Category";
import Organization from "../../screens/Organization";
//Pages from Jobs
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

const StackUser = createStackNavigator ();

const BottomTab = createMaterialBottomTabNavigator();

export function BottomStack ({navigation, route}) {
    return (
        <BottomTab.Navigator 
            labeled = {false} 
            barStyle={{ 
                backgroundColor: colors.white,
                height: responsiveWidth(45.5),
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
                        //  <Image source = {icons.home} style = {{width: 31,height: 25, tintColor: focused ? "#435677" : "#babec7"}} />
                        <Home 
                            iconColor={focused ? colors.dusk : colors.silver} 
                        />
                     ),
                }}
            />
            <BottomTab.Screen 
                name = "Favorites"
                // component = {Favorites}
                component={MainScreenOfUsers}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        //  <Image source = {icons.hart} style = {{width: 26,height: 26, tintColor: focused ? "#435677" : "#babec7"}} />
                        <Favourites 
                            iconColor={focused ? colors.dusk : colors.silver} 
                        />
                     ),
                }}
            />
            <BottomTab.Screen 
                name = "SearchWithFilter"
                component = {SearchWithFilter}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        //  <Image source = {icons.search} style = {{width: 26,height: 26, tintColor: focused ? "#435677" : "#babec7"}} />
                        <Search 
                            iconColor={focused ? colors.dusk : colors.silver} 
                        />
                     ),
                }}
            />
            <BottomTab.Screen 
                name = "Notifications"
                component = {Notifications}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        //  <Image source = {icons.notifications} style = {{width: 25,height: 26, tintColor: focused ? "#435677" : "#babec7"}} />
                        <NotificationsTab
                            iconColor={focused ? colors.dusk : colors.silver} 
                        />
                     ),
                }}
            />
            <BottomTab.Screen
                name = "MyProfileMyDetails"
                component = {MyProfileMyDetails}
                options={{
                     tabBarIcon: ({focused, color }) => (
                        //  <Image source = {icons.profile} style = {{width: 21,height: 26, tintColor: focused ? "#172c60" : "#c5cad7"}} />
                        <Profile
                            iconColor={focused ? colors.dusk : colors.silver}
                        />
                     ),
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

            {/* <StackUser.Screen name = "FirstScreenForFirstUsers" component = {FirstScreenForFirstUsers} options={{ headerShown: false }}/> */}

            <StackUser.Screen 
                name = "MyProfileNoReq" 
                component = {MyProfileNoReq} 
                options={{ headerShown: false }}
            />
            
            <StackUser.Screen 
                name = "SearchResult" 
                component = {SearchResult} 
                options={{ headerShown: false }}
            />

            {/* <StackUser.Screen name = "UserTabController" component = {UserTabController} options={{ headerShown: false }}/> */}

            {/* <StackUser.Screen name = "SearchWithFilterMidrashot" component = {SearchWithFilterMidrashot} options={{ headerShown: false }}/> */}

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
        </StackUser.Navigator>
    )
}

export default UserStack;