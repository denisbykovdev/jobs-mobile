import { CREATE_OPPORTUNITY_FAILURE, CREATE_OPPORTUNITY_MIDRASHA_FAILURE, CREATE_OPPORTUNITY_MIDRASHA_START, CREATE_OPPORTUNITY_MIDRASHA_SUCCESS, CREATE_OPPORTUNITY_START, CREATE_OPPORTUNITY_SUCCESS, GET_CHOSEN_CONTENDERS_FAILURE, GET_CHOSEN_CONTENDERS_START, GET_CHOSEN_CONTENDERS_SUCCESS, GET_CONTENDERS_FAILURE, GET_CONTENDERS_START, GET_CONTENDERS_SUCCESS, GET_CONTENDER_PROFILE_FAILURE, GET_CONTENDER_PROFILE_START, GET_CONTENDER_PROFILE_SUCCESS, GET_EXISTING_OPPORTUNITY_FAILURE, GET_EXISTING_OPPORTUNITY_START, GET_EXISTING_OPPORTUNITY_SUCCESS, GET_OPPORTUNITIES_FAILURE, GET_OPPORTUNITIES_START, GET_OPPORTUNITIES_SUCCESS, GET_OPPORTUNITY_PAGE_FAILURE, GET_OPPORTUNITY_PAGE_START, GET_OPPORTUNITY_PAGE_SUCCESS, GET_OPPORTUNITY_TYPE_DATA_FAILURE, GET_OPPORTUNITY_TYPE_DATA_START, GET_OPPORTUNITY_TYPE_DATA_SUCCESS, GET_OPPORTUNITY_VIEW_FAILURE, GET_OPPORTUNITY_VIEW_START, GET_OPPORTUNITY_VIEW_SUCCESS, UPDATE_CONTENDER_STATUS_FAILURE, UPDATE_CONTENDER_STATUS_START, UPDATE_CONTENDER_STATUS_SUCCESS, UPDATE_JOB_STATUS_FAILURE, UPDATE_JOB_STATUS_START, UPDATE_JOB_STATUS_SUCCESS, UPDATE_OPPORTUNITY_FAILURE, UPDATE_OPPORTUNITY_START, UPDATE_OPPORTUNITY_SUCCESS, WATCH_CREATE_OPPORTUNITY, WATCH_CREATE_OPPORTUNITY_MIDRASHA, WATCH_GET_CHOSEN_CONTENDERS, WATCH_GET_CONTENDERS, WATCH_GET_CONTENDER_PROFILE, WATCH_GET_EXISTING_OPPORTUNITY, WATCH_GET_OPPORTUNITIES, WATCH_GET_OPPORTUNITY_PAGE, WATCH_GET_OPPORTUNITY_TYPE_DATA, WATCH_GET_OPPORTUNITY_VIEW, WATCH_UPDATE_CONTENDER_STATUS, WATCH_UPDATE_JOB_STATUS, WATCH_UPDATE_OPPORTUNITY } from "../types/opportunitiesTypes";

export const watchGetListOpportunities = (
    token,
    jobsPage
) => ({
    type: WATCH_GET_OPPORTUNITIES,
    payload: {
        token,
        jobsPage
    }
});

export const getListOpportunitiesStart = () => ({
    type: GET_OPPORTUNITIES_START
});

export const getListOpportunitiesSuccess = (
    opportunitiesList
) => ({
    type: GET_OPPORTUNITIES_SUCCESS,
    payload: {
        opportunitiesList
    }
});

export const getListOpportunitiesFailure = (error) => ({
    type: GET_OPPORTUNITIES_FAILURE,
    payload: {
        error
    }
});

export const watchUpdateJobStatus = (
    token,
    jobId,
    statusId
) => ({
    type: WATCH_UPDATE_JOB_STATUS,
    payload: {
        token,
        jobId,
        statusId
    }
});

export const updateJobStatusStart = () => ({
    type: UPDATE_JOB_STATUS_START
});

export const updateJobStatusSuccess = (
    statusId
) => ({
    type: UPDATE_JOB_STATUS_SUCCESS,
    payload: {
        statusId
    }
});

export const updateJobStatusFailure = (error) => ({
    type: UPDATE_JOB_STATUS_FAILURE,
    payload: {
        error
    }
});

export const watchGetContenders = (
    token,
    jobId
) => ({
    type: WATCH_GET_CONTENDERS,
    payload: {
        token,
        jobId
    }
});

