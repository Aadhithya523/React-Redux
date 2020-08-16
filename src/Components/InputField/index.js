import React from 'react';

const InputField = props => {
    return (
        <input
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className={props.classList.join(' ')}
        />
    );
};

export default InputField;
