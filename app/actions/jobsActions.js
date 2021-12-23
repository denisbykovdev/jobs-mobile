import { APPLY_JOB_FAILURE, APPLY_JOB_START, APPLY_JOB_SUCCESS, GET_FILTERED_JOBS_FAILURE, GET_FILTERED_JOBS_START, GET_FILTERED_JOBS_SUCCESS, GET_FOVORITE_JOB_FAILURE, GET_FOVORITE_JOB_START, GET_FOVORITE_JOB_SUCCESS, GET_JOBS_FAILURE, GET_JOBS_START, GET_JOBS_SUCCESS, GET_SERACH_JOBS_SUCCESS, VIEW_JOB_FAILURE, VIEW_JOB_START, VIEW_JOB_SUCCESS, WATCH_APPLY_JOB, WATCH_GET_FILTERED_JOBS, WATCH_GET_FOVORITE_JOB, WATCH_GET_JOBS, WATCH_VIEW_JOB } from "../types/jobsTypes";

export const watchGetJobs = (
    token, jobsPage, jobsByDateOrStars
) => ({
    type: WATCH_GET_JOBS,
    payload: {
        token,
        jobsPage,
        jobsByDateOrStars
    }
});

export const getJobsStart = () => ({
    type: GET_JOBS_START
})

export const getJobsSuccess = (
    jobs
) => ({
    type: GET_JOBS_SUCCESS,
    payload: {
        jobs
    }
});

export const getJobsFailure = (
    error
) => ({
    type: GET_JOBS_FAILURE,
    payload: {
        error
    }
});

export const getSearchJobsSuccess = (
    jobs 
) => ({
    type: GET_SERACH_JOBS_SUCCESS,
    payload: {
        jobs
    }
})

export const watchGetFavoriteJob = (
    token, jobId
) => ({
    type: WATCH_GET_FOVORITE_JOB,
    payload: {
        token,
        jobId
    }
});

export const getFavoriteJobStart = () => ({
    type: GET_FOVORITE_JOB_START
});

export const getFavoriteJobSuccess = (
    favoriteJob
) => ({
    type: GET_FOVORITE_JOB_SUCCESS,
    payload: {
        favoriteJob
    }
});

export const getFavoriteJobFailure = (error) => ({
    type: GET_FOVORITE_JOB_FAILURE,
    payload: {
        error
    }
});

export const watchGetFilteredJobs = (
    token
) => ({
    type: WATCH_GET_FILTERED_JOBS,
    payload: {
        token
    }
});

export const getFilteredJobsStart = () => ({
    type: GET_FILTERED_JOBS_START
});

export const getFilteredJobsSuccess = (
    filteredJobs
) => ({
    type: GET_FILTERED_JOBS_SUCCESS,
    payload: {
        filteredJobs
    }
});

export const getFilteredJobsFailure = (error) => ({
    type: GET_FILTERED_JOBS_FAILURE,
    payload: {
        error
    }
});

export const watchViewJob = (
    token,
    jobId
) => ({
    type: WATCH_VIEW_JOB,
    payload: {
        token,
        jobId
    }
});

export const viewJobStart = () => ({
    type: VIEW_JOB_START
});

export const viewJobSuccess = (
    job
) => ({
    type: VIEW_JOB_SUCCESS,
    payload: {
        job
    }
});

export const viewJobFailure = (error) => ({
    type: VIEW_JOB_FAILURE,
    payload: {
        error
    }
});

export const watchApplyJob = (
    token,
    jobId
) => ({
    type: WATCH_APPLY_JOB,
    payload: {
        token,
        jobId
    }
});

export const applyJobStart = () => ({
    type: APPLY_JOB_START
});

export const applyJobSuccess = (
    applyJob
) => ({
    type: APPLY_JOB_SUCCESS,
    payload: {
        applyJob
    }
});

export const applyJobFailure = (error) => ({
    type: APPLY_JOB_FAILURE,
    payload: {
        error
    }
});


