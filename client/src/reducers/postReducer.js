import { ADD_POST, GET_POSTS, GET_POST, POST_ERROR } from "../actions/types";

const initialState = {
    posts: [],
    post: null,
    loading: true,
    error: {}
}


export default function postReducer(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: [...payload],
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: payload,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts:[...state.posts, payload],
                loading: false
            }
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
    
        default:
            return state;
    }
}