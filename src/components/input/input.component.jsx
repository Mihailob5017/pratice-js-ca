import React from 'react';
import './input.style.css';

// Code
const Input = ({
	type = 'text',
	name,
	value,
	placeholder,
	handleChange,
	label,
	disabled = false,
	customClass = '',
}) => {
	return (
		<div className={`input-container ${customClass}`}>
			<label htmlFor={name} className='input-label'>
				{label}
			</label>
			<input
				disabled={disabled}
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	);
};

export default Input;
