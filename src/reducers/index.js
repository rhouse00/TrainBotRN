import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import WorkoutReducer from './WorkoutReducer';
import ClientReducer from './ClientReducer';
import ClientFormReducer from './ClientFormReducer';
import ChatMessageForm from './ChatFormReducer';

export default combineReducers({
    auth: AuthReducer,
    workouts: WorkoutReducer,
    chatMessageForm: ChatMessageForm,
    client: ClientReducer,
    clientFormData: ClientFormReducer
});
