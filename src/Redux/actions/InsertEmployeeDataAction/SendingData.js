import data from '../../../EmployeeData.json'
import {GET_EMPLOYEE_DATA} from '../../constants'
export const EmployeeData = () => {
    return dispatch => {
        dispatch({
            type: GET_EMPLOYEE_DATA,
            payload: data
        });
    };
};