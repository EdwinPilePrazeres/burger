import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail =(error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = { 
            email:email,
            password: password,
            returnecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCiqGC1LYFbZOD55Anyig7Hv_bVM7mRifI', authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data));
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail());
        });
    };
};