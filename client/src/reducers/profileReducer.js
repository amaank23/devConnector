import { CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR, ADD_EXPERIENCE } from "../actions/types";

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