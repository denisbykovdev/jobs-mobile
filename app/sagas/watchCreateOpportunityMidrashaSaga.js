import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { createOpportunityMidrashaFailure, createOpportunityMidrashaStart, createOpportunityMidrashaSuccess } from "../actions/opportunitiesActions";
import { WATCH_CREATE_OPPORTUNITY_MIDRASHA } from "../types/opportunitiesTypes";
import { createOpportunityMidrasha } from "../utils/api";
import authHeader from "../utils/authHeader";

export default function* watchCreateOpportunityMidrashaSaga() {
    yield takeEvery(WATCH_CREATE_OPPORTUNITY_MIDRASHA, createOpportunityMidrashaSaga);
}

function* createOpportunityMidrashaSaga(action) {
    try {
        yield put(createOpportunityMidrashaStart());
        const { data } = yield call(() => axios.post(
            `${createOpportunityMidrasha}`,
            {
                title: action.payload.title,
                area_id: action.payload.area_id,
                city_id: action.payload.city_id,
                address: action.payload.address,
                program: action.payload.program,
                place: action.payload.place,
                route: action.payload.routes,
                target_audience: action.payload.target_audience,
                count: action.payload.count,
                description: action.payload.description,
                images: action.payload.images,
                video_url: action.payload.video_url,
                other_hr_name: action.payload.other_hr_name,
                other_hr_phone: action.payload.other_hr_phone
            },
            // title 
            //area
            //city
            //adres
            //program
            //places
            //routes
            //audience
            //jobforlist
            //whattostudy
            //description
            //images
            //videourl
            //other_hr_name: action.payload.other_hr_name,
            //other_hr_phone: action.payload.other_hr_phone
            authHeader(
                action.payload.token
            )
        ));
        yield put(createOpportunityMidrashaSuccess(
            data.message
        ));
    } catch (error) {
        yield put(createOpportunityMidrashaFailure(
            error
        ));
    }
}