import {fetchFormConfigurations} from '../../inputFormConfigurations';
export function Default() {
    return {
        isFormValid: false,
        inputConfigurations: fetchFormConfigurations([
            'email',
            'password'
        ])
    };
}
