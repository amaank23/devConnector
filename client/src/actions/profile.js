import axios from 'axios';
import { setAlert } from './alert';


import {
    GET_PROFILE,
    PROFILE_ERROR,
    ADD_EXPERIENCE
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