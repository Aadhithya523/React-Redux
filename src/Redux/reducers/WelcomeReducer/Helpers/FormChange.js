export function FormChange(state, payload) {
    let updatedConfiguration = updateConfiguration(
        state.inputConfigurations,
        payload
    );
    let respons = {
        inputConfigurations: updatedConfiguration,
        isFormValid: updateFormValid(updatedConfiguration)
    };
    return respons;
}

function updateConfiguration(configurations, payload) {
    return configurations.map(input => {
        let newInput = {...input}; // to remove reference.
        if (newInput.name === payload.target.name)
            newInput.value = payload.target.value;
        if (!newInput.value.length) {
            newInput.message = newInput.rule.emptyMessage;
        } else if (newInput.rule.condition.test(newInput.value)) {
            newInput.message = '';
            newInput.isValid = true;
        } else {
            newInput.message = newInput.rule.errorMessage;
            newInput.isValid = false;
        }
        return newInput;
    });
}

function updateFormValid(configurations) {
    for (let inputItem in configurations)
        if (!configurations[inputItem].isValid) return false;
    return true;
}
