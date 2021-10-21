import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from "../../screens/SplashScreen"
import SignUpAndSignIn from "../../screens/SignUpAndSignIn";
import ChooseTheTypeUsers from "../../screens/ChooseTheTypeUsers";
import Quiz from "../../screens/Quiz";
import ResultOfQuiz from "../../screens/ResultOfQuiz";
import SignUpHR from "../../screens/SignUpHR";
import SMSCodeHR from "../../screens/SMSCodeHR";
import FirstScreenForFirstUsers from '../../screens/FirstScreenForFirstUsers';

const StackAuth = createStackNavigator();

function AuthStack () {
    return (
        <StackAuth.Navigator>
            <StackAuth.Screen name = "ChooseTheTypeUsers" component = {ChooseTheTypeUsers} options={{ headerShown: false }}/>
            <StackAuth.Screen name = "SignUpAndSignIn" component = {SignUpAndSignIn} options={{ headerShown: false }}/>
            <StackAuth.Screen name = "SMSCodeHR" component = {SMSCodeHR} options={{ headerShown: false }}/>
            <StackAuth.Screen name = "SignUpHR" component = {SignUpHR} options={{ headerShown: false }}/>
            {/* <StackAuth.Screen name = "SMSCodeHR" component = {SMSCodeHR} options={{ headerShown: false }}/> */}
            <StackAuth.Screen name = "FirstScreen" component={FirstScreenForFirstUsers} options={{ headerShown: false }}/>
            <StackAuth.Screen name = "Quiz" component = {Quiz} options={{ headerShown: false }}/>
            <StackAuth.Screen name = "ResultOfQuiz" component = {ResultOfQuiz} options={{ headerShown: false }}/>
        </StackAuth.Navigator>
    )
}

export default AuthStack;