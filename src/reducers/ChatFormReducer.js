
import {
   ADD_MESSAGE_UPDATE,
   ADD_MESSAGE_SUCCESS,
   ADD_MESSAGE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
   message: ''
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case ADD_MESSAGE_UPDATE:
         return { ...state, message: action.payload.value };
      case ADD_MESSAGE_SUCCESS:
         return state;
      case ADD_MESSAGE_FAIL:
         return state;
      default:
         return state;
   }
};
