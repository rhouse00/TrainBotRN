import firebase from 'firebase';

import {
    CLIENT_FETCH_SUCCESS,
    CLIENT_UPDATE,
    CLIENT_SAVE_SUCCESS
} from './types';

export const clientUpdate = ({ prop, value }) => {
    return {
        type: CLIENT_UPDATE,
        payload: { prop, value }
    };
};

export const clientFetch = (id = {}) => {
    const clientKey = !id.length ? firebase.auth().currentUser.uid : id;  
    console.log('inside client fetch');
    return (dispatch) => {
        console.log('inside return statement for client fetch');
        firebase.database()
            .ref(`/clients/${clientKey}/`)
            .on('value', snapshot => {
                console.log(snapshot.val());
                dispatch({ type: CLIENT_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const clientSave = ({ name, phone, email }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database()
            .ref(`/clients/${currentUser.uid}`)
            .set({ name, phone, email })
            .then(() => {
                dispatch({ type: CLIENT_SAVE_SUCCESS });
            });
    };
};
