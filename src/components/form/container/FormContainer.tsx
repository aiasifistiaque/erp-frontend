'use client';
import { Button, Center, Divider, Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

type FormContainerProps = FlexProps & {
	children: React.ReactNode;
	buttonText: string;
	isLoading: boolean;
	onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const FormContainer: React.FC<FormContainerProps> = ({
	children,
	buttonText,
	onSubmit,
	isLoading,
	...props
}) => {
	return (
		<Center w='100%'>
			<Flex
				as='form'
				bg='bg.100'
				flexDirection='column'
				w={{ base: '100%', md: '60%' }}
				borderWidth={2}
				borderRadius={6}
				p={8}
				gap={4}
				onSubmit={onSubmit}
				{...props}>
				<Center flexDir='column' w='100%' gap={4}>
					{children}
				</Center>
				<Divider />
				<Flex>
					<Button isLoading={isLoading} type='submit' colorScheme='green'>
						{buttonText}
					</Button>
				</Flex>
			</Flex>
		</Center>
	);
};

export default FormContainer;
