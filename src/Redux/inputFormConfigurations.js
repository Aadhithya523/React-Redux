import {FORM_VALIDATION_CONSTANTS} from './regexConfigurations';
const formConfigurations = [
    {
        name: 'email',
        type: 'email',
        placeholder: 'User Email',
        isValid: true,
        rule: {
            condition: getRuleCondition('email'),
            errorMessage: 'Please enter a valid email',
            emptyMessage: 'Email cannot be emplty!'
        },
        message: '',
        value: ''
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        isValid: true,
        message: '',
        rule: {
            condition: getRuleCondition('password'),
            errorMessage: 'Invalid Password',
            emptyMessage: 'Password cannot be empty'
        },
        value: ''
    }
];

function getRuleCondition(type) {
    return FORM_VALIDATION_CONSTANTS[type];
}

export function fetchFormConfigurations(nameArray) {
    return formConfigurations.filter(configuration =>
        nameArray.includes(configuration.name)
    );
}
