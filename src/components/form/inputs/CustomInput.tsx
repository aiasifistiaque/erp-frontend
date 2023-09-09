'use client';
import React from 'react';
import { Input, InputProps } from '@chakra-ui/react';
import InputContainer from '../container/InputContainer';

type CustomInputProps = InputProps & {
	label?: string;
	placeholder?: string;
	required?: boolean;
	name?: string;
	value: any;
};

const CustomInput: React.FC<CustomInputProps> = ({
	label,
	required,
	placeholder,
	value,
	...props
}) => {
	return (
		<InputContainer label={label} required={required}>
			<Input
				color='text.500'
				required={required ? true : false}
				border='none'
				borderRadius='none'
				placeholder={placeholder ? placeholder : label}
				px={3}
				outline='none'
				_placeholder={{ fontSize: 16, fontWeight: '500' }}
				_hover={{ outline: '2px solid whitesmoke' }}
				value={value}
				{...props}
			/>
		</InputContainer>
	);
};

export default CustomInput;
