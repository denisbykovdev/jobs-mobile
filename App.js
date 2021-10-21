import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, I18nManager, View } from 'react-native';
import SplashScreen from "./app/screens/SplashScreen"
import MainStack from "./app/configs/StackNavigation";

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
    const [goToApp, setGoToApp] = useState(true)

    // if(I18nManager.isRTL)
    // {
    //     I18nManager.allowRTL(false);
    //     I18nManager.forceRTL(false);
    //     Restart();
    // }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setTimer(timer + 1)
        }, 1)
        if (timer === 100) {
            return (
                setGoToApp(true),
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

                        {/*{1}*/}

                        {/*<ChooseTheTypeUsers/>*/}
                        {/*2*/}

                        {/*<FirstScreenForFirstUsers/>*/}
                        {/*{3}*/}

                        {/*<Quiz/>*/}
                        {/*4,5,6*/}

                        {/*<SignUpAndSignIn />*/}
                        {/*8*/}

                        {/*<SMSCodeHR/>*/}
                        {/*9 ,9.1, 36*/}

                        {/*<MainScreenOfUsers/>*/}
                        {/*{11,11.1}*/}

                        {/*<SearchWithFilter/>*/}
                        {/*{12}*/}

                        {/*<SearchWithFilterMidrashot/>*/}
                        {/*{12.2 -}*/}

                        {/*<SearchResult/>*/}
                        {/*{12.3}*/}

                        {/*<JobsOpportunitie/>*/}
                        {/*{13}*/}

                        {/*<JobOpportunityPopUp/>*/}
                        {/*{14}*/}

                        {/*<FaqForJobs/>*/}
                        {/*15*/}

                        {/*<MyProfileNoReq/>*/}
                        {/*{16}*/}

                        {/*<UserTabController/>*/}
                        {/*17 18, 22*/}

                        {/*<AllMessages/>*/}
                        {/*21*/}

                        {/*<Reviews/>*/}
                        {/*24*/}


                        {/*<NewReview/>*/}
                        {/*25 + */}


                        {/*<PageForApproveReview/>*/}
                        {/*25.1 + */}

                        {/*<PopupSuccess/>*/}
                        {/*25.2 + */}


                        {/*<Organization subCategory={true}/>*/}
                        {/*{29 + ,30, 31}*/}

                        {/*<Blog/>*/}
                        {/*32,40*/}

                        {/*<PostHr hr={true}/>*/}
                        {/*33,41*/}

                        {/*<SignUpHr/>*/}
                        {/*{35}*/}

                        {/*<SMSCode/>*/}
                        {/*{36}*/}

                        {/*<PersonalWork/>*/}
                        {/*37*/}

                        {/*<ConversationPage/>*/}
                        {/*43*/}

                        {/*<HrTabController/>*/}
                        {/*46*/}

                        {/*<NotificationsHr/>*/}
                        {/*47*/}

                        {/*<OpportunitiesPageHr/>*/}
                        {/*49*/}

                        {/*<ProfileOfContender/>*/}
                        {/*{54}*/}

                        {/*<SortBy/>*/}
                        {/*{55}*/}
                        {/*1,2,3,4,5,6,8, 9, 36,11,11.1, 12,12.3, 13,  14, 15, 16, 17 18, 22, 21,  24, 30, 31, 32,40, 33,41, 35, 36, 37,  43, 46, 47,   49,  54,55*/}


                        {/*<MyProfileMyDetails/>*/}
                        {/*
            23 +
            23.1 +
            23.2 +
            23.3 +
            23.5 +
            */}

                        {/*<SearchResults/>*/}

                        {/*<SearchResultsEmpty/>*/}
                        {/*26 + */}

                        {/*<Notifications/>*/}
                        {/*27 +    <<<<<<<<<<<<<*/}

                        {/*<Category/>*/}
                        {/*28 */}

                        {/*<ContactUs/>*/}
                        {/*34*/}


                        {/*<WelcomePage/>*/}
                        {/*37.1 + */}

                        {/*<PersonalWorkPopupSuccess/>*/}
                        {/*37.2 + */}


                        {/*<OpenOpportunities/>*/}
                        {/*39 + */}


                        {/*<ListOfOpenOpportunities/>*/}
                        {/*44 ,44.1 + */}


                        {/*<ContendersOfOpportunities/>*/}
                        {/*45 + */}


                        {/*<OpportunitiesPageHrNew/>*/}
                        {/*49 , 49.1 +*/}

                        {/*<ViewOfTheOpportunity/>*/}
                        {/*50 + */}


                        {/*<ChosenContenders/>*/}
                        {/*51 + */}

                        {/*<CreatingTheOppertunitiesHR/>*/}
                        {/*52 + */}

                        {/*<CreatingTheOppertunities2HR/>*/}
                        {/*52.1 + */}

                        {/*<SuccessfulCreatedOportunity/>*/}
                        {/*53 + */}


                        {/*<HeaderMenu/>*/}
                        {/*57 + */}

                        {/*<HeaderMenuHR/>*/}
                        {/*58 + */}

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
