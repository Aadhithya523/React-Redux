import React from 'react';
import FormField from '../../Components/FormField';
import ErrorBoundary from '../../Components/ErrorBoundary';
class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.submitButton = this.submitButton.bind(this);
        this.formGroup = this.formGroup.bind(this);
    }
    formFields(inputBoxes) {
        return inputBoxes.map((inputItem, key) => (
            <FormField {...inputItem} formChange={this.props.formChange} key={key} />
        ));
    }
    submitButton(eve) {
        eve.preventDefault();
        let toDisplay = {};
        if (this.props.isFormValid) {
            this.props.inputConfigurations.forEach(inputItem => {
                toDisplay[inputItem.name] = inputItem.value;
            });
            alert(JSON.stringify(toDisplay));
        } else alert('Form is Invalid');
    }
    formGroup() {
        return (
            <div className='form-group'>
                <div className='col-sm-offset-2 col-sm-10'>
                    <button type='submit' className='btn btn-primary' onClick={this.submitButton}>
                        Submit
                    </button>
                </div>
            </div>
        );
    }
    render() {
        return (
            <ErrorBoundary>
                <div className='container'>
                    <h2>Horizontal form</h2>
                    <form className='form-horizontal'>
                        {this.formFields(this.props.inputConfigurations)}
                        {this.formGroup()}
                    </form>
                </div>
            </ErrorBoundary>
        );
    }
}
export default WelcomePage;
