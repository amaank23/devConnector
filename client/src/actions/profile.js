import axios from 'axios';
import { setAlert } from './alert';


import {
    GET_PROFILE,
    PROFILE_ERROR,
    ADD_EXPERIENCE,
    DELETE_EXPERIENCE,
    ADD_EDUCATION,
    DELETE_EDUCATION,
    GET_PROFILES,
    CLEAR_PROFILE
} from './types'

// GET CURRENT USER PROFILE
export const getCurrentProfile = (setHaveProfile) => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/profile/me');

            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
            setHaveProfile(true);
        } catch (err) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            });
            setHaveProfile(true);
        }
    }
}


// CREATE PROFILE
export const createProfile = (profileData, history, edit = false) => {
    return async dispatch => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const res = await axios.post('/api/profile', profileData, config);
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            });
            dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));
            if(!edit){
                history.push('/dashboard');
            }
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}


// ADD EXPERIENCE
export const addExperience = (formData, history) => {
    return async dispatch => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            
            const res = await axios.put('/api/profile/experience', formData, config);

            dispatch({
                type: ADD_EXPERIENCE,
                payload: res.data
            })
            history.push('/dashboard');
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}


// DELETE EXPERIENCE
export const deleteExperience = (id) => {
    return async dispatch => {
        try {
            const res = await axios.delete(`/api/profile/experience/${id}`);

            dispatch({
                type: DELETE_EXPERIENCE,
                payload: res.data
            });
            console.log(res.data);
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}

// ADD EDUCATION
export const addEducation = (formData, history) => {
    return async dispatch => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            
            const res = await axios.put('/api/profile/education', formData, config);

            dispatch({
                type: ADD_EDUCATION,
                payload: res.data
            })
            history.push('/dashboard');
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}


// DELETE EDUCATION
export const deleteEducation = (id) => {
    return async dispatch => {
        try {
            const res = await axios.delete(`/api/profile/education/${id}`);

            dispatch({
                type: DELETE_EDUCATION,
                payload: res.data
            });
            console.log(res.data);
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}

// GET ALL USERS PROFILE
export const getAllProfiles = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/profile');
            dispatch({
                type: GET_PROFILES,
                payload: res.data
            });
            dispatch({
                type: CLEAR_PROFILE
            });
        } catch(err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}

// GELL PROFILES BY USER ID
export const getProfileByUserId = (id) => {
    return async dispatch => {
        try {
            const res = await axios.get(`/api/profile/user/${id}`);
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        } catch (err) {
            const errors = err.response.data.errors;

            if(errors){
                errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ));
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
}