
import {
   ADD_MESSAGE_UPDATE,
   ADD_MESSAGE_SUCCESS,
   ADD_MESSAGE_FAIL
} from './types';

export const addMessageUpdate = (message) => {
    console.log(message);
    return {
      type: ADD_MESSAGE_UPDATE,
      payload: message
   };
};

export const addMessageSend = ({ message }) => {
   console.log('Final Message:\n', message);
   return {
       type: ADD_MESSAGE_SUCCESS,
       payload: message
   };
};
