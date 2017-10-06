
import {
    PASSWORD_CHANGED,
    EMAIL_CHANGED,
    LOGIN_USER_PENDING
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

