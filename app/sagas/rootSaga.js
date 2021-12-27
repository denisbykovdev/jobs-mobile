import { all, fork } from 'redux-saga/effects';
import chatsChannelSaga from './chatsChannelSaga';
import notificationsChannelSaga from './notificationsChannelSaga';
import watchAddQuestionSaga from './watchAddQuestionSaga';
import watchAnswerBackSaga from './watchAnswerBackSaga';
import watchApplyJobSaga from './watchApplyJobSaga';
import watchCreateMessageSaga from './watchCreateMessageSaga';
import watchCreateNewCitySaga from './watchCreateNewCitySaga';
import watchCreateNewSchoolSaga from './watchCreateNewSchoolSaga';
import watchFirstAnswerSaga from './watchFirstAnswerSaga';
import watchGetAllFaqSaga from './watchGetAllFaqSaga';
import watchGetAreasSaga from './watchGetAreasSaga';
import watchGetBlogsSaga from './watchGetBlogsSaga';
import watchGetCategorySaga from './watchGetCategorySaga';
import watchGetCityByAreaSaga from './watchGetCityByAreaSaga';
import watchGetConversationsSaga from './watchGetConversationsSaga';
import watchGetDurationByYearSaga from './watchGetDurationByYearSaga';
import watchGetFavoriteJobSaga from './watchGetFavoriteJobSaga';
import watchGetFavoriteJobsSaga from './watchGetFavoriteJobsSaga';
import watchGetFilteredJobsSaga from './watchGetFilteredJobsSaga';
import watchGetHrAccountSaga from './watchGetHrAccountSaga';
import watchGetInfoForProfileSaga from './watchGetInfoForProfileSaga';
import watchGetJobsSaga from './watchGetJobsSaga';
import watchGetListOfRequestsSaga from './watchGetListOfRequestsSaga';
import watchGetMainCategoriesSaga from './watchGetMainCategoriesSaga';
import watchGetMessagesSaga from './watchGetMessagesSaga';
import watchGetPostSaga from './watchGetPostSaga';
import watchGetQuizSaga from './watchGetQuizSaga';
import watchGetReviewsDataSaga from './watchGetReviewsDataSaga';
import watchGetReviewsSaga from './watchGetReviewsSaga';
import watchGetSubcategoryByCategorySaga from './watchGetSubcategoryByCategorySaga';
import watchGetSubcategorySaga from './watchGetSubcategorySaga';
import watchLikeUnlikePostSaga from './watchLikeUnlikePostSaga';
import watchOpenConversationSaga from './watchOpenConversationSaga';
import watchProviderSaga from './watchProviderSaga';
import watchQuizResultSaga from './watchQuizResultSaga';
import watchRegisterSaga from './watchRegisterSaga';
import watchSendFormSaga from './watchSendFormSaga';
import watchSetQuizSaga from './watchSetQuizSaga';
import watchSimpleTypesSaga from './watchSimpleTypesSaga';
import watchStoreAdditionalInfoSaga from './watchStoreAdditionalInfoSaga';
import watchStoreBirthdayInfoSaga from './watchStoreBirthdayInfoSaga';
import watchStoreDetailsSaga from './watchStoreDetailsSaga';
import watchStoreHrAccountSaga from './watchStoreHrAccountSaga';
import watchStoreReviewSaga from './watchStoreReviewSaga';
import watchUpdateJobStatusSaga from './watchUpdateJobStatusSaga';
import watchVerificationSaga from './watchVerificationSaga';
import watchViewJobSaga from './watchViewJobSaga';

export default function* rootSaga() {
    yield all([
        fork(watchSimpleTypesSaga),
        fork(watchRegisterSaga),
        fork(watchVerificationSaga),
        fork(watchProviderSaga),
        fork(watchGetQuizSaga),
        fork(watchSetQuizSaga),
        fork(watchQuizResultSaga),
        fork(watchGetJobsSaga),
        fork(watchGetFavoriteJobSaga),
        fork(watchGetFavoriteJobsSaga),
        fork(watchGetFilteredJobsSaga),
        fork(watchViewJobSaga),
        fork(watchApplyJobSaga),
        fork(watchGetHrAccountSaga),
        fork(watchStoreHrAccountSaga),
        fork(watchGetAllFaqSaga),
        fork(watchAddQuestionSaga),
        fork(watchFirstAnswerSaga),
        fork(watchAnswerBackSaga),
        fork(watchSendFormSaga),
        fork(watchGetListOfRequestsSaga),
        fork(watchGetInfoForProfileSaga),
        fork(watchCreateNewSchoolSaga),
        fork(watchStoreAdditionalInfoSaga),
        fork(watchStoreBirthdayInfoSaga),
        fork(watchCreateNewCitySaga),
        fork(watchStoreDetailsSaga),
        fork(watchGetSubcategoryByCategorySaga),
        fork(watchGetDurationByYearSaga),
        fork(watchGetMainCategoriesSaga),
        fork(watchGetCategorySaga),
        fork(watchGetCityByAreaSaga),
        fork(watchGetSubcategorySaga),
        fork(watchGetAreasSaga),
        fork(watchGetBlogsSaga),
        fork(watchGetPostSaga),
        fork(watchLikeUnlikePostSaga),
        fork(watchGetReviewsSaga),
        fork(watchGetReviewsDataSaga),
        fork(watchStoreReviewSaga),
        fork(watchGetConversationsSaga),
        fork(watchGetMessagesSaga),
        fork(watchOpenConversationSaga),
        fork(watchCreateMessageSaga),
        fork(watchUpdateJobStatusSaga),
        //sockets:
        fork(chatsChannelSaga),
        fork(notificationsChannelSaga)
    ]);
};