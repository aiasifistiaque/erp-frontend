'use client';
import CreateFormContainer from '@/components/create/CreateFormContainer';
import CreateHeader from '@/components/create/CreateHeader';
import CustomInput from '@/components/form/inputs/CustomInput';
import Toast from '@/components/toast/Toast';
import useRedirect from '@/hooks/useRedirect';
import { useAddEmployeeMutation } from '@/store/services/employeeService';
import { Divider, Flex } from '@chakra-ui/react';
import React from 'react';

type FormProps = {
	name: string;
	email: string;
	phoneNumber: string;
	employeeType: string;
	employeeId: string;
	position: string;
	salary: number | undefined;
	department: string;
	joinedDate: Date | undefined;
};

const page: React.FC<{}> = () => {
	const [formData, setFormData] = React.useState<FormProps>({
		name: '',
		email: '',
		phoneNumber: '',
		employeeType: '',
		employeeId: '',
		position: '',
		salary: undefined,
		department: '',
		joinedDate: undefined,
	});

	const [trigger, result] = useAddEmployeeMutation();
	const redirect = '/employees';

	useRedirect({
		isSuccess: result?.isSuccess,
		redirect: redirect,
		isLoading: result?.isLoading,
	});

	const onSubmit = (e: any): void => {
		e.preventDefault();
		trigger(formData);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	return (
		<Flex as='form' flex={1} flexDir='column' maxH='100vh' onSubmit={onSubmit}>
			<Toast
				isError={result?.isError}
				error={result?.error}
				isSuccess={result?.isSuccess}
				successText='Employee Created Successfully'
			/>
			<CreateHeader
				title='Add Employee'
				button='Submit'
				isLoading={result?.isLoading}
				redirect={redirect}
			/>
			<Flex minH='calc(100vh - 64px)' overflowY='scroll' bg='whitesmoke' px={12} py={8}>
				<CreateFormContainer>
					<CustomInput
						name='employeeId'
						label='Employee ID'
						value={formData?.employeeId}
						onChange={handleChange}
						required
					/>
					<Divider />
					<CustomInput
						name='name'
						label='Name'
						value={formData?.name}
						onChange={handleChange}
						required
					/>
					<Divider />
					<CustomInput
						name='email'
						label='Email'
						value={formData?.email}
						onChange={handleChange}
						required
						type='email'
					/>
					<Divider />
					<CustomInput
						name='phoneNumber'
						label='Phone'
						value={formData?.phoneNumber}
						onChange={handleChange}
						required
					/>
					<Divider />
					<CustomInput
						name='employeeType'
						label='Employee Type'
						value={formData?.employeeType}
						onChange={handleChange}
						required
					/>
					<Divider />

					<CustomInput
						name='position'
						label='Position'
						value={formData?.position}
						onChange={handleChange}
						required
					/>
					<Divider />
					<CustomInput
						name='salary'
						label='Salary'
						value={formData?.salary}
						onChange={handleChange}
						required
						type='number'
					/>
					<Divider />
					<CustomInput
						name='department'
						label='Department'
						value={formData?.department}
						onChange={handleChange}
						required
					/>
				</CreateFormContainer>
			</Flex>
		</Flex>
	);
};

export default page;
