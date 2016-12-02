import {combineReducers} from 'redux';
import demoFormReducer from './demoFormReducer';

const rootReducer = combineReducers({ demoFormState : demoFormReducer});
export default rootReducer;