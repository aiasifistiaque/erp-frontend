'use client';
import { Grid, Flex, Heading, FlexProps } from '@chakra-ui/react';
import React from 'react';

type InputContainerProps = FlexProps & {
	children: React.ReactNode;
	label?: string;
	required?: boolean;
};

const InputContainer: React.FC<InputContainerProps> = ({ children, label, required, ...props }) => {
	return (
		<Grid gridTemplateColumns='1fr 5fr' gap={1} flexDir='column' w='100%'>
			{label && (
				<Flex align='center' {...props}>
					<Heading whiteSpace='nowrap' size='sm'>
						{label} {required && <span style={{ color: 'red' }}>*</span>}
					</Heading>
				</Flex>
			)}
			{children}
		</Grid>
	);
};

export default InputContainer;