export const getContendersStart = () => ({
    type: GET_CONTENDERS_START
});

export const getContendersSuccess = (
    contenders
) => ({
    type: GET_CONTENDERS_SUCCESS,
    payload: {
        contenders
    }
});

export const getContendersFailure = (error) => ({
    type: GET_CONTENDERS_FAILURE,
    payload: {
        error
    }
});

export const watchGetOpportunityPage = (
    token,
    jobId
) => ({
    type: WATCH_GET_OPPORTUNITY_PAGE,
    payload: {
        token,
        jobId
    }
});

export const getOpportunityPageStart = () => ({
    type: GET_OPPORTUNITY_PAGE_START
});

export const getOpportunityPageSuccess = (
    opportunityPage
) => ({
    type: GET_OPPORTUNITY_PAGE_SUCCESS,
    payload: {
        opportunityPage
    }
});

export const getOpportunityPageFailure = (error) => ({
    type: GET_OPPORTUNITY_PAGE_FAILURE,
    payload: {
        error
    }
});

export const watchGetOpportunityView = (
    token,
    jobId
) => ({
    type: WATCH_GET_OPPORTUNITY_VIEW,
    payload: {
        token,
        jobId
    }
});

export const getOpportunityViewStart = () => ({
    type: GET_OPPORTUNITY_VIEW_START
});

export const getOpportunityViewSuccess = (
    opportunityView
) => ({
    type: GET_OPPORTUNITY_VIEW_SUCCESS,
    payload: {
        opportunityView
    }
});

export const getOpportunityViewFailure = (error) => ({
    type: GET_OPPORTUNITY_VIEW_FAILURE,
    payload: {
        error
    }
});

export const watchGetOpportunityTypeData = (
    token
) => ({
    type: WATCH_GET_OPPORTUNITY_TYPE_DATA,
    payload: {
        token
    }
});

export const getOpportunityTypeDataStart = () => ({
    type: GET_OPPORTUNITY_TYPE_DATA_START
});

export const getOpportunityTypeDataSuccess = (
    opportunityTypeData
) => ({
    type: GET_OPPORTUNITY_TYPE_DATA_SUCCESS,
    payload: {
        opportunityTypeData
    }
});

export const getOpportunityTypeDataFailure = (error) => ({
    type: GET_OPPORTUNITY_TYPE_DATA_FAILURE,
    payload: {
        error
    }
});

export const watchCreateOpportunity = (
    token,
    title,
    category_id,
    subcategory_id,
    organization_id,
    route_id,
    job_for,
    description,
    area_id,
    city_id,
    address,
    place,
    nucleus,
    count,
    how_to_sort,
    images,
    video_url,
    last_date_for_registration,
    other_hr_name,
    other_hr_phone
) => ({
    type: WATCH_CREATE_OPPORTUNITY,
    payload: {
        token,
        title,
        category_id,
        subcategory_id,
        organization_id,
        route_id,
        job_for,
        description,
        area_id,
        city_id,
        address,
        place,
        nucleus,
        count,
        how_to_sort,
        images,
        video_url,
        last_date_for_registration,
        other_hr_name,
        other_hr_phone
    }
});

export const createOpportunityStart = () => ({
    type: CREATE_OPPORTUNITY_START
});

export const createOpportunitySuccess = (
    opportunityCreateMessage
) => ({
    type: CREATE_OPPORTUNITY_SUCCESS,
    payload: {
        opportunityCreateMessage
    }
});

export const createOpportunityFailure = (error) => ({
    type: CREATE_OPPORTUNITY_FAILURE,
    payload: {
        error
    }
});

export const watchCreateOpportunityMidrasha = (
    token,
    title,
    area_id,
    city_id,
    address,
    program,
    place,
    routes,
    target_audience,
    count,
    description,
    images,
    video_url,
    other_hr_name,
    other_hr_phone
) => ({
    type: WATCH_CREATE_OPPORTUNITY_MIDRASHA,
    payload: {
        token,
        title,
        area_id,
        city_id,
        address,
        program,
        place,
        routes,
        target_audience,
        count,
        description,
        images,
        video_url,
        other_hr_name,
        other_hr_phone
    }
});

export const createOpportunityMidrashaStart = () => ({
    type: CREATE_OPPORTUNITY_MIDRASHA_START
});

