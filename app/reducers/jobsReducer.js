import { APPLY_JOB_FAILURE, APPLY_JOB_START, APPLY_JOB_SUCCESS, GET_FILTERED_JOBS_FAILURE, GET_FILTERED_JOBS_START, GET_FILTERED_JOBS_SUCCESS, GET_FOVORITE_JOB_FAILURE, GET_FOVORITE_JOB_START, GET_FOVORITE_JOB_SUCCESS, GET_JOBS_FAILURE, GET_JOBS_START, GET_JOBS_SUCCESS, VIEW_JOB_FAILURE, VIEW_JOB_START, VIEW_JOB_SUCCESS } from "../types/jobsTypes";

const jobsInitial = {
    jobs: null,
    favouriteJob: '',
    filteredJobs: null,
    job: null,
    applyJob: ''
}

export const jobsReducer = (
    state = jobsInitial,
    action
) => {
    switch (action.type) {
        case GET_JOBS_START:
            return {
                ...state,
                posting: true
            };
        case GET_JOBS_SUCCESS:
            return {
                ...state,
                posting: false,
                jobs: action.payload.jobs
            };
        case GET_JOBS_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            };

        case GET_FOVORITE_JOB_START:
            return {
                ...state,
                getting: true
            };
        case GET_FOVORITE_JOB_SUCCESS:
            return {
                ...state,
                getting: false,
                favouriteJob: action.payload.favouriteJob
            };
        case GET_FOVORITE_JOB_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case GET_FILTERED_JOBS_START:
            return {
                ...state,
                getting: true
            };
        case GET_FILTERED_JOBS_SUCCESS:
            return {
                ...state,
                getting: false,
                filteredJobs: action.payload.filteredJobs
            };
        case GET_FILTERED_JOBS_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case VIEW_JOB_START:
            return {
                ...state,
                getting: true
            };
        case VIEW_JOB_SUCCESS:
            return {
                ...state,
                getting: false,
                job: action.payload.job
            };
        case VIEW_JOB_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case APPLY_JOB_START:
            return {
                ...state,
                posting: true
            };
        case APPLY_JOB_SUCCESS:
            return {
                ...state,
                posting: false,
                applyJob: action.payload.applyJob
            };
        case APPLY_JOB_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            };


        default:
            return state;
    }
}