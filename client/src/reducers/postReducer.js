import { ADD_POST, GET_POSTS, POST_ERROR, LIKE_POST, UNLIKE_POST, DELETE_POSTS, GET_POST, ADD_COMMENT, CLEAR_POST, DELETE_COMMENT } from "../actions/types";

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
        case CLEAR_POST:
            return {
                ...state,
                post: null
            }
        case LIKE_POST:
        case UNLIKE_POST:
            const newPosts = state.posts.map(post => {
                if(post._id == payload.id){
                    return {
                        ...post,
                        likes: [...payload.data]
                    }
                }
                return post;
            })
            return {
                ...state,
                posts:[...newPosts],
                loading: false
            }
        case DELETE_POSTS:
            const newPostsAfterDelete = state.posts.filter(post => post._id !== payload.id);
            return {
                ...state,
                posts:[...newPostsAfterDelete],
                loading: false
            }
        case ADD_COMMENT:
            return {
                ...state,
                post: {
                    ...state.post,
                    comments: [...payload.data]
                },
                loading: false
            }
        case DELETE_COMMENT:
            return {
                post: {
                    ...state.post,
                    comments: [...payload.data],
                },
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