import axios from 'axios';
import { setAlert } from './alert';
import { ADD_POST, DELETE_POSTS, GET_POST, GET_POSTS, LIKE_POST, POST_ERROR, UNLIKE_POST, ADD_COMMENT, CLEAR_POST, DELETE_COMMENT } from './types';

export const getPosts = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/posts');

            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
            dispatch({
                type: CLEAR_POST
            })
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: POST_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
            
        }
    }
} 


export const addPosts = (formData) => {
    return async dispatch => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const res = await axios.post('/api/posts', formData, config);

            dispatch({
                type: ADD_POST,
                payload: res.data
            })
            setAlert('Post Added Successfully!', 'success');
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: POST_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
} 

export const likePost = (id) => {
    return async dispatch => {
        try {
            const res = await axios.put(`/api/posts/like/${id}`);

            dispatch({
                type: LIKE_POST,
                payload: {
                    id: id,
                    data: res.data
                }
            })
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: POST_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
} 

export const unLikePost = (id) => {
    return async dispatch => {
        try {
            const res = await axios.put(`/api/posts/unlike/${id}`);

            dispatch({
                type: UNLIKE_POST,
                payload: {
                    id: id,
                    data: res.data
                }
            })
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: POST_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}

export const deletePost = (id) => {
    return async dispatch => {
        try {
            const res = await axios.delete(`/api/posts/${id}`);

            dispatch({
                type: DELETE_POSTS,
                payload: {
                    id: id
                }
            })
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: POST_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}


export const getPost = (id) => {
    return async dispatch => {
        try {
            const res = await axios.get(`/api/posts/${id}`);

            dispatch({
                type: GET_POST,
                payload: res.data
            })
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: POST_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}


export const addCommentToPost = (formData, id) => {
    return async dispatch => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const res = await axios.post(`/api/posts/comment/${id}`, formData, config);

            dispatch({
                type: ADD_COMMENT,
                payload: {
                    id: id,
                    data: res.data
                }
            })
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: POST_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}

export const deleteComment = (id, comment_id) => {
    return async dispatch => {
        try {
            const res = await axios.delete(`/api/posts/comment/${id}/${comment_id}`);

            dispatch({
                type: DELETE_COMMENT,
                payload: {
                    id: id,
                    data: res.data
                }
            })
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: POST_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}