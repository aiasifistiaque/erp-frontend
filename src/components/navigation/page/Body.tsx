import { Flex } from '@chakra-ui/react';
import React from 'react';

type BodyType = {
	children: React.ReactNode;
};

const Body: React.FC<BodyType> = ({ children, ...props }) => {
	return (
		<Flex
			flex={1}
			flexDirection='column'
			px={6}
			pt={2}
			pb={4}
			bg='bg.200'
			h='calc (100vh - 64px)'
			overflowY='scroll'
			{...props}>
			{children}
		</Flex>
	);
};

export default Body;
