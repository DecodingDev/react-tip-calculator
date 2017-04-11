import React from 'react';

const FormInput = ({name, label, onChange, placeholder, value}) => {
	let wrapperClass = 'form-input';

	return (
		<p className={wrapperClass}>
			<label htmlFor={name}>{label}</label>
				<input
					type="text"
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
