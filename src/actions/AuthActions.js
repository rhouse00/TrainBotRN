import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    PASSWORD_CHANGED,
    EMAIL_CHANGED,
    LOGIN_USER_PENDING,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    AUTH_ERROR
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = (text) => {
    return {
        type: LOGIN_USER_PENDING,
        payload: text
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.clientArea();
};

const loginUserFail = (dispatch, error) => {
    dispatch({ 
        type: LOGIN_USER_FAIL,
        payload: error
    });
};

export const loginUserPending = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_PENDING });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch, AUTH_ERROR ));
            });
    };
};
