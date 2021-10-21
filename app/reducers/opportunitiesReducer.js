import { CREATE_OPPORTUNITY_FAILURE, CREATE_OPPORTUNITY_MIDRASHA_FAILURE, CREATE_OPPORTUNITY_MIDRASHA_START, CREATE_OPPORTUNITY_MIDRASHA_SUCCESS, CREATE_OPPORTUNITY_START, CREATE_OPPORTUNITY_SUCCESS, GET_CHOSEN_CONTENDERS_FAILURE, GET_CHOSEN_CONTENDERS_START, GET_CHOSEN_CONTENDERS_SUCCESS, GET_CONTENDERS_FAILURE, GET_CONTENDERS_START, GET_CONTENDERS_SUCCESS, GET_CONTENDER_PROFILE_FAILURE, GET_CONTENDER_PROFILE_START, GET_CONTENDER_PROFILE_SUCCESS, GET_EXISTING_OPPORTUNITY_FAILURE, GET_EXISTING_OPPORTUNITY_START, GET_EXISTING_OPPORTUNITY_SUCCESS, GET_OPPORTUNITIES_FAILURE, GET_OPPORTUNITIES_START, GET_OPPORTUNITIES_SUCCESS, GET_OPPORTUNITY_PAGE_FAILURE, GET_OPPORTUNITY_PAGE_START, GET_OPPORTUNITY_PAGE_SUCCESS, GET_OPPORTUNITY_TYPE_DATA_FAILURE, GET_OPPORTUNITY_TYPE_DATA_START, GET_OPPORTUNITY_TYPE_DATA_SUCCESS, GET_OPPORTUNITY_VIEW_FAILURE, GET_OPPORTUNITY_VIEW_START, GET_OPPORTUNITY_VIEW_SUCCESS, UPDATE_CONTENDER_STATUS_FAILURE, UPDATE_CONTENDER_STATUS_START, UPDATE_CONTENDER_STATUS_SUCCESS, UPDATE_JOB_STATUS_FAILURE, UPDATE_JOB_STATUS_START, UPDATE_JOB_STATUS_SUCCESS, UPDATE_OPPORTUNITY_FAILURE, UPDATE_OPPORTUNITY_START, UPDATE_OPPORTUNITY_SUCCESS } from "../types/opportunitiesTypes";

const opportunitiesInitial = {
    opportunitiesList: null,
    statusId: null, //data.data.status
    contenders: null,
    opportunityPage: null,
    opportunityView: null,
    opportunityTypeData: null,
    opportunityCreateMessage: null,
    opportunityCreateMidrashaMessage: null,
    opportunityUpdateMessage: null,
    existingOpportunity: null,
    chosenContenders: null,
    contenderProfile: null,
    contenderStatus: null
}

export const opportunitiesReducer = (
    state = opportunitiesInitial,
    action
) => {
    switch (action.type) {
        case GET_OPPORTUNITIES_START:
            return {
                ...state,
                posting: true
            };
        case GET_OPPORTUNITIES_SUCCESS:
            return {
                ...state,
                posting: false,
                opportunitiesList: action.payload.opportunitiesList
            };
        case GET_OPPORTUNITIES_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            };

        case UPDATE_JOB_STATUS_START:
            return {
                ...state,
                posting: true
            };
        case UPDATE_JOB_STATUS_SUCCESS:
            return {
                ...state,
                posting: false,
                statusId: action.payload.statusId
            };
        case UPDATE_JOB_STATUS_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            };

        case GET_CONTENDERS_START:
            return {
                ...state,
                getting: true
            };
        case GET_CONTENDERS_SUCCESS:
            return {
                ...state,
                getting: false,
                contenders: action.payload.contenders
            };
        case GET_CONTENDERS_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case GET_OPPORTUNITY_PAGE_START:
            return {
                ...state,
                getting: true
            };
        case GET_OPPORTUNITY_PAGE_SUCCESS:
            return {
                ...state,
                getting: false,
                opportunityPage: action.payload.opportunityPage
            };
        case GET_OPPORTUNITY_PAGE_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case GET_OPPORTUNITY_VIEW_START:
            return {
                ...state,
                getting: true
            };
        case GET_OPPORTUNITY_VIEW_SUCCESS:
            return {
                ...state,
                getting: false,
                opportunityView: action.payload.opportunityView
            };
        case GET_OPPORTUNITY_VIEW_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case GET_OPPORTUNITY_TYPE_DATA_START:
            return {
                ...state,
                getting: true
            };
        case GET_OPPORTUNITY_TYPE_DATA_SUCCESS:
            return {
                ...state,
                getting: false,
                opportunityTypeData: action.payload.opportunityTypeData
            };
        case GET_OPPORTUNITY_TYPE_DATA_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case CREATE_OPPORTUNITY_START:
            return {
                ...state,
                posting: true
            };
        case CREATE_OPPORTUNITY_SUCCESS:
            return {
                ...state,
                posting: false,
                opportunityCreateMessage: action.payload.opportunityCreateMessage
            };
        case CREATE_OPPORTUNITY_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            };

        case CREATE_OPPORTUNITY_MIDRASHA_START:
            return {
                ...state,
                posting: true
            };
        case CREATE_OPPORTUNITY_MIDRASHA_SUCCESS:
            return {
                ...state,
                posting: false,
                opportunityCreateMidrashaMessage: action.payload.opportunityCreateMidrashaMessage
            };
        case CREATE_OPPORTUNITY_MIDRASHA_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            };

        case GET_EXISTING_OPPORTUNITY_START:
            return {
                ...state,
                getting: true
            };
        case GET_EXISTING_OPPORTUNITY_SUCCESS:
            return {
                ...state,
                getting: false,
                existingOpportunity: action.payload.existingOpportunity
            };
        case GET_EXISTING_OPPORTUNITY_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case UPDATE_OPPORTUNITY_START:
            return {
                ...state,
                posting: true
            };
        case UPDATE_OPPORTUNITY_SUCCESS:
            return {
                ...state,
                posting: false,
                opportunityUpdateMessage: action.payload.opportunityUpdateMessage
            };
        case UPDATE_OPPORTUNITY_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            };

        case GET_CHOSEN_CONTENDERS_START:
            return {
                ...state,
                getting: true
            };
        case GET_CHOSEN_CONTENDERS_SUCCESS:
            return {
                ...state,
                getting: false,
                chosenContenders: action.payload.chosenContenders
            };
        case GET_CHOSEN_CONTENDERS_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case GET_CONTENDER_PROFILE_START:
            return {
                ...state,
                getting: true
            };
        case GET_CONTENDER_PROFILE_SUCCESS:
            return {
                ...state,
                getting: false,
                contenderProfile: action.payload.contenderProfile
            };
        case GET_CONTENDER_PROFILE_FAILURE:
            return {
                ...state,
                getting: false,
                error: action.payload.error
            };

        case UPDATE_CONTENDER_STATUS_START:
            return {
                ...state,
                posting: true
            };
        case UPDATE_CONTENDER_STATUS_SUCCESS:
            return {
                ...state,
                posting: false,
                contenderStatus: action.payload.contenderStatus
            };
        case UPDATE_CONTENDER_STATUS_FAILURE:
            return {
                ...state,
                posting: false,
                error: action.payload.error
            };


        default:
            return state;
    }
}