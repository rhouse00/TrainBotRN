
import {
   ADD_MESSAGE_UPDATE,
   ADD_MESSAGE_SUCCESS,
   ADD_MESSAGE_FAIL
} from './types';

export const addMessageUpdate = (message) => {
   // return {
   //    type: ADD_MESSAGE_UPDATE,
   //    payload: message
   // };
   console.log(message);
};

export const addMessageSend = ({ message }) => {
   console.log('Final Message:\n', message);
};
