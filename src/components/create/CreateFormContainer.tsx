import { Center, Flex, FlexProps } from '@chakra-ui/react';
import React from 'react';

type FormContainerProps = FlexProps & {
	children: React.ReactNode;
};

const CreateFormContainer: React.FC<FormContainerProps> = ({ children, ...props }) => {
	return (
		<Flex align='center' w='100%' {...props} flexDir='column'>
			<Flex
				justify='center'
				bg='white'
				w={{ base: '100%', md: '60%' }}
				borderWidth={2}
				borderRadius={6}>
				<Center flexDir='column' p={8} w='100%' gap={4}>
					{children}
				</Center>
			</Flex>
		</Flex>
	);
};

export default CreateFormContainer;
