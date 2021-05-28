import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import authReducer from './authReducer';
import postReducer from './postReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer,
    profile: profileReducer,
    posts: postReducer
});

export default rootReducer