import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { createOpportunityFailure, createOpportunityStart, createOpportunitySuccess } from "../actions/opportunitiesActions";
import { WATCH_CREATE_OPPORTUNITY } from "../types/opportunitiesTypes";
import { createOpportunity } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchCreateOpportunitySaga() {
    yield takeEvery(WATCH_CREATE_OPPORTUNITY, createOpportunitySaga);
}

function* createOpportunitySaga(action) {
    try {
        yield put(createOpportunityStart());
        const { data } = yield call(() => axios.post(
            `${createOpportunity}`,
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
        yield put(createOpportunitySuccess(
            data.message
        ));
    } catch (error) {
        yield put(createOpportunityFailure(
            error
        ));
    }
}