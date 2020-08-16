import {GET_EMPLOYEE_DATA} from '../../constants';

import {Default} from './InitialState';

const EmployeeReducer = (state = Default(), action) => {
    switch (action.type) {
    case GET_EMPLOYEE_DATA:
        return{...state,employeeData:action.payload}
        
        
    default:
        return state;
    }
};
export default EmployeeReducer;