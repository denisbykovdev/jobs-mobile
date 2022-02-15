import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from "./stacks/StackAuth";
import UserStack from "./stacks/StackUser";
import HrStack from "./stacks/StackHr";
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

export default function MainStack({
    theme
}) {
    typography()

    return (
        <NavigationContainer theme={theme}>
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
