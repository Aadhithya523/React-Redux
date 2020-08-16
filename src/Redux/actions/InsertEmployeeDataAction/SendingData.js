import data from '../../../EmployeeData.json'
import {GET_EMPLOYEE_DATA} from '../../constants'

export const EmployeeData = (from, size) => {
    return dispatch => {
        dispatch({
            type: GET_EMPLOYEE_DATA,
            payload: paginate(from, size)
        });
	};
};

function paginate(from, size) {
	let employeeList = [];

	for(let i =0; i < data.length; i ++) {
		if( i >= from && i < from+size) {
			employeeList.push(data[i]);
		}
	}
	return employeeList;
}
