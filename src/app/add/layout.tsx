'use client';
import { Flex } from '@chakra-ui/react';
import React from 'react';

type LayoutProps = {
	children: React.ReactNode;
};

const layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Flex h='100vh' bg='#fafafa' flexDir='column'>
			{children}
		</Flex>
	);
};

export default layout;
