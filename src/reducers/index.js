import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import WorkoutReducer from './WorkoutReducer';

export default combineReducers({
    auth: AuthReducer,
    workouts: WorkoutReducer
});
