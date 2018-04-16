import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import WorkoutReducer from './WorkoutReducer';
import ClientReducer from './ClientReducer';
import ClientFormReducer from './ClientFormReducer';

export default combineReducers({
    auth: AuthReducer,
    workouts: WorkoutReducer,
    client: ClientReducer,
    clientFormData: ClientFormReducer
});
