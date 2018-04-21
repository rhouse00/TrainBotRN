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

export const clientFetch = () => {
    // const clientKey = !id.length ? firebase.auth().currentUser.uid : id;
    const clientKey = firebase.auth().currentUser.uid;
    return (dispatch) => {
        firebase.database()
            .ref(`/clients/${clientKey}/`)
            .on('value', snapshot => {
                dispatch({ type: CLIENT_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const clientSave = ({ name, phone, email }) => {
    const clientKey = firebase.auth().currentUser.uid;
    return (dispatch) => {
        firebase.database()
            .ref(`/clients/${clientKey}`)
            .set({ name, phone, email })
            .then(() => {
                dispatch({ type: CLIENT_SAVE_SUCCESS });
            });
    };
};
