'use client';
import CustomInput from '@/components/form/inputs/CustomInput';
import AuthPage from '@/components/navigation/page/AuthPage';
import { Divider } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useLoginMutation } from '../../store/services/authService';
import Toast from '@/components/toast/Toast';
import { useAppDispatch } from '@/hooks/hooks';
import { login } from '@/store/slices/authSlice';
import FormContainer from '@/components/form/container/FormContainer';

type FormDataType = {
	email: string;
	password: string;
};

const Loginpage: React.FC = () => {
	const [formData, setFormData] = React.useState<FormDataType>({
		email: '',
		password: '',
	});

	const [trigger, result] = useLoginMutation();
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		trigger(formData);
	};

	useEffect(() => {
		if (result?.isSuccess) {
			dispatch(
				login({
					token: result?.data?.token,
					refreshToken: result?.data?.refreshToken,
				})
			);
		}
	}, [result?.isSuccess]);

	return (
		<FormContainer isLoading={result?.isLoading} buttonText='Login' onSubmit={handleSubmit}>
			<CustomInput
				name='email'
				required={true}
				value={formData?.email}
				label='Email'
				onChange={handleChange}
			/>
			<Divider />
			<CustomInput
				type='password'
				label='Password'
				required={true}
				name='password'
				value={formData?.password}
				onChange={handleChange}
			/>
			<Toast
				isError={result?.isError}
				error={result?.error}
				isSuccess={result?.isSuccess}
				successText='Login Success'
			/>
		</FormContainer>
	);
};

export default Loginpage;
