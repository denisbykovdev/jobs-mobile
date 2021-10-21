import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { updateOpportunityFailure, updateOpportunityStart, updateOpportunitySuccess } from "../actions/opportunitiesActions";
import { WATCH_UPDATE_OPPORTUNITY } from "../types/opportunitiesTypes";
import { updateOpportunity } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchUpdateOpportunitySaga() {
    yield takeEvery(WATCH_UPDATE_OPPORTUNITY, updateOpportunitySaga);
}

function* updateOpportunitySaga(action) {
    try {
        yield put(updateOpportunityStart());
        const { data } = yield call(() => axios.post(
            `${updateOpportunity(
                action.payload.jobId
            )}`,
            {
                title: action.payload.title,
                category_id: action.payload.category_id,
                subcategory_id: action.payload.subcategory_id,
                organization_id: action.payload.organization_id,
                route_id: action.payload.route_id,
                job_for: action.payload.job_for,
                description: action.payload.description,
                area_id: action.payload.area_id,
                city_id: action.payload.city_id,
                address: action.payload.address,
                place: action.payload.place,
                nucleus: action.payload.nucleus,
                count: action.payload.count,
                how_to_sort: action.payload.how_to_sort,
                images: action.payload.images,
                video_url: action.payload.video_url,
                last_date_for_registration: action.payload.last_date_for_registration,
                other_hr_name: action.payload.other_hr_name,
                other_hr_phone: action.payload.other_hr_phone
            },
            authHeader(
                action.payload.token
            )
        ));
        yield put(updateOpportunitySuccess(
            data.message
        ));
    } catch (error) {
        yield put(updateOpportunityFailure(
            error
        ));
    }
}