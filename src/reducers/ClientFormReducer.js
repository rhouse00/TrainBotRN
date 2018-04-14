import {
    CLIENT_UPDATE,
    CLIENT_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    name: '',
    phone: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLIENT_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CLIENT_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
