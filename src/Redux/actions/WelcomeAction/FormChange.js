import {INPUT_FORM_CHANGE} from '../../constants';
export const FormChange = event => {
    return dispatch => {
        dispatch({
            type: INPUT_FORM_CHANGE,
            payload: event
        });
    };
};
