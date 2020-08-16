import React from 'react';
import InputField from '../InputField';
import { toCapitalCase } from '../../utils/FormatText';

const FormField = props => {
    return (
        <div className='form-group'>
            {Label(props)},
            <div className='col-sm-10 input-wrapper'>
                <InputField
                    type={props.type}
                    name={props.name}
                    onChange={props.formChange}
                    placeholder={props.placeholder}
                    classList={['form-control']}
                />
                {props.isValid ? null : ErrorMessage(props)}
            </div>
        </div>
    );
};
const Label = props => {
    return (
        <label className='control-label col-sm-2' htmlFor={props.name}>
            {toCapitalCase(props.name)} :
        </label>
    );
};
const ErrorMessage = props => <span className='error-message'>{props.dg.message}</span>;
export default FormField;
