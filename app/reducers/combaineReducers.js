import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authReducer } from "./authReducer";
import { quizReducer } from "./quizReducer";
import { jobsReducer } from "./jobsReducer";
import { hrReducer } from "./hrReducer";
import { faqReducer } from "./faqReducer";
import { profileReducer } from "./profileReducer";
import { categoriesReducer } from "./categoriesReducer";
import { blogsReducer } from "./blogsReducer";
import { reviewsReducer } from "./reviewsReducer";
import { chatsReducer } from "./chatReducer";
import { notificationsReducer } from "./notificationsReducer";
import { opportunitiesReducer } from "./opportunitiesReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['bookmarks']
};

export default combineReducers({
    auth: authReducer,
    quiz: persistReducer(persistConfig, quizReducer),
    jobs: jobsReducer,
    hr: hrReducer,
    opportunities: opportunitiesReducer,
    faq: faqReducer,
    profile: profileReducer,
    categories: categoriesReducer,
    blogs: blogsReducer,
    reviews: reviewsReducer,
    chats: chatsReducer,
    notifications: notificationsReducer
})