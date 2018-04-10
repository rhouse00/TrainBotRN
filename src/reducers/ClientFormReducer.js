import {
    CLIENT_UPDATE,
    CLIENT_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    email: '',
    program: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLIENT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CLIENT_SAVE_SUCCESS:
            return state;
        default:
            return state;
    }
};
