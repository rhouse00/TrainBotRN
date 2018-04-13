import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { clientFetch } from './index';
import {
    PASSWORD_CHANGED,
    EMAIL_CHANGED,
    LOGIN_CLIENT_PENDING,
    LOGIN_CLIENT_SUCCESS,
    LOGIN_CLIENT_FAIL,
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
        type: LOGIN_CLIENT_PENDING,
        payload: text
    };
};

const loginClientSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_CLIENT_SUCCESS,
        payload: user
    });
    console.log(user.uid);
    clientFetch(user.uid);
    Actions.clientArea();
};

const loginClientFail = (dispatch, error) => {
    dispatch({ 
        type: LOGIN_CLIENT_FAIL,
        payload: error
    });
};

export const loginClientPending = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_CLIENT_PENDING });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                loginClientSuccess(dispatch, user);
            })
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginClientSuccess(dispatch, user))
                    .catch(() => loginClientFail(dispatch, AUTH_ERROR));
            });
    };
};
