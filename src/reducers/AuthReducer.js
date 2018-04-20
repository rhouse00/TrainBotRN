import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_CLIENT_PENDING,
    LOGIN_CLIENT_SUCCESS,
    LOGIN_CLIENT_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    error: '',
    user: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_CLIENT_PENDING:
            return { ...state, loading: true, error: '' };
        case LOGIN_CLIENT_SUCCESS:
            return { ...INITIAL_STATE, user: action.payload };
        case LOGIN_CLIENT_FAIL:
            return { ...state, error: action.payload, password: '', loading: false };
        default:
            return state;
    }
};