export const createOpportunityMidrashaSuccess = (
    opportunityCreateMidrashaMessage
) => ({
    type: CREATE_OPPORTUNITY_MIDRASHA_SUCCESS,
    payload: {
        opportunityCreateMidrashaMessage
    }
});

export const createOpportunityMidrashaFailure = (error) => ({
    type: CREATE_OPPORTUNITY_MIDRASHA_FAILURE,
    payload: {
        error
    }
});

export const watchGetExistingOpportunity = (
    token,
    jobId
) => ({
    type: WATCH_GET_EXISTING_OPPORTUNITY,
    payload: {
        token,
        jobId
    }
});

export const getExistingOpportunityStart = () => ({
    type: GET_EXISTING_OPPORTUNITY_START
});

export const getExistingOpportunitySuccess = (
    existingOpportunity
) => ({
    type: GET_EXISTING_OPPORTUNITY_SUCCESS,
    payload: {
        existingOpportunity
    }
});

export const getExistingOpportunityFailure = (error) => ({
    type: GET_EXISTING_OPPORTUNITY_FAILURE,
    payload: {
        error
    }
});

export const watchUpdateOpportunity = (
    token,
    title,
    category_id,
    subcategory_id,
    organization_id,
    route_id,
    job_for,
    description,
    area_id,
    city_id,
    address,
    place,
    nucleus,
    count,
    how_to_sort,
    images,
    video_url,
    last_date_for_registration,
    other_hr_name,
    other_hr_phone
) => ({
    type: WATCH_UPDATE_OPPORTUNITY,
    payload: {
        token,
        title,
        category_id,
        subcategory_id,
        organization_id,
        route_id,
        job_for,
        description,
        area_id,
        city_id,
        address,
        place,
        nucleus,
        count,
        how_to_sort,
        images,
        video_url,
        last_date_for_registration,
        other_hr_name,
        other_hr_phone
    }
});

export const updateOpportunityStart = () => ({
    type: UPDATE_OPPORTUNITY_START
});

export const updateOpportunitySuccess = (
    opportunityUpdateMessage
) => ({
    type: UPDATE_OPPORTUNITY_SUCCESS,
    payload: {
        opportunityUpdateMessage
    }
});

export const updateOpportunityFailure = (error) => ({
    type: UPDATE_OPPORTUNITY_FAILURE,
    payload: {
        error
    }
});

export const watchGetChosenContenders = (
    token,
    jobId
) => ({
    type: WATCH_GET_CHOSEN_CONTENDERS,
    payload: {
        token,
        jobId
    }
});

export const getChosenContendersStart = () => ({
    type: GET_CHOSEN_CONTENDERS_START
});

export const getChosenContendersSuccess = (
    chosenContenders
) => ({
    type: GET_CHOSEN_CONTENDERS_SUCCESS,
    payload: {
        chosenContenders
    }
});

export const getChosenContendersFailure = (error) => ({
    type: GET_CHOSEN_CONTENDERS_FAILURE,
    payload: {
        error
    }
});

export const watchGetContenderProfile = (
    token,
    jobId,
    contenderId
) => ({
    type: WATCH_GET_CONTENDER_PROFILE,
    payload: {
        token,
        jobId,
        contenderId
    }
});

export const getContenderProfileStart = () => ({
    type: GET_CONTENDER_PROFILE_START
});

export const getContenderProfileSuccess = (
    contenderProfile
) => ({
    type: GET_CONTENDER_PROFILE_SUCCESS,
    payload: {
        contenderProfile
    }
});

export const getContenderProfileFailure = (error) => ({
    type: GET_CONTENDER_PROFILE_FAILURE,
    payload: {
        error
    }
});

export const watchUpdateContenderStatus = (
    token,
    jobId,
    contenderId,
    contenderStatus
) => ({
    type: WATCH_UPDATE_CONTENDER_STATUS,
    payload: {
        token,
        jobId,
        contenderId,
        contenderStatus
    }
});

export const updateContenderStatusStart = () => ({
    type: UPDATE_CONTENDER_STATUS_START
});

export const updateContenderStatusSuccess = (
    contenderStatus
) => ({
    type: UPDATE_CONTENDER_STATUS_SUCCESS,
    payload: {
        contenderStatus
    }
});

export const updateContenderStatusFailure = (error) => ({
    type: UPDATE_CONTENDER_STATUS_FAILURE,
    payload: {
        error
    }
});