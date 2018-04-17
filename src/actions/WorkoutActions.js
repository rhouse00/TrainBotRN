import firebase from 'firebase';
import { WORKOUTS_FETCH_SUCCESS } from './types';

export const workoutsFetch = () => {
    return (dispatch) => {
        firebase.database()
            .ref('/programs/powerlifting')
            .on('value', snapshot => {
                dispatch({ type: WORKOUTS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
