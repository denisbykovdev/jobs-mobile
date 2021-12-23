import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, I18nManager, View } from 'react-native';
import SplashScreen from "./app/screens/SplashScreen"
import MainStack from "./app/configs/StackNavigation";
import * as Splash from "expo-splash-screen";

import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

export default function App() {
    Splash.hideAsync()

    // const timerRef = useRef(null);

    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        // Roboto_100Thin_Italic,
        Roboto_300Light,
        // Roboto_300Light_Italic,
        Roboto_400Regular,
        // Roboto_400Regular_Italic,
        Roboto_500Medium,
        // Roboto_500Medium_Italic,
        Roboto_700Bold,
        // Roboto_700Bold_Italic,
        Roboto_900Black,
        // Roboto_900Black_Italic,
    });

    const [timer, setTimer] = useState(0)
    // const [appIsReady, setAppIsReady] = useState(false);
  
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setTimer(timer => timer + 1)
        }, 0.1)

        if (timer === 100) {
            return (
                // setAppIsReady(true),
                clearTimeout(timeOut)
            )
        }
    }, [timer]);

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <Provider
                store={store}
            >
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    <View style={styles.container}>
                        {timer == 100 ?
                            <MainStack /> :
                            <SplashScreen
                                timer={timer}
                            />
                        }
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
