import React from 'react';
import './forminput.css';
const FormInput = ({name, label, onChange, placeholder, value, type}) => {

	return (
		<p className="form-input">
			<label htmlFor={name}>{label}</label>
				<input
					type={type}
					name={name}
					className="form-control"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
		</p>
	);
};

export default FormInput;
