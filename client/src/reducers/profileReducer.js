import { CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR, ADD_EXPERIENCE, DELETE_EXPERIENCE, ADD_EDUCATION, DELETE_EDUCATION } from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

export default function profileReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PROFILE:
        case ADD_EXPERIENCE:
        case DELETE_EXPERIENCE:
        case ADD_EDUCATION:
        case DELETE_EDUCATION:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                repos: [],
                loading: false
            }
    
        default:
            return state
    }
}