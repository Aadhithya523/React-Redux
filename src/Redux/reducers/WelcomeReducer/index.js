import {INPUT_FORM_CHANGE, INPUT_FORM_SUBMIT} from '../../constants';

import {Default} from './InitialState';
import {FormChange} from './Helpers';

const WelcomeReducer = (state = Default(), action) => {
    switch (action.type) {
    case INPUT_FORM_CHANGE:
        return Object.assign(
            {},
            state,
            FormChange(state, action.payload)
        );
    case INPUT_FORM_SUBMIT:
    default:
        return state;
    }
};
export default WelcomeReducer;
