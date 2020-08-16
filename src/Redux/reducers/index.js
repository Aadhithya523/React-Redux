import {combineReducers} from 'redux';

import WelcomeReducer from './WelcomeReducer';
import EmployeeReducer from './EmployeeReducer'

export default combineReducers({
    welcomeReducer: WelcomeReducer,
    EmployeeReducer:EmployeeReducer
});
