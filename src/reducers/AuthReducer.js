import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_PENDING
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_PENDING:
            return { ...state, loading: true };
        default:
            return state;
    }
};
